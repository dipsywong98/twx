import { TwfEvent } from '../type'

interface CGEvent {
  id: string
  disabled: boolean
  folder: string
  startTime: number
  checkInterval: number
  repeats: number
  repeatInterval: number
  actions: unknown[]
  checks: unknown[]
  triggers: unknown[]
}

export const translateEvent = (eventName: string, event: TwfEvent): CGEvent => {
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
