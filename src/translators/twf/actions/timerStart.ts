import { Translator } from '../../../type'
import { PropTypes } from '../../../propTypes'
import { v4 } from 'uuid'

const propTypes = {
  d: PropTypes.number.isRequired, // duration
  // r: idk what is this
}

export const timerStart: Translator<typeof propTypes> = ((cgActions, action) => ([
  ...cgActions, {
    "type": "TimerStart",
    "data": {
      timerCode: v4(),
      reset: true,
      duration: action.d.toString(),
      unit: "msec",
      show: true,
      showX: "{stage.width}/2",
      showY: "2",
      pauseWhenGamePaused: true
    }
  }
]))

timerStart.propTypes = propTypes
