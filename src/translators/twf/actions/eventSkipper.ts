import { ActionTranslator } from '../../../type'
import { withCheckFields } from '../missingStuff'

/**
 * lcs[{lc: '\d+,\d+'}]
 */

export const eventSkipper: ActionTranslator = withCheckFields([
  'd' // duration, but will ignore it
])( (cgActions, action) => ([
  {
    "type": "SkipEvent",
    "data": {
      "skipDurationType": "auto",
      "addDuration": "0"
    }
  },
  ...cgActions
]))
