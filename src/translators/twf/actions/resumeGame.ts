import { ActionTranslator } from '../../../type'
import { withCheckFields } from '../missingStuff'

export const resumeGame: ActionTranslator = withCheckFields([])((cgActions, action) => ([
  ...cgActions, {
    'type': 'GameResume',
    'data': {
      'focusBack': true
    }
  }
]))
