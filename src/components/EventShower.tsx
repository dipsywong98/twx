import React, { FunctionComponent, useMemo } from 'react'
import { Accordion, AccordionDetails, AccordionSummary, Box, Grid, List, Paper, Typography } from '@material-ui/core'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import { TwfAct, TwfCheck, TwfEvent } from '../type'
import { ClickShowRaw } from './ClickShowRaw'

const CheckCell: FunctionComponent<{ check: TwfCheck, index: number }> = ({ check, index }) => {
  return (
    <Paper
      className={'cell'}
      style={{
        color: 'white',
        backgroundColor: '#1b5e20'
      }}>
      <span style={{ whiteSpace: 'nowrap' }}>
        [檢查-{index}] {check.type}{' '}
      </span>
      <span style={{ color: 'hsla(0,0%,100%,.7)' }}>
        {JSON.stringify(check)}
      </span>
    </Paper>
  )
}

const ActionCell: FunctionComponent<{ action: TwfAct, index: number }> = ({ action, index }) => {
  return (
    <Paper
      className={'cell'}
      style={{
        color: 'white',
        backgroundColor: '#01579b'
      }}>
      <span style={{ whiteSpace: 'nowrap' }}>
        [動作-{index}] {action.type}{' '}
      </span>
      <span style={{ color: 'hsla(0,0%,100%,.7)' }}>
        {JSON.stringify(action)}
      </span>
    </Paper>
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
        <Grid direction='column' container>
          <List>
            {event.cks.map((check, k) => (
              <CheckCell key={k} check={check} index={k}/>
            ))}
            {event.act.map((action, k) => (
              <ActionCell key={k} action={action} index={k}/>
            ))}
          </List>
          <Box>
            <ClickShowRaw raw={event} defaultShow={0}/>
          </Box>
        </Grid>
      </AccordionDetails>
    </Accordion>
  )
}
