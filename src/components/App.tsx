import React from 'react'
import { AppBar, Box, Button, ButtonGroup, Toolbar, Typography } from '@material-ui/core'
import { HashRouter, Route, Switch } from 'react-router-dom'
import { ReadTwfPage } from '../pages/ReadTwfPage'

function App () {
  return (
    <HashRouter>
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
            </ButtonGroup>
          </Toolbar>
        </AppBar>
        <Switch>
          <Route path="/">
            <ReadTwfPage/>
          </Route>
        </Switch>
      </Box>
    </HashRouter>
  )
}

export default App
