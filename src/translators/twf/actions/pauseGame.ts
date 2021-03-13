import { Translator } from '../../../type'

export const pauseGame: Translator = ((cgActions, action) => ([
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
