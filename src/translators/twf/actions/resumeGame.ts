import { Translator } from '../../../type'
import { withCheckFields } from '../validationError'

export const resumeGame: Translator = withCheckFields([])((cgActions, action) => ([
  ...cgActions, {
    type: 'GameResume',
    data: {
      focusBack: true
    }
  }
]))
