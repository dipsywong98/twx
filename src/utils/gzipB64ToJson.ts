import pako from 'pako'

const gzipB64ToJson = <T>(dataUrl: string): T => {
  console.log(dataUrl)
  const replaced = dataUrl.replace(/^data:application\/octet-stream;base64,/, '')
  const atobed = atob(replaced)
  console.log(atobed)
  const inflated = pako.inflate(atobed)
  console.log(inflated)
  const s1 = new TextDecoder('utf-8').decode(inflated)
  console.log(s1)
  const start = s1.indexOf('{')
  const end = s1.lastIndexOf('}')
  const s2 = s1.slice(start, end + 1).replace(/[,{](\d+):/g, '"$1":')
  return JSON.parse(s2) as T
}

export default gzipB64ToJson
