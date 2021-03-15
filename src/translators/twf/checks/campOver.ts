import { Translator } from '../../../type'
import { TwxPropTypes } from '../../../propTypes'
import { processCamps } from '../utils/getCamp'

const propTypes = {
  cps: TwxPropTypes.Camps.isRequired
}

export const campOver: Translator<typeof propTypes> = ((cgChecks, check) => [...cgChecks,
  {
    type: 'ActorCount',
    data: {
      countType: 'match',
      actorMatches: [
        {
          actorCodes: [],
          excludeActorCodes: [],
          brain: 'all',
          camp: processCamps(check.cps)
        }
      ],
      varname: 'count',
      operator: '==',
      value: '0',
      _logi: {
        _and_or: ''
      },
      _elseEventId: ''
    }
  }
])

campOver.propTypes = propTypes
