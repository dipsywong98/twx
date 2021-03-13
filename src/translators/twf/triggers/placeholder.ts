import { Translator } from '../../../type'

export const placeholder: Translator = ((cgTriggers, check) => ([...cgTriggers, {
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
