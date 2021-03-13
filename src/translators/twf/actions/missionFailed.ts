import { Translator } from '../../../type'
import { withCheckFields } from '../validationError'

export const missionFailed: Translator = withCheckFields([
])((cgActions, action) => ([
  ...cgActions,
  {
    type: 'MissionFail',
    data: {}
  }
]))
