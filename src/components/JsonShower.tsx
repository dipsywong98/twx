import React, { FunctionComponent } from 'react'
import { Accordion, AccordionDetails, AccordionSummary, Box, Typography } from '@material-ui/core'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import { ClickShowRaw } from './ClickShowRaw'

export const JsonShower: FunctionComponent<{ json: unknown, name: string }> = ({ json, name }) => {
  return (
    <Accordion>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon/>}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <Typography>{name}</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Box>
          <ClickShowRaw raw={json} defaultShow={1}/>
        </Box>
      </AccordionDetails>
    </Accordion>
  )
}
