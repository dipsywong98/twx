import React, { FunctionComponent, useState } from 'react'
import { Box, Button, TextField, Typography } from '@material-ui/core'
import { ClickShowRaw } from './ClickShowRaw'
import { twmapInB64Text } from '../utils/twmapInB64Text'
import { copyToClipboard } from '../utils/copyToClipboard'
import PropTypes from 'prop-types'
import { downloadTwmap } from '../utils/download'

export const TwmShower: FunctionComponent<{ twm: unknown, name: string }> = ({ twm, name }) => {
  const [copied, setCopied] = useState(false)
  const handleCopy = (): void => {
    copyToClipboard(twmapInB64Text(twm))
    setCopied(true)
  }
  const handleDownload = (): void => {
    downloadTwmap(twm, `${name}.twmap`)
  }
  return (
    <Box onClick={e => e.stopPropagation()} style={{ height: '100%' }}>
      <Typography variant={'h5'} style={{ marginTop: '16px' }}>
        {name}
      </Typography>
      <Box style={{ margin: '8px 0', display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
        <Box>
          <ClickShowRaw raw={twm} name={`${name}.twmap`} defaultShow={1}/>
        </Box>
      </Box>
      <Button variant='contained' color='primary' onClick={handleCopy}>
        {copied ? 'COPIED' : 'Copy TWMAP'}
      </Button>
      <Button variant='contained' color='primary' onClick={handleDownload}>
        DOWNLOAD TWMAP
      </Button>
      <Box>
        <TextField
          multiline
          value={twmapInB64Text(twm)}
          InputProps={{
            readOnly: true
          }}
          fullWidth>
        </TextField>
      </Box>
      <div style={{ height: '24px' }}/>
    </Box>
  )
}

TwmShower.propTypes = {
  twm: PropTypes.any.isRequired,
  name: PropTypes.string.isRequired
}
