import pako from 'pako'
import { extractJson } from './extractJson'

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
      return extractJson(s1.replace(/([,{])(\d+):/g, '$1"$2":'))
    }))
)

export const readTwmapFileAsJson: <T>(file: File) => Promise<T> = (file: File) => (
  readFileAsText(file)
    .then((e) => {
      const t = window.atob(e)
        , n = t.length
        , r = new Uint8Array(new ArrayBuffer(n))
      for (let i = 0; i < n; ++i)
        r[i] = t.charCodeAt(i)
      return pako.ungzip(r, {
        to: 'string'
      })
    })
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
