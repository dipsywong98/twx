import { CgLocation } from '../../../type'

export const getLocations = (lcs: Array<{lc: string}>): CgLocation[] => {
  return lcs.map(({lc}) => {
    const [x,y] = lc.split(',')
    return {
      x,
      y,
      range: '0'
    }
  })
}

export const getLocation = (coordString: string | undefined, defaultVal: CgLocation = {x: '0', y: '0'}): CgLocation => {
  if(coordString === undefined) {
    return defaultVal
  }
  const [x,y] = coordString.split(',')
  return {
    x,
    y
  }
}
