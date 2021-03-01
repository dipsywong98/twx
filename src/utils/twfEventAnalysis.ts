import { TwfAct, TwfCheck, TwfEvent } from '../type'

export const twfEventAnalysis = (events: TwfEvent[]): {checkExamples: unknown, actionExamples: unknown} => {
  const checkExamples: Record<string, TwfCheck[]> = {}
  const actionExamples: Record<string, TwfAct[]> = {}
  events.forEach(event => {
    try {
      event.cks.forEach(check => {
        if (!(check.type in checkExamples)) {
          checkExamples[check.type] = [check]
        } else {
          checkExamples[check.type].push(check)
        }
      })
      event.act.forEach(act => {
        if (!(act.type in actionExamples)) {
          actionExamples[act.type] = [act]
        } else {
          actionExamples[act.type].push(act)
        }
      })
    } catch (e) {
      console.log(event, e)
    }
  })
  return {
    checkExamples,
    actionExamples
  }
}
