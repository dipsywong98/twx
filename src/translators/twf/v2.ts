import PropTypes from 'prop-types'
import { Translator } from '../../type'

const propTypes = {
  foo: PropTypes.string.isRequired
}

const translator: Translator<typeof propTypes> = (actions, params) => ([...actions, {
  type: 'idk',
  data: {
    bar: params.foo
  }
}])

translator.propTypes = propTypes
