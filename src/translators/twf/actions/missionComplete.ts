import { ActionTranslator } from '../../../type'
import { withCheckFields } from '../missingStuff'

export const missionComplete: ActionTranslator = withCheckFields([
  'cps' // camps
])((cgActions, action) => ([
  ...cgActions, {
    type: 'MissionComplete',
    data: {
      targetGroup: 'some',
      actorMatches: [
        {
          actorCodes: [],
          excludeActorCodes: [],
          brain: 'all',
          camp: {
            campAll: false,
            skydow: action.cps.includes(0),
            royal: action.cps.includes(1),
            third: action.cps.includes(2),
            otherCamp: action.cps.includes(3)
          }
        }
      ]
    }
  }
]))
