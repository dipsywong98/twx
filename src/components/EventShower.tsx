import React, { FunctionComponent, useMemo } from 'react'
import { Accordion, AccordionDetails, AccordionSummary, Box, Grid, List, Typography } from '@material-ui/core'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import { TwfAct, TwfCheck, TwfEvent } from '../type'
import { ClickShowRaw } from './ClickShowRaw'

const CheckCell: FunctionComponent<{ check: TwfCheck }> = ({ check }) => {
  return (
    <div
      className={'cell'}
      style={{
        backgroundColor: '#070',
      }}>
      [檢查] {check.type}{' '}
      <span style={{ color: 'hsla(0,0%,100%,.7)' }}>
        {JSON.stringify(check)}
      </span>
    </div>
  )
}

const ActionCell: FunctionComponent<{ action: TwfAct }> = ({ action }) => {
  return (
    <div
      className={'cell'}
      style={{
        backgroundColor: '#06b',
      }}>
      [動作] {action.type}{' '}
      <span style={{ color: 'hsla(0,0%,100%,.7)' }}>
        {JSON.stringify(action)}
      </span>
    </div>
  )
}

export const EventShower: FunctionComponent<{ event: TwfEvent, eventName: string }> = ({ event, eventName }) => {
  const eventMetaString: string = useMemo(() => {
    let strs = []
    if (event.itime) {
      strs.push(`啟動時間或${event.itime}毫秒`)
    }
    if (event.delay) {
      strs.push(`延遲發動${event.delay}毫秒`)
    }
    if (event.rep) {
      strs.push(`重複${event.rep}次`)
    }
    if (event.repInt) {
      strs.push(`重複間隔${event.repInt}毫秒`)
    }
    if (event.recInt) {
      strs.push(`重複檢查間隔${event.recInt}毫秒`)
    }
    const knownKeys = [
      'tag',
      'act',
      'uo',
      'cks',
      'repInt',
      'rep',
      'itime',
      'delay',
      'recInt'
    ]
    Object.keys(event).forEach(k => {
      if (!knownKeys.includes(k)) {
        console.error(`event ${eventName} contains unknown key ${k}`)
      }
    })
    return strs.join(',')
  }, [event, eventName])
  return (
    <Accordion TransitionProps={{ unmountOnExit: true }}>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon/>}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <Typography>事件 {eventName}</Typography>
        {eventMetaString !== '' &&
        <Typography component='p' variant='caption' style={{ alignSelf: 'baseline', marginLeft: '8px' }}>
          {eventMetaString}
        </Typography>
        }
        <div style={{ flex: 1 }}/>
        <Typography component='p' variant='caption' style={{ alignSelf: 'baseline' }}>{event.tag}</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Grid direction='column'>
          <List>
            {event.cks.map((check, k) => (
              <CheckCell key={k} check={check}/>
            ))}
            {event.act.map((action, k) => (
              <ActionCell key={k} action={action}/>
            ))}
          </List>
          <Box>
            <ClickShowRaw raw={event} defaultShow={1}/>
          </Box>
        </Grid>
      </AccordionDetails>
    </Accordion>
  )
}