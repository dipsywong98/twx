import { Translator } from '../../../type'
import { PropTypes } from '../../../propTypes'

const propTypes = {
  // 'r', // repeat, not handled yet
  // 'rt', // repeat time, not handled yet
  's': PropTypes.string.isRequired
}

export const playSound: Translator<typeof propTypes> = ((cgActions, action) => ([
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

playSound.propTypes = propTypes
