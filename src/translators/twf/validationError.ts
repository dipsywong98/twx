import { WeakValidationMap } from 'react'

let loggedTypeFailures: Record<string, boolean> = {}

export enum ValidationErrorType {
  UNKNOWN_ACTION = 'Unknown Action Type',
  UNKNOWN_CHECK = 'Unknown Check Type',
  UNKNOWN_FIELD = 'Unknown Field',
  UNKNOWN_WEAPON = 'Unknown Weapon',
  WRONG_FIELD_TYPE = 'Type Check',
  TWX_MISTAKE = 'Twx Mistake'
}

export interface ValidationError {
  type: ValidationErrorType
  what: string // miss what field or what action/check
  where?: string // which action/check is missing field or event
  example?: any // the whole action/check
  message?: string
}

const missStore: ValidationError[] = []

export const clearMiss = (): void => {
  loggedTypeFailures = {}
  missStore.splice(0, missStore.length)
}

export const addError = (miss: ValidationError): void => {
  if (missStore.findIndex(({
                             type,
                             what,
                             where
                           }) => type === miss.type && what === miss.what && where === miss.where) === -1) {
    missStore.push(miss)
  }
}

const printWarning = function (text: string) {
  if (text in loggedTypeFailures) {
    return
  }
  loggedTypeFailures[text] = true
  var message = 'Warning: ' + text
  if (typeof console !== 'undefined') {
    console.log(`%c${ message }`, 'color: red;')
  }
}

export function checkPropTypes (typeSpecs: WeakValidationMap<Record<string, unknown>>, values: Record<string, unknown>, name: string): ValidationError[] {
  const missings: ValidationError[] = []
  for (let valueKey in values) {
    if (!typeSpecs.hasOwnProperty(valueKey) && valueKey !== 'type') {
      printWarning(`Failed ${name}: unknown field ${valueKey} in ${name}`)
      addError({
        example: values,
        message: 'unknown attribute',
        type: ValidationErrorType.UNKNOWN_FIELD,
        what: valueKey,
        where: name
      })
    }
  }
  for (let typeSpecName in typeSpecs) {
    if (typeSpecs.hasOwnProperty(typeSpecName)) {
      let error
      try {
        if (typeof typeSpecs[typeSpecName] !== 'function') {
          let err = Error(
            'Attribute' + ': ' + name + ' type `' + typeSpecName + '` is invalid; ' +
            'it must be a function, usually from the `prop-types` package, but received `' + typeof typeSpecs[typeSpecName] + '`.'
          )
          err.name = 'Invariant Violation'
          throw err
        }
        // @ts-ignore
        error = typeSpecs[typeSpecName]?.(values, typeSpecName, name, 'attribute', null, 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED')
      } catch (ex) {
        error = ex
      }
      if (error && !(error instanceof Error)) {
        printWarning(
          'Attribute' + ': type specification of ' +
          name + ' `' + typeSpecName + '` is invalid; the type checker ' +
          'function must return `null` or an `Error` but returned a ' + typeof error + '. ' +
          'You may have forgotten to pass an argument to the type checker ' +
          'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' +
          'shape all require an argument).'
        )
      }
      if (error instanceof Error) {
        addError({
          example: values,
          message: error.message,
          type: ValidationErrorType.WRONG_FIELD_TYPE,
          what: typeSpecName,
          where: name
        })
        printWarning(
          'Failed ' + name + ' type: ' + error.message
        )
      }
    }
  }
  return missings
}

export const getValidationErrors = (): ValidationError[] => missStore.sort((a, b) => a.type.localeCompare(b.type))
