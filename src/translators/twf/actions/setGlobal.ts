import { CgAction, Translator } from '../../../type'
import { addError, ValidationErrorType } from '../validationError'
import { PropTypes } from '../../../propTypes'

const knownOps = ['+', '-', '*', '/', '%']
const knownRounds = ['ceil', 'floor']
const knownTypes = ['int', 'calc', 'randInt', 'str']

const StringOrNumber = PropTypes.oneOfType([PropTypes.string.isRequired, PropTypes.number.isRequired])
const Operator = PropTypes.oneOf(knownOps)
const Round = PropTypes.oneOf(knownRounds)
const IntVPropType = {
  v: StringOrNumber.isRequired
}
const CalcVPropType = {
  v0: StringOrNumber.isRequired,
  v1: StringOrNumber.isRequired,
  op: Operator.isRequired,
  ni: Round
}
const RandVPropType = {
  v0: StringOrNumber.isRequired,
  v1: StringOrNumber.isRequired,
}
const StrVPropType = {
  strs: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired
}
const propTypes = {
  vt: PropTypes.oneOf(knownTypes).isRequired,
  k: PropTypes.string.isRequired,
  v: PropTypes.oneOfType([
    IntVPropType,
    CalcVPropType,
    RandVPropType,
    StrVPropType
  ].map(v => PropTypes.shape(v)))
}

type IntV = PropTypes.InferProps<typeof IntVPropType>
type CalcV = PropTypes.InferProps<typeof CalcVPropType>
type RandV = PropTypes.InferProps<typeof RandVPropType>
type StrV = PropTypes.InferProps<typeof StrVPropType>
interface TwfSetGlobal<T> {
  vt: typeof knownTypes[number]
  k: string
  v: T
}
export const setGlobal: Translator<typeof propTypes> = ((cgActions, action) => ([
  ...cgActions,
  factory(action as unknown as TwfSetGlobal<unknown>)
]))
setGlobal.propTypes = propTypes

const wrapExpression = (expression: number | string): string => {
  if (typeof expression === 'string') {
    return `{${expression}}`
  } else {
    return `${expression}`
  }
}

const factory = (action: TwfSetGlobal<unknown>): CgAction => {
  switch (action.vt) {
    case 'int':
      return makeInt(action as TwfSetGlobal<IntV>)
    case 'calc':
      return makeCalc(action as TwfSetGlobal<CalcV>)
    case 'randInt':
      return makeRandInt(action as TwfSetGlobal<RandV>)
    case 'str':
      return makeStr(action as TwfSetGlobal<StrV>)
    default:
      addError({
        type: ValidationErrorType.UNKNOWN_FIELD,
        what: 'vt:' + action.vt,
        example: action
      })
      return {
        type: 'placeholderAction',
        data: action
      }
  }
}

const makeInt = (action: TwfSetGlobal<IntV>): CgAction => {
  return {
    type: 'SetGlobal',
    data: {
      key: action.k,
      valueType: 'integer',
      value: wrapExpression(action.v.v)
    }
  }
}

const makeCalc = (action: TwfSetGlobal<CalcV>): CgAction => {
  let value = `${wrapExpression(action.v.v0)}${action.v.op}${action.v.v1}`
  if (!knownOps.includes(action.v.op)) {
    addError({
      type: ValidationErrorType.UNKNOWN_FIELD,
      what: 'v.op' + action.v.op,
      example: action
    })
  }
  const ni = action.v.ni
  if (ni !== undefined) {
    if (ni === 'ceil') {
      value = `Math.ceil(${value})`
    } else if (ni === 'floor') {
      value = `Math.floor(${value})`
    } else if (ni !== '') {
      value = `Math.round(${value})`
    }
  }
  return {
    type: 'SetGlobal',
    data: {
      key: action.k,
      valueType: 'integer',
      value
    }
  }
}

const makeRandInt = (action: TwfSetGlobal<RandV>): CgAction => {
  const a = wrapExpression(action.v.v0)
  const b = wrapExpression(action.v.v1)
  return {
    type: 'SetGlobal',
    data: {
      key: action.k,
      valueType: 'integer',
      value: `Math.floor(Math.rand() * (${b} - ${a}) + ${a})`
    }
  }
}

const makeStr = (action: TwfSetGlobal<StrV>): CgAction => {
  return {
    type: 'SetGlobal',
    data: {
      key: action.k,
      valueType: 'string',
      value: action.v.strs[0]
    }
  }
}
