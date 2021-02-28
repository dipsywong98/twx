import { ActionTranslator, CgAction, TwfAct } from '../../../type'
import { withCheckFields } from '../missingStuff'

// eslint-disable-next-line @typescript-eslint/no-unused-vars
interface TwfTalk extends TwfAct {
  type: 'talk'
  sp: string[]  // what to say
  du: number // duration
  dy: number // delay
  c: string // actor code
}

interface CGTalk extends CgAction{
  type: string
  data: {
    timeout: number
    actorCode: string
    cleanTalk: boolean
    speech: string
    randSpeech?: boolean
    speeches?: string[]
    duration: string
    wait: boolean
    waitMore?: string
  }
}

export const talk: ActionTranslator = withCheckFields([
  'sp', // what to say
  'du', // duration
  'dy', // delay
  'c'   // actor code
])( (cgActions, action) => {
  const [speech, ...speeches] = action.sp
  const cgAction: CGTalk = {
    type: 'ActorTalkDelayed',
    data: {
      timeout: action.dy,
      actorCode: action.c,
      speech,
      cleanTalk: true,
      randSpeech: speeches.length > 0,
      speeches,
      duration: action.du.toString(),
      wait: false
    }
  }
  return [...cgActions, cgAction]
})
