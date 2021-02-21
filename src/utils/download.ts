import pako from 'pako'

export const download = (text: string, filename: string) => {
  const element = document.createElement('a')
  element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text))
  element.setAttribute('download', filename)

  element.style.display = 'none'
  document.body.appendChild(element)

  element.click()

  document.body.removeChild(element)
}

export const downloadTwmap = (twmap: unknown, filename: string) => {
  let str = JSON.stringify(twmap)
  let zip = pako.gzip(str, {to: 'string'})
  let b64 = window.btoa(zip)
  download(b64, filename)
}
