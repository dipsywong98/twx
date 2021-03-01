import { twmapInB64Text } from './twmapInB64Text'

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
