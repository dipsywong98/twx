import { CgRegion } from '../../../type'

export const processRegion = (regions: string[]): CgRegion[] => {
  return regions.map(str => {
    const [[x,y],[w,h]] = str.split(';').map(s => s.split(','))
    return {
      x,
      y,
      w,
      h
    }
  })
}
