import React, { useCallback, useState } from 'react'
import { Box, Container, Paper } from '@material-ui/core'
import { useDropzone } from 'react-dropzone'
import { readTwxFileAsJson } from '../utils/readFile'
import { Twf } from '../type'
import { TwfShower } from '../components/TwfShower'


export const ReadTwfPage = () => {
  const [twf, setTwf] = useState<Twf | null>(null)
  const onDrop = useCallback((acceptedFiles) => {
    readTwxFileAsJson<Twf>(acceptedFiles[0])
      .then(setTwf)
  }, [])
  const { getRootProps, getInputProps } = useDropzone({ onDrop })
  return (
    <Box style={{ flex: 1, overflow: 'auto' }} {...(twf === null ? getRootProps() : {})} >
      <Container style={{ height: '100%', marginBottom: '16px' }}>
        <input {...getInputProps()} />
        {
          // isDragActive ?
          //   <p>Drop the files here ...</p> :
          //   <p>Drag 'n' drop some files here, or click to select files</p>
        }
        {twf === null && <Box style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignContent: 'center',
          height: '100%'
        }}>
          <Box>
            <Paper style={{ padding: '30px' }}>
              Drag and drop a twf file here, or click to open
            </Paper>
          </Box>
        </Box>}
        {twf !== null && <TwfShower twf={twf}/>}
      </Container>
    </Box>
  )
}
