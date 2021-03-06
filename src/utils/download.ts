import { twmapInB64Text } from './twmapInB64Text'
import pako from 'pako'

export const download = (text: string, filename: string): void => {
  const element = document.createElement('a')
  element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text))
  element.setAttribute('download', filename)

  element.style.display = 'none'
  document.body.appendChild(element)

  element.click()

  document.body.removeChild(element)
}

export const downloadDataUrl = (text: string, filename: string): void => {
  const element = document.createElement('a')
  element.setAttribute('href', text)
  element.setAttribute('download', filename)

  element.style.display = 'none'
  document.body.appendChild(element)

  element.click()

  document.body.removeChild(element)
}

export const downloadTwmap = (twmap: unknown, filename: string): void => {
  download(twmapInB64Text(twmap), filename)
}

export const downloadAsBlob = (text: string, filename: string): void => {
  const i = pako.gzip(text)
  const s = new Uint8Array([0, 1])
  const o = new Blob([s.buffer, i], {
    type: 'application/octet-stream'
  })
  downloadDataUrl(URL.createObjectURL(o), filename)
}
