import { markMissed, MissingStuffType } from '../missingStuff'

const weapons: Record<string, string> = {
   14: 'kongfu',
   1: 'knife',
   2: 'hook',
   3: 'sword',
   11: 'shield',
   4: 'handgun',
   5:  'rifle',
   6: 'snipegun',
   12: 'shotgun',
  20: 'hatchet',
  8:'grenadeBomb',
  10: 'grenadeStun',
  9: 'grenadeSmoke',
  39: 'grenadeFire',
   29: 'timeBomb',
   7: 'frisbee',
  //  21:'iceSword',
   17: 'bowSet',
  //28:'eagle',
  31: 'flameThrower',   // fire gun
   27:'giantAxe',
  // 13:'flameRing',
  30:'rocketLauncher',
  // 33:'laserGun',
  // 34:'doubleKnife',
  35:'anaestheticRifle',
  55:'scythe'
  // 62:'esportStick',
  // 65: 'ninja',
  // 70,
  // 700
  // 705
  // 714
  // 702
  // 704
  // 707
  // 709
  // 710
  // 711
  // 713
  // 715
  // 717
  // 718
  //   'gatling',
  //   'laserTurret',
}

export const getWeapon = (id?: string | number): string | undefined => {
  if(id === undefined) {
    return undefined
  }
  if(!(id.toString() in weapons)){
    markMissed({
      type: MissingStuffType.WEAPON,
      what: id.toString()
    })
  }
  return weapons[id] ?? id
}
