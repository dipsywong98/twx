import { Translator } from '../../../type'
import { PropTypes } from '../../../propTypes'
import { processCode } from '../utils/processCdoe'

const propTypes = {
  e: PropTypes.number.isRequired,  // idk, maybe equip
  i: PropTypes.string.isRequired,   // name of the item
  c: PropTypes.string.isRequired, // actor code
}

export const equipItem: Translator<typeof propTypes> = ((cgActions, action) => ([
  ...cgActions, {
    "type": "EquipItem",
    "data": {
      "actorCode": processCode(action.c),
      "itemType": action.i,
      "equip": (action.e === 1).toString()
    }
  }
]))

equipItem.propTypes = propTypes
