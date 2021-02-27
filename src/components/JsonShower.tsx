import React, { FunctionComponent } from 'react'
import { Accordion, AccordionDetails, AccordionSummary, Box, Typography } from '@material-ui/core'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import { ClickShowRaw } from './ClickShowRaw'

export const JsonShower: FunctionComponent<{ json: unknown, name: string }> = ({ json, name, children }) => {
  return (
    <Accordion>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon/>}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <Typography>{name}</Typography>
      </AccordionSummary>
      <AccordionDetails style={{flexDirection: 'column'}}>
        <Box>
          {children}
        </Box>
        <Box>
          <ClickShowRaw raw={json} defaultShow={children ? 0 : 1}/>
        </Box>
      </AccordionDetails>
    </Accordion>
  )
}
