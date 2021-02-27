import { ActionTranslator } from '../../../type'
import { withCheckFields } from '../missingStuff'

export const followActor: ActionTranslator = withCheckFields([
  'f', // c follow f
  'c' // actor code
])( (cgActions, action) => ([
  ...cgActions, {
    "type": "ActorFollow",
    "data": {
      "actorCode": action.c,
      "followType": "actor",
      "targetCode": action.f
    }
  }
]))
