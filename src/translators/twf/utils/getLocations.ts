import { CgLocation, Nullable } from '../../../type'

export const getLocations = (lcs: Nullable<Array<{ lc: string }>>): CgLocation[] => {
  return (lcs ?? []).map(({ lc }) => {
    const [x, y] = lc.split(',')
    return {
      x,
      y,
      range: '0'
    }
  })
}

export const getLocationsAlt = (lcs: Nullable<Array<{ lc: string }>>): CgLocation[] => {
  return (lcs ?? []).map(({ lc }) => {
    const [x, y] = lc.split(',')
    return {
      targetType: 'location',
      x,
      y,
      range: '0'
    }
  })
}

export const getLocation = (coordString: string | undefined, defaultVal: CgLocation = {
  x: '0',
  y: '0'
}): CgLocation => {
  if (coordString === undefined) {
    return defaultVal
  }
  const [x, y] = coordString.split(',')
  return {
    x,
    y
  }
}
