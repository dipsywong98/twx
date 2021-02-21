import pako from 'pako'

export const twmapInB64Text = (twmap: unknown): string => {
  let str = JSON.stringify(twmap)
  let zip = pako.gzip(str, {to: 'string'})
  let b64 = window.btoa(zip)
  return b64
}
