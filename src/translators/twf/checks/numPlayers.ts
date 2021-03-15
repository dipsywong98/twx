import { Translator } from '../../../type'
import { PropTypes, TwxPropTypes } from '../../../propTypes'
import { processCamps } from '../utils/getCamp'
import { operatorMap } from '../utils/operatorMap'

const propTypes = {
  cp: TwxPropTypes.Camps.isRequired,  // camp
  n: PropTypes.number.isRequired, // number
  o: PropTypes.oneOf(Object.keys(operatorMap)).isRequired
}

export const numPlayers: Translator<typeof propTypes> = ((cgChecks, check) => [...cgChecks,
  {
    type: 'ActorCount',
    data: {
      countType: 'match',
      actorMatches: [
        {
          actorCodes: [],
          excludeActorCodes: [],
          brain: 'player',
          camp: processCamps(check.cp)
        }
      ],
      varname: 'count',
      operator: operatorMap[check.o],
      value: check.n,
      _logi: {
        _and_or: ''
      },
      _elseEventId: ''
    }
  }
])

numPlayers.propTypes = propTypes
