import { Translator } from '../../../type'
import { addError, ValidationErrorType } from '../validationError'
import { PropTypes } from '../../../propTypes'

const knowTypes = ['zoom']

const zoomVPropTypes = {
  s: PropTypes.number.isRequired
}

const propTypes = {
  k: PropTypes.oneOf(knowTypes).isRequired,
  v: PropTypes.oneOfType([
    PropTypes.shape(zoomVPropTypes)
  ]).isRequired
}

type TwfScreenEffect = PropTypes.InferProps<typeof propTypes>

export const screenEffect: Translator<typeof propTypes> = ((cgActions, action) => {
  return ([
    ...cgActions,
    factory(action as TwfScreenEffect)
  ])
})

screenEffect.propTypes = propTypes

const factory = (action: TwfScreenEffect) => {
  switch (action.k) {
    case 'zoom':
      return zoom(action)
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

const zoom = (action: TwfScreenEffect) => ({
  type: 'GlobalCameraZoom',
  data: {
    zoom: action.v.s,
  }
})
