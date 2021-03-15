import { Nullable } from '../../../type'

export const processCode = (code: Nullable<string>): string => {
  return code
    ?.replace('global/', '')
    .replace('_third_.', '')
    .replace('_royal_.', '')
    .replace('_skydow_.', '')
    ?? ''
}
