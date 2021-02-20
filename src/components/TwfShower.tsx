import React, { FunctionComponent, useMemo, useState } from 'react'
import { Twf, TwfEvent, TwfMusic, TwfRo } from '../type'
import { Box, FormControl, InputLabel, MenuItem, Select } from '@material-ui/core'
import { ClickShowRaw } from './ClickShowRaw'
import { EventShower } from './EventShower'
import { MissionInfoShower } from './MissionInfoShower'
import { JsonShower } from './JsonShower'
import { twfEventAnalysis } from '../utils/twfEventAnalysis'


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
      } else if(key.startsWith('music')) {
        musics.push([key, value as TwfMusic])
      }else {
        const event: TwfEvent = value as TwfEvent
        allEvents.push([key.replace('evt_', ''), event])
        event.tag?.split(',').forEach(t => tags.add(t))
      }
    })
    const events: Record<string, TwfEvent> = Object.fromEntries(allEvents.sort((a, b) => a[1].uo - b[1].uo))
    console.log(twfEventAnalysis(Object.values(events)))
    return {
      roles,
      inf,
      ini,
      map,
      events,
      musics,
      tags: Array.from(tags)
    }
  }, [twf])
  const [filterTag, setFilterTag] = useState('')
  return (
    <Box onClick={e => e.stopPropagation()} style={{ height: '100%' }}>
      <Box style={{margin: '8px 0', display: 'flex', justifyContent: 'space-between', alignItems: 'baseline'}}>
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
      <MissionInfoShower inf={inf}/>
      <JsonShower json={map} name='map'/>
      <JsonShower json={ini} name='spawn point'/>
      <JsonShower json={roles} name={`${roles.length} roles`}/>
      <JsonShower json={Object.fromEntries(musics)} name={`${musics.length} musics`}/>
      {Object.entries(events).filter(([_, e]) => filterTag === '' || e.tag?.includes(filterTag)).map(([name, content]) => (
        <EventShower event={content} eventName={name}/>
      ))}
    </Box>
  )
}
