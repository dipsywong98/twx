import { ActionTranslator } from '../../../type'
import { withCheckFields } from '../missingStuff'
import { getWeapon } from '../utils/getWeapon'
import { getCamp } from '../utils/getCamp'
import { getLocations } from '../utils/getLocations'

interface TwfAddActor {
  v: number   // vision(?
  cp: number  // camp
  w: number   // weight(?
  w0: number   // weapon
  w1: number   // weapon
  r: number   // rotation
  pts: unknown[]  // dont know
  hp: number  // hp
  n: string
  ro: {
    sr: number  // system role (?
  }
  g: number // group number
  lcs: Array<{ lc: string }> // locations, lc in '\d+,\d+' format
  c: string   // character code
}

export const addActor: ActionTranslator = withCheckFields([
  'v',
  'cp',
  'w',
  'w0',
  'w1',
  'r',
  'pts',
  'n',
  'hp',
  'ro',
  'g',
  'lcs',
  'c'
])((cgActions, action) => {
  const a = action as unknown as TwfAddActor
  const [{ x, y }] = getLocations(a.lcs)
  return [...cgActions, {
    type: 'AddActor',
    data: {
      actorCode: a.c,
      name: a.n,
      role: {
        dr: a.ro.sr
      },
      weapon0: {
        w0Type: getWeapon(a.w0)
      },
      weapon1: {
        w1Type: getWeapon(a.w1)
      },
      camp: getCamp(a.cp),
      group: a.g?.toString() ?? '0',
      location: {
        x: x,
        y: y,
        range: '0'
      },
      rotation: a.r?.toString() ?? '0',
      idleRotate: true,
      maxhp: a.hp?.toString() ?? '100',
      manaPower: '0',
      lives: '1',
      maxAbilityLevel: 1,
      weight: a.w?.toString() ?? '4',
      strength: '1',
      vision: a.v.toString() ?? '300',
      range: '10000',
      score: 10,
      distractWhenHit: true,
      bornDelayDuration: '0',
      bornDuration: '1000',
      bornLockDuration: '1000',
      localVarname: 'actor',
      globalVarname: ''
    }
  }]
})
