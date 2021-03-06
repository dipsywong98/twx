import { emptyTwmap } from './emptyTwmap'
import { Twm } from '../../type'
import { getLocation } from '../twf/utils/getLocations'

export const translateTwm = (twm: Twm): unknown => {
  const twmap = emptyTwmap()
  Object.entries(twm.objs).forEach(([objectName, locations]) => {
    if (['shadow2_n', 'shine2_n'].includes(objectName)) {
      twm.objs[objectName] = locations.map(location => {
        const { x, y } = getLocation(location)
        return `${x},${Number.parseInt(y)+1}`
      })
    }
    if (['shadow2_w', 'shine2_w'].includes(objectName)) {
      twm.objs[objectName] = locations.map(location => {
        const { x, y } = getLocation(location)
        return `${Number.parseInt(x)+1},${y}`
      })
    }
  })
  // @ts-expect-error lazy to make twmap type
  twmap.editor = twm
  return twmap
}
