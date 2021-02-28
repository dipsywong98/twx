import { ActionTranslator } from '../../../type'
import { withCheckFields } from '../missingStuff'
import { getLocations } from '../utils/getLocations'

export const goto: ActionTranslator = withCheckFields([
  'c',  // actor code
  // 'tc',  //dont know what is this
  'lcs' // locations
])( (cgActions, action) => ([
  ...cgActions,
  {
    "type": "ActorGoto",
    "data": {
      "actorCode": action.c,
      "targetType": "locs",
      "locs": getLocations(action.lcs)
    }
  }
]))
