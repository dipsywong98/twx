import React, { FunctionComponent } from 'react'
import { Box } from '@material-ui/core'
import { ClickShowRaw } from './ClickShowRaw'
import { Twr } from '../type'
import { useTwrRender } from '../hooks/useTwrRender'


export const TwrShower: FunctionComponent<{ twr: Twr, name: string }> = ({ twr, name }) => {
  const ref = useTwrRender(twr)
  return (
    <Box onClick={e => e.stopPropagation()} style={{ height: '100%' }}>
      <Box style={{ margin: '8px 0', display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
        <Box>
          <ClickShowRaw raw={twr} name={`${name}.twr`} defaultShow={1}/>
        </Box>
      </Box>
      <Box>
        <canvas ref={ref}/>
      </Box>
      <div style={{height: '24px'}} />
    </Box>
  )
}
