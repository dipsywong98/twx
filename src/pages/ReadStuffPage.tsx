import React, { useCallback, useState } from 'react'
import { Box, Container, Paper, Typography } from '@material-ui/core'
import { useDropzone } from 'react-dropzone'
import { readTwmapFileAsJson, readTwxFileAsJson } from '../utils/readFile'
import { Twf } from '../type'
import { TwfShower } from '../components/TwfShower'
import { TwmShower } from '../components/TwmShower'
import { ClickShowRaw } from '../components/ClickShowRaw'
import { translateTwm } from '../translators/twmToTwmap/translateTwm'

enum FileType {
  TWF,
  TWM,
  TWMAP,
  UNKNOWN
}

export const ReadStuffPage = () => {
  const [fileContentJson, setFileContentJson] = useState<unknown | null>(null)
  const [fileType, setFileType] = useState<FileType | null>(null)
  const [name, setName] = useState('')
  const [error, setError] = useState('')
  const onDrop = useCallback((acceptedFiles) => {
    setError('')
    if (acceptedFiles.length !== 1) {
      setError('please select one file to open')
      return
    }
    const ext = acceptedFiles[0].path.replace(/^.*\.(tw\w+?)$/, '$1')
    const fileName = acceptedFiles[0].path
    setName(fileName.replace(`.${ext}`, ''))
    if (ext === 'twf') {
      readTwxFileAsJson(acceptedFiles[0])
        .then(setFileContentJson)
      setFileType(FileType.TWF)
    } else if (ext === 'twm') {
      readTwxFileAsJson(acceptedFiles[0])
        .then(twm => translateTwm(twm))
        .then(setFileContentJson)
      setFileType(FileType.TWM)
    } else if (ext === 'twmab') {
      readTwxFileAsJson(acceptedFiles[0])
        .then(setFileContentJson)
      setFileType(FileType.TWM)
    } else if (ext === 'twmap') {
      readTwmapFileAsJson(acceptedFiles[0])
        .then(setFileContentJson)
      setFileType(FileType.TWMAP)
    } else {
      setFileType(FileType.UNKNOWN)
      // readTwmapFileAsJson(acceptedFiles[0])
      //   .then(setFileContentJson)
      readTwxFileAsJson(acceptedFiles[0])
        .then(setFileContentJson)
        .catch((e: Error) => {
          console.log(e)
          console.error(e)
          setError(e.message || e.name || e as unknown as string)
        })
    }
  }, [])
  const { getRootProps, getInputProps } = useDropzone({ onDrop })
  return (
    <Box style={{
      flex: 1,
      overflow: 'auto',
      paddingBottom: '16px'
    }} {...(fileContentJson === null ? getRootProps() : {})} >
      <Container style={{ height: '100%' }}>
        <input {...getInputProps()} />
        {
          // isDragActive ?
          //   <p>Drop the files here ...</p> :
          //   <p>Drag 'n' drop some files here, or click to select files</p>
        }
        {fileContentJson === null && <Box style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignContent: 'center',
          height: '100%'
        }}>
          <Box>
            <Paper style={{ padding: '30px' }}>
              <Typography>
                Drag and drop a twf/twm/twmap file here, or click to open
              </Typography>
              <Typography>
                拖一個twf/twm/twmap檔至此，或按此打開
              </Typography>
              {
                error !== '' && <Typography color={'error'}>Error: {error}</Typography>
              }
            </Paper>
          </Box>
        </Box>}
        {fileContentJson !== null && fileType === FileType.TWF && <TwfShower twf={fileContentJson as Twf}/>}
        {fileContentJson !== null && fileType === FileType.TWM && <TwmShower twm={fileContentJson} name={name}/>}
        {fileContentJson !== null && fileType === FileType.TWMAP &&
        <TwmShower twm={fileContentJson} name={name}/>}
        {fileContentJson !== null && fileType !== FileType.TWM && fileType !== FileType.TWF && fileType !== FileType.TWMAP &&
        <ClickShowRaw raw={fileContentJson} name={name} defaultShow={1}/>}
      </Container>
    </Box>
  )
}
