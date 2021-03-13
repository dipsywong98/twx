import { Translator } from '../../../type'
import { PropTypes } from '../../../propTypes'

const propTypes = {
  f: PropTypes.string.isRequired,
  c: PropTypes.string.isRequired
}

export const followActor: Translator<typeof propTypes> = ((cgActions, action) => ([
  ...cgActions, {
    type: 'ActorFollow',
    data: {
      actorCode: action.c,
      followType: 'actor',
      targetCode: action.f
    }
  }
]))
