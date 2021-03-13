import { Translator } from '../../../type'
import { addError, ValidationErrorType } from '../validationError'
import { PropTypes } from '../../../propTypes'

const knowTypes = ['rotation']

const propTypes = {
  k: PropTypes.oneOf(knowTypes).isRequired,
  v: PropTypes.any.isRequired,
  c: PropTypes.string.isRequired
}

type TwfSetAI = PropTypes.InferProps<typeof propTypes>

export const setAI: Translator<typeof propTypes> = ((cgActions, action) => {
  return ([
    ...cgActions,
    factory(action as TwfSetAI)
  ])
})

setAI.propTypes = propTypes

const factory = (action: TwfSetAI) => {
  switch (action.k) {
    case 'rotation':
      return buildRotation(action)
    default:
      addError({
        type: ValidationErrorType.UNKNOWN_FIELD,
        what: 'k:' + action.k,
        example: action
      })
      return {
        type: 'placeholderAction',
        data: action
      }
  }
}

const buildRotation = (action: TwfSetAI) => ({
  type: 'ActorFacing',
  data: {
    actorCode: action.c,
    targetType: 'degree',
    degree: action.v.toString()
  }
})
