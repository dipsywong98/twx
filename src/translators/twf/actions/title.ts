import { ActionTranslator } from '../../../type'
import { withCheckFields } from '../missingStuff'

export const title: ActionTranslator = withCheckFields([
  't', // text
  's' // size
])((cgActions, action) => ([
  ...cgActions, {
    'type': 'ActionTitle',
    'data': {
      'text': action.t,
      'size': action.s.toString(),
      'bold': true,
      'color': '#ffffff',
      'stroke': '#000000',
      'strokeThickness': 4,
      'direction': 'rtol',
      'shiftX': 0,
      'shiftY': -60,
      'duration': '2600',
      'delay': '0',
      'fadeinDuration': '300',
      'fadeoutDuration': '300',
      'wait': false
    }
  }
]))
