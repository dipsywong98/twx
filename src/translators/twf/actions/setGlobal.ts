import { ActionTranslator, CgAction } from '../../../type'
import { markMissed, MissingStuffType, withCheckFields } from '../missingStuff'

const knownTypes = ['int', 'calc', 'randInt', 'str']
const knownOps = ['+', '-', '*', '/', '%']
const knownRound = ['ceil', 'floor']

interface TwfSetGlobal<T extends IntV | CalcV | RandV | StrV | unknown> {
  vt: typeof knownTypes[number]
  k: string
  v: T
}

interface IntV {
  v: number | string
}

interface CalcV {
  v0: number | string
  v1: number | string
  op: typeof knownOps[number]
  ni?: typeof knownRound[number]
}

interface RandV {
  v0: number | string
  v1: number | string
}

interface StrV {
  strs: string[]
}


export const setGlobal: ActionTranslator = withCheckFields([
  'vt', // type: int|calc
  'k',  // name
  // 'd',  // idk what is this
  'v'

])((cgActions, action) => ([
  ...cgActions,
  factory(action as unknown as TwfSetGlobal<unknown>)
]))

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
      markMissed({
        type: MissingStuffType.FIELD,
        what: 'vt:'+action.vt,
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
  if(!knownOps.includes(action.v.op)) {
    markMissed({
      type: MissingStuffType.FIELD,
      what: 'v.op'+action.v.op,
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
