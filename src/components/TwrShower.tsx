import React, { FunctionComponent, useMemo, useState } from 'react'
import { Box, Button, Checkbox, Typography } from '@material-ui/core'
import { ClickShowRaw } from './ClickShowRaw'
import { Twr, Twrole } from '../type'
import { useTwrRender } from '../hooks/useTwrRender'
import { downloadAsBlob, downloadDataUrl } from '../utils/download'
import PropTypes from 'prop-types'
import { twrToTwrole } from '../translators/twrToTwrole'

export const TwrShower: FunctionComponent<{ twr: Twr, name: string }> = ({ twr, name }) => {
  const [showHead, setShowHead] = useState(true)
  const [showHands, setShowHands] = useState(true)
  const [showFoot, setShowFoot] = useState(true)
  const [showCape, setShowCape] = useState(true)
  const [camp, setCamp] = useState(0)
  const [sex, setSex] = useState(0)
  const ref = useTwrRender(twr, showHead, showHands, showFoot, showCape)
  const twrole = useMemo(() => {
    const twrole: Twrole = 'data' in twr ? twr : twrToTwrole(twr)
    if ('data' in twr) {
      setCamp(twrole.data.dr & 0b11110)
      setSex(twrole.data.dr & 0b1)
    } else {
      twrole.data.dr = sex | camp
    }
    return twrole
  }, [twr, camp, sex])
  const handleDownload = (): void => {
    if (ref.current !== null) {
      downloadDataUrl(ref.current?.toDataURL('image/png;base64'), `${name}.png`)
    }
  }
  const handleSaveTwrole = (): void => {
    downloadAsBlob(JSON.stringify(twrole), `${name}.twrole`)
  }
  return (
    <Box onClick={e => e.stopPropagation()} style={{ height: '100%' }}>
      <Typography variant={'h5'} style={{ marginTop: '16px' }}>
        {name}
      </Typography>
      <Box style={{ margin: '8px 0', display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
        <Box>
          <ClickShowRaw raw={twr} name={`${name}.twr`} defaultShow={1}/>
        </Box>
      </Box>
      <Box style={{ display: 'flex' }}>
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
          <Box>
            <label>
              <Checkbox checked={showCape} onChange={({ target }) => setShowCape(target.checked)}/>
              showCape
            </label>
          </Box>
          <Box>
            <select value={camp} onChange={({ target }) => setCamp(Number.parseInt(target.value))}>
              <option value={0b10}>skydow</option>
              <option value={0b100}>royal</option>
              <option value={0b1000}>third</option>
              <option value={0b10000}>unknown</option>
            </select>
          </Box>
          <Box>
            <select value={sex} onChange={({ target }) => setSex(Number.parseInt(target.value))}>
              <option value={0b0}>male</option>
              <option value={0b1}>female</option>
            </select>
          </Box>
          <Box>
            <Button onClick={handleDownload} variant='contained' color='primary'>
              Save PNG
            </Button>
            <Button onClick={handleSaveTwrole} variant='contained' color='primary'>
              Save TWROLE
            </Button>
          </Box>
        </Box>
      </Box>
      <div style={{ height: '24px' }}/>
    </Box>
  )
}

TwrShower.propTypes = {
  twr: PropTypes.any.isRequired,
  name: PropTypes.any.isRequired
}
