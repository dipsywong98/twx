import { Translator } from '../../../type'
import { PropTypes } from '../../../propTypes'

const propTypes = {
  d: PropTypes.any
}

export const eventSkipper: Translator = ((cgActions, action) => ([
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
