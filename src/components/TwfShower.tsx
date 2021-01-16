import React, { FunctionComponent, useMemo, useState } from 'react'
import { Twf, TwfEvent, TwfRo } from '../type'
import { Box, Button } from '@material-ui/core'
import { copyToClipboard } from '../utils/copyToClipboard'
import { download } from '../utils/download'
import { ClickShowRaw } from './ClickShowRaw'
import JSONTree from 'react-json-tree'


export const TwfShower: FunctionComponent<{ twf: Twf }> = ({ twf }) => {
  const { inf, ini, map, ...rest } = twf
  const [showJson, setShowJson] = useState(false)
  const [roles, events] = useMemo(() => {
    const rs: Array<[string, TwfRo]> = []
    const es: Array<[string, TwfEvent]> = []
    Object.entries(rest).forEach(([key, value]) => {
      if (key.startsWith('ro')) {
        rs.push([key, value as TwfRo])
      } else {
        es.push([key, value as TwfEvent])
      }
    })
    return [rs, Object.fromEntries(es.sort((a,b) => a[1].uo - b[1].uo))]
  }, [twf])
  return (
    <Box onClick={e => e.stopPropagation()} style={{ height: '100%' }}>
      <Box>
        <Button onClick={() => setShowJson(!showJson)} variant='contained'>Show JSON</Button>
        <Button onClick={() => copyToClipboard(JSON.stringify(twf, null, 2))} variant='contained'>Copy JSON</Button>
        <Button onClick={() => download(JSON.stringify(twf, null, 2), `${twf.inf.n}.json`)} variant='contained'>
          Download JSON
        </Button>
      </Box>
      {showJson && <JSONTree data={twf} theme={{ scheme: 'google' }}/>}
      <Box>
        <Box>MISSION INFO</Box>
        <Box>mission name: {inf.n}</Box>
        <Box>mission description: <pre>{inf.dp}</pre></Box>
        <Box>mission goal: {inf.go}</Box>
        <Box>mission fail: {inf.fa}</Box>
        <Box>camps: {inf.cs.join(',')}</Box>
        <Box>minplayers: {inf.minp}</Box>
        <Box>author: {inf.sn} ({inf.su})</Box>
        <Box>ability: {inf.ab}</Box>
        <Box>ri: {inf.ri}</Box>
        <ClickShowRaw raw={inf}/>
      </Box>
      <Box>
        <Box>MAP INFO</Box>
        <ClickShowRaw raw={map}/>
      </Box>
      <Box>
        <Box>SPAWN POINT INFO</Box>
        <ClickShowRaw raw={ini}/>
      </Box>
      <Box>
        {Object.entries(events).map(([name, content]) => (
          <Box key={name}>{name}<ClickShowRaw raw={content}/></Box>
        ))}
      </Box>
    </Box>
  )
}
