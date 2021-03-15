const camps = ['skydow', 'royal', 'third', 'otherCamp']
export const getCamp = (c: number | string): string => {
  for (const camp of camps) {
    if (`${c}`.startsWith(camp)) {
      return camp
    }
  }
  return camps[c as number]
}

interface CampMap {
  campAll: boolean
  skydow: boolean
  royal: boolean
  third: boolean
  otherCamp: boolean
}

export const processCamps = (cps: number[]): CampMap => {
  return {
    campAll: false,
    skydow: cps.includes(0),
    royal: cps.includes(1),
    third: cps.includes(2),
    otherCamp: cps.includes(3)
  }
}
