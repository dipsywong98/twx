import { ActionTranslator, TwfAct } from '../../../type'
import { markMissed, MissingStuffType, withCheckFields } from '../missingStuff'

const knowTypes = ['rotation']

interface TwfSetAI extends TwfAct{
  k: typeof knowTypes[number]
  v: any
  c: string
}

export const setAI: ActionTranslator = withCheckFields([
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
      markMissed({
        type: MissingStuffType.FIELD,
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
