import { CgEvents } from '../../type'

export const emptyCgEvents = (): CgEvents => ({
  '$schema': 'https://code.gamelet.com/gassets/schema/events/v1',
  config: {
    stage: {
      width: 600,
      height: 500,
      backgroundColor: '#000000',
      resolutionPolicy: 'showAll',
      alignHorizontal: 'center',
      alignVertical: 'middle'
    },
    preload: {
      resourcesExclude: [],
      sources: []
    },
    configs: {
      TwilightWarsConfig: {
        title: '',
        serverConfig: {
          minPlayers: 1,
          supportSignin: true,
          mustLogin: true,
          allowGuest: true,
          supportMsgServer: true,
          gamezoneCode: 'mission',
          roomType: 'close',
          roomSize: 4
        },
        runGame: true,
        gameStartFadein: 'fadein',
        lives: 3,
        debugCamp: 'default',
        releaseCamp: 'ask',
        setInitFocus: false,
        initFocus: {
          x: '0',
          y: '0'
        },
        campOptions: {
          campOpSkydow: true,
          campOpRoyal: true,
          campOpThird: true
        },
        map: 'CG.TwilightWarsLib/default.twmap',
        maxAbilityLevel: 2,
        nextGameEnabled: true,
        disableNextGameOnMissionComplete: false,
        playDefaultMusic: true,
        useDefaultItems: false,
        useDefaultCampLocs: true,
        skydowLocs: [],
        royalLocs: [],
        thirdLocs: [],
        enabled: true
      }
    }
  },
  events: []
})
