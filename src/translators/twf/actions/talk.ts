import { Translator } from '../../../type'
import { PropTypes } from '../../../propTypes'
import { processCode } from '../utils/processCdoe'

const propTypes = {
  sp: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired, // what to say
  du: PropTypes.number.isRequired, // duration
  dy: PropTypes.number.isRequired, // delay
  c: PropTypes.string.isRequired // actor code
}

export const talk: Translator<typeof propTypes> = ((cgActions, action) => {
  const [speech, ...speeches] = action.sp
  const cgAction = {
    type: 'ActorTalkDelayed',
    data: {
      timeout: action.dy,
      actorCode: processCode(action.c),
      speech,
      cleanTalk: true,
      randSpeech: speeches.length > 0,
      speeches,
      duration: action.du.toString(),
      wait: false
    }
  }
  return [...cgActions, cgAction]
})

talk.propTypes = propTypes
