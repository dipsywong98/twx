import { emptyTwmap } from './emptyTwmap'

export const translateTwm = (twm: unknown): unknown => {
  const twmap = emptyTwmap()
  // @ts-expect-error lazy to make twmap type
  twmap.editor = twm
  return twmap
}
