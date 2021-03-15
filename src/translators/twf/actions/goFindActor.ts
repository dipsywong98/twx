import { Translator } from '../../../type'
import { PropTypes } from '../../../propTypes'
import { processCode } from '../utils/processCdoe'

const propTypes = {
  c: PropTypes.string.isRequired
}

export const goFindActor: Translator<typeof propTypes> = ((cgActions, action) => ([
  ...cgActions, {
    type: 'GoFindTarget',
    data: {
      actorCode: processCode(action.c),
      targetType: 'actor',
      actorFriendly: 'enemy',
      actorDistance: -1,
      clean: true
    }
  }
]))

goFindActor.propTypes = propTypes
