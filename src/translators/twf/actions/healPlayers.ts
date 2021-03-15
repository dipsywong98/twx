import { Translator } from '../../../type'
import { PropTypes, TwxPropTypes } from '../../../propTypes'
import { processCamps } from '../utils/getCamp'

const propTypes = {
  h: PropTypes.number.isRequired, // amount to heal
  c: TwxPropTypes.Camps.isRequired // which camps to heal
  //ht: 0 // idk what is this , guess hit type
}

export const healPlayers: Translator<typeof propTypes> = ((cgActions, action) => ([
  ...cgActions, {
    type: 'MassDeltaActorsHp',
    data: {
      actorMatches: [
        {
          actorCodes: [],
          excludeActorCodes: [],
          brain: 'player',
          camp: processCamps(action.c)
        }
      ],
      hp: action.h.toString(),
      deltaType: 'heal',
      casterCode: '',
      damageType: {
        value: 'physical'
      }
    }
  }
]))

healPlayers.propTypes = propTypes
