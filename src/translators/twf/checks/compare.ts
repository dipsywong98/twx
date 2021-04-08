import { PropTypes } from '../../../propTypes'
import { operatorMap } from '../utils/operatorMap'

const knownK = ['hp']
const knownOp = Object.keys(operatorMap)

const propTypes = {
  k: PropTypes.oneOf(knownK).isRequired,
  v: PropTypes.number.isRequired,
  op: PropTypes.oneOf(knownOp).isRequired,
  vs: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired
}

// export const compare: Translator<typeof propTypes> = ((cgTriggers, check) => ([...cgTriggers, {
  // type: 'EventState',
  // data: {
  //   eventId: check.eid,
  //   state: 'over',
  //   varname: 'instance',
  //   _logi: {
  //     _and_or: ''
  //   },
  //   _elseEventId: ''
  // }
// }]))
//
// compare.propTypes = propTypes
