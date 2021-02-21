import { emptyTwmap } from './emptyTwmap'

export const translateTwm = (twm: unknown) => {
  const twmap = emptyTwmap()
  // @ts-ignore
  twmap.editor = twm
  return twmap
}
