const camps = ['skydow', 'royal', 'third', 'otherCamp']
export const getCamp = (c: number | string): string => {
  for (const camp of camps) {
    if (`${c}`.startsWith(camp)) {
      return camp
    }
  }
  return camps[c as number]
}
