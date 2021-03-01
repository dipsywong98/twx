import { CgTwilightWarsConfig, TwfEvent, TwfInf, TwfIni, TwfMap, TwfMusic, TwfRo } from '../../type'
import { getLocation } from './utils/getLocations'

export const translateConfig = (inf: TwfInf, ini: TwfIni, map: TwfMap, roles: Record<string, TwfRo>, events: Record<string, TwfEvent>, musics: Record<string, TwfMusic>): CgTwilightWarsConfig => {
  return {
    title: inf.n,
    serverConfig: {
      minPlayers: inf.minp,
      supportSignin: true,
      mustLogin: true,
      allowGuest: true,
      supportMsgServer: true,
      gamezoneCode: inf.n,
      roomType: 'close',
      roomSize: inf.maxp
    },
    runGame: true,
    gameStartFadein: 'fadein',
    lives: inf.ml ?? 3,
    debugCamp: 'default',
    releaseCamp: 'ask',
    setInitFocus: ini.ifus !== undefined,
    initFocus: getLocation(ini.ifus, {
      x: '0',
      y: '0'
    }),
    campOptions: {
      campOpSkydow: inf.cs.includes(0),
      campOpRoyal: inf.cs.includes(1),
      campOpThird: inf.cs.includes(2)
    },
    map: `CG.twf_util/${map.n ?? map.o}.twmap`,
    maxAbilityLevel: inf.ab,
    nextGameEnabled: true,
    disableNextGameOnMissionComplete: false,
    playDefaultMusic: true,
    useDefaultItems: false,
    useDefaultCampLocs: (ini.iclm[0].length + ini.iclm[1].length + ini.iclm[2].length) > 1,
    skydowLocs: ini.iclm[0].map(s => getLocation(s)),
    royalLocs: ini.iclm[1].map(s => getLocation(s)),
    thirdLocs: ini.iclm[2].map(s => getLocation(s)),
    enabled: true
  }
}
