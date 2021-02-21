import React, { FunctionComponent } from 'react'
import { Box } from '@material-ui/core'
import { ClickShowRaw } from './ClickShowRaw'


export const TwmShower: FunctionComponent<{ twm: unknown, name: string }> = ({ twm, name }) => {
  return (
    <Box onClick={e => e.stopPropagation()} style={{ height: '100%' }}>
      <Box style={{ margin: '8px 0', display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
        <Box>
          <ClickShowRaw raw={twm} name={`${name}.twmap`} defaultShow={1}/>
        </Box>
      </Box>
      <div style={{height: '24px'}} />
    </Box>
  )
}
