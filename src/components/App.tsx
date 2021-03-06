import React, { FunctionComponent, useEffect, useState } from 'react'
import {
  AppBar,
  Box,
  Button,
  ButtonGroup,
  createMuiTheme,
  CssBaseline,
  MuiThemeProvider,
  Toolbar,
  Typography,
  useMediaQuery
} from '@material-ui/core'
import './App.css'
import { Brightness7, Info } from '@material-ui/icons'
import { ReadStuffPage } from '../pages/ReadStuffPage'
import { InfoModal } from './InfoModal'

const darkTheme = createMuiTheme({
  palette: {
    type: 'dark'
  }
})

const lightTheme = createMuiTheme({
  palette: {
    type: 'light'
  }
})

const App: FunctionComponent = () => {
  const [isDarkMode, setIsDarkMode] = useState(useMediaQuery('(prefers-color-scheme: dark)'))
  const [reopening, setReopening] = useState(false)
  const [openModal, setOpenModal] = useState(false)
  const handleModalClose = (): void => {
    setOpenModal(false)
  }
  const handleOpen = (): void => {
    setReopening(true)
  }
  useEffect(() => {
    if (reopening) {
      setReopening(false)
    }
  }, [reopening])
  return (
    <MuiThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <CssBaseline/>
      <Box flexDirection='column' style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, display: 'flex' }}>
        <AppBar position="static">
          <Toolbar style={{ display: 'flex', justifyContent: 'space-between' }}>
            <Typography variant="h6">
              同人陣讀檔器
            </Typography>
            <ButtonGroup variant='text' color='inherit'>
              <Button onClick={handleOpen}>
                開另一個檔案
              </Button>
              <Button href={'//gamelet.online/'}>
                嘎姆擂台
              </Button>
              <Button href={'//code.gamelet.com/'}>
                Code.Gamelet
              </Button>
              <Button href={'https://light-up.gamelet.online/'}>
                光影迷城
              </Button>
              <Button href={'https://poker99.gamelet.online/'}>
                童話99
              </Button>
              <Button href={'https://magile.gamelet.online/'}>
                魔法飛彈大作戰
              </Button>
              <Button title='Info' onClick={() => setOpenModal(true)}>
                <Info/>
              </Button>
              <Button title='Light/Dark Mode' onClick={() => setIsDarkMode(!isDarkMode)}>
                <Brightness7/>
              </Button>
            </ButtonGroup>
          </Toolbar>
        </AppBar>
        {!reopening && <ReadStuffPage/>}
      </Box>
      <InfoModal open={openModal} onClose={handleModalClose}/>
    </MuiThemeProvider>
  )
}

export default App
