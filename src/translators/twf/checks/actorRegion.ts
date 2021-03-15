import { Translator } from '../../../type'
import { PropTypes } from '../../../propTypes'
import { processCode } from '../utils/processCdoe'
import { processRegion } from '../utils/processRegion'
import { appendActorAltVar } from '../utils/appendActorAltVar'

const propTypes = {
  ir: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,  // 'x,y;w,h'
  c: PropTypes.string.isRequired, // actor code
  vn: PropTypes.string  // save as variable
}

export const actorRegion: Translator<typeof propTypes> = ((cgChecks, check) => appendActorAltVar(check.c, check.vn, [...cgChecks,
  {
    "type": "ActorRegion",
    "data": {
      "actorCode": processCode(check.c),
      "regions": processRegion(check.ir),
      "exRegions": [],
      "_logi": {
        "_and_or": ""
      },
      "_elseEventId": ""
    }
  }
]))

actorRegion.propTypes = propTypes
