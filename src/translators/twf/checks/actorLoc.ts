import { Translator } from '../../../type'
import { getLocations } from '../utils/getLocations'
import { PropTypes, TwxPropTypes } from '../../../propTypes'

const propTypes = {
  c: PropTypes.string.isRequired, // actor code
  // 'cv',  // idk what is this
  lcs: TwxPropTypes.Locations.isRequired // locations
}

export const actorLoc: Translator<typeof propTypes> = ((cgChecks, check) => [
  ...cgChecks,
  {
    type: 'ActorLoc',
    data: {
      actorCode: check.c,
      locs: getLocations(check.lcs),
      _logi: {
        _and_or: ''
      },
      _elseEventId: ''
    }
  }
]
)

actorLoc.propTypes = propTypes
