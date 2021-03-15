import { Translator } from '../../../type'
import { getWeapon } from '../utils/getWeapon'
import { getCamp } from '../utils/getCamp'
import { getLocations } from '../utils/getLocations'
import { PropTypes, TwxPropTypes } from '../../../propTypes'
import { processCode } from '../utils/processCdoe'

const propTypes = {
  v: PropTypes.number.isRequired,  // vision
  cp: TwxPropTypes.Camp.isRequired, // camp
  w: PropTypes.number.isRequired, // weight(?
  w0: PropTypes.number, // weapon
  w1: PropTypes.number, // weapon
  r: PropTypes.number, // rotation
  hp: PropTypes.number.isRequired, // hp
  n: PropTypes.string.isRequired, // name
  ro: PropTypes.shape({
    sr: PropTypes.number // system role (?
  }).isRequired,
  g: PropTypes.number.isRequired, // group number
  lcs: TwxPropTypes.Locations, // locations, lc in '\d+,\d+' format
  c: PropTypes.string.isRequired, // character code
  rg: PropTypes.number,
  vn: PropTypes.string
}

export const addActor: Translator<typeof propTypes> = ((cgActions, action) => {
  const [{ x, y }] = getLocations(action.lcs)
  return [...cgActions, {
    type: 'AddActor',
    data: {
      actorCode: action.c,
      name: action.n,
      role: {
        dr: action.ro.sr
      },
      weapon0: {
        w0Type: getWeapon(action.w0)
      },
      weapon1: {
        w1Type: getWeapon(action.w1)
      },
      camp: getCamp(action.cp),
      group: action.g?.toString() ?? '0',
      location: {
        x: x,
        y: y,
        range: '0'
      },
      rotation: action.r?.toString() ?? '0',
      idleRotate: true,
      maxhp: action.hp?.toString() ?? '100',
      manaPower: '0',
      lives: '1',
      maxAbilityLevel: 1,
      weight: action.w?.toString() ?? '4',
      strength: '1',
      vision: action.v.toString() ?? '300',
      range: action.rg?.toString() ?? '10000',
      score: 10,
      distractWhenHit: true,
      bornDelayDuration: '0',
      bornDuration: '1000',
      bornLockDuration: '1000',
      localVarname: 'actor',
      globalVarname: processCode(action.vn)
    }
  }]
})

addActor.propTypes = propTypes
