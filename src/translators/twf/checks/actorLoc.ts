import { CheckTranslator } from '../../../type'
import { withCheckFields } from '../missingStuff'
import { getLocations } from '../utils/getLocations'

export const actorLoc: CheckTranslator = withCheckFields([
  'c', // actor code
  // 'cv',  // idk what is this
  'lcs' // locations
])((cgChecks, check) => [
  ...cgChecks,
    {
      "type": "ActorLoc",
      "data": {
        "actorCode": check.c,
        "locs": getLocations(check.lcs),
        "_logi": {
          "_and_or": ""
        },
        "_elseEventId": ""
      }
    }
]
)
