import { CgCheck, notNull, Nullable } from '../../../type'
import { processCode } from './processCdoe'

export const appendActorAltVar = (code: string, altVarName: Nullable<string>, array: CgCheck[]): CgCheck[] => {
  if(notNull(altVarName)) {
    return [...array, {
      type: "ActorAltVar",
      data: {
        actorCode: processCode(code),
        varName: processCode(altVarName),
        _logi: {
          _and_or: ""
        },
        _elseEventId: ""
      }
    }]
  } else {
    return array
  }
}
