import { Translator, TwfAct, TwfCheck } from '../../type'

export enum MissingStuffType {
  ACTION_TYPE = 'Action Type',
  CHECK_TYPE = 'Check Type',
  FIELD = 'Field',
  WEAPON = 'Weapon'
}

export interface MissingStuff {
  type: MissingStuffType
  what: string // miss what field or what action/check
  where?: string // which action/check is missing field or event
  example?: any // the whole action/check
}

const missStore: MissingStuff[] = []

export const clearMiss = (): void => {
  missStore.splice(0, missStore.length)
}

export const markMissed = (miss: MissingStuff): void => {
  if (missStore.findIndex(({ type, what, where }) => type === miss.type && what === miss.what && where === miss.where) === -1) {
    missStore.push(miss)
  }
}

export const checkMissed = (knownFields: string[], target: TwfCheck&TwfAct): void => {
  Object.keys(target).forEach(k => {
    if (!knownFields.includes(k) && k !== 'type') {
      markMissed({
        type: MissingStuffType.FIELD,
        what: k,
        where: target.type,
        example: target
      })
    }
  })
}

export const withCheckFields = (knownFields: string[]) => (translator: Translator): Translator => {
  return (cgStuffs, twfStuff) => {
    checkMissed(knownFields, twfStuff as TwfAct)
    return translator(cgStuffs, twfStuff)
  }
}

export const getMissed = (): MissingStuff[] => missStore.sort((a, b) => a.type.localeCompare(b.type))
