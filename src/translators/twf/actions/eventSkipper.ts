import { Translator } from '../../../type'
import { withCheckFields } from '../validationError'
import { PropTypes } from '../../../propTypes'

const propTypes = {
  d: PropTypes.any
}

export const eventSkipper: Translator = withCheckFields([
  'd' // duration, but will ignore it
])((cgActions, action) => ([
  {
    type: 'SkipEvent',
    data: {
      skipDurationType: 'auto',
      addDuration: '0'
    }
  },
  ...cgActions
]))

eventSkipper.propTypes = propTypes
