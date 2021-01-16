import pako from 'pako'

const gzipB64ToJson = (dataUrl: string) => {
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
  const map = JSON.parse(s2)
  return map
}

export default gzipB64ToJson
