export const extractJson = <T>(stringContainJson: string): T => {
  const candidates = [stringContainJson]
  while(true) {
    const s1 = candidates.shift()
    if(s1 === undefined) {
      throw new Error('No JSON in string')
    }
    const start = s1.indexOf('{')
    const end = s1.lastIndexOf('}')
    const s2 = s1.slice(start, end + 1)
    try{
      return JSON.parse(s2)
    }catch (e) {
      candidates.push(s2.slice(1))
      candidates.push(s2.slice(0, s2.length - 1))
    }
  }
}
