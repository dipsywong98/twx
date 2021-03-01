import { CheckTranslator } from '../../../type'
import { withCheckFields } from '../missingStuff'

// {"type":"campOver","cps":[0,1]}
export const campOver: CheckTranslator = withCheckFields([
  'cps' // camps
])((cgChecks, check) => [...cgChecks,
  {
    type: 'ActorCount',
    data: {
      countType: 'match',
      actorMatches: [
        {
          actorCodes: [],
          excludeActorCodes: [],
          brain: 'all',
          camp: {
            campAll: false,
            skydow: check.cps.includes(0),
            royal: check.cps.includes(1),
            third: check.cps.includes(2),
            otherCamp: check.cps.includes(3)
          }
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
]
)
