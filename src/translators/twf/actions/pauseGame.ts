import { ActionTranslator } from '../../../type'
import { withCheckFields } from '../missingStuff'

export const pauseGame: ActionTranslator = withCheckFields([])((cgActions, action) => ([
  ...cgActions, {
    type: 'GamePause',
    data: {
      hideUI: true,
      maskUp: true,
      upHeight: 60,
      upColor: '#000000',
      maskBot: true,
      botHeight: 60,
      botColor: '#000000'
    }
  }
]))
