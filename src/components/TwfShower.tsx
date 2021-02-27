import React, { FunctionComponent, useMemo, useState } from 'react'
import { Twf, TwfEvent, TwfMusic, TwfRo } from '../type'
import { Box, Button, FormControl, InputLabel, MenuItem, Select, Typography } from '@material-ui/core'
import { ClickShowRaw } from './ClickShowRaw'
import { EventShower } from './EventShower'
import { MissionInfoShower } from './MissionInfoShower'
import { JsonShower } from './JsonShower'
import { twfEventAnalysis } from '../utils/twfEventAnalysis'
import { htmlDecode } from '../utils/htmlDecode'
import { translateTwfEvents } from '../translators/twf/translateTwfEvents'
import { clearMiss, getMissed } from '../translators/twf/missingStuff'
import { download } from '../utils/download'
import { copyToClipboard } from '../utils/copyToClipboard'


export const TwfShower: FunctionComponent<{ twf: Twf }> = ({ twf }) => {
  const { inf, ini, map, roles, events, musics, tags } = useMemo(() => {
    const { inf, ini, map, ...rest } = twf
    const roles: Array<[string, TwfRo]> = []
    const allEvents: Array<[string, TwfEvent]> = []
    const musics: Array<[string, TwfMusic]> = []
    const tags = new Set<string>()
    Object.entries(rest).forEach(([key, value]) => {
      if (key.startsWith('ro')) {
        roles.push([key, value as TwfRo])
      } else if (key.startsWith('music')) {
        musics.push([key, value as TwfMusic])
      } else {
        const event: TwfEvent = value as TwfEvent
        allEvents.push([key.replace('evt_', ''), event])
        event.tag?.split(',').forEach(t => tags.add(t))
      }
    })
    const events: Record<string, TwfEvent> = Object.fromEntries(allEvents.sort((a, b) => a[1].uo - b[1].uo))
    console.log(twfEventAnalysis(Object.values(events)))
    return {
      roles: Object.fromEntries(roles),
      inf,
      ini,
      map,
      events,
      musics: Object.fromEntries(musics),
      tags: Array.from(tags)
    }
  }, [twf])
  const { cgEvents, missed } = useMemo(() => {
    clearMiss()
    return {
      cgEvents: translateTwfEvents(inf, ini, map, roles, events, musics),
      missed: getMissed()
    }
  }, [events])
  const [filterTag, setFilterTag] = useState('')
  return (
    <Box onClick={e => e.stopPropagation()} style={{ height: '100%' }}>
      <Typography variant={'h5'} style={{ marginTop: '16px' }}>
        {twf.inf.n}
      </Typography>
      <Box style={{ margin: '8px 0', display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
        <Box>
          <ClickShowRaw raw={twf} name={twf.inf.n}/>
        </Box>
        <FormControl>
          <InputLabel>
            Tag
          </InputLabel>
          <Select value={filterTag} onChange={e => setFilterTag(e.target.value as string)}>
            <MenuItem value=''> - </MenuItem>
            {tags.map(t => (
              <MenuItem key={t} value={t}>{t}</MenuItem>
            ))}
          </Select>
        </FormControl>
      </Box>
      <JsonShower json={missed} name={'轉換為CG同人陣'}>
        <Box>
          <Typography variant='h6'>
            點擊下面按鈕複製/下載CG同人檔
          </Typography>
          <Button
            variant='contained'
            color='primary'
            onClick={() => copyToClipboard(JSON.stringify(cgEvents))}>
            COPY
          </Button>
          <Button
            variant='contained'
            color='primary'
            onClick={() => download(JSON.stringify(cgEvents), `${inf.n}.events`)}>
            DOWNLOAD
          </Button>
        </Box>
        {missed.length > 0 && <Box style={{margin: '8px 0'}}>
          <Typography>
            在轉換時發現{missed.length}個問題。
            可以聯絡我看看可以怎樣修正。記得提供下面的JSON(按copy JSON/download JSON取得)。
            如果可以提供.events, .twf, 和文字檔就最好
          </Typography>
          <Typography>
            <a href='https://gamelet.online/user/dipsy/board'>聯絡作者</a>
          </Typography>
        </Box>}
      </JsonShower>
      <MissionInfoShower inf={inf}/>
      <JsonShower json={map} name={`地圖: ${map.n ?? map.o}`}/>
      <JsonShower json={ini} name='重生點/初始攝影機位買'/>
      <JsonShower json={roles} name={`${Object.keys(roles).length}個自訂角色`}>
        {Object.values(roles).map(r => htmlDecode(r.n)).join(', ')}
      </JsonShower>
      <JsonShower json={musics} name={`${Object.keys(musics).length}首音樂`}>
        {Object.values(musics).map(m => m.n).join(', ')}
      </JsonShower>
      {Object.entries(events).filter(([_, e]) => filterTag === '' || e.tag?.includes(filterTag)).map(([name, content]) => (
        <EventShower key={name} event={content} eventName={name}/>
      ))}
      <div style={{ height: '24px' }}/>
    </Box>
  )
}
