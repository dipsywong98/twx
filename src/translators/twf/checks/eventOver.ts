import { Translator } from '../../../type'
import { PropTypes } from '../../../propTypes'

const propTypes = {
  eid: PropTypes.string.isRequired
}

export const eventOver: Translator<typeof propTypes> =((cgTriggers, check) => ([...cgTriggers, {
  type: 'EventState',
  data: {
    eventId: check.eid,
    state: 'over',
    varname: 'instance',
    _logi: {
      _and_or: ''
    },
    _elseEventId: ''
  }
}]))

eventOver.propTypes = propTypes
