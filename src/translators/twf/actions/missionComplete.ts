import { Translator } from '../../../type'
import { TwxPropTypes } from '../../../propTypes'

const propTypes = {
  cps: TwxPropTypes.Camps
}

export const missionComplete: Translator<typeof propTypes> = (cgActions, action) => ([
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
            skydow: action.cps?.includes(0) ?? false,
            royal: action.cps?.includes(1) ?? false,
            third: action.cps?.includes(2) ?? false,
            otherCamp: action.cps?.includes(3) ?? false
          }
        }
      ]
    }
  }
])

missionComplete.propTypes= propTypes
