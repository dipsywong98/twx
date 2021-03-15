import { Translator } from '../../../type'
import { PropTypes } from '../../../propTypes'
import { processCode } from '../utils/processCdoe'

const propTypes = {
  h: PropTypes.number.isRequired, // amount to heal
  c: PropTypes.string.isRequired // who to heal
  //ht: 0 // idk what is this, guess hit type
}

export const healActor: Translator<typeof propTypes> = ((cgActions, action) => ([
  ...cgActions, {
    type: 'DeltaHp',
    data: {
      actorCode: processCode(action.c),
      deltaType: 'heal',
      hp: action.h.toString(),
      casterCode: '',
      damageType: {
        value: 'physical'
      }
    }
  }
]))

healActor.propTypes = propTypes
