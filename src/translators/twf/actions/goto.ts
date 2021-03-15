import { Translator } from '../../../type'
import { getLocations } from '../utils/getLocations'
import { PropTypes, TwxPropTypes } from '../../../propTypes'
import { processCode } from '../utils/processCdoe'

const propTypes = {
  c: PropTypes.string.isRequired, // actor code
  lcs: TwxPropTypes.Locations.isRequired // locations
  // 'tc',  //dont know what is this
}

export const goto: Translator<typeof propTypes> =((cgActions, action) => ([
  ...cgActions,
  {
    type: 'ActorGoto',
    data: {
      actorCode: processCode(action.c),
      targetType: 'locs',
      locs: getLocations(action.lcs)
    }
  }
]))

goto.propTypes = propTypes
