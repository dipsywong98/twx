import { Translator } from '../../../type'

export const resumeGame: Translator = ((cgActions, action) => ([
  ...cgActions, {
    type: 'GameResume',
    data: {
      focusBack: true
    }
  }
]))
