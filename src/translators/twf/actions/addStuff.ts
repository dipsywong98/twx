import { Translator } from '../../../type'
import { PropTypes, TwxPropTypes } from '../../../propTypes'
import { getWeapon } from '../utils/getWeapon'
import { getLocations } from '../utils/getLocations'
import { v4 } from 'uuid'

const propTypes = {
  s: PropTypes.number.isRequired, // what stuff to add
  lo: PropTypes.number, // magazine reload time
  lcs: TwxPropTypes.Locations.isRequired  // locations
}

export const addStuff: Translator<typeof propTypes> = ((cgActions, action) => ([
  ...cgActions, {
    type: 'AddStuff',
    data: {
      itemCode: v4(),
      itemType: getWeapon(action.s),
      loop: true,
      loopInterval: action.lo?.toString() ?? '10000',
      location: getLocations(action.lcs)[0] ?? {
        x: '0',
        y: '0',
        range: '0'
      },
      rotation: 0,
      localVarname: 'item'
    }
  }
]))

addStuff.propTypes = propTypes
