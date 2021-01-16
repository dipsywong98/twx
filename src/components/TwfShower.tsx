import React, { FunctionComponent, useMemo } from 'react'
import { Twf, TwfEvent, TwfRo } from '../type'
import { Box } from '@material-ui/core'
import { ClickShowRaw } from './ClickShowRaw'
import { EventShower } from './EventShower'
import { MissionInfoShower } from './MissionInfoShower'
import { JsonShower } from './JsonShower'


export const TwfShower: FunctionComponent<{ twf: Twf }> = ({ twf }) => {
  const { inf, ini, map, roles, events } = useMemo(() => {
    const { inf, ini, map, ...rest } = twf
    const roles: Array<[string, TwfRo]> = []
    const allEvents: Array<[string, TwfEvent]> = []
    Object.entries(rest).forEach(([key, value]) => {
      if (key.startsWith('ro')) {
        roles.push([key, value as TwfRo])
      } else {
        allEvents.push([key.replace('evt_', ''), value as TwfEvent])
      }
    })
    return {
      roles,
      inf,
      ini,
      map,
      events: Object.fromEntries(allEvents.sort((a, b) => a[1].uo - b[1].uo))
    }
  }, [twf])
  return (
    <Box onClick={e => e.stopPropagation()} style={{ height: '100%' }}>
      <Box style={{margin: '8px 0'}}>
        <ClickShowRaw raw={twf} name={twf.inf.n}/>
      </Box>
      <MissionInfoShower inf={inf}/>
      <JsonShower json={map} name='map'/>
      <JsonShower json={ini} name='spawn point'/>
      <JsonShower json={roles} name={`${roles.length} roles`}/>
      {Object.entries(events).map(([name, content]) => (
        <EventShower event={content} eventName={name}/>
      ))}
    </Box>
  )
}
