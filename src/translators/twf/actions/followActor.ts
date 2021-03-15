import { Translator } from '../../../type'
import { PropTypes } from '../../../propTypes'
import { processCode } from '../utils/processCdoe'

const propTypes = {
  f: PropTypes.string.isRequired,
  c: PropTypes.string.isRequired
}

export const followActor: Translator<typeof propTypes> = ((cgActions, action) => ([
  ...cgActions, {
    type: 'ActorFollow',
    data: {
      actorCode: processCode(action.c),
      followType: 'actor',
      targetCode: processCode(action.f)
    }
  }
]))

followActor.propTypes = propTypes
