import { Twr, Twrole } from '../type'

export const twrToTwrole = (twr: Twr): Twrole => {
  return {
    data: {
      dr: 13, // any camp male
      cr: {
        cape: {
          f: 11,
          s: 1
        },
        deco: twr.decos.map(d => ({
            ...d,
            c: d.code.replace('_head_', 'head'),
            sx: d.sx/2,
            sy: d.sy/2,
            r: d.r * Math.PI / 180
          }
        )),
        foot: { f: twr.foot, s: 1 },
        hand: { f: twr.hand, s: 1 },
        head: { f: twr.head, s: 1 }
      }
    },
    hash: '',
    thumb: { dataUrl: '', pivot: { x: 0, y: 0 } }
  }
}
