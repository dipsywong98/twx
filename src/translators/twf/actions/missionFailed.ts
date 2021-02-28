import { ActionTranslator } from '../../../type'
import { withCheckFields } from '../missingStuff'

export const missionFailed: ActionTranslator = withCheckFields([
])( (cgActions, action) => ([
  ...cgActions,
  {
    "type": "MissionFail",
    "data": {}
  }
]))
