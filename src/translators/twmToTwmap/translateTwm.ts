import { emptyTwmap } from './emptyTwmap'
import { Twm, TwmLayer } from '../../type'
import { getLocation } from '../twf/utils/getLocations'

const darkTilesetMap: Record<string, string> = {
  water: 'water4',
  water1: 'water5',
  lava: 'lava1',
  tileset1: 'tileset9',
  tileset0: 'tileset8'
}

const darkWallsetMap: Record<string, string> = {
  wallset6: 'wallset7',
  wallsetA: 'wallset6',
  wallset7: 'wallset9',
  wallset9: 'wallsetA'
}

const darkObjectMap: Record<string, string> = {
  dsta0: 'dstad0',
  dsta1: 'dstad1',
  dsta2: 'dstad2',
  dsta3: 'dstad3',
  dstb0: 'dstad3',
  dstb1: 'dstad2',
  dstb2: 'dstad1',
  dstb3: 'dstad0'
}

function darkRenameLayers (layers: TwmLayer[]) {
  const [_, ...tail] = layers
  return [
    {
      map: 'tileset8'
    },
    // @ts-ignore
    ...tail.map(({ map, ...layer }) => {
      if (typeof map === 'string') {
        return {
          ...layer,
          map
        }
      } else {
        const newMap: Record<string, string[]> = {}
        Object.keys(map).forEach((tileSetName) => {
          if (tileSetName in darkTilesetMap) {
            newMap[darkTilesetMap[tileSetName]] = map[tileSetName]
          } else {
            newMap[tileSetName] = map[tileSetName]
          }
        })
        return ({
          ...layer,
          map: newMap
        })
      }
    })
  ]
}

function darkRenameWalls (walls: Record<string, string[]>): Record<string, string[]> {
  const newMap: Record<string, string[]> = {}
  Object.keys(walls).forEach((tileSetName) => {
    if (tileSetName in darkWallsetMap) {
      newMap[darkWallsetMap[tileSetName]] = walls[tileSetName]
    } else {
      newMap[tileSetName] = walls[tileSetName]
    }
  })
  return newMap
}

function darkRenameObjects (objects: Record<string, string[]>): Record<string, string[]> {
  const newMap: Record<string, string[]> = {}
  Object.keys(objects).forEach((tileSetName) => {
    if (tileSetName in darkObjectMap) {
      newMap[darkObjectMap[tileSetName]] = objects[tileSetName]
    } else {
      newMap[tileSetName] = objects[tileSetName]
    }
  })
  return newMap
}

export const translateTwm = (twm: Twm): unknown => {
  const twmap = emptyTwmap()
  Object.entries(twm.objs).forEach(([objectName, locations]) => {
    if (['shadow2_n', 'shine2_n'].includes(objectName)) {
      twm.objs[objectName] = locations.map(location => {
        const { x, y } = getLocation(location)
        return `${x},${Number.parseInt(y) + 1}`
      })
    }
    if (['shadow2_w', 'shine2_w'].includes(objectName)) {
      twm.objs[objectName] = locations.map(location => {
        const { x, y } = getLocation(location)
        return `${Number.parseInt(x) + 1},${y}`
      })
    }
  })
  if (twm.mapset.c === 'darkland') {
    twm.layers = darkRenameLayers(twm.layers)
    twm.walls = darkRenameWalls(twm.walls)
    twm.objs = darkRenameObjects(twm.objs)
  }
  // @ts-expect-error lazy to make twmap type
  twmap.editor = twm
  return twmap
}
