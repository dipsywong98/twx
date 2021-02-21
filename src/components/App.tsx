import React, { useState } from 'react'
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
import { HashRouter } from 'react-router-dom'
import './App.css'
import { Brightness7 } from '@material-ui/icons'
import { ReadStuffPage } from '../pages/ReadStuffPage'

const darkTheme = createMuiTheme({
  palette: {
    type: 'dark',
  },
});

const lightTheme = createMuiTheme({
  palette: {
    type: 'light',
  },
});

function App () {
  const [isDarkMode, setIsDarkMode] = useState(useMediaQuery('(prefers-color-scheme: dark)'))
  return (
    <MuiThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <CssBaseline/>
      <HashRouter basename={process.env.PUBLIC_URL}>
        <Box flexDirection='column' style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, display: 'flex' }}>
          <AppBar position="static">
            <Toolbar style={{ display: 'flex', justifyContent: 'space-between' }}>
              <Typography variant="h6">
                同人陣讀檔器
              </Typography>
              <ButtonGroup variant='text' color='inherit'>
                <Button href={'//dipsy.me/twmap/'}>
                  舊讀檔器(twf,twm,twr,var,sav)
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
                <Button title='Light/Dark Mode' onClick={() => setIsDarkMode(!isDarkMode)}>
                  <Brightness7 />
                </Button>
              </ButtonGroup>
            </Toolbar>
          </AppBar>
          <ReadStuffPage />
        </Box>
      </HashRouter>
    </MuiThemeProvider>
  )
}

export default App
