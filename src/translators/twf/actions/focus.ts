import { Translator } from '../../../type'
import { getLocations } from '../utils/getLocations'
import { TwxPropTypes } from '../../../propTypes'

const propTypes = {
  lcs: TwxPropTypes.Locations
}

export const focus: Translator<typeof propTypes> = (cgActions, action) => ([
  ...cgActions, {
    type: 'CameraFocus',
    data: {
      focusType: 'loc',
      location: getLocations(action.lcs)[0],
      moveRate: 0.5,
      moveMax: 32,
      playerMatch: {
        skip: true
      }
    }
  }
])

focus.propTypes = propTypes
