import React, { FunctionComponent } from 'react'
import { Accordion, AccordionDetails, AccordionSummary, Box, Typography } from '@material-ui/core'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import { ClickShowRaw } from './ClickShowRaw'
import PropTypes from 'prop-types'

export const JsonShower: FunctionComponent<{ json: unknown, name: string, children?: unknown }> = ({ json, name, children }) => {
  return (
    <Accordion>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon/>}
        aria-controls="panel1a-content"
        id="panel1a-header">
        <Typography>{name}</Typography>
      </AccordionSummary>
      <AccordionDetails style={{ flexDirection: 'column' }}>
        <Box>
          {children}
        </Box>
        <Box>
          <ClickShowRaw raw={json} defaultShow={children !== undefined ? 0 : 1}/>
        </Box>
      </AccordionDetails>
    </Accordion>
  )
}

JsonShower.propTypes = {
  json: PropTypes.any.isRequired,
  name: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ])
}
