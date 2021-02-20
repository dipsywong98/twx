import { TwfAct } from '../type'

interface TwfTalk extends TwfAct {
  type: 'talk'
  sp: string[]  // what to say
  du: number // duration
  dy: number // delay
  c: string // actor code
}

interface CGTalk {
  type: 'talk'
  data: {
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

export const talk = (act: TwfTalk): CGTalk => {
  const [speech, ...speeches] = act.sp
  return {
    type: 'talk',
    data: {
      actorCode: act.c,
      speech,
      cleanTalk: true,
      randSpeech: speeches.length > 0,
      speeches,
      duration: act.du.toString(),
      wait: false
    }
  }
}
