import { Translator } from '../../../type'
import { PropTypes } from '../../../propTypes'
import { processCode } from '../utils/processCdoe'
import { getWeapon } from '../utils/getWeapon'

const propTypes = {
  // s:1  // idk
  i: PropTypes.number,   // idk
  // d:1  // idk
  c: PropTypes.string.isRequired, // actor code
  w: PropTypes.number.isRequired  // what weapon
}

export const setWeapon: Translator<typeof propTypes> = ((cgActions, action) => ([
  ...cgActions, {
    type: 'EquipWeapon',
    data: {
      actorCode: processCode(action.c),
      weaponType: getWeapon(action.w),
      weaponIndex: action.i ?? 0,
      weaponDrop: true,
      itemEventCode: "",
      makeDefault: true,
      dropAtSameLoc: true,
      swap: true
    }
  }
]))

setWeapon.propTypes = propTypes
