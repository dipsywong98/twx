import { Translator } from '../../../type'
import { PropTypes } from '../../../propTypes'

const propTypes = {
  t: PropTypes.string.isRequired, // text
  s: PropTypes.number.isRequired, // size
  du: PropTypes.number, // duration
  sy: PropTypes.number  // displacement y
}

export const title: Translator<typeof propTypes> = ((cgActions, action) => ([
  ...cgActions, {
    type: 'ActionTitle',
    data: {
      text: action.t,
      size: action.s?.toString() ?? '25',
      bold: true,
      color: '#ffffff',
      stroke: '#000000',
      strokeThickness: 4,
      direction: 'rtol',
      shiftX: 0,
      shiftY: action.sy ?? -60,
      duration: action.du?.toString() ?? '2600',
      delay: '0',
      fadeinDuration: '300',
      fadeoutDuration: '300',
      wait: false
    }
  }
]))

title.propTypes = propTypes
