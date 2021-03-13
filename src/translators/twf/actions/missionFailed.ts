import { Translator } from '../../../type'

export const missionFailed: Translator = ((cgActions, action) => ([
  ...cgActions,
  {
    type: 'MissionFail',
    data: {}
  }
]))
