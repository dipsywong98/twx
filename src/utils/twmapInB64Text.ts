import pako from 'pako'

export const twmapInB64Text = (twmap: unknown): string => {
  const str = JSON.stringify(twmap)
  const zip = pako.gzip(str, { to: 'string' })
  const b64 = window.btoa(zip)
  return b64
}
