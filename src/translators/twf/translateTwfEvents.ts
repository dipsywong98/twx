import {
  ActionTranslator,
  CgAction,
  CgCheck,
  CgEvent,
  CgEvents,
  CgTrigger,
  CheckTranslator,
  TriggerTranslator,
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
import { markMissed, MissingStuffType } from './missingStuff'

const actionTranslators: Record<string, ActionTranslator> = rawActions
const triggerTranslators: Record<string, TriggerTranslator> = rawTriggers
const checkTranslators: Record<string, CheckTranslator> = rawChecks

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

export const translateTwfEvents = (inf: TwfInf, ini: TwfIni, map: TwfMap, roles: Record<string, TwfRo>, events: Record<string, TwfEvent>, musics: Record<string, TwfMusic>) => {
  const cgEvents: CgEvents = emptyCgEvents()
  cgEvents.events = Object.entries(events).map(([eventName, event]) => {
    const cgEvent = translateEvent(eventName, event)
    cgEvent.actions = event.act.reduce<CgAction[]>((cgActions, act) => {
      if (act.type in actionTranslators) {
        return actionTranslators[act.type](cgActions, act)
      } else {
        markMissed({
          type: MissingStuffType.ACTION_TYPE,
          what: act.type,
          example: act
        })
        return [...cgActions, { type: 'placeholderAction', data: act }]
      }
    }, [])
    cgEvent.checks = event.cks.filter(({ type }) => !(type in triggerTranslators)).reduce<CgCheck[]>((cgChecks, check) => {
      if (check.type in checkTranslators) {
        return checkTranslators[check.type](cgChecks, check)
      } else {
        markMissed({
          type: MissingStuffType.CHECK_TYPE,
          what: check.type,
          example: check
        })
        return [...cgChecks, { type: 'placeholderCheck', data: check }]
      }
    }, [])
    cgEvent.triggers = event.cks.filter(({ type }) => !(type in checkTranslators)).reduce<CgTrigger[]>((cgTriggers, check) => {
      if (check.type in triggerTranslators) {
        return triggerTranslators[check.type](cgTriggers, check)
      } else {
        return [...cgTriggers, { type: 'placeholderTrigger', data: check }]
      }
    }, [])
    return cgEvent
  })
  return cgEvents
}
