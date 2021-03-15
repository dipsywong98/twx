import { CgAction, Translator } from '../../../type'
import { addError, ValidationErrorType } from '../validationError'
import { PropTypes, TwxPropTypes } from '../../../propTypes'
import { getCamp, processCamps } from '../utils/getCamp'
import { v4 } from 'uuid'

const knownU = ['kills']

const killsVPropTypes = {
  c: TwxPropTypes.Camps.isRequired,
  t: PropTypes.number // total
}

const propTypes = {
  u: PropTypes.oneOf(knownU).isRequired,
  v: PropTypes.oneOfType([
    PropTypes.shape(killsVPropTypes)
  ]).isRequired,
}

type KillsV = PropTypes.InferProps<typeof killsVPropTypes>

interface TwfSetUI<T> {
  u: typeof knownU[number]
  v: T
}


export const showUI: Translator<typeof propTypes> = ((cgActions, action) => {
  return ([
    ...cgActions,
    ...factory(action as TwfSetUI<unknown>)
  ])
})

showUI.propTypes = propTypes

const factory = (action: TwfSetUI<unknown>): CgAction[] => {
  switch (action.u) {
    case 'kills':
      return buildKills(action as TwfSetUI<KillsV>)
    default:
      addError({
        type: ValidationErrorType.UNKNOWN_FIELD,
        what: 'u:' + action.u,
        example: action
      })
      return [{
        type: 'placeholderAction',
        data: action
      }]
  }
}


const buildKills = (action: TwfSetUI<KillsV>): CgAction[] => (
  action.v.c.map(camp => ({
    type: "ShowCounter",
    data: {
      counterCode: v4(),
      icon: getCamp(camp),
      bgColor: "#333333",
      alpha: "0.6",
      txtColor: "#ffffff",
      txtOverColor: "#00ff00",
      overString: "",
      counterType: "kills",
      killerMatch: {
        actorCodes: [],
        excludeActorCodes: [],
        brain: "all",
        camp: processCamps([camp])
      },
      deathMatch: {
        actorCodes: [],
        excludeActorCodes: [],
        brain: "all",
        camp: {
          campAll: true
        }
      },
      aliveMatch: {
        actorCodes: [],
        excludeActorCodes: [],
        brain: "all",
        camp: {
          campAll: true
        }
      },
      total: action.v.t?.toString() ?? "0",
      initCount: "keep",
      initCountValue: 0,
      countType: "up",
      positionType: "auto"
    }
  }))
)
