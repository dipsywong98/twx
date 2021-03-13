import { Translator, TwfAct } from '../../../type'
import { addError, ValidationErrorType, withCheckFields } from '../validationError'

const knowTypes = ['rotation']

interface TwfSetAI extends TwfAct{
  k: typeof knowTypes[number]
  v: any
  c: string
}

export const setAI: Translator = withCheckFields([
  'c', // actor code
  'v', // some value
  'k' // the ai what value
])((cgActions, action) => {
  return ([
    ...cgActions,
    factory(action as unknown as TwfSetAI)
  ])
})

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
