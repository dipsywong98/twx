import { ActionTranslator } from '../../../type'
import { withCheckFields } from '../missingStuff'

/**
 * lcs[{lc: '\d+,\d+'}]
 */

export const playSound: ActionTranslator = withCheckFields([
  // 'r', // repeat, not handled yet
  // 'rt', // repeat time, not handled yet
  's' // what sound
])((cgActions, action) => ([
  ...cgActions,
  {
    type: 'PlaySound',
    data: {
      alias: `TwilightWarsLib.sounds1/twilight_wars_sound_effects/${action.s}.mp3`,
      soundId: '',
      volume: '1',
      fadeDuration: '0'
    }
  }
]))
