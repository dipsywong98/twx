export type Twf = TwfCommon & Record<string, TwfEvent | TwfRo>

export interface TwfCommon {
  map: TwfMap
  inf: TwfInf
  ini: TwfIni
}

/**
 * Interface to hold twf map info
 */
export interface TwfMap {
  n: string // name
  t: number // idk
  o: string // 盟會線號
  ri: number // resource id (?
  k: string // some key (?
}

/**
 * Interface to hold twf mission Info
 */
export interface TwfInf {
  maxp: 3 // max life
  go: string // goal
  cs: number[] // camps allowed 0|1|2
  fa: string  // fail
  ab: number  // ability
  n: string // name of mission
  sn: string // name of author
  minp: number // minimum player
  su: string // author userId
  dp: string // description
  ri: []  // resource id (?
}

/**
 * Interface to hold spawn point Info
 */
export interface TwfIni {
  iclm: {
    "0": string[] // coord strings
    "1": string[] // coord strings
    "2": string[] // coord strings
  }
}

/**
 * Interface of a twf role
 */
export interface TwfRo {
  k: string // unique key (?)
  n: string // name of that role
  ri: string // resource id
  un: string // user id
}

/**
 * Interface of a twf music
 */
export interface TwfMusic {
  n: string // name
}

/**
 * Interface of a twf event
 */
export interface TwfEvent {
  tag?: string
  act: TwfAct[]
  uo: number  // order number
  cks: TwfCheck[]
  repInt?: number // repeat interval
  rep?: number // repeat count
  itime?: number // time for first trigger
  delay?: number
  recInt?: number
}


export interface TwfAct {
  type: string
}

export interface TwfCheck {
  type: string
}

export interface TwrDeco {
  x: number
  sx: number
  y: number
  sy: number
  code: string
  r: number
}

export interface Twr {
  hand: number
  foot: number
  head: number
  decos: TwrDeco[]
}
