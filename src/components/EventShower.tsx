import React, { FunctionComponent } from 'react'
import { Accordion, AccordionDetails, AccordionSummary, Box, Typography } from '@material-ui/core'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import { TwfEvent } from '../type'
import { ClickShowRaw } from './ClickShowRaw'

export const EventShower: FunctionComponent<{ event: TwfEvent, eventName: string }> = ({ event, eventName }) => {
  return (
    <Accordion>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon/>}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <Typography>事件 {eventName}</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Box>
          <ClickShowRaw raw={event} defaultShow={1}/>
        </Box>
      </AccordionDetails>
    </Accordion>
  )
}
