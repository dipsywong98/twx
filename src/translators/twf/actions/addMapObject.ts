import { Translator } from '../../../type'
import { PropTypes, TwxPropTypes } from '../../../propTypes'
import { getLocationsAlt } from '../utils/getLocations'
import { v4 } from 'uuid'

const propTypes = {
  //a: PropTypes.number, // idk what is this
  c: PropTypes.string.isRequired, // what kind of object
  lcs: TwxPropTypes.Locations.isRequired  // locations
}

export const addMapObject: Translator<typeof propTypes> = ((cgActions, action) => ([
  ...cgActions, {
    type: 'MapStaticObject',
    data: {
      mapStaticObjectCode: v4(),
      add: 'add',
      staticObjectType: {
        category: 'object',
        object: action.c
      },
      locations: getLocationsAlt(action.lcs),
      regions: [],
      exRegions: [],
      duration: '5000',
      disabled: true
    }
  }
]))

addMapObject.propTypes = propTypes
