import { ActionTranslator } from '../../../type'
import { withCheckFields } from '../missingStuff'

export const goFindActor: ActionTranslator = withCheckFields([
  'c' // actor code
])((cgActions, action) => ([
  ...cgActions, {
    type: 'GoFindTarget',
    data: {
      actorCode: action.c,
      targetType: 'actor',
      actorFriendly: 'enemy',
      actorDistance: -1,
      clean: true
    }
  }
]))
