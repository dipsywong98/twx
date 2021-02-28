import { markMissed, MissingStuffType } from '../missingStuff'

const weapons: Record<string, string> = {
  1: 'knife',
  2: 'hook',
  3: 'sword',
  4: 'handgun',
  5: 'rifle',
  6: 'snipegun',
  7: 'frisbee',
  8: 'grenadeBomb',
  9: 'grenadeSmoke',
  10: 'grenadeStun',
  11: 'shield',
  12: 'shotgun',
  // 13:'flameRing',
  14: 'kongfu',
  15: 'fist',
  17: 'bowSet',
  20: 'hatchet',
  //  21:'iceSaber',
  27: 'giantAxe',
  //28:'白銀雙鷹',
  29: 'timeBomb',
  30: 'rocketLauncher',
  31: 'flameThrower',   // fire gun
  // 33:'laserGun',
  // 34:'doubleKnife',
  35: 'anaestheticRifle',
  37: 'gatling',
  39: 'grenadeFire',
  55: 'scythe',
  60: 'shield',
  // 62:'esportStick',
  64: 'laserTurret',
  // 65: '手裡劍',
  // 70指虎,
  110: 'sword',
  335: 'snipegun'
  // 700本靈劍
  // 705響骨
  // 714分靈
  // 702黑炎
  // 704聖靈
  // 707火焰
  // 709血凝
  // 710靈骨劍
  // 711霜月
  // 713鱷毒
  // 715青檀
  // 717: '雷光
  // 718: '青龍'
}

export const getWeapon = (id?: string | number): string | undefined => {
  if (id === undefined) {
    return undefined
  }
  if (!(id.toString() in weapons)) {
    markMissed({
      type: MissingStuffType.WEAPON,
      what: id.toString()
    })
  }
  return weapons[id] ?? 'kongfu'
}
