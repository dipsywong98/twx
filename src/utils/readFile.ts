import pako from 'pako'
import { extractJson } from './extractJson'

const readFile = (target: string) => async (file: Blob): Promise<string | ArrayBuffer | null | undefined> => await new Promise((resolve) => {
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
const readTwxFileAsJson = async <T> (file: File): Promise<T> => (
  await readFileAsBinaryString(file)
    .then(bs => pako.inflate(bs))
    .then(buf => new TextDecoder('utf-8').decode(buf))
    .then(s1 => {
      return extractJson(s1.replace(/([,{])(\d+):/g, '$1"$2":'))
    })
)
export const readGzipFileAsJson = async <T> (file: File): Promise<T> => (
  await readFileAsArrayBuffer(file)
    .then((t) => {
      const r = new Uint8Array(t.slice(2))
      const s = pako.ungzip(r, {
        to: 'string'
      })
      return s
      // console.log(e)
      // const t = window.atob(e)
      // const n = t.length
      // const r = new Uint8Array(new ArrayBuffer(n))
      // for (let i = 0; i < n; ++i) { r[i] = t.charCodeAt(i) }
      // return pako.ungzip(e, {
      //   to: 'string'
      // })
    })
    .then(r => {
      return JSON.parse(r) as T
    })
)

export const readTwmapFileAsJson = async <T> (file: File): Promise<T> => (
  await readFileAsText(file)
    .then((e) => {
      const t = window.atob(e)
      const n = t.length
      const r = new Uint8Array(new ArrayBuffer(n))
      for (let i = 0; i < n; ++i) {
        r[i] = t.charCodeAt(i)
      }
      return pako.ungzip(r, {
        to: 'string'
      })
    })
    .then(r => {
      return JSON.parse(r) as T
    })
)
export default readFile

export {
  readFileAsDataURL,
  readFileAsText,
  readFileAsArrayBuffer,
  readFileAsBinaryString,
  readTwxFileAsJson
}
