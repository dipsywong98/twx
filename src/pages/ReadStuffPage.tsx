import React, { FunctionComponent, useCallback, useState } from 'react'
import { Box, Container, Paper, Typography } from '@material-ui/core'
import { useDropzone } from 'react-dropzone'
import { readGzipFileAsJson, readTwmapFileAsJson, readTwxFileAsJson } from '../utils/readFile'
import { Twf, Twr } from '../type'
import { TwfShower } from '../components/TwfShower'
import { TwmShower } from '../components/TwmShower'
import { ClickShowRaw } from '../components/ClickShowRaw'
import { translateTwm } from '../translators/twmToTwmap/translateTwm'
import { TwrShower } from '../components/TwrShower'

enum FileType {
  TWF,
  TWM,
  TWMAP,
  UNKNOWN,
  TWR,
}

export const ReadStuffPage: FunctionComponent = () => {
  const [fileContentJson, setFileContentJson] = useState<unknown | null>(null)
  const [fileType, setFileType] = useState<FileType | null>(null)
  const [name, setName] = useState('')
  const [error, setError] = useState('')
  const onDrop = useCallback((acceptedFiles: File[]) => {
    setError('')
    if (acceptedFiles.length !== 1) {
      setError('please select one file to open')
      return
    }
    const file = acceptedFiles[0] as File & { path: string }
    const ext = file.path.replace(/^.*\.(tw\w+?)$/, '$1')
    const fileName = file.path
    setName(fileName.replace(`.${ext}`, ''))
    if (ext === 'twf') {
      readTwxFileAsJson(file)
        .then(setFileContentJson)
        .catch((e: Error) => {
          console.error(e)
          setError(e.message ?? e.name ?? e as unknown as string)
        })
      setFileType(FileType.TWF)
    } else if (ext === 'twm') {
      readTwxFileAsJson(file)
        .then(twm => translateTwm(twm))
        .then(setFileContentJson)
        .catch((e: Error) => {
          console.error(e)
          setError(e.message ?? e.name ?? e as unknown as string)
        })
      setFileType(FileType.TWM)
    } else if (ext === 'twmab') {
      readGzipFileAsJson(file)
        .then(setFileContentJson)
        .catch((e: Error) => {
          console.error(e)
          setError(e.message ?? e.name ?? e as unknown as string)
        })
      setFileType(FileType.TWM)
    } else if (ext === 'twmap') {
      readTwmapFileAsJson(file)
        .then(setFileContentJson)
        .catch((e: Error) => {
          console.error(e)
          setError(e.message ?? e.name ?? e as unknown as string)
        })
      setFileType(FileType.TWMAP)
    } else if (ext === 'twr') {
      readTwxFileAsJson(file)
        .then(setFileContentJson)
        .catch((e: Error) => {
          console.error(e)
          setError(e.message ?? e.name ?? e as unknown as string)
        })
      setFileType(FileType.TWR)
    } else {
      setFileType(FileType.UNKNOWN)
      // readTwmapFileAsJson(file)
      //   .then(setFileContentJson)
      readTwxFileAsJson(file)
        .then(setFileContentJson)
        .catch(async () => {
          return await readGzipFileAsJson(file)
            .then(setFileContentJson)
            .catch((e: Error) => {
              console.error(e)
              setError(e.message ?? e.name ?? e as unknown as string)
            })
        })
    }
  }, [])
  const { getRootProps, getInputProps } = useDropzone({ onDrop })
  return (
    <Box
      style={{
        flex: 1,
        overflow: 'auto',
        paddingBottom: '16px'
      }}
      {...(fileContentJson === null ? getRootProps() : {})} >
      <Container style={{ height: '100%' }}>
        <input {...getInputProps()} />
        {
          // isDragActive ?
          //   <p>Drop the files here ...</p> :
          //   <p>Drag 'n' drop some files here, or click to select files</p>
        }
        {fileContentJson === null && <Box
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignContent: 'center',
            height: '100%'
          }}>
          <Box>
            <Paper style={{ padding: '30px' }}>
              <Typography>
                Drag and drop a twf/twm/twmap/twr file here, or click to open
              </Typography>
              <Typography>
                拖一個twf/twm/twmap/twr/twrole/sav/var檔至此，或按此打開
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
        {fileContentJson !== null && fileType === FileType.TWR &&
        <TwrShower twr={fileContentJson as Twr} name={name}/>}
        {fileContentJson !== null && fileType === FileType.UNKNOWN &&
        <ClickShowRaw raw={fileContentJson} name={name} defaultShow={1}/>}
      </Container>
    </Box>
  )
}
