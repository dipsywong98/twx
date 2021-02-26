import React, { FunctionComponent, useState } from 'react'
import { Box, Checkbox } from '@material-ui/core'
import { ClickShowRaw } from './ClickShowRaw'
import { Twr } from '../type'
import { useTwrRender } from '../hooks/useTwrRender'


export const TwrShower: FunctionComponent<{ twr: Twr, name: string }> = ({ twr, name }) => {
  const [showHead, setShowHead] = useState(true)
  const [showHands, setShowHands] = useState(true)
  const [showFoot, setShowFoot] = useState(true)
  const ref = useTwrRender(twr, showHead, showHands, showFoot)
  return (
    <Box onClick={e => e.stopPropagation()} style={{ height: '100%' }}>
      <Box style={{ margin: '8px 0', display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
        <Box>
          <ClickShowRaw raw={twr} name={`${name}.twr`} defaultShow={1}/>
        </Box>
      </Box>
      <Box style={{display: 'flex'}}>
        <Box>
          <canvas ref={ref}/>
        </Box>
        <Box>
          <Box>
            <label>
              <Checkbox checked={showHead} onChange={({ target }) => setShowHead(target.checked)}/>
              showHead
            </label>
          </Box>
          <Box>
            <label>
              <Checkbox checked={showHands} onChange={({ target }) => setShowHands(target.checked)}/>
              showHands
            </label>
          </Box>
          <Box>
            <label>
              <Checkbox checked={showFoot} onChange={({ target }) => setShowFoot(target.checked)}/>
              showFoot
            </label>
          </Box>
        </Box>
      </Box>
      <div style={{ height: '24px' }}/>
    </Box>
  )
}
