import {
  CgAction,
  CgCheck,
  CgEvent,
  CgEvents,
  CgTrigger,
  Translator,
  TwfEvent,
  TwfInf,
  TwfIni,
  TwfMap,
  TwfMusic,
  TwfRo
} from '../../type'
import { emptyCgEvents } from './emptyCgEvents'
import * as rawActions from './actions'
import * as rawTriggers from './triggers'
import * as rawChecks from './checks'
import { addError, checkPropTypes, ValidationErrorType } from './validationError'
import { translateConfig } from './translateConfig'

// @ts-ignore
const actionTranslators: Record<string, Translator> = rawActions
const triggerTranslators: Record<string, Translator<unknown, CgTrigger>> = rawTriggers
// @ts-ignore
const checkTranslators: Record<string, Translator> = rawChecks

export const translateEvent = (eventName: string, event: TwfEvent): CgEvent => {
  return {
    id: eventName,
    disabled: false,
    folder: event.tag?.split(',')?.[0] ?? '',
    startTime: event.itime ?? 0,
    checkInterval: 10,
    repeats: event.rep ?? 0,
    repeatInterval: event.repInt ?? 0,
    actions: [],
    checks: [],
    triggers: []
  }
}

export const translateTwfEvents = (inf: TwfInf, ini: TwfIni, map: TwfMap, roles: Record<string, TwfRo>, events: Record<string, TwfEvent>, musics: Record<string, TwfMusic>): CgEvents => {
  const cgEvents: CgEvents = emptyCgEvents()
  cgEvents.config.configs.TwilightWarsConfig = translateConfig(inf, ini, map, roles, events, musics)
  cgEvents.events = Object.entries(events).map(([eventName, event]) => {
    const cgEvent = translateEvent(eventName, event)
    cgEvent.actions = event.act.reduce<CgAction[]>((cgActions, act) => {
      if (act.type in actionTranslators) {
        const Translator = actionTranslators[act.type]
        checkPropTypes(Translator.propTypes ?? {}, act, act.type)
        return Translator(cgActions, act)
      } else {
        addError({
          type: ValidationErrorType.UNKNOWN_ACTION,
          what: act.type,
          example: act
        })
        return [...cgActions, { type: 'placeholderAction', data: act }]
      }
    }, [])
    cgEvent.actions.unshift({
      type: 'Wait',
      data: {
        duration: event.delay?.toString() ?? '0'
      }
    })
    cgEvent.checks = event.cks.filter(({ type }) => !(type in triggerTranslators)).reduce<CgCheck[]>((cgChecks, check) => {
      if (check.type in checkTranslators) {
        const checkTranslator = checkTranslators[check.type]
        checkPropTypes(checkTranslator.propTypes ?? {}, check, check.type)
        return checkTranslator(cgChecks, check)
      } else {
        addError({
          type: ValidationErrorType.UNKNOWN_CHECK,
          what: check.type,
          example: check
        })
        return [...cgChecks, { type: 'placeholderCheck', data: check }]
      }
    }, [])
    // cgEvent.triggers = event.cks.filter(({ type }) => !(type in checkTranslators)).reduce<CgTrigger[]>((cgTriggers, check) => {
    //   if (check.type in triggerTranslators) {
    //     return triggerTranslators[check.type](cgTriggers, check)
    //   } else {
    //     return [...cgTriggers, { type: 'placeholderTrigger', data: check }]
    //   }
    // }, [])
    return cgEvent
  })
  return cgEvents
}
