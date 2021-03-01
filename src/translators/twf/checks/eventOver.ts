import { CheckTranslator } from '../../../type'
import { withCheckFields } from '../missingStuff'

export const eventOver: CheckTranslator = withCheckFields([
  'eid' // event id
])((cgTriggers, check) => ([...cgTriggers, {
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
