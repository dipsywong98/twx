import pako from 'pako'

const readFile = (target: string) => async (file: Blob): Promise<string | ArrayBuffer | null | undefined> => new Promise((resolve) => {
  const reader = new FileReader()
  reader.addEventListener(
    'load',
    (reader) => (
      resolve(reader?.target?.result)
    )
  )
  switch (target) {
    case 'readAsDataURL':
    case 'dataURL':
    case 'base64':
      reader.readAsDataURL(file)
      break
    case 'readAsText':
    case 'text':
      reader.readAsText(file)
      break
    case 'buffer':
    case 'arrayBuffer':
    case 'readAsArrayBuffer':
      reader.readAsArrayBuffer(file)
      break
    case 'bs':
    case 'binaryString':
    case 'readAsBinaryString':
      reader.readAsBinaryString(file)
      break
    default:
      throw new Error(`readFile received an unknown option ${target}`)
  }
})

const readFileAsDataURL: (file: File) => Promise<string> = readFile('readAsDataURL') as (file: File) => Promise<string>
const readFileAsText: (file: File) => Promise<string> = readFile('readAsText') as (file: File) => Promise<string>
const readFileAsArrayBuffer: (file: File) => Promise<ArrayBuffer> = readFile('readAsArrayBuffer') as (file: File) => Promise<ArrayBuffer>
const readFileAsBinaryString: (file: File) => Promise<string> = readFile('readAsBinaryString') as (file: File) => Promise<string>
const readTwxFileAsJson: <T>(file: File) => Promise<T> = (file: File) => (
  readFileAsBinaryString(file)
    .then(bs => pako.inflate(bs))
    .then(buf => new TextDecoder('utf-8').decode(buf))
    .then((s1 => {
      const start = s1.indexOf('{')
      const end = s1.lastIndexOf('}')
      const s2 = s1.slice(start, end + 1).replace(/([,{])(\d+):/g, '$1"$2":')
      return s2
      // return JSON.parse(s2)
    }))
    .then(JSON.parse)
)
export default readFile

export {
  readFileAsDataURL,
  readFileAsText,
  readFileAsArrayBuffer,
  readFileAsBinaryString,
  readTwxFileAsJson
}
