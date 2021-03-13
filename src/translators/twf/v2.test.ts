import PropTypes from 'prop-types'
import { WeakValidationMap } from 'react'
import { checkPropTypes } from './validationError'

const has = Function.call.bind(Object.prototype.hasOwnProperty)




it('validator', () => {
  const props = {
    foo: '123',
    bar: '123'
  }

  const propTypes = {
    foo: PropTypes.string,
    zoo: PropTypes.string.isRequired
  }

  // Object.getPrototypeOf(console).error = function (...params: any) {
  //   console.log(params)
  // }

  const typeSpecs: WeakValidationMap<unknown> = propTypes
  checkPropTypes(typeSpecs, props, 'my-action')
})
