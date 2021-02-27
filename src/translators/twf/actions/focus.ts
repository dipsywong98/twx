import { ActionTranslator } from '../../../type'
import { withCheckFields } from '../missingStuff'
import { getLocations } from '../utils/getLocations'

/**
 * lcs[{lc: '\d+,\d+'}]
 */

export const focus: ActionTranslator = withCheckFields([
  'lcs'
])( (cgActions, action) => ([
  ...cgActions, {
    "type": "CameraFocus",
    "data": {
      "focusType": "loc",
      "location": getLocations(action.lcs)[0],
      "moveRate": 0.5,
      "moveMax": 32,
      "playerMatch": {
        "skip": true
      }
    }
  }
]))
