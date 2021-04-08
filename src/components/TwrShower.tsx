import React, { FunctionComponent, useMemo, useState } from 'react'
import { Box, Button, Checkbox, Typography } from '@material-ui/core'
import { ClickShowRaw } from './ClickShowRaw'
import { Twr, Twrole } from '../type'
import { useTwrRender } from '../hooks/useTwrRender'
import { downloadAsBlob, downloadDataUrl } from '../utils/download'
import PropTypes from 'prop-types'
import { twrToTwrole } from '../translators/twrToTwrole'

enum CampSexFlags {
  MALE = 0,
  FEMALE = 1,
  SKYDOW = 2,
  ROYAL = 4,
  THIRD = 8,
  UNKNOWN = 16
}

export const TwrShower: FunctionComponent<{ twr: Twr, name: string }> = ({ twr, name }) => {
  const [showHead, setShowHead] = useState(true)
  const [showHands, setShowHands] = useState(true)
  const [showFoot, setShowFoot] = useState(true)
  const [showCape, setShowCape] = useState(true)
  const [camp, setCamp] = useState(0)
  const [sex, setSex] = useState(0)
  const ref = useTwrRender(twr, showHead, showHands, showFoot, showCape)
  const guessCamp = (twrole: Twrole): CampSexFlags => {
    const samples = twrole.data.cr.deco.map(({ c }) => c.split('_')[0]).filter((str, index, arr) => ['skydow', 'royal', 'third'].includes(str) && arr.indexOf(str) === index)
    if (samples.length !== 1) {
      return CampSexFlags.UNKNOWN
    }
    switch (samples[0]) {
      case 'skydow':
        return CampSexFlags.SKYDOW
      case 'royal':
        return CampSexFlags.ROYAL
      case 'third':
        return CampSexFlags.THIRD
      default:
        return CampSexFlags.UNKNOWN
    }
  }
  const twrole = useMemo(() => {
    const twrole: Twrole = 'data' in twr ? twr : twrToTwrole(twr)
    const guessedCamp = guessCamp(twrole)
    if ('data' in twr) {
      if ((guessedCamp & CampSexFlags.UNKNOWN) > 0) {
        setCamp(guessedCamp)
      } else {
        setCamp(twrole.data.dr & (CampSexFlags.SKYDOW | CampSexFlags.ROYAL | CampSexFlags.THIRD))
      }
      setSex(twrole.data.dr & CampSexFlags.MALE)
    } else {
      setCamp(guessedCamp)
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
              <option value={CampSexFlags.SKYDOW}>skydow</option>
              <option value={CampSexFlags.ROYAL}>royal</option>
              <option value={CampSexFlags.THIRD}>third</option>
              <option value={CampSexFlags.UNKNOWN}>unknown</option>
            </select>
          </Box>
          <Box>
            <select value={sex} onChange={({ target }) => setSex(Number.parseInt(target.value))}>
              <option value={CampSexFlags.MALE}>male</option>
              <option value={CampSexFlags.FEMALE}>female</option>
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
