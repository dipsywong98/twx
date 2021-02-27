const camps = ['skydow', 'royal', 'third', 'otherCamp']
export const getCamp = (c: number | string) => {
  console.log('camp',c)
  for (let camp of camps) {
    if(`${c}`.startsWith(camp)) {
      return camp
    }
  }
  return camps[c as number]
}
