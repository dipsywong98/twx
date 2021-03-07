export const emptyTwmap = (): unknown => ({
  tileW: 32,
  tileH: 32,
  cols: 1,
  rows: 1,
  setting: {
    baseGround: 'tileset0'
  },
  rsrcs: {
    0: 'tileset0.png',
    1: 'tileset1.png',
    2: 'tileset3.png',
    3: 'tilepropertyset.png',
    4: 'tileset2.png',
    5: 'tileset9.png',
    6: 'tileset8.png',
    7: 'tileset7.png',
    8: 'tileset5.png',
    9: 'tileset6.png'
  },
  layers: [
    {
      type: 0,
      tiles: {
        '0,0': {
          r: '0',
          i: 63
        }
      }
    },
    {
      type: 1,
      tiles: {}
    }
  ],
  tiles: {},
  objects: {
    sky048: {
      cols: 1,
      rows: 1,
      baseLoc: '0,0',
      origin: '0,0',
      tiles: {
        '0,0': {
          r: '8',
          i: 20
        }
      },
      instances: [],
      properties: {
        cat: 'sky'
      },
      tps: {}
    },
    shine3_n: {
      cols: 1,
      rows: 1,
      baseLoc: '0,0',
      origin: '0,0',
      tiles: {
        '0,0': {
          r: '4',
          i: 382
        }
      },
      instances: [],
      properties: {
        layer: 'up'
      },
      tps: {}
    },
    sky014: {
      cols: 1,
      rows: 1,
      baseLoc: '0,0',
      origin: '0,0',
      tiles: {
        '0,0': {
          r: '1',
          i: 16
        }
      },
      instances: [],
      properties: {
        cat: 'sky'
      },
      tps: {}
    },
    pillar8: {
      cols: 2,
      rows: 2,
      baseLoc: '0,0',
      origin: '0,0',
      tiles: {
        '1,1': {
          r: '7',
          i: 319
        },
        '0,0': {
          r: '7',
          i: 256
        },
        '0,1': {
          r: '7',
          i: 288
        },
        '1,0': {
          r: '7',
          i: 258
        }
      },
      instances: [],
      properties: {},
      tps: {
        '1,1': {
          s: '1',
          layer: '9'
        },
        '0,0': {
          s: '1',
          layer: '9'
        },
        '0,1': {
          s: '1',
          layer: '9'
        },
        '1,0': {
          s: '1',
          layer: '9'
        }
      }
    },
    tileset8D2: {
      cols: 10,
      rows: 4,
      baseLoc: '0,0',
      origin: '0,0',
      tiles: {
        '5,0': {
          r: '1',
          i: 442
        },
        '2,2': {
          r: '1',
          i: 32
        },
        '7,3': {
          r: '1',
          i: 489
        },
        '0,0': {
          r: '1',
          i: 0
        },
        '7,1': {
          r: '1',
          i: 459
        },
        '1,1': {
          r: '1',
          i: 16
        },
        '4,1': {
          r: '1',
          i: 77
        },
        '4,2': {
          r: '1',
          i: 456
        },
        '0,1': {
          r: '1',
          i: 62
        },
        '2,0': {
          r: '1',
          i: 2
        },
        '7,0': {
          r: '1',
          i: 444
        },
        '3,1': {
          r: '1',
          i: 75
        },
        '3,0': {
          r: '1',
          i: 45
        },
        '1,2': {
          r: '1',
          i: 46
        },
        '6,2': {
          r: '1',
          i: 473
        },
        '8,0': {
          r: '1',
          i: 445
        },
        '7,2': {
          r: '1',
          i: 474
        },
        '6,1': {
          r: '1',
          i: 458
        },
        '5,3': {
          r: '1',
          i: 487
        },
        '9,0': {
          r: '1',
          i: 446
        },
        '3,2': {
          r: '1',
          i: 455
        },
        '8,1': {
          r: '1',
          i: 460
        },
        '8,3': {
          r: '1',
          i: 490
        },
        '6,0': {
          r: '1',
          i: 443
        },
        '5,2': {
          r: '1',
          i: 472
        },
        '6,3': {
          r: '1',
          i: 488
        },
        '9,2': {
          r: '1',
          i: 476
        },
        '5,1': {
          r: '1',
          i: 457
        },
        '2,1': {
          r: '1',
          i: 60
        },
        '1,0': {
          r: '1',
          i: 76
        },
        '8,2': {
          r: '1',
          i: 475
        },
        '4,0': {
          r: '1',
          i: 47
        },
        '0,2': {
          r: '1',
          i: 30
        },
        '9,1': {
          r: '1',
          i: 461
        },
        '9,3': {
          r: '1',
          i: 491
        }
      },
      instances: [],
      properties: {
        cat: 'tileset',
        flat: '1'
      },
      tps: {
        '1,1': {
          block: '0'
        },
        '0,0': {
          block: '0'
        },
        '4,1': {
          block: '0'
        },
        '0,1': {
          block: '0'
        },
        '2,0': {
          block: '0'
        },
        '0,2': {
          block: '0'
        },
        '1,2': {
          block: '0'
        },
        '3,1': {
          block: '0'
        },
        '1,0': {
          block: '0'
        },
        '4,0': {
          block: '0'
        },
        '2,2': {
          block: '0'
        },
        '2,1': {
          block: '0'
        },
        '3,0': {
          block: '0'
        }
      }
    },
    tree3: {
      cols: 6,
      rows: 6,
      baseLoc: '2,2',
      origin: '0,0',
      tiles: {
        '1,1': {
          r: '4',
          i: 129
        },
        '2,2': {
          r: '4',
          i: 145
        },
        '4,2': {
          r: '4',
          i: 147
        },
        '0,0': {
          r: '4',
          i: 113
        },
        '3,5': {
          r: '4',
          i: 191
        },
        '5,0': {
          r: '4',
          i: 118
        },
        '4,1': {
          r: '4',
          i: 132
        },
        '3,4': {
          r: '4',
          i: 176
        },
        '0,1': {
          r: '4',
          i: 128
        },
        '2,0': {
          r: '4',
          i: 115
        },
        '4,5': {
          r: '4',
          i: 192
        },
        '2,3': {
          r: '4',
          i: 160
        },
        '3,0': {
          r: '4',
          i: 116
        },
        '0,4': {
          r: '4',
          i: 173
        },
        '2,5': {
          r: '4',
          i: 190
        },
        '3,3': {
          r: '4',
          i: 161
        },
        '3,1': {
          r: '4',
          i: 131
        },
        '1,3': {
          r: '4',
          i: 159
        },
        '5,3': {
          r: '4',
          i: 163
        },
        '0,3': {
          r: '4',
          i: 158
        },
        '3,2': {
          r: '4',
          i: 146
        },
        '4,3': {
          r: '4',
          i: 162
        },
        '1,4': {
          r: '4',
          i: 174
        },
        '2,4': {
          r: '4',
          i: 175
        },
        '5,4': {
          r: '4',
          i: 178
        },
        '0,2': {
          r: '4',
          i: 143
        },
        '5,1': {
          r: '4',
          i: 133
        },
        '1,5': {
          r: '4',
          i: 189
        },
        '1,0': {
          r: '4',
          i: 114
        },
        '4,0': {
          r: '4',
          i: 117
        },
        '4,4': {
          r: '4',
          i: 177
        },
        '1,2': {
          r: '4',
          i: 144
        },
        '2,1': {
          r: '4',
          i: 130
        },
        '5,2': {
          r: '4',
          i: 148
        }
      },
      instances: [],
      properties: {
        layer: 'up'
      },
      tps: {
        '2,2': {
          layer: '5'
        },
        '3,3': {
          layer: '5'
        },
        '2,3': {
          layer: '5'
        },
        '3,2': {
          layer: '5'
        }
      }
    },
    table5: {
      cols: 5,
      rows: 3,
      baseLoc: '4,2',
      origin: '0,0',
      tiles: {
        '0,2': {
          r: '6',
          i: 110
        },
        '1,2': {
          r: '6',
          i: 76
        },
        '4,2': {
          r: '6',
          i: 111
        },
        '3,2': {
          r: '6',
          i: 78
        },
        '4,0': {
          r: '6',
          i: 45
        },
        '2,2': {
          r: '6',
          i: 77
        },
        '4,1': {
          r: '6',
          i: 61
        }
      },
      instances: [],
      properties: {},
      tps: {
        '0,2': {
          layer: '1'
        },
        '1,2': {
          layer: '1'
        },
        '4,2': {
          layer: '1'
        },
        '3,2': {
          layer: '1'
        },
        '4,0': {
          layer: '1'
        },
        '2,2': {
          layer: '1'
        },
        '4,1': {
          layer: '1'
        }
      }
    },
    dstbi2a: {
      cols: 1,
      rows: 4,
      baseLoc: '0,1',
      origin: '0,0',
      tiles: {
        '0,2': {
          r: '8',
          i: 119
        },
        '0,3': {
          r: '8',
          i: 134
        },
        '0,0': {
          r: '8',
          i: 104
        },
        '0,1': {
          r: '8',
          i: 119
        }
      },
      instances: [],
      properties: {
        cat: 'stair'
      },
      tps: {
        '0,2': {
          test: 'edge;tilesetD;2,1',
          layer: '0',
          block: '0'
        },
        '0,3': {
          test: 'edge;tilesetD;2,1',
          layer: '0',
          block: '1'
        },
        '0,0': {
          layer: '0',
          test: 'edge;tilesetD;2,1',
          block: '1'
        },
        '0,1': {
          layer: '0',
          test: 'edge;tilesetD;2,1',
          block: '0'
        }
      }
    },
    shine3_e: {
      cols: 1,
      rows: 1,
      baseLoc: '0,0',
      origin: '0,0',
      tiles: {
        '0,0': {
          r: '4',
          i: 379
        }
      },
      instances: [],
      properties: {
        layer: 'up'
      },
      tps: {}
    },
    sky042: {
      cols: 1,
      rows: 1,
      baseLoc: '0,0',
      origin: '0,0',
      tiles: {
        '0,0': {
          r: '5',
          i: 89
        }
      },
      instances: [],
      properties: {
        cat: 'sky'
      },
      tps: {}
    },
    shine1_e: {
      cols: 1,
      rows: 1,
      baseLoc: '0,0',
      origin: '0,0',
      tiles: {
        '0,0': {
          r: '4',
          i: 348
        }
      },
      instances: [],
      properties: {
        layer: 'up'
      },
      tps: {}
    },
    house8: {
      cols: 5,
      rows: 4,
      baseLoc: '2,1',
      origin: '0,0',
      tiles: {
        '1,1': {
          r: '5',
          i: 121
        },
        '0,3': {
          r: '5',
          i: 150
        },
        '4,2': {
          r: '5',
          i: 139
        },
        '0,0': {
          r: '5',
          i: 105
        },
        '3,2': {
          r: '5',
          i: 138
        },
        '4,1': {
          r: '5',
          i: 124
        },
        '2,2': {
          r: '5',
          i: 137
        },
        '0,1': {
          r: '5',
          i: 120
        },
        '2,0': {
          r: '5',
          i: 107
        },
        '1,3': {
          r: '5',
          i: 151
        },
        '2,1': {
          r: '5',
          i: 122
        },
        '0,2': {
          r: '5',
          i: 135
        },
        '1,2': {
          r: '5',
          i: 136
        },
        '3,1': {
          r: '5',
          i: 123
        },
        '3,0': {
          r: '5',
          i: 108
        },
        '4,0': {
          r: '5',
          i: 109
        },
        '3,3': {
          r: '5',
          i: 153
        },
        '2,3': {
          r: '5',
          i: 152
        },
        '1,0': {
          r: '5',
          i: 106
        },
        '4,3': {
          r: '5',
          i: 154
        }
      },
      instances: [],
      properties: {},
      tps: {
        '1,1': {
          test: 'flat',
          block: '0',
          layer: '2.5'
        },
        '0,3': {
          test: 'flat',
          block: '0',
          s: '1',
          layer: '2'
        },
        '4,2': {
          test: 'flat',
          block: '0',
          s: '1',
          layer: '2.5'
        },
        '0,0': {
          test: 'flat',
          block: '0',
          s: '1',
          layer: '2'
        },
        '3,1': {
          test: 'flat',
          block: '0',
          layer: '2.5'
        },
        '3,0': {
          test: 'flat',
          block: '0',
          s: '1',
          layer: '2'
        },
        '4,1': {
          test: 'flat',
          block: '0',
          s: '1',
          layer: '2.5'
        },
        '3,3': {
          test: 'flat',
          block: '0',
          s: '1',
          layer: '2'
        },
        '0,1': {
          test: 'flat',
          block: '0',
          s: '1',
          layer: '2.5'
        },
        '2,0': {
          test: 'flat',
          block: '0',
          s: '1',
          layer: '2'
        },
        '0,2': {
          test: 'flat',
          block: '0',
          s: '1',
          layer: '2.5'
        },
        '1,2': {
          test: 'flat',
          block: '0',
          layer: '2.5'
        },
        '2,3': {
          test: 'flat',
          block: '0',
          s: '1',
          layer: '2'
        },
        '1,0': {
          test: 'flat',
          block: '0',
          s: '1',
          layer: '2'
        },
        '3,2': {
          test: 'flat',
          block: '0',
          layer: '2.5'
        },
        '4,0': {
          test: 'flat',
          block: '0',
          s: '1',
          layer: '2'
        },
        '2,2': {
          test: 'flat',
          block: '0',
          layer: '2.5'
        },
        '2,1': {
          test: 'flat',
          block: '0',
          layer: '2.5'
        },
        '1,3': {
          test: 'flat',
          block: '0',
          s: '1',
          layer: '2'
        },
        '4,3': {
          test: 'flat',
          block: '0',
          s: '1',
          layer: '2'
        }
      }
    },
    rock5: {
      cols: 2,
      rows: 2,
      baseLoc: '0,0',
      origin: '0,0',
      tiles: {
        '1,1': {
          r: '4',
          i: 288
        },
        '0,0': {
          r: '4',
          i: 272
        },
        '0,1': {
          r: '4',
          i: 287
        },
        '1,0': {
          r: '4',
          i: 273
        }
      },
      instances: [],
      properties: {},
      tps: {
        '1,1': {
          layer: '2'
        },
        '0,0': {
          layer: '2'
        },
        '0,1': {
          layer: '2'
        },
        '1,0': {
          layer: '2'
        }
      }
    },
    wallset9: {
      cols: 5,
      rows: 3,
      baseLoc: '0,0',
      origin: '0,0',
      tiles: {
        '0,2': {
          r: '7',
          i: 225
        },
        '1,2': {
          r: '7',
          i: 226
        },
        '3,1': {
          r: '7',
          i: 272
        },
        '3,2': {
          r: '7',
          i: 287
        },
        '3,0': {
          r: '7',
          i: 302
        },
        '0,1': {
          r: '7',
          i: 210
        },
        '4,0': {
          r: '7',
          i: 303
        },
        '2,2': {
          r: '7',
          i: 229
        },
        '0,0': {
          r: '7',
          i: 166
        },
        '1,0': {
          r: '7',
          i: 167
        },
        '2,0': {
          r: '7',
          i: 168
        },
        '2,1': {
          r: '7',
          i: 214
        }
      },
      instances: [],
      properties: {
        cat: 'wallset',
        dlayer: '4'
      },
      tps: {
        '3,2': {
          s: '1'
        },
        '0,2': {
          s: '1'
        },
        '1,2': {
          s: '1'
        },
        '3,1': {
          s: '1'
        },
        '0,0': {
          s: '1'
        },
        '1,0': {
          s: '1'
        },
        '3,0': {
          s: '1'
        },
        '4,0': {
          s: '1'
        },
        '2,2': {
          s: '1'
        },
        '0,1': {
          s: '1'
        },
        '2,0': {
          s: '1'
        },
        '2,1': {
          s: '1'
        }
      }
    },
    igloo3: {
      cols: 6,
      rows: 5,
      baseLoc: '3,2',
      origin: '0,0',
      tiles: {
        '1,1': {
          r: '9',
          i: 112
        },
        '4,2': {
          r: '9',
          i: 130
        },
        '5,0': {
          r: '9',
          i: 101
        },
        '4,1': {
          r: '9',
          i: 115
        },
        '3,4': {
          r: '9',
          i: 159
        },
        '0,1': {
          r: '9',
          i: 111
        },
        '2,0': {
          r: '9',
          i: 98
        },
        '3,1': {
          r: '9',
          i: 114
        },
        '3,0': {
          r: '9',
          i: 99
        },
        '1,2': {
          r: '9',
          i: 127
        },
        '3,3': {
          r: '9',
          i: 144
        },
        '2,3': {
          r: '9',
          i: 143
        },
        '1,3': {
          r: '9',
          i: 142
        },
        '5,3': {
          r: '9',
          i: 146
        },
        '0,3': {
          r: '9',
          i: 141
        },
        '3,2': {
          r: '9',
          i: 129
        },
        '4,3': {
          r: '9',
          i: 145
        },
        '1,4': {
          r: '9',
          i: 157
        },
        '2,4': {
          r: '9',
          i: 158
        },
        '5,4': {
          r: '9',
          i: 161
        },
        '0,2': {
          r: '9',
          i: 126
        },
        '5,1': {
          r: '9',
          i: 116
        },
        '2,1': {
          r: '9',
          i: 113
        },
        '1,0': {
          r: '9',
          i: 97
        },
        '4,0': {
          r: '9',
          i: 100
        },
        '4,4': {
          r: '9',
          i: 160
        },
        '2,2': {
          r: '9',
          i: 128
        },
        '5,2': {
          r: '9',
          i: 131
        }
      },
      instances: [],
      properties: {
        layer: 'up'
      },
      tps: {
        '1,1': {
          layer: '9'
        },
        '3,3': {
          skyobj: '1'
        },
        '4,2': {
          skyobj: '1'
        },
        '5,1': {
          layer: '9'
        },
        '3,2': {
          skyobj: '1'
        },
        '5,2': {
          layer: '9'
        },
        '4,1': {
          skyobj: '1'
        },
        '3,4': {
          layer: '9'
        },
        '2,4': {
          layer: '9'
        },
        '2,0': {
          layer: '9'
        },
        '3,1': {
          skyobj: '1'
        },
        '5,3': {
          layer: '9'
        },
        '4,4': {
          layer: '9'
        },
        '1,2': {
          skyobj: '1'
        },
        '2,1': {
          skyobj: '1'
        },
        '3,0': {
          layer: '9'
        },
        '4,0': {
          layer: '9'
        },
        '2,2': {
          skyobj: '1'
        },
        '2,3': {
          skyobj: '1'
        },
        '1,3': {
          layer: '9'
        },
        '4,3': {
          skyobj: '1'
        }
      }
    },
    weapon9: {
      cols: 3,
      rows: 3,
      baseLoc: '0,0',
      origin: '0,0',
      tiles: {
        '0,2': {
          r: '3',
          i: 55
        },
        '1,2': {
          r: '3',
          i: 56
        },
        '0,0': {
          r: '3',
          i: 25
        },
        '1,0': {
          r: '3',
          i: 26
        },
        '1,1': {
          r: '3',
          i: 41
        },
        '2,2': {
          r: '3',
          i: 57
        },
        '0,1': {
          r: '3',
          i: 40
        },
        '2,0': {
          r: '3',
          i: 27
        },
        '2,1': {
          r: '3',
          i: 42
        }
      },
      instances: [],
      properties: {
        cat: 'weapon',
        tip: 'gatling',
        alone: 'true'
      },
      tps: {
        '0,2': {
          test: 'flat'
        },
        '1,2': {
          test: 'flat'
        },
        '0,0': {
          test: 'flat'
        },
        '1,0': {
          test: 'flat'
        },
        '1,1': {
          stuff: '14',
          test: 'flat'
        },
        '2,2': {
          test: 'flat'
        },
        '0,1': {
          test: 'flat'
        },
        '2,0': {
          test: 'flat'
        },
        '2,1': {
          test: 'flat'
        }
      }
    },
    tileset8D1: {
      cols: 10,
      rows: 4,
      baseLoc: '0,0',
      origin: '0,0',
      tiles: {
        '5,0': {
          r: '1',
          i: 435
        },
        '2,2': {
          r: '1',
          i: 141
        },
        '7,3': {
          r: '1',
          i: 482
        },
        '0,0': {
          r: '1',
          i: 107
        },
        '7,1': {
          r: '1',
          i: 452
        },
        '1,1': {
          r: '1',
          i: 139
        },
        '4,1': {
          r: '1',
          i: 108
        },
        '4,2': {
          r: '1',
          i: 441
        },
        '0,1': {
          r: '1',
          i: 122
        },
        '2,0': {
          r: '1',
          i: 111
        },
        '7,0': {
          r: '1',
          i: 437
        },
        '3,1': {
          r: '1',
          i: 110
        },
        '3,0': {
          r: '1',
          i: 140
        },
        '1,2': {
          r: '1',
          i: 154
        },
        '6,2': {
          r: '1',
          i: 466
        },
        '8,0': {
          r: '1',
          i: 438
        },
        '7,2': {
          r: '1',
          i: 467
        },
        '6,1': {
          r: '1',
          i: 451
        },
        '5,3': {
          r: '1',
          i: 480
        },
        '9,0': {
          r: '1',
          i: 439
        },
        '3,2': {
          r: '1',
          i: 440
        },
        '8,1': {
          r: '1',
          i: 453
        },
        '8,3': {
          r: '1',
          i: 483
        },
        '6,0': {
          r: '1',
          i: 436
        },
        '5,2': {
          r: '1',
          i: 465
        },
        '6,3': {
          r: '1',
          i: 481
        },
        '9,2': {
          r: '1',
          i: 469
        },
        '5,1': {
          r: '1',
          i: 450
        },
        '2,1': {
          r: '1',
          i: 126
        },
        '1,0': {
          r: '1',
          i: 94
        },
        '8,2': {
          r: '1',
          i: 468
        },
        '4,0': {
          r: '1',
          i: 138
        },
        '0,2': {
          r: '1',
          i: 137
        },
        '9,1': {
          r: '1',
          i: 454
        },
        '9,3': {
          r: '1',
          i: 484
        }
      },
      instances: [],
      properties: {
        cat: 'tileset',
        flat: '1'
      },
      tps: {
        '1,1': {
          block: '0'
        },
        '0,0': {
          block: '0'
        },
        '4,1': {
          block: '0'
        },
        '0,1': {
          block: '0'
        },
        '2,0': {
          block: '0'
        },
        '0,2': {
          block: '0'
        },
        '1,2': {
          block: '0'
        },
        '3,1': {
          block: '0'
        },
        '1,0': {
          block: '0'
        },
        '4,0': {
          block: '0'
        },
        '2,2': {
          block: '0'
        },
        '2,1': {
          block: '0'
        },
        '3,0': {
          block: '0'
        }
      }
    },
    shine1_n: {
      cols: 1,
      rows: 1,
      baseLoc: '0,0',
      origin: '0,0',
      tiles: {
        '0,0': {
          r: '4',
          i: 334
        }
      },
      instances: [],
      properties: {
        layer: 'up'
      },
      tps: {}
    },
    stair3: {
      cols: 1,
      rows: 2,
      baseLoc: '0,0',
      origin: '0,0',
      tiles: {
        '0,0': {
          r: '0',
          i: 74
        },
        '0,1': {
          r: '0',
          i: 89
        }
      },
      instances: [],
      properties: {
        cat: 'stair'
      },
      tps: {
        '0,0': {
          layer: '0.5',
          test: 'edge;tileset0;2,1'
        },
        '0,1': {
          layer: '0.5',
          test: 'edge;tileset0;2,1'
        }
      }
    },
    dstad3a: {
      cols: 2,
      rows: 3,
      baseLoc: '0,0',
      origin: '0,0',
      tiles: {
        '0,2': {
          r: '1',
          i: 398
        },
        '1,1': {
          r: '1',
          i: 156
        },
        '1,2': {
          r: '1',
          i: 366
        },
        '0,0': {
          r: '1',
          i: 399
        },
        '0,1': {
          r: '1',
          i: 156
        },
        '1,0': {
          r: '1',
          i: 351
        }
      },
      instances: [],
      properties: {
        cat: 'stair'
      },
      tps: {
        '0,2': {
          layer: '0.5',
          test: 'flat'
        },
        '1,1': {
          test: 'edge;tileset1;0,1'
        },
        '1,2': {
          test: 'edge;tileset1;0,1'
        },
        '0,0': {
          layer: '0.5',
          test: 'flat'
        },
        '0,1': {
          layer: '0.5',
          test: 'flat'
        },
        '1,0': {
          test: 'edge;tileset1;0,1'
        }
      }
    },
    sky029: {
      cols: 1,
      rows: 1,
      baseLoc: '0,0',
      origin: '0,0',
      tiles: {
        '0,0': {
          r: '2',
          i: 26
        }
      },
      instances: [],
      properties: {
        cat: 'sky'
      },
      tps: {}
    },
    box0: {
      cols: 2,
      rows: 2,
      baseLoc: '0,0',
      origin: '0,0',
      tiles: {
        '1,1': {
          r: '0',
          i: 84
        },
        '0,0': {
          r: '0',
          i: 68
        },
        '0,1': {
          r: '0',
          i: 83
        },
        '1,0': {
          r: '0',
          i: 69
        }
      },
      instances: [],
      properties: {},
      tps: {
        '1,1': {
          test: 'flat',
          block: '0',
          s: '1',
          layer: '1.5'
        },
        '0,0': {
          test: 'flat',
          block: '0',
          s: '1',
          layer: '1.5'
        },
        '0,1': {
          test: 'flat',
          block: '0',
          s: '1',
          layer: '1.5'
        },
        '1,0': {
          test: 'flat',
          block: '0',
          s: '1',
          layer: '1.5'
        }
      }
    },
    lib_moveable_6: {
      cols: 3,
      rows: 1,
      baseLoc: '1,0',
      origin: '0,0',
      tiles: {
        '0,0': {
          r: '4',
          i: 351
        },
        '1,0': {
          r: '4',
          i: 352
        },
        '2,0': {
          r: '4',
          i: 353
        }
      },
      instances: [],
      properties: {
        cat: 'device',
        device: 'block',
        dlayer: '2'
      },
      tps: {}
    },
    bed4: {
      cols: 3,
      rows: 3,
      baseLoc: '1,1',
      origin: '0,0',
      tiles: {
        '0,2': {
          r: '6',
          i: 156
        },
        '1,2': {
          r: '6',
          i: 157
        },
        '0,0': {
          r: '6',
          i: 126
        },
        '1,0': {
          r: '6',
          i: 127
        },
        '1,1': {
          r: '6',
          i: 142
        },
        '2,2': {
          r: '6',
          i: 158
        },
        '0,1': {
          r: '6',
          i: 141
        },
        '2,0': {
          r: '6',
          i: 128
        },
        '2,1': {
          r: '6',
          i: 143
        }
      },
      instances: [],
      properties: {},
      tps: {
        '0,2': {
          layer: '1'
        },
        '1,2': {
          layer: '1'
        },
        '0,0': {
          layer: '1'
        },
        '1,0': {
          layer: '1'
        },
        '1,1': {
          layer: '1'
        },
        '2,2': {
          layer: '1'
        },
        '0,1': {
          layer: '1'
        },
        '2,0': {
          layer: '1'
        },
        '2,1': {
          layer: '1'
        }
      }
    },
    dstc0: {
      cols: 1,
      rows: 1,
      baseLoc: '0,0',
      origin: '0,0',
      tiles: {
        '0,0': {
          r: '0',
          i: 46
        }
      },
      instances: [],
      properties: {
        cat: 'stair'
      },
      tps: {
        '0,0': {
          layer: '0.5',
          test: 'edge;tileset1;1,2'
        }
      }
    },
    sky043: {
      cols: 1,
      rows: 1,
      baseLoc: '0,0',
      origin: '0,0',
      tiles: {
        '0,0': {
          r: '5',
          i: 119
        }
      },
      instances: [],
      properties: {
        cat: 'sky'
      },
      tps: {}
    },
    wallset2: {
      cols: 5,
      rows: 3,
      baseLoc: '0,0',
      origin: '0,0',
      tiles: {
        '0,2': {
          r: '1',
          i: 208
        },
        '1,2': {
          r: '1',
          i: 238
        },
        '3,1': {
          r: '1',
          i: 234
        },
        '3,2': {
          r: '1',
          i: 249
        },
        '3,0': {
          r: '1',
          i: 203
        },
        '0,1': {
          r: '1',
          i: 191
        },
        '4,0': {
          r: '1',
          i: 204
        },
        '2,2': {
          r: '1',
          i: 239
        },
        '0,0': {
          r: '1',
          i: 176
        },
        '1,0': {
          r: '1',
          i: 177
        },
        '2,0': {
          r: '1',
          i: 178
        },
        '2,1': {
          r: '1',
          i: 193
        }
      },
      instances: [],
      properties: {
        cat: 'wallset',
        dlayer: '6'
      },
      tps: {
        '3,2': {
          s: '1'
        },
        '0,2': {
          s: '1'
        },
        '1,2': {
          s: '1'
        },
        '3,1': {
          s: '1'
        },
        '0,0': {
          s: '1'
        },
        '1,0': {
          s: '1'
        },
        '3,0': {
          s: '1'
        },
        '4,0': {
          s: '1'
        },
        '2,2': {
          s: '1'
        },
        '0,1': {
          s: '1'
        },
        '2,0': {
          s: '1'
        },
        '2,1': {
          s: '1'
        }
      }
    },
    chair0: {
      cols: 1,
      rows: 1,
      baseLoc: '0,0',
      origin: '0,0',
      tiles: {
        '0,0': {
          r: '6',
          i: 21
        }
      },
      instances: [],
      properties: {},
      tps: {
        '0,0': {
          layer: '0.5'
        }
      }
    },
    igloo0: {
      cols: 5,
      rows: 6,
      baseLoc: '2,3',
      origin: '0,0',
      tiles: {
        '1,1': {
          r: '9',
          i: 16
        },
        '4,2': {
          r: '9',
          i: 34
        },
        '3,5': {
          r: '9',
          i: 78
        },
        '4,5': {
          r: '9',
          i: 79
        },
        '4,1': {
          r: '9',
          i: 19
        },
        '3,4': {
          r: '9',
          i: 63
        },
        '0,1': {
          r: '9',
          i: 15
        },
        '2,0': {
          r: '9',
          i: 2
        },
        '0,5': {
          r: '9',
          i: 75
        },
        '2,3': {
          r: '9',
          i: 47
        },
        '3,0': {
          r: '9',
          i: 3
        },
        '0,4': {
          r: '9',
          i: 60
        },
        '2,5': {
          r: '9',
          i: 77
        },
        '3,3': {
          r: '9',
          i: 48
        },
        '3,1': {
          r: '9',
          i: 18
        },
        '1,3': {
          r: '9',
          i: 46
        },
        '4,3': {
          r: '9',
          i: 49
        },
        '0,3': {
          r: '9',
          i: 45
        },
        '3,2': {
          r: '9',
          i: 33
        },
        '1,4': {
          r: '9',
          i: 61
        },
        '2,4': {
          r: '9',
          i: 62
        },
        '0,2': {
          r: '9',
          i: 30
        },
        '1,2': {
          r: '9',
          i: 31
        },
        '1,5': {
          r: '9',
          i: 76
        },
        '1,0': {
          r: '9',
          i: 1
        },
        '4,4': {
          r: '9',
          i: 64
        },
        '2,2': {
          r: '9',
          i: 32
        },
        '2,1': {
          r: '9',
          i: 17
        }
      },
      instances: [],
      properties: {
        layer: 'up'
      },
      tps: {
        '3,5': {
          layer: '9'
        },
        '1,1': {
          layer: '9'
        },
        '0,3': {
          layer: '9'
        },
        '4,2': {
          layer: '9'
        },
        '2,3': {
          skyobj: '1'
        },
        '1,4': {
          skyobj: '1'
        },
        '2,4': {
          skyobj: '1'
        },
        '3,2': {
          skyobj: '1'
        },
        '3,1': {
          layer: '9'
        },
        '0,2': {
          layer: '9'
        },
        '1,2': {
          skyobj: '1'
        },
        '3,4': {
          skyobj: '1'
        },
        '1,5': {
          layer: '9'
        },
        '3,3': {
          skyobj: '1'
        },
        '0,4': {
          layer: '9'
        },
        '2,5': {
          layer: '9'
        },
        '4,4': {
          layer: '9'
        },
        '2,2': {
          skyobj: '1'
        },
        '2,1': {
          skyobj: '1'
        },
        '1,3': {
          skyobj: '1'
        },
        '4,3': {
          layer: '9'
        }
      }
    },
    shadows: {
      cols: 9,
      rows: 4,
      baseLoc: '0,0',
      origin: '0,0',
      tiles: {
        '1,1': {
          r: '1',
          i: 299
        },
        '2,2': {
          r: '4',
          i: 376
        },
        '4,2': {
          r: '4',
          i: 164
        },
        '0,0': {
          r: '4',
          i: 360
        },
        '7,1': {
          r: '4',
          i: 222
        },
        '5,0': {
          r: '4',
          i: 237
        },
        '4,1': {
          r: '4',
          i: 406
        },
        '7,0': {
          r: '4',
          i: 207
        },
        '0,1': {
          r: '4',
          i: 367
        },
        '2,0': {
          r: '4',
          i: 361
        },
        '8,0': {
          r: '4',
          i: 208
        },
        '3,1': {
          r: '4',
          i: 405
        },
        '3,0': {
          r: '4',
          i: 390
        },
        '6,2': {
          r: '4',
          i: 393
        },
        '6,1': {
          r: '4',
          i: 253
        },
        '5,3': {
          r: '4',
          i: 407
        },
        '3,2': {
          r: '4',
          i: 179
        },
        '8,1': {
          r: '4',
          i: 223
        },
        '5,2': {
          r: '4',
          i: 392
        },
        '6,3': {
          r: '4',
          i: 408
        },
        '0,2': {
          r: '4',
          i: 375
        },
        '5,1': {
          r: '4',
          i: 252
        },
        '2,1': {
          r: '4',
          i: 365
        },
        '1,0': {
          r: '4',
          i: 368
        },
        '4,0': {
          r: '4',
          i: 391
        },
        '6,0': {
          r: '4',
          i: 238
        },
        '1,2': {
          r: '4',
          i: 366
        }
      },
      instances: [],
      properties: {
        cat: 'system'
      },
      tps: {}
    },
    sky036: {
      cols: 1,
      rows: 1,
      baseLoc: '0,0',
      origin: '0,0',
      tiles: {
        '0,0': {
          r: '4',
          i: 211
        }
      },
      instances: [],
      properties: {
        cat: 'sky'
      },
      tps: {}
    },
    wallset8: {
      cols: 5,
      rows: 3,
      baseLoc: '0,0',
      origin: '0,0',
      tiles: {
        '0,2': {
          r: '7',
          i: 208
        },
        '1,2': {
          r: '7',
          i: 238
        },
        '3,1': {
          r: '7',
          i: 233
        },
        '3,2': {
          r: '7',
          i: 248
        },
        '3,0': {
          r: '7',
          i: 268
        },
        '0,1': {
          r: '7',
          i: 191
        },
        '4,0': {
          r: '7',
          i: 269
        },
        '2,2': {
          r: '7',
          i: 206
        },
        '0,0': {
          r: '7',
          i: 176
        },
        '1,0': {
          r: '7',
          i: 177
        },
        '2,0': {
          r: '7',
          i: 178
        },
        '2,1': {
          r: '7',
          i: 193
        }
      },
      instances: [],
      properties: {
        cat: 'wallset',
        dlayer: '6'
      },
      tps: {
        '3,2': {
          s: '1'
        },
        '0,2': {
          s: '1'
        },
        '1,2': {
          s: '1'
        },
        '3,1': {
          s: '1'
        },
        '0,0': {
          s: '1'
        },
        '1,0': {
          s: '1'
        },
        '3,0': {
          s: '1'
        },
        '4,0': {
          s: '1'
        },
        '2,2': {
          s: '1'
        },
        '0,1': {
          s: '1'
        },
        '2,0': {
          s: '1'
        },
        '2,1': {
          s: '1'
        }
      }
    },
    dsta1: {
      cols: 3,
      rows: 1,
      baseLoc: '1,0',
      origin: '0,0',
      tiles: {
        '0,0': {
          r: '0',
          i: 143
        },
        '1,0': {
          r: '0',
          i: 144
        },
        '2,0': {
          r: '0',
          i: 145
        }
      },
      instances: [],
      properties: {
        cat: 'stair'
      },
      tps: {
        '0,0': {
          test: 'edge;tileset1;1,0'
        },
        '1,0': {
          layer: '0.5',
          test: 'edge;tileset1;1,0'
        },
        '2,0': {
          test: 'edge;tileset1;1,0'
        }
      }
    },
    sky002: {
      cols: 1,
      rows: 1,
      baseLoc: '0,0',
      origin: '0,0',
      tiles: {
        '0,0': {
          r: '1',
          i: 250
        }
      },
      instances: [],
      properties: {
        cat: 'sky'
      },
      tps: {}
    },
    dstad3: {
      cols: 2,
      rows: 2,
      baseLoc: '0,0',
      origin: '0,0',
      tiles: {
        '1,1': {
          r: '1',
          i: 366
        },
        '0,0': {
          r: '1',
          i: 399
        },
        '0,1': {
          r: '1',
          i: 398
        },
        '1,0': {
          r: '1',
          i: 351
        }
      },
      instances: [],
      properties: {
        cat: 'stair'
      },
      tps: {
        '1,1': {
          test: 'edge;tileset1;0,1'
        },
        '0,0': {
          layer: '0.5',
          test: 'flat'
        },
        '0,1': {
          layer: '0.5',
          test: 'flat'
        },
        '1,0': {
          test: 'edge;tileset1;0,1'
        }
      }
    },
    table3: {
      cols: 3,
      rows: 5,
      baseLoc: '0,0',
      origin: '0,0',
      tiles: {
        '0,2': {
          r: '6',
          i: 42
        },
        '0,3': {
          r: '6',
          i: 57
        },
        '0,0': {
          r: '6',
          i: 12
        },
        '1,0': {
          r: '6',
          i: 13
        },
        '0,4': {
          r: '6',
          i: 72
        },
        '0,1': {
          r: '6',
          i: 27
        },
        '2,0': {
          r: '6',
          i: 14
        }
      },
      instances: [],
      properties: {},
      tps: {
        '0,2': {
          layer: '1'
        },
        '0,3': {
          layer: '1'
        },
        '0,0': {
          layer: '1'
        },
        '1,0': {
          layer: '1'
        },
        '0,4': {
          layer: '1'
        },
        '0,1': {
          layer: '1'
        },
        '2,0': {
          layer: '1'
        }
      }
    },
    rock1: {
      cols: 3,
      rows: 3,
      baseLoc: '1,1',
      origin: '0,0',
      tiles: {
        '0,2': {
          r: '4',
          i: 78
        },
        '1,2': {
          r: '4',
          i: 79
        },
        '0,0': {
          r: '4',
          i: 48
        },
        '1,0': {
          r: '4',
          i: 49
        },
        '1,1': {
          r: '4',
          i: 64
        },
        '2,2': {
          r: '4',
          i: 80
        },
        '0,1': {
          r: '4',
          i: 63
        },
        '2,0': {
          r: '4',
          i: 50
        },
        '2,1': {
          r: '4',
          i: 65
        }
      },
      instances: [],
      properties: {},
      tps: {
        '0,2': {
          layer: '3'
        },
        '1,2': {
          layer: '3'
        },
        '0,0': {
          layer: '3'
        },
        '1,0': {
          layer: '3'
        },
        '1,1': {
          layer: '3'
        },
        '2,2': {
          layer: '3'
        },
        '0,1': {
          layer: '3'
        },
        '2,0': {
          layer: '3'
        },
        '2,1': {
          layer: '3'
        }
      }
    },
    dsta2: {
      cols: 1,
      rows: 3,
      baseLoc: '0,1',
      origin: '0,0',
      tiles: {
        '0,0': {
          r: '0',
          i: 149
        },
        '0,1': {
          r: '0',
          i: 164
        },
        '0,2': {
          r: '0',
          i: 179
        }
      },
      instances: [],
      properties: {
        cat: 'stair'
      },
      tps: {
        '0,0': {
          test: 'edge;tileset1;2,1'
        },
        '0,1': {
          layer: '0.5',
          test: 'edge;tileset1;2,1'
        },
        '0,2': {
          test: 'edge;tileset1;2,1'
        }
      }
    },
    dstai2a: {
      cols: 1,
      rows: 3,
      baseLoc: '0,1',
      origin: '0,0',
      tiles: {
        '0,0': {
          r: '8',
          i: 104
        },
        '0,1': {
          r: '8',
          i: 119
        },
        '0,2': {
          r: '8',
          i: 134
        }
      },
      instances: [],
      properties: {
        cat: 'stair'
      },
      tps: {
        '0,0': {
          block: '1',
          layer: '0',
          test: 'edge;tilesetD;2,1'
        },
        '0,1': {
          block: '0',
          layer: '0',
          test: 'edge;tilesetD;2,1'
        },
        '0,2': {
          block: '1',
          layer: '0',
          test: 'edge;tilesetD;2,1'
        }
      }
    },
    sandbags: {
      cols: 1,
      rows: 1,
      baseLoc: '0,0',
      origin: '0,0',
      tiles: {
        '0,0': {
          r: '6',
          i: 223
        }
      },
      instances: [],
      properties: {},
      tps: {
        '0,0': {
          leave: '1',
          layer: '1'
        }
      }
    },
    sky013: {
      cols: 1,
      rows: 1,
      baseLoc: '0,0',
      origin: '0,0',
      tiles: {
        '0,0': {
          r: '0',
          i: 16
        }
      },
      instances: [],
      properties: {
        cat: 'sky'
      },
      tps: {}
    },
    pillar0a: {
      cols: 1,
      rows: 1,
      baseLoc: '0,0',
      origin: '0,0',
      tiles: {
        '0,0': {
          r: '1',
          i: 267
        }
      },
      instances: [],
      properties: {},
      tps: {
        '0,0': {
          s: '1',
          layer: '7'
        }
      }
    },
    sky005: {
      cols: 1,
      rows: 1,
      baseLoc: '0,0',
      origin: '0,0',
      tiles: {
        '0,0': {
          r: '7',
          i: 267
        }
      },
      instances: [],
      properties: {
        cat: 'sky'
      },
      tps: {}
    },
    dstb2: {
      cols: 1,
      rows: 4,
      baseLoc: '0,1',
      origin: '0,0',
      tiles: {
        '0,2': {
          r: '0',
          i: 164
        },
        '0,3': {
          r: '0',
          i: 179
        },
        '0,0': {
          r: '0',
          i: 149
        },
        '0,1': {
          r: '0',
          i: 164
        }
      },
      instances: [],
      properties: {
        cat: 'stair'
      },
      tps: {
        '0,2': {
          layer: '0.5',
          test: 'edge;tileset1;2,1'
        },
        '0,3': {
          test: 'edge;tileset1;2,1'
        },
        '0,0': {
          test: 'edge;tileset1;2,1'
        },
        '0,1': {
          layer: '0.5',
          test: 'edge;tileset1;2,1'
        }
      }
    },
    sky047: {
      cols: 1,
      rows: 1,
      baseLoc: '0,0',
      origin: '0,0',
      tiles: {
        '0,0': {
          r: '8',
          i: 16
        }
      },
      instances: [],
      properties: {
        cat: 'sky'
      },
      tps: {}
    },
    shadow1_w: {
      cols: 1,
      rows: 1,
      baseLoc: '0,0',
      origin: '0,0',
      tiles: {
        '0,0': {
          r: '4',
          i: 81
        }
      },
      instances: [],
      properties: {
        layer: 'up'
      },
      tps: {}
    },
    camp3: {
      cols: 1,
      rows: 1,
      baseLoc: '0,0',
      origin: '0,0',
      tiles: {
        '0,0': {
          r: '3',
          i: 2
        }
      },
      instances: [],
      properties: {
        cat: 'camp',
        tip: 'third'
      },
      tps: {
        '0,0': {
          camp: '3'
        }
      }
    },
    shine3_w: {
      cols: 1,
      rows: 1,
      baseLoc: '0,0',
      origin: '0,0',
      tiles: {
        '0,0': {
          r: '4',
          i: 381
        }
      },
      instances: [],
      properties: {
        layer: 'up'
      },
      tps: {}
    },
    sky008: {
      cols: 1,
      rows: 1,
      baseLoc: '0,0',
      origin: '0,0',
      tiles: {
        '0,0': {
          r: '7',
          i: 321
        }
      },
      instances: [],
      properties: {
        cat: 'sky'
      },
      tps: {}
    },
    house3: {
      cols: 4,
      rows: 4,
      baseLoc: '1,1',
      origin: '0,0',
      tiles: {
        '1,1': {
          r: '4',
          i: 211
        },
        '0,3': {
          r: '4',
          i: 255
        },
        '0,0': {
          r: '4',
          i: 195
        },
        '3,2': {
          r: '4',
          i: 243
        },
        '2,2': {
          r: '4',
          i: 242
        },
        '0,1': {
          r: '4',
          i: 210
        },
        '2,0': {
          r: '4',
          i: 197
        },
        '1,3': {
          r: '4',
          i: 256
        },
        '2,1': {
          r: '4',
          i: 212
        },
        '0,2': {
          r: '4',
          i: 240
        },
        '1,2': {
          r: '4',
          i: 241
        },
        '3,1': {
          r: '4',
          i: 213
        },
        '3,0': {
          r: '4',
          i: 198
        },
        '3,3': {
          r: '4',
          i: 258
        },
        '2,3': {
          r: '4',
          i: 257
        },
        '1,0': {
          r: '4',
          i: 196
        }
      },
      instances: [],
      properties: {},
      tps: {
        '1,1': {
          test: 'flat',
          block: '0',
          layer: '2.5'
        },
        '0,3': {
          test: 'flat',
          block: '0',
          layer: '2'
        },
        '0,0': {
          test: 'flat',
          block: '0',
          layer: '2'
        },
        '3,1': {
          test: 'flat',
          block: '0',
          layer: '2'
        },
        '3,0': {
          test: 'flat',
          block: '0',
          layer: '2'
        },
        '3,3': {
          test: 'flat',
          block: '0',
          layer: '2'
        },
        '0,1': {
          test: 'flat',
          block: '0',
          layer: '2'
        },
        '2,0': {
          test: 'flat',
          block: '0',
          s: '1',
          layer: '2.5'
        },
        '0,2': {
          test: 'flat',
          block: '0',
          layer: '2'
        },
        '1,2': {
          test: 'flat',
          block: '0',
          layer: '2.5'
        },
        '2,3': {
          test: 'flat',
          block: '0',
          s: '1',
          layer: '2.5'
        },
        '1,0': {
          test: 'flat',
          block: '0',
          s: '1',
          layer: '2.5'
        },
        '3,2': {
          test: 'flat',
          block: '0',
          layer: '2'
        },
        '2,2': {
          test: 'flat',
          block: '0',
          layer: '2.5'
        },
        '2,1': {
          test: 'flat',
          block: '0',
          layer: '2.5'
        },
        '1,3': {
          test: 'flat',
          block: '0',
          s: '1',
          layer: '2.5'
        }
      }
    },
    stair1: {
      cols: 2,
      rows: 1,
      baseLoc: '0,0',
      origin: '0,0',
      tiles: {
        '0,0': {
          r: '0',
          i: 133
        },
        '1,0': {
          r: '0',
          i: 134
        }
      },
      instances: [],
      properties: {
        cat: 'stair'
      },
      tps: {
        '0,0': {
          layer: '0.5',
          test: 'edge;tileset0;1,2'
        },
        '1,0': {
          layer: '0.5',
          test: 'edge;tileset0;1,2'
        }
      }
    },
    pillar1: {
      cols: 2,
      rows: 2,
      baseLoc: '0,0',
      origin: '0,0',
      tiles: {
        '1,1': {
          r: '1',
          i: 229
        },
        '0,0': {
          r: '1',
          i: 166
        },
        '0,1': {
          r: '1',
          i: 225
        },
        '1,0': {
          r: '1',
          i: 168
        }
      },
      instances: [],
      properties: {},
      tps: {
        '1,1': {
          s: '1',
          layer: '9'
        },
        '0,0': {
          s: '1',
          layer: '9'
        },
        '0,1': {
          s: '1',
          layer: '9'
        },
        '1,0': {
          s: '1',
          layer: '9'
        }
      }
    },
    stair2: {
      cols: 1,
      rows: 2,
      baseLoc: '0,0',
      origin: '0,0',
      tiles: {
        '0,0': {
          r: '0',
          i: 70
        },
        '0,1': {
          r: '0',
          i: 85
        }
      },
      instances: [],
      properties: {
        cat: 'stair'
      },
      tps: {
        '0,0': {
          layer: '0.5',
          test: 'edge;tileset0;0,1'
        },
        '0,1': {
          layer: '0.5',
          test: 'edge;tileset0;0,1'
        }
      }
    },
    dstad1: {
      cols: 2,
      rows: 2,
      baseLoc: '0,0',
      origin: '0,0',
      tiles: {
        '1,1': {
          r: '1',
          i: 384
        },
        '0,0': {
          r: '1',
          i: 366
        },
        '0,1': {
          r: '1',
          i: 383
        },
        '1,0': {
          r: '1',
          i: 367
        }
      },
      instances: [],
      properties: {
        cat: 'stair'
      },
      tps: {
        '1,1': {
          layer: '0.5',
          test: 'flat'
        },
        '0,0': {
          test: 'edge;tileset1;1,2'
        },
        '0,1': {
          layer: '0.5',
          test: 'flat'
        },
        '1,0': {
          test: 'edge;tileset1;1,2'
        }
      }
    },
    sky016: {
      cols: 1,
      rows: 1,
      baseLoc: '0,0',
      origin: '0,0',
      tiles: {
        '0,0': {
          r: '1',
          i: 180
        }
      },
      instances: [],
      properties: {
        cat: 'sky'
      },
      tps: {}
    },
    pillar1a: {
      cols: 1,
      rows: 1,
      baseLoc: '0,0',
      origin: '0,0',
      tiles: {
        '0,0': {
          r: '1',
          i: 336
        }
      },
      instances: [],
      properties: {},
      tps: {
        '0,0': {
          s: '1',
          layer: '7'
        }
      }
    },
    warp: {
      cols: 1,
      rows: 1,
      baseLoc: '0,0',
      origin: '0,0',
      tiles: {
        '0,0': {
          r: '3',
          i: 34
        }
      },
      instances: [],
      properties: {
        cat: 'device',
        prop: '1',
        device: 'warp'
      },
      tps: {}
    },
    shadow2_w: {
      cols: 2,
      rows: 1,
      baseLoc: '1,0',
      origin: '0,0',
      tiles: {
        '0,0': {
          r: '4',
          i: 81
        },
        '1,0': {
          r: '4',
          i: 82
        }
      },
      instances: [],
      properties: {
        layer: 'up'
      },
      tps: {}
    },
    fireplace3: {
      cols: 3,
      rows: 1,
      baseLoc: '1,0',
      origin: '0,0',
      tiles: {
        '0,0': {
          r: '6',
          i: 213
        },
        '1,0': {
          r: '6',
          i: 214
        },
        '2,0': {
          r: '6',
          i: 215
        }
      },
      instances: [],
      properties: {},
      tps: {
        '0,0': {
          layer: '1'
        },
        '1,0': {
          layer: '3'
        },
        '2,0': {
          layer: '1'
        }
      }
    },
    sky046: {
      cols: 1,
      rows: 1,
      baseLoc: '0,0',
      origin: '0,0',
      tiles: {
        '0,0': {
          r: '6',
          i: 142
        }
      },
      instances: [],
      properties: {
        cat: 'sky'
      },
      tps: {}
    },
    table03: {
      cols: 6,
      rows: 6,
      baseLoc: '2,2',
      origin: '0,0',
      tiles: {
        '1,1': {
          r: '6',
          i: 23
        },
        '2,2': {
          r: '6',
          i: 23
        },
        '4,2': {
          r: '6',
          i: 23
        },
        '0,0': {
          r: '6',
          i: 7
        },
        '3,5': {
          r: '6',
          i: 38
        },
        '5,0': {
          r: '6',
          i: 9
        },
        '4,1': {
          r: '6',
          i: 23
        },
        '3,4': {
          r: '6',
          i: 23
        },
        '0,1': {
          r: '6',
          i: 22
        },
        '2,0': {
          r: '6',
          i: 8
        },
        '2,1': {
          r: '6',
          i: 23
        },
        '0,5': {
          r: '6',
          i: 37
        },
        '4,5': {
          r: '6',
          i: 38
        },
        '3,1': {
          r: '6',
          i: 23
        },
        '3,0': {
          r: '6',
          i: 8
        },
        '0,4': {
          r: '6',
          i: 22
        },
        '2,5': {
          r: '6',
          i: 38
        },
        '3,3': {
          r: '6',
          i: 23
        },
        '2,3': {
          r: '6',
          i: 23
        },
        '1,3': {
          r: '6',
          i: 23
        },
        '5,3': {
          r: '6',
          i: 24
        },
        '0,3': {
          r: '6',
          i: 22
        },
        '3,2': {
          r: '6',
          i: 23
        },
        '4,3': {
          r: '6',
          i: 23
        },
        '1,4': {
          r: '6',
          i: 23
        },
        '5,5': {
          r: '6',
          i: 39
        },
        '5,4': {
          r: '6',
          i: 24
        },
        '0,2': {
          r: '6',
          i: 22
        },
        '5,1': {
          r: '6',
          i: 24
        },
        '2,4': {
          r: '6',
          i: 23
        },
        '1,0': {
          r: '6',
          i: 8
        },
        '4,0': {
          r: '6',
          i: 8
        },
        '4,4': {
          r: '6',
          i: 23
        },
        '1,2': {
          r: '6',
          i: 23
        },
        '1,5': {
          r: '6',
          i: 38
        },
        '5,2': {
          r: '6',
          i: 24
        }
      },
      instances: [],
      properties: {
        dlayer: '1'
      },
      tps: {
        '1,1': {
          layer: '1'
        },
        '4,2': {
          layer: '1'
        },
        '0,0': {
          layer: '1'
        },
        '3,5': {
          layer: '1'
        },
        '5,5': {
          layer: '1'
        },
        '4,5': {
          layer: '1'
        },
        '4,1': {
          layer: '1'
        },
        '3,4': {
          layer: '1'
        },
        '0,1': {
          layer: '1'
        },
        '2,0': {
          layer: '1'
        },
        '0,5': {
          layer: '1'
        },
        '5,0': {
          layer: '1'
        },
        '2,3': {
          layer: '1'
        },
        '3,0': {
          layer: '1'
        },
        '0,4': {
          layer: '1'
        },
        '2,5': {
          layer: '1'
        },
        '5,1': {
          layer: '1'
        },
        '3,3': {
          layer: '1'
        },
        '3,1': {
          layer: '1'
        },
        '1,3': {
          layer: '1'
        },
        '4,3': {
          layer: '1'
        },
        '0,3': {
          layer: '1'
        },
        '3,2': {
          layer: '1'
        },
        '5,3': {
          layer: '1'
        },
        '1,4': {
          layer: '1'
        },
        '2,4': {
          layer: '1'
        },
        '5,4': {
          layer: '1'
        },
        '0,2': {
          layer: '1'
        },
        '1,2': {
          layer: '1'
        },
        '1,5': {
          layer: '1'
        },
        '1,0': {
          layer: '1'
        },
        '4,0': {
          layer: '1'
        },
        '4,4': {
          layer: '1'
        },
        '2,2': {
          layer: '1'
        },
        '2,1': {
          layer: '1'
        },
        '5,2': {
          layer: '1'
        }
      }
    },
    camp2: {
      cols: 1,
      rows: 1,
      baseLoc: '0,0',
      origin: '0,0',
      tiles: {
        '0,0': {
          r: '3',
          i: 1
        }
      },
      instances: [],
      properties: {
        cat: 'camp',
        tip: 'royal'
      },
      tps: {
        '0,0': {
          camp: '2'
        }
      }
    },
    pillar0: {
      cols: 2,
      rows: 2,
      baseLoc: '0,0',
      origin: '0,0',
      tiles: {
        '1,1': {
          r: '1',
          i: 149
        },
        '0,0': {
          r: '1',
          i: 86
        },
        '0,1': {
          r: '1',
          i: 145
        },
        '1,0': {
          r: '1',
          i: 88
        }
      },
      instances: [],
      properties: {},
      tps: {
        '1,1': {
          s: '1',
          layer: '9'
        },
        '0,0': {
          s: '1',
          layer: '9'
        },
        '0,1': {
          s: '1',
          layer: '9'
        },
        '1,0': {
          s: '1',
          layer: '9'
        }
      }
    },
    lib_moveable_3_ice: {
      cols: 2,
      rows: 2,
      baseLoc: '0,0',
      origin: '0,0',
      tiles: {
        '1,1': {
          r: '4',
          i: 27
        },
        '0,0': {
          r: '4',
          i: 11
        },
        '0,1': {
          r: '4',
          i: 26
        },
        '1,0': {
          r: '4',
          i: 12
        }
      },
      instances: [],
      properties: {
        cat: 'device',
        device: 'block',
        dlayer: '1.5'
      },
      tps: {}
    },
    sky021: {
      cols: 1,
      rows: 1,
      baseLoc: '0,0',
      origin: '0,0',
      tiles: {
        '0,0': {
          r: '1',
          i: 347
        }
      },
      instances: [],
      properties: {
        cat: 'sky'
      },
      tps: {}
    },
    shine2_n: {
      cols: 1,
      rows: 2,
      baseLoc: '0,1',
      origin: '0,0',
      tiles: {
        '0,0': {
          r: '4',
          i: 334
        },
        '0,1': {
          r: '4',
          i: 349
        }
      },
      instances: [],
      properties: {
        layer: 'up'
      },
      tps: {}
    },
    tree4: {
      cols: 1,
      rows: 1,
      baseLoc: '0,0',
      origin: '0,0',
      tiles: {
        '0,0': {
          r: '4',
          i: 92
        }
      },
      instances: [],
      properties: {},
      tps: {
        '0,0': {
          layer: '1'
        }
      }
    },
    bridge0: {
      cols: 7,
      rows: 4,
      baseLoc: '0,1',
      origin: '0,0',
      tiles: {
        '1,1': {
          r: '4',
          i: 106
        },
        '2,2': {
          r: '4',
          i: 122
        },
        '4,2': {
          r: '4',
          i: 252
        },
        '0,0': {
          r: '4',
          i: 194
        },
        '3,2': {
          r: '4',
          i: 124
        },
        '4,3': {
          r: '4',
          i: 267
        },
        '5,0': {
          r: '4',
          i: 95
        },
        '4,1': {
          r: '4',
          i: 252
        },
        '6,0': {
          r: '4',
          i: 96
        },
        '5,2': {
          r: '4',
          i: 140
        },
        '2,0': {
          r: '4',
          i: 237
        },
        '6,3': {
          r: '4',
          i: 156
        },
        '2,1': {
          r: '4',
          i: 107
        },
        '0,2': {
          r: '4',
          i: 120
        },
        '5,1': {
          r: '4',
          i: 125
        },
        '0,1': {
          r: '4',
          i: 105
        },
        '1,0': {
          r: '4',
          i: 237
        },
        '4,0': {
          r: '4',
          i: 224
        },
        '6,2': {
          r: '4',
          i: 141
        },
        '1,2': {
          r: '4',
          i: 121
        },
        '3,1': {
          r: '4',
          i: 109
        },
        '3,0': {
          r: '4',
          i: 239
        },
        '6,1': {
          r: '4',
          i: 126
        },
        '5,3': {
          r: '4',
          i: 155
        }
      },
      instances: [],
      properties: {
        cat: 'bridge',
        size: '1'
      },
      tps: {
        '1,1': {
          block: '0',
          layer: '1'
        },
        '5,1': {
          layer: '1',
          block: '0'
        },
        '2,1': {
          block: '0',
          layer: '1'
        },
        '3,1': {
          block: '0',
          layer: '0.5'
        },
        '5,0': {
          block: '0',
          layer: '0.5'
        },
        '0,1': {
          block: '0',
          layer: '0.5'
        },
        '5,2': {
          block: '0',
          layer: '1'
        },
        '5,3': {
          block: '0',
          layer: '0.5'
        }
      }
    },
    shine1_w: {
      cols: 1,
      rows: 1,
      baseLoc: '0,0',
      origin: '0,0',
      tiles: {
        '0,0': {
          r: '4',
          i: 332
        }
      },
      instances: [],
      properties: {
        layer: 'up'
      },
      tps: {}
    },
    sky028: {
      cols: 1,
      rows: 1,
      baseLoc: '0,0',
      origin: '0,0',
      tiles: {
        '0,0': {
          r: '2',
          i: 16
        }
      },
      instances: [],
      properties: {
        cat: 'sky'
      },
      tps: {}
    },
    bridge6: {
      cols: 9,
      rows: 5,
      baseLoc: '0,1',
      origin: '0,0',
      tiles: {
        '1,1': {
          r: '5',
          i: 0
        },
        '2,2': {
          r: '4',
          i: 388
        },
        '4,2': {
          r: '4',
          i: 396
        },
        '0,0': {
          r: '5',
          i: 19
        },
        '7,1': {
          r: '5',
          i: 27
        },
        '5,0': {
          r: '5',
          i: 57
        },
        '4,1': {
          r: '4',
          i: 396
        },
        '7,0': {
          r: '5',
          i: 58
        },
        '0,1': {
          r: '5',
          i: 43
        },
        '2,0': {
          r: '4',
          i: 389
        },
        '5,2': {
          r: '5',
          i: 0
        },
        '3,4': {
          r: '5',
          i: 44
        },
        '3,1': {
          r: '5',
          i: 14
        },
        '3,0': {
          r: '5',
          i: 34
        },
        '0,4': {
          r: '5',
          i: 28
        },
        '6,2': {
          r: '4',
          i: 397
        },
        '3,3': {
          r: '5',
          i: 29
        },
        '8,0': {
          r: '5',
          i: 59
        },
        '2,3': {
          r: '5',
          i: 42
        },
        '1,3': {
          r: '5',
          i: 42
        },
        '6,1': {
          r: '4',
          i: 397
        },
        '5,3': {
          r: '5',
          i: 57
        },
        '0,3': {
          r: '5',
          i: 13
        },
        '3,2': {
          r: '5',
          i: 49
        },
        '4,3': {
          r: '5',
          i: 48
        },
        '8,1': {
          r: '5',
          i: 41
        },
        '8,3': {
          r: '5',
          i: 55
        },
        '1,4': {
          r: '5',
          i: 26
        },
        '2,4': {
          r: '5',
          i: 26
        },
        '7,2': {
          r: '5',
          i: 27
        },
        '0,2': {
          r: '5',
          i: 48
        },
        '5,1': {
          r: '5',
          i: 0
        },
        '2,1': {
          r: '5',
          i: 0
        },
        '7,3': {
          r: '5',
          i: 54
        },
        '6,3': {
          r: '5',
          i: 49
        },
        '8,2': {
          r: '5',
          i: 41
        },
        '4,0': {
          r: '5',
          i: 19
        },
        '6,0': {
          r: '5',
          i: 34
        },
        '1,2': {
          r: '4',
          i: 388
        },
        '1,0': {
          r: '4',
          i: 389
        }
      },
      instances: [],
      properties: {
        cat: 'bridge',
        size: '2'
      },
      tps: {
        '1,1': {
          layer: '1',
          block: '0'
        },
        '5,1': {
          layer: '1',
          block: '0'
        },
        '2,1': {
          layer: '1',
          block: '0'
        },
        '3,1': {
          block: '0',
          layer: '0.5'
        },
        '5,0': {
          block: '0',
          layer: '0.5'
        },
        '0,1': {
          block: '0',
          layer: '0.5'
        },
        '5,2': {
          layer: '1',
          block: '0'
        },
        '5,3': {
          block: '0',
          layer: '0.5'
        }
      }
    },
    dste3: {
      cols: 2,
      rows: 4,
      baseLoc: '0,1',
      origin: '0,0',
      tiles: {
        '0,2': {
          r: '0',
          i: 63
        },
        '0,3': {
          r: '0',
          i: 280
        },
        '0,0': {
          r: '0',
          i: 278
        },
        '1,0': {
          r: '0',
          i: 279
        },
        '1,1': {
          r: '0',
          i: 63
        },
        '1,2': {
          r: '0',
          i: 63
        },
        '0,1': {
          r: '0',
          i: 63
        },
        '1,3': {
          r: '0',
          i: 281
        }
      },
      instances: [],
      properties: {
        cat: 'stair'
      },
      tps: {
        '0,2': {
          test: 'edge;tileset7;2,1'
        },
        '0,3': {
          test: 'edge;tileset7;2,1'
        },
        '0,0': {
          test: 'edge;tileset7;2,1'
        },
        '1,0': {
          test: 'flat'
        },
        '1,1': {
          layer: '0.5',
          test: 'flat'
        },
        '1,2': {
          layer: '0.5',
          test: 'flat'
        },
        '0,1': {
          test: 'edge;tileset7;2,1'
        },
        '1,3': {
          test: 'flat'
        }
      }
    },
    table02: {
      cols: 5,
      rows: 5,
      baseLoc: '2,2',
      origin: '0,0',
      tiles: {
        '2,2': {
          r: '6',
          i: 23
        },
        '1,1': {
          r: '6',
          i: 23
        },
        '0,3': {
          r: '6',
          i: 22
        },
        '4,2': {
          r: '6',
          i: 24
        },
        '0,0': {
          r: '6',
          i: 7
        },
        '3,2': {
          r: '6',
          i: 23
        },
        '1,0': {
          r: '6',
          i: 8
        },
        '4,1': {
          r: '6',
          i: 24
        },
        '1,4': {
          r: '6',
          i: 38
        },
        '2,4': {
          r: '6',
          i: 38
        },
        '2,0': {
          r: '6',
          i: 8
        },
        '1,3': {
          r: '6',
          i: 23
        },
        '2,3': {
          r: '6',
          i: 23
        },
        '0,2': {
          r: '6',
          i: 22
        },
        '1,2': {
          r: '6',
          i: 23
        },
        '3,4': {
          r: '6',
          i: 38
        },
        '3,1': {
          r: '6',
          i: 23
        },
        '3,0': {
          r: '6',
          i: 8
        },
        '0,4': {
          r: '6',
          i: 37
        },
        '4,0': {
          r: '6',
          i: 9
        },
        '4,4': {
          r: '6',
          i: 39
        },
        '3,3': {
          r: '6',
          i: 23
        },
        '2,1': {
          r: '6',
          i: 23
        },
        '0,1': {
          r: '6',
          i: 22
        },
        '4,3': {
          r: '6',
          i: 24
        }
      },
      instances: [],
      properties: {
        dlayer: '1'
      },
      tps: {
        '3,2': {
          layer: '1'
        },
        '1,1': {
          layer: '1'
        },
        '0,3': {
          layer: '1'
        },
        '4,2': {
          layer: '1'
        },
        '0,0': {
          layer: '1'
        },
        '3,1': {
          layer: '1'
        },
        '3,0': {
          layer: '1'
        },
        '2,4': {
          layer: '1'
        },
        '4,1': {
          layer: '1'
        },
        '1,4': {
          layer: '1'
        },
        '0,1': {
          layer: '1'
        },
        '2,0': {
          layer: '1'
        },
        '0,2': {
          layer: '1'
        },
        '1,2': {
          layer: '1'
        },
        '3,4': {
          layer: '1'
        },
        '2,1': {
          layer: '1'
        },
        '1,0': {
          layer: '1'
        },
        '0,4': {
          layer: '1'
        },
        '4,4': {
          layer: '1'
        },
        '4,0': {
          layer: '1'
        },
        '3,3': {
          layer: '1'
        },
        '2,2': {
          layer: '1'
        },
        '2,3': {
          layer: '1'
        },
        '1,3': {
          layer: '1'
        },
        '4,3': {
          layer: '1'
        }
      }
    },
    dstbi1: {
      cols: 4,
      rows: 1,
      baseLoc: '1,0',
      origin: '0,0',
      tiles: {
        '2,0': {
          r: '8',
          i: 12
        },
        '0,0': {
          r: '8',
          i: 11
        },
        '3,0': {
          r: '8',
          i: 13
        },
        '1,0': {
          r: '8',
          i: 12
        }
      },
      instances: [],
      properties: {
        cat: 'stair'
      },
      tps: {
        '3,0': {
          block: '1',
          layer: '0',
          test: 'edge;tilesetC;1,0'
        },
        '0,0': {
          block: '1',
          layer: '0',
          test: 'edge;tilesetC;1,0'
        },
        '1,0': {
          block: '0',
          layer: '0',
          test: 'edge;tilesetC;1,0'
        },
        '2,0': {
          layer: '0',
          test: 'edge;tilesetC;1,0',
          block: '0'
        }
      }
    },
    decobj4: {
      cols: 1,
      rows: 1,
      baseLoc: '0,0',
      origin: '0,0',
      tiles: {
        '0,0': {
          r: '6',
          i: 219
        }
      },
      instances: [],
      properties: {},
      tps: {
        '0,0': {
          layer: '0.5'
        }
      }
    },
    knife: {
      cols: 1,
      rows: 1,
      baseLoc: '0,0',
      origin: '0,0',
      tiles: {
        '0,0': {
          r: '3',
          i: 23
        }
      },
      instances: [],
      properties: {
        cat: 'invisible'
      },
      tps: {}
    },
    sea0: {
      cols: 5,
      rows: 3,
      baseLoc: '0,0',
      origin: '0,0',
      tiles: {
        '1,1': {
          r: '2',
          i: 61
        },
        '0,0': {
          r: '2',
          i: 45
        },
        '4,1': {
          r: '2',
          i: 82
        },
        '0,1': {
          r: '2',
          i: 60
        },
        '2,0': {
          r: '2',
          i: 47
        },
        '0,2': {
          r: '2',
          i: 75
        },
        '1,2': {
          r: '2',
          i: 76
        },
        '3,1': {
          r: '2',
          i: 80
        },
        '1,0': {
          r: '2',
          i: 46
        },
        '4,0': {
          r: '2',
          i: 52
        },
        '2,2': {
          r: '2',
          i: 77
        },
        '2,1': {
          r: '2',
          i: 62
        },
        '3,0': {
          r: '2',
          i: 50
        }
      },
      instances: [],
      properties: {
        cat: 'tileset'
      },
      tps: {
        '1,1': {
          water: '1'
        },
        '0,0': {
          water: '1'
        },
        '4,1': {
          water: '1'
        },
        '0,1': {
          water: '1'
        },
        '2,0': {
          water: '1'
        },
        '0,2': {
          water: '1'
        },
        '1,2': {
          water: '1'
        },
        '3,1': {
          water: '1'
        },
        '1,0': {
          water: '1'
        },
        '4,0': {
          water: '1'
        },
        '2,2': {
          water: '1'
        },
        '2,1': {
          water: '1'
        },
        '3,0': {
          water: '1'
        }
      }
    },
    table01: {
      cols: 4,
      rows: 4,
      baseLoc: '1,1',
      origin: '0,0',
      tiles: {
        '1,1': {
          r: '6',
          i: 23
        },
        '0,3': {
          r: '6',
          i: 37
        },
        '0,0': {
          r: '6',
          i: 7
        },
        '3,2': {
          r: '6',
          i: 24
        },
        '2,2': {
          r: '6',
          i: 23
        },
        '0,1': {
          r: '6',
          i: 22
        },
        '2,0': {
          r: '6',
          i: 8
        },
        '1,3': {
          r: '6',
          i: 38
        },
        '2,1': {
          r: '6',
          i: 23
        },
        '0,2': {
          r: '6',
          i: 22
        },
        '1,2': {
          r: '6',
          i: 23
        },
        '3,1': {
          r: '6',
          i: 24
        },
        '3,0': {
          r: '6',
          i: 9
        },
        '3,3': {
          r: '6',
          i: 39
        },
        '2,3': {
          r: '6',
          i: 38
        },
        '1,0': {
          r: '6',
          i: 8
        }
      },
      instances: [],
      properties: {
        dlayer: '1'
      },
      tps: {
        '1,1': {
          layer: '1'
        },
        '0,3': {
          layer: '1'
        },
        '0,0': {
          layer: '1'
        },
        '3,1': {
          layer: '1'
        },
        '3,0': {
          layer: '1'
        },
        '3,3': {
          layer: '1'
        },
        '0,1': {
          layer: '1'
        },
        '2,0': {
          layer: '1'
        },
        '0,2': {
          layer: '1'
        },
        '1,2': {
          layer: '1'
        },
        '2,3': {
          layer: '1'
        },
        '1,0': {
          layer: '1'
        },
        '3,2': {
          layer: '1'
        },
        '2,2': {
          layer: '1'
        },
        '2,1': {
          layer: '1'
        },
        '1,3': {
          layer: '1'
        }
      }
    },
    shine2_s: {
      cols: 1,
      rows: 2,
      baseLoc: '0,0',
      origin: '0,0',
      tiles: {
        '0,0': {
          r: '4',
          i: 335
        },
        '0,1': {
          r: '4',
          i: 350
        }
      },
      instances: [],
      properties: {
        layer: 'up'
      },
      tps: {}
    },
    wallset3: {
      cols: 5,
      rows: 3,
      baseLoc: '0,0',
      origin: '0,0',
      tiles: {
        '0,2': {
          r: '1',
          i: 315
        },
        '1,2': {
          r: '1',
          i: 316
        },
        '3,1': {
          r: '1',
          i: 320
        },
        '3,2': {
          r: '1',
          i: 335
        },
        '3,0': {
          r: '1',
          i: 290
        },
        '0,1': {
          r: '1',
          i: 300
        },
        '4,0': {
          r: '1',
          i: 291
        },
        '2,2': {
          r: '1',
          i: 286
        },
        '0,0': {
          r: '1',
          i: 256
        },
        '1,0': {
          r: '1',
          i: 257
        },
        '2,0': {
          r: '1',
          i: 258
        },
        '2,1': {
          r: '1',
          i: 273
        }
      },
      instances: [],
      properties: {
        cat: 'wallset',
        dlayer: '6'
      },
      tps: {
        '3,2': {
          s: '1'
        },
        '0,2': {
          s: '1'
        },
        '1,2': {
          s: '1'
        },
        '3,1': {
          s: '1'
        },
        '0,0': {
          s: '1'
        },
        '1,0': {
          s: '1'
        },
        '3,0': {
          s: '1'
        },
        '4,0': {
          s: '1'
        },
        '2,2': {
          s: '1'
        },
        '0,1': {
          s: '1'
        },
        '2,0': {
          s: '1'
        },
        '2,1': {
          s: '1'
        }
      }
    },
    pillar3: {
      cols: 2,
      rows: 2,
      baseLoc: '0,0',
      origin: '0,0',
      tiles: {
        '1,1': {
          r: '1',
          i: 286
        },
        '0,0': {
          r: '1',
          i: 285
        },
        '0,1': {
          r: '1',
          i: 315
        },
        '1,0': {
          r: '1',
          i: 258
        }
      },
      instances: [],
      properties: {},
      tps: {
        '1,1': {
          s: '1',
          layer: '9'
        },
        '0,0': {
          s: '1',
          layer: '9'
        },
        '0,1': {
          s: '1',
          layer: '9'
        },
        '1,0': {
          s: '1',
          layer: '9'
        }
      }
    },
    shadow3_s: {
      cols: 1,
      rows: 1,
      baseLoc: '0,0',
      origin: '0,0',
      tiles: {
        '0,0': {
          r: '4',
          i: 366
        }
      },
      instances: [],
      properties: {
        layer: 'up'
      },
      tps: {}
    },
    igloo1: {
      cols: 6,
      rows: 5,
      baseLoc: '2,2',
      origin: '0,0',
      tiles: {
        '1,1': {
          r: '9',
          i: 106
        },
        '2,2': {
          r: '9',
          i: 122
        },
        '4,2': {
          r: '9',
          i: 124
        },
        '0,0': {
          r: '9',
          i: 90
        },
        '4,1': {
          r: '9',
          i: 109
        },
        '3,4': {
          r: '9',
          i: 153
        },
        '0,1': {
          r: '9',
          i: 105
        },
        '2,0': {
          r: '9',
          i: 92
        },
        '3,1': {
          r: '9',
          i: 108
        },
        '3,0': {
          r: '9',
          i: 93
        },
        '0,4': {
          r: '9',
          i: 150
        },
        '3,3': {
          r: '9',
          i: 138
        },
        '2,3': {
          r: '9',
          i: 137
        },
        '1,3': {
          r: '9',
          i: 136
        },
        '5,3': {
          r: '9',
          i: 140
        },
        '0,3': {
          r: '9',
          i: 135
        },
        '3,2': {
          r: '9',
          i: 123
        },
        '4,3': {
          r: '9',
          i: 139
        },
        '1,4': {
          r: '9',
          i: 151
        },
        '2,4': {
          r: '9',
          i: 152
        },
        '0,2': {
          r: '9',
          i: 120
        },
        '5,1': {
          r: '9',
          i: 110
        },
        '2,1': {
          r: '9',
          i: 107
        },
        '1,0': {
          r: '9',
          i: 91
        },
        '4,0': {
          r: '9',
          i: 94
        },
        '4,4': {
          r: '9',
          i: 154
        },
        '1,2': {
          r: '9',
          i: 121
        },
        '5,2': {
          r: '9',
          i: 125
        }
      },
      instances: [],
      properties: {
        layer: 'up'
      },
      tps: {
        '3,3': {
          skyobj: '1'
        },
        '1,1': {
          skyobj: '1'
        },
        '0,3': {
          layer: '9'
        },
        '4,2': {
          skyobj: '1'
        },
        '3,1': {
          skyobj: '1'
        },
        '3,0': {
          layer: '9'
        },
        '2,4': {
          layer: '9'
        },
        '4,1': {
          layer: '9'
        },
        '1,4': {
          layer: '9'
        },
        '0,1': {
          layer: '9'
        },
        '2,0': {
          layer: '9'
        },
        '0,2': {
          layer: '9'
        },
        '1,2': {
          skyobj: '1'
        },
        '3,4': {
          layer: '9'
        },
        '2,1': {
          skyobj: '1'
        },
        '1,0': {
          layer: '9'
        },
        '3,2': {
          skyobj: '1'
        },
        '2,2': {
          skyobj: '1'
        },
        '2,3': {
          skyobj: '1'
        },
        '1,3': {
          skyobj: '1'
        },
        '4,3': {
          layer: '9'
        }
      }
    },
    platform5x5: {
      cols: 5,
      rows: 5,
      baseLoc: '2,2',
      origin: '0,0',
      tiles: {
        '2,2': {
          r: '6',
          i: 23
        },
        '1,1': {
          r: '6',
          i: 23
        },
        '0,3': {
          r: '6',
          i: 22
        },
        '4,2': {
          r: '6',
          i: 24
        },
        '0,0': {
          r: '6',
          i: 7
        },
        '3,2': {
          r: '6',
          i: 23
        },
        '1,0': {
          r: '6',
          i: 8
        },
        '4,1': {
          r: '6',
          i: 24
        },
        '1,4': {
          r: '6',
          i: 38
        },
        '2,4': {
          r: '6',
          i: 38
        },
        '2,0': {
          r: '6',
          i: 8
        },
        '1,3': {
          r: '6',
          i: 23
        },
        '2,3': {
          r: '6',
          i: 23
        },
        '0,2': {
          r: '6',
          i: 22
        },
        '1,2': {
          r: '6',
          i: 23
        },
        '3,4': {
          r: '6',
          i: 38
        },
        '3,1': {
          r: '6',
          i: 23
        },
        '3,0': {
          r: '6',
          i: 8
        },
        '0,4': {
          r: '6',
          i: 37
        },
        '4,0': {
          r: '6',
          i: 9
        },
        '4,4': {
          r: '6',
          i: 39
        },
        '3,3': {
          r: '6',
          i: 23
        },
        '2,1': {
          r: '6',
          i: 23
        },
        '0,1': {
          r: '6',
          i: 22
        },
        '4,3': {
          r: '6',
          i: 24
        }
      },
      instances: [],
      properties: {
        layer: 'ground'
      },
      tps: {}
    },
    sky034: {
      cols: 1,
      rows: 1,
      baseLoc: '0,0',
      origin: '0,0',
      tiles: {
        '0,0': {
          r: '0',
          i: 26
        }
      },
      instances: [],
      properties: {
        cat: 'sky'
      },
      tps: {}
    },
    tileset1: {
      cols: 9,
      rows: 4,
      baseLoc: '0,0',
      origin: '0,0',
      tiles: {
        '1,1': {
          r: '0',
          i: 16
        },
        '2,2': {
          r: '0',
          i: 48
        },
        '4,2': {
          r: '0',
          i: 267
        },
        '0,0': {
          r: '0',
          i: 0
        },
        '7,1': {
          r: '0',
          i: 174
        },
        '5,0': {
          r: '0',
          i: 158
        },
        '4,1': {
          r: '0',
          i: 128
        },
        '7,0': {
          r: '0',
          i: 159
        },
        '0,1': {
          r: '0',
          i: 30
        },
        '2,0': {
          r: '0',
          i: 3
        },
        '8,0': {
          r: '0',
          i: 160
        },
        '3,1': {
          r: '0',
          i: 127
        },
        '3,0': {
          r: '0',
          i: 121
        },
        '6,2': {
          r: '0',
          i: 254
        },
        '6,1': {
          r: '0',
          i: 173
        },
        '5,3': {
          r: '0',
          i: 268
        },
        '3,2': {
          r: '0',
          i: 266
        },
        '8,1': {
          r: '0',
          i: 175
        },
        '5,2': {
          r: '0',
          i: 253
        },
        '6,3': {
          r: '0',
          i: 269
        },
        '0,2': {
          r: '0',
          i: 45
        },
        '5,1': {
          r: '0',
          i: 157
        },
        '2,1': {
          r: '0',
          i: 18
        },
        '1,0': {
          r: '0',
          i: 1
        },
        '4,0': {
          r: '0',
          i: 122
        },
        '6,0': {
          r: '0',
          i: 172
        },
        '1,2': {
          r: '0',
          i: 47
        }
      },
      instances: [],
      properties: {
        cat: 'tileset'
      },
      tps: {
        '1,1': {
          block: '0',
          layer: '-1'
        },
        '4,2': {
          block: '0'
        },
        '0,0': {
          block: '0',
          layer: '-1'
        },
        '7,1': {
          block: '0'
        },
        '5,0': {
          block: '0'
        },
        '4,1': {
          block: '0',
          layer: '-1'
        },
        '7,0': {
          block: '0'
        },
        '0,1': {
          block: '0',
          layer: '-1'
        },
        '2,0': {
          block: '0',
          layer: '-1'
        },
        '8,0': {
          block: '0'
        },
        '3,1': {
          block: '0',
          layer: '-1'
        },
        '3,0': {
          block: '0',
          layer: '-1'
        },
        '5,1': {
          block: '0'
        },
        '6,2': {
          block: '0'
        },
        '6,1': {
          block: '0'
        },
        '5,3': {
          block: '0'
        },
        '3,2': {
          block: '0'
        },
        '8,1': {
          block: '0'
        },
        '5,2': {
          block: '0'
        },
        '6,3': {
          block: '0'
        },
        '0,2': {
          block: '0',
          layer: '-1'
        },
        '1,2': {
          block: '0',
          layer: '-1'
        },
        '2,1': {
          block: '0',
          layer: '-1'
        },
        '1,0': {
          block: '0',
          layer: '-1'
        },
        '4,0': {
          block: '0',
          layer: '-1'
        },
        '6,0': {
          block: '0'
        },
        '2,2': {
          block: '0',
          layer: '-1'
        }
      }
    },
    rock2: {
      cols: 2,
      rows: 2,
      baseLoc: '0,0',
      origin: '0,0',
      tiles: {
        '1,1': {
          r: '4',
          i: 286
        },
        '0,0': {
          r: '4',
          i: 270
        },
        '0,1': {
          r: '4',
          i: 285
        },
        '1,0': {
          r: '4',
          i: 271
        }
      },
      instances: [],
      properties: {},
      tps: {
        '1,1': {
          layer: '2'
        },
        '0,0': {
          layer: '2'
        },
        '0,1': {
          layer: '2'
        },
        '1,0': {
          layer: '2'
        }
      }
    },
    fireplace1: {
      cols: 1,
      rows: 3,
      baseLoc: '0,1',
      origin: '0,0',
      tiles: {
        '0,0': {
          r: '6',
          i: 168
        },
        '0,1': {
          r: '6',
          i: 183
        },
        '0,2': {
          r: '6',
          i: 198
        }
      },
      instances: [],
      properties: {},
      tps: {
        '0,0': {
          layer: '1'
        },
        '0,1': {
          layer: '3'
        },
        '0,2': {
          layer: '1'
        }
      }
    },
    weapon5: {
      cols: 1,
      rows: 1,
      baseLoc: '0,0',
      origin: '0,0',
      tiles: {
        '0,0': {
          r: '3',
          i: 19
        }
      },
      instances: [],
      properties: {
        cat: 'weapon',
        tip: 'sniper'
      },
      tps: {
        '0,0': {
          stuff: '5'
        }
      }
    },
    tileset3: {
      cols: 10,
      rows: 4,
      baseLoc: '0,0',
      origin: '0,0',
      tiles: {
        '5,0': {
          r: '1',
          i: 212
        },
        '2,2': {
          r: '1',
          i: 423
        },
        '7,3': {
          r: '1',
          i: 275
        },
        '0,0': {
          r: '1',
          i: 407
        },
        '7,1': {
          r: '1',
          i: 241
        },
        '1,1': {
          r: '1',
          i: 180
        },
        '4,1': {
          r: '1',
          i: 431
        },
        '4,2': {
          r: '1',
          i: 341
        },
        '0,1': {
          r: '1',
          i: 170
        },
        '2,0': {
          r: '1',
          i: 408
        },
        '7,0': {
          r: '1',
          i: 243
        },
        '3,1': {
          r: '1',
          i: 430
        },
        '3,0': {
          r: '1',
          i: 415
        },
        '1,2': {
          r: '1',
          i: 185
        },
        '6,2': {
          r: '1',
          i: 211
        },
        '8,0': {
          r: '1',
          i: 242
        },
        '7,2': {
          r: '1',
          i: 260
        },
        '6,1': {
          r: '1',
          i: 184
        },
        '5,3': {
          r: '1',
          i: 213
        },
        '9,0': {
          r: '1',
          i: 292
        },
        '3,2': {
          r: '1',
          i: 342
        },
        '8,1': {
          r: '1',
          i: 240
        },
        '8,3': {
          r: '1',
          i: 276
        },
        '6,0': {
          r: '1',
          i: 169
        },
        '5,2': {
          r: '1',
          i: 259
        },
        '6,3': {
          r: '1',
          i: 182
        },
        '9,2': {
          r: '1',
          i: 262
        },
        '5,1': {
          r: '1',
          i: 244
        },
        '2,1': {
          r: '1',
          i: 171
        },
        '1,0': {
          r: '1',
          i: 186
        },
        '8,2': {
          r: '1',
          i: 261
        },
        '4,0': {
          r: '1',
          i: 416
        },
        '0,2': {
          r: '1',
          i: 422
        },
        '9,1': {
          r: '1',
          i: 307
        },
        '9,3': {
          r: '1',
          i: 277
        }
      },
      instances: [],
      properties: {
        cat: 'tileset'
      },
      tps: {
        '1,1': {
          block: '0',
          layer: '1'
        },
        '9,2': {
          block: '0'
        },
        '4,2': {
          block: '0'
        },
        '0,0': {
          block: '0',
          layer: '0.5'
        },
        '7,1': {
          block: '0'
        },
        '5,0': {
          block: '0'
        },
        '4,1': {
          block: '0',
          layer: '1'
        },
        '7,0': {
          block: '0'
        },
        '0,1': {
          block: '0',
          layer: '0.5'
        },
        '2,0': {
          block: '0',
          layer: '0.5'
        },
        '8,1': {
          block: '0'
        },
        '8,0': {
          block: '0'
        },
        '3,1': {
          block: '0',
          layer: '1'
        },
        '3,0': {
          block: '0',
          layer: '1'
        },
        '5,1': {
          block: '0'
        },
        '6,2': {
          block: '0'
        },
        '7,2': {
          block: '0'
        },
        '6,1': {
          block: '0'
        },
        '5,3': {
          block: '0'
        },
        '9,0': {
          block: '0'
        },
        '9,1': {
          block: '0'
        },
        '3,2': {
          block: '0'
        },
        '7,3': {
          block: '0'
        },
        '8,3': {
          block: '0'
        },
        '5,2': {
          block: '0'
        },
        '6,3': {
          block: '0'
        },
        '0,2': {
          block: '0',
          layer: '0.5'
        },
        '1,2': {
          block: '0',
          layer: '0.5'
        },
        '2,1': {
          block: '0',
          layer: '0.5'
        },
        '1,0': {
          block: '0',
          layer: '0.5'
        },
        '8,2': {
          block: '0'
        },
        '4,0': {
          block: '0',
          layer: '1'
        },
        '6,0': {
          block: '0'
        },
        '2,2': {
          block: '0',
          layer: '0.5'
        },
        '9,3': {
          block: '0'
        }
      }
    },
    rug1: {
      cols: 2,
      rows: 1,
      baseLoc: '0,0',
      origin: '0,0',
      tiles: {
        '0,0': {
          r: '6',
          i: 62
        },
        '1,0': {
          r: '6',
          i: 63
        }
      },
      instances: [],
      properties: {},
      tps: {
        '0,0': {
          layer: '0'
        },
        '1,0': {
          layer: '0'
        }
      }
    },
    tree5: {
      cols: 3,
      rows: 3,
      baseLoc: '1,1',
      origin: '0,0',
      tiles: {
        '0,2': {
          r: '4',
          i: 336
        },
        '1,2': {
          r: '4',
          i: 337
        },
        '0,0': {
          r: '4',
          i: 306
        },
        '1,0': {
          r: '4',
          i: 307
        },
        '1,1': {
          r: '4',
          i: 322
        },
        '2,2': {
          r: '4',
          i: 338
        },
        '0,1': {
          r: '4',
          i: 321
        },
        '2,0': {
          r: '4',
          i: 308
        },
        '2,1': {
          r: '4',
          i: 323
        }
      },
      instances: [],
      properties: {
        layer: 'up'
      },
      tps: {
        '1,1': {
          layer: '3'
        }
      }
    },
    sky023: {
      cols: 1,
      rows: 1,
      baseLoc: '0,0',
      origin: '0,0',
      tiles: {
        '0,0': {
          r: '1',
          i: 82
        }
      },
      instances: [],
      properties: {
        cat: 'sky'
      },
      tps: {}
    },
    pillar4: {
      cols: 2,
      rows: 2,
      baseLoc: '0,0',
      origin: '0,0',
      tiles: {
        '1,1': {
          r: '5',
          i: 66
        },
        '0,0': {
          r: '5',
          i: 32
        },
        '0,1': {
          r: '5',
          i: 62
        },
        '1,0': {
          r: '5',
          i: 36
        }
      },
      instances: [],
      properties: {},
      tps: {
        '1,1': {
          s: '1',
          layer: '9'
        },
        '0,0': {
          s: '1',
          layer: '9'
        },
        '0,1': {
          s: '1',
          layer: '9'
        },
        '1,0': {
          s: '1',
          layer: '9'
        }
      }
    },
    tree1: {
      cols: 3,
      rows: 3,
      baseLoc: '1,1',
      origin: '0,0',
      tiles: {
        '0,2': {
          r: '4',
          i: 75
        },
        '1,2': {
          r: '4',
          i: 76
        },
        '0,0': {
          r: '4',
          i: 45
        },
        '1,0': {
          r: '4',
          i: 46
        },
        '1,1': {
          r: '4',
          i: 61
        },
        '2,2': {
          r: '4',
          i: 77
        },
        '0,1': {
          r: '4',
          i: 60
        },
        '2,0': {
          r: '4',
          i: 47
        },
        '2,1': {
          r: '4',
          i: 62
        }
      },
      instances: [],
      properties: {
        layer: 'up'
      },
      tps: {
        '1,1': {
          layer: '3'
        }
      }
    },
    bridge2: {
      cols: 9,
      rows: 5,
      baseLoc: '0,1',
      origin: '0,0',
      tiles: {
        '1,1': {
          r: '1',
          i: 104
        },
        '2,2': {
          r: '4',
          i: 384
        },
        '4,2': {
          r: '4',
          i: 370
        },
        '0,0': {
          r: '1',
          i: 267
        },
        '7,1': {
          r: '1',
          i: 160
        },
        '5,0': {
          r: '1',
          i: 98
        },
        '4,1': {
          r: '4',
          i: 370
        },
        '7,0': {
          r: '1',
          i: 173
        },
        '0,1': {
          r: '1',
          i: 83
        },
        '2,0': {
          r: '4',
          i: 369
        },
        '5,2': {
          r: '1',
          i: 104
        },
        '3,4': {
          r: '1',
          i: 217
        },
        '3,1': {
          r: '1',
          i: 84
        },
        '3,0': {
          r: '1',
          i: 267
        },
        '0,4': {
          r: '1',
          i: 187
        },
        '6,2': {
          r: '4',
          i: 371
        },
        '3,3': {
          r: '1',
          i: 202
        },
        '8,0': {
          r: '1',
          i: 174
        },
        '2,3': {
          r: '1',
          i: 190
        },
        '1,3': {
          r: '1',
          i: 190
        },
        '6,1': {
          r: '4',
          i: 371
        },
        '5,3': {
          r: '1',
          i: 99
        },
        '0,3': {
          r: '1',
          i: 172
        },
        '3,2': {
          r: '1',
          i: 267
        },
        '4,3': {
          r: '1',
          i: 267
        },
        '8,1': {
          r: '1',
          i: 85
        },
        '8,3': {
          r: '1',
          i: 189
        },
        '1,4': {
          r: '1',
          i: 132
        },
        '2,4': {
          r: '1',
          i: 132
        },
        '7,2': {
          r: '1',
          i: 160
        },
        '0,2': {
          r: '1',
          i: 267
        },
        '5,1': {
          r: '1',
          i: 104
        },
        '2,1': {
          r: '1',
          i: 104
        },
        '7,3': {
          r: '1',
          i: 188
        },
        '6,3': {
          r: '1',
          i: 267
        },
        '8,2': {
          r: '1',
          i: 85
        },
        '4,0': {
          r: '1',
          i: 267
        },
        '6,0': {
          r: '1',
          i: 267
        },
        '1,2': {
          r: '4',
          i: 384
        },
        '1,0': {
          r: '4',
          i: 369
        }
      },
      instances: [],
      properties: {
        cat: 'bridge',
        size: '2'
      },
      tps: {
        '5,0': {
          block: '0',
          layer: '0.5'
        },
        '0,0': {
          s: '1',
          layer: '3'
        },
        '3,2': {
          s: '1',
          layer: '3'
        },
        '5,3': {
          block: '0',
          layer: '0.5'
        },
        '1,1': {
          layer: '1',
          block: '0'
        },
        '0,1': {
          block: '0',
          layer: '0.5'
        },
        '6,3': {
          s: '1',
          layer: '3'
        },
        '0,2': {
          s: '1',
          layer: '3'
        },
        '5,1': {
          layer: '1',
          block: '0'
        },
        '3,1': {
          block: '0',
          layer: '0.5'
        },
        '3,0': {
          s: '1',
          layer: '3'
        },
        '4,0': {
          s: '1',
          layer: '3'
        },
        '6,0': {
          s: '1',
          layer: '3'
        },
        '2,1': {
          layer: '1',
          block: '0'
        },
        '5,2': {
          layer: '1',
          block: '0'
        },
        '4,3': {
          s: '1',
          layer: '3'
        }
      }
    },
    dstc3: {
      cols: 1,
      rows: 1,
      baseLoc: '0,0',
      origin: '0,0',
      tiles: {
        '0,0': {
          r: '0',
          i: 15
        }
      },
      instances: [],
      properties: {
        cat: 'stair'
      },
      tps: {
        '0,0': {
          layer: '0.5',
          test: 'edge;tileset1;0,1'
        }
      }
    },
    shine1_s: {
      cols: 1,
      rows: 1,
      baseLoc: '0,0',
      origin: '0,0',
      tiles: {
        '0,0': {
          r: '4',
          i: 350
        }
      },
      instances: [],
      properties: {
        layer: 'up'
      },
      tps: {}
    },
    lib_moveable_5: {
      cols: 3,
      rows: 1,
      baseLoc: '1,0',
      origin: '0,0',
      tiles: {
        '0,0': {
          r: '6',
          i: 46
        },
        '1,0': {
          r: '6',
          i: 47
        },
        '2,0': {
          r: '6',
          i: 48
        }
      },
      instances: [],
      properties: {
        cat: 'device',
        device: 'block',
        dlayer: '2'
      },
      tps: {}
    },
    tileset6: {
      cols: 10,
      rows: 4,
      baseLoc: '0,0',
      origin: '0,0',
      tiles: {
        '5,0': {
          r: '7',
          i: 212
        },
        '2,2': {
          r: '7',
          i: 346
        },
        '7,3': {
          r: '7',
          i: 275
        },
        '0,0': {
          r: '7',
          i: 330
        },
        '7,1': {
          r: '7',
          i: 241
        },
        '1,1': {
          r: '7',
          i: 180
        },
        '4,1': {
          r: '7',
          i: 376
        },
        '4,2': {
          r: '7',
          i: 255
        },
        '0,1': {
          r: '7',
          i: 170
        },
        '2,0': {
          r: '7',
          i: 331
        },
        '7,0': {
          r: '7',
          i: 243
        },
        '3,1': {
          r: '7',
          i: 375
        },
        '3,0': {
          r: '7',
          i: 360
        },
        '1,2': {
          r: '7',
          i: 185
        },
        '6,2': {
          r: '7',
          i: 211
        },
        '8,0': {
          r: '7',
          i: 242
        },
        '7,2': {
          r: '7',
          i: 260
        },
        '6,1': {
          r: '7',
          i: 184
        },
        '5,3': {
          r: '7',
          i: 213
        },
        '9,0': {
          r: '7',
          i: 292
        },
        '3,2': {
          r: '7',
          i: 197
        },
        '8,1': {
          r: '7',
          i: 240
        },
        '8,3': {
          r: '7',
          i: 276
        },
        '6,0': {
          r: '7',
          i: 169
        },
        '5,2': {
          r: '7',
          i: 259
        },
        '6,3': {
          r: '7',
          i: 182
        },
        '9,2': {
          r: '7',
          i: 262
        },
        '5,1': {
          r: '7',
          i: 244
        },
        '2,1': {
          r: '7',
          i: 171
        },
        '1,0': {
          r: '7',
          i: 186
        },
        '8,2': {
          r: '7',
          i: 261
        },
        '4,0': {
          r: '7',
          i: 361
        },
        '0,2': {
          r: '7',
          i: 345
        },
        '9,1': {
          r: '7',
          i: 307
        },
        '9,3': {
          r: '7',
          i: 277
        }
      },
      instances: [],
      properties: {
        cat: 'tileset'
      },
      tps: {
        '1,1': {
          block: '0',
          layer: '1'
        },
        '9,2': {
          block: '0'
        },
        '4,2': {
          block: '0'
        },
        '0,0': {
          block: '0',
          layer: '0.5'
        },
        '7,1': {
          block: '0'
        },
        '5,0': {
          block: '0'
        },
        '4,1': {
          block: '0',
          layer: '1'
        },
        '7,0': {
          block: '0'
        },
        '0,1': {
          block: '0',
          layer: '0.5'
        },
        '2,0': {
          block: '0',
          layer: '0.5'
        },
        '8,1': {
          block: '0'
        },
        '8,0': {
          block: '0'
        },
        '3,1': {
          block: '0',
          layer: '1'
        },
        '3,0': {
          block: '0',
          layer: '1'
        },
        '5,1': {
          block: '0'
        },
        '6,2': {
          block: '0'
        },
        '7,2': {
          block: '0'
        },
        '6,1': {
          block: '0'
        },
        '5,3': {
          block: '0'
        },
        '9,0': {
          block: '0'
        },
        '9,1': {
          block: '0'
        },
        '3,2': {
          block: '0'
        },
        '7,3': {
          block: '0'
        },
        '8,3': {
          block: '0'
        },
        '5,2': {
          block: '0'
        },
        '6,3': {
          block: '0'
        },
        '0,2': {
          block: '0',
          layer: '0.5'
        },
        '1,2': {
          block: '0',
          layer: '0.5'
        },
        '2,1': {
          block: '0',
          layer: '0.5'
        },
        '1,0': {
          block: '0',
          layer: '0.5'
        },
        '8,2': {
          block: '0'
        },
        '4,0': {
          block: '0',
          layer: '1'
        },
        '6,0': {
          block: '0'
        },
        '2,2': {
          block: '0',
          layer: '0.5'
        },
        '9,3': {
          block: '0'
        }
      }
    },
    stair0: {
      cols: 2,
      rows: 1,
      baseLoc: '0,0',
      origin: '0,0',
      tiles: {
        '0,0': {
          r: '0',
          i: 118
        },
        '1,0': {
          r: '0',
          i: 119
        }
      },
      instances: [],
      properties: {
        cat: 'stair'
      },
      tps: {
        '0,0': {
          layer: '0.5',
          test: 'edge;tileset0;1,0'
        },
        '1,0': {
          layer: '0.5',
          test: 'edge;tileset0;1,0'
        }
      }
    },
    dstc1: {
      cols: 1,
      rows: 1,
      baseLoc: '0,0',
      origin: '0,0',
      tiles: {
        '0,0': {
          r: '0',
          i: 2
        }
      },
      instances: [],
      properties: {
        cat: 'stair'
      },
      tps: {
        '0,0': {
          layer: '0.5',
          test: 'edge;tileset1;1,0'
        }
      }
    },
    tileset4: {
      cols: 10,
      rows: 4,
      baseLoc: '0,0',
      origin: '0,0',
      tiles: {
        '5,0': {
          r: '5',
          i: 26
        },
        '2,2': {
          r: '5',
          i: 158
        },
        '7,3': {
          r: '5',
          i: 54
        },
        '0,0': {
          r: '5',
          i: 142
        },
        '7,1': {
          r: '5',
          i: 39
        },
        '1,1': {
          r: '5',
          i: 0
        },
        '4,1': {
          r: '5',
          i: 160
        },
        '4,2': {
          r: '5',
          i: 90
        },
        '0,1': {
          r: '5',
          i: 43
        },
        '2,0': {
          r: '5',
          i: 143
        },
        '7,0': {
          r: '5',
          i: 24
        },
        '3,1': {
          r: '5',
          i: 159
        },
        '3,0': {
          r: '5',
          i: 144
        },
        '1,2': {
          r: '5',
          i: 56
        },
        '6,2': {
          r: '5',
          i: 141
        },
        '8,0': {
          r: '5',
          i: 25
        },
        '7,2': {
          r: '5',
          i: 58
        },
        '6,1': {
          r: '5',
          i: 42
        },
        '5,3': {
          r: '5',
          i: 155
        },
        '9,0': {
          r: '5',
          i: 13
        },
        '3,2': {
          r: '5',
          i: 91
        },
        '8,1': {
          r: '5',
          i: 40
        },
        '8,3': {
          r: '5',
          i: 55
        },
        '6,0': {
          r: '5',
          i: 27
        },
        '5,2': {
          r: '5',
          i: 140
        },
        '6,3': {
          r: '5',
          i: 156
        },
        '9,2': {
          r: '5',
          i: 29
        },
        '5,1': {
          r: '5',
          i: 41
        },
        '2,1': {
          r: '5',
          i: 14
        },
        '1,0': {
          r: '5',
          i: 57
        },
        '8,2': {
          r: '5',
          i: 59
        },
        '4,0': {
          r: '5',
          i: 145
        },
        '0,2': {
          r: '5',
          i: 157
        },
        '9,1': {
          r: '5',
          i: 28
        },
        '9,3': {
          r: '5',
          i: 44
        }
      },
      instances: [],
      properties: {
        cat: 'tileset'
      },
      tps: {
        '1,1': {
          block: '0',
          layer: '1'
        },
        '9,2': {
          block: '0'
        },
        '4,2': {
          block: '0'
        },
        '0,0': {
          block: '0',
          layer: '0.5'
        },
        '7,1': {
          block: '0'
        },
        '5,0': {
          block: '0'
        },
        '4,1': {
          block: '0',
          layer: '0.5'
        },
        '7,0': {
          block: '0'
        },
        '0,1': {
          block: '0',
          layer: '0.5'
        },
        '2,0': {
          block: '0',
          layer: '0.5'
        },
        '8,1': {
          block: '0'
        },
        '8,0': {
          block: '0'
        },
        '3,1': {
          block: '0',
          layer: '0.5'
        },
        '3,0': {
          block: '0',
          layer: '0.5'
        },
        '5,1': {
          block: '0'
        },
        '6,2': {
          block: '0'
        },
        '7,2': {
          block: '0'
        },
        '6,1': {
          block: '0'
        },
        '5,3': {
          block: '0'
        },
        '9,0': {
          block: '0'
        },
        '9,1': {
          block: '0'
        },
        '3,2': {
          block: '0'
        },
        '7,3': {
          block: '0'
        },
        '8,3': {
          block: '0'
        },
        '5,2': {
          block: '0'
        },
        '6,3': {
          block: '0'
        },
        '0,2': {
          block: '0',
          layer: '0.5'
        },
        '1,2': {
          block: '0',
          layer: '0.5'
        },
        '2,1': {
          block: '0',
          layer: '0.5'
        },
        '1,0': {
          block: '0',
          layer: '0.5'
        },
        '8,2': {
          block: '0'
        },
        '4,0': {
          block: '0',
          layer: '0.5'
        },
        '6,0': {
          block: '0'
        },
        '2,2': {
          block: '0',
          layer: '0.5'
        },
        '9,3': {
          block: '0'
        }
      }
    },
    pillar2a: {
      cols: 1,
      rows: 1,
      baseLoc: '0,0',
      origin: '0,0',
      tiles: {
        '0,0': {
          r: '1',
          i: 250
        }
      },
      instances: [],
      properties: {},
      tps: {
        '0,0': {
          s: '1',
          layer: '7'
        }
      }
    },
    decobj0: {
      cols: 1,
      rows: 1,
      baseLoc: '0,0',
      origin: '0,0',
      tiles: {
        '0,0': {
          r: '6',
          i: 153
        }
      },
      instances: [],
      properties: {},
      tps: {
        '0,0': {
          layer: '1'
        }
      }
    },
    pillar7a: {
      cols: 1,
      rows: 1,
      baseLoc: '0,0',
      origin: '0,0',
      tiles: {
        '0,0': {
          r: '7',
          i: 336
        }
      },
      instances: [],
      properties: {},
      tps: {
        '0,0': {
          s: '1',
          layer: '7'
        }
      }
    },
    dstai2: {
      cols: 1,
      rows: 3,
      baseLoc: '0,1',
      origin: '0,0',
      tiles: {
        '0,0': {
          r: '8',
          i: 29
        },
        '0,1': {
          r: '8',
          i: 44
        },
        '0,2': {
          r: '8',
          i: 59
        }
      },
      instances: [],
      properties: {
        cat: 'stair'
      },
      tps: {
        '0,0': {
          test: 'edge;tilesetC;2,1',
          block: '1',
          layer: '0'
        },
        '0,1': {
          test: 'edge;tilesetC;2,1',
          block: '0',
          layer: '0'
        },
        '0,2': {
          block: '1',
          test: 'edge;tilesetC;2,1',
          layer: '0'
        }
      }
    },
    tree0: {
      cols: 3,
      rows: 3,
      baseLoc: '1,1',
      origin: '0,0',
      tiles: {
        '0,2': {
          r: '4',
          i: 30
        },
        '1,2': {
          r: '4',
          i: 31
        },
        '0,0': {
          r: '4',
          i: 0
        },
        '1,0': {
          r: '4',
          i: 1
        },
        '1,1': {
          r: '4',
          i: 16
        },
        '2,2': {
          r: '4',
          i: 32
        },
        '0,1': {
          r: '4',
          i: 15
        },
        '2,0': {
          r: '4',
          i: 2
        },
        '2,1': {
          r: '4',
          i: 17
        }
      },
      instances: [],
      properties: {
        layer: 'up'
      },
      tps: {
        '1,1': {
          layer: '3'
        }
      }
    },
    water1: {
      cols: 5,
      rows: 3,
      baseLoc: '0,0',
      origin: '0,0',
      tiles: {
        '1,1': {
          r: '2',
          i: 112
        },
        '0,0': {
          r: '2',
          i: 96
        },
        '4,1': {
          r: '2',
          i: 115
        },
        '0,1': {
          r: '2',
          i: 111
        },
        '2,0': {
          r: '2',
          i: 98
        },
        '0,2': {
          r: '2',
          i: 126
        },
        '1,2': {
          r: '2',
          i: 127
        },
        '3,1': {
          r: '2',
          i: 114
        },
        '1,0': {
          r: '2',
          i: 97
        },
        '4,0': {
          r: '2',
          i: 100
        },
        '2,2': {
          r: '2',
          i: 128
        },
        '2,1': {
          r: '2',
          i: 113
        },
        '3,0': {
          r: '2',
          i: 99
        }
      },
      instances: [],
      properties: {
        cat: 'tileset'
      },
      tps: {
        '1,1': {
          water: '1'
        },
        '0,0': {
          water: '1'
        },
        '4,1': {
          water: '1'
        },
        '0,1': {
          water: '1'
        },
        '2,0': {
          water: '1'
        },
        '0,2': {
          water: '1'
        },
        '1,2': {
          water: '1'
        },
        '3,1': {
          water: '1'
        },
        '1,0': {
          water: '1'
        },
        '4,0': {
          water: '1'
        },
        '2,2': {
          water: '1'
        },
        '2,1': {
          water: '1'
        },
        '3,0': {
          water: '1'
        }
      }
    },
    carpet1: {
      cols: 10,
      rows: 4,
      baseLoc: '0,0',
      origin: '0,0',
      tiles: {
        '5,0': {
          r: '1',
          i: 308
        },
        '2,2': {
          r: '1',
          i: 427
        },
        '7,3': {
          r: '1',
          i: 302
        },
        '0,0': {
          r: '1',
          i: 411
        },
        '7,1': {
          r: '1',
          i: 312
        },
        '1,1': {
          r: '1',
          i: 339
        },
        '4,1': {
          r: '1',
          i: 449
        },
        '4,2': {
          r: '1',
          i: 400
        },
        '0,1': {
          r: '1',
          i: 281
        },
        '2,0': {
          r: '1',
          i: 412
        },
        '7,0': {
          r: '1',
          i: 309
        },
        '3,1': {
          r: '1',
          i: 448
        },
        '3,0': {
          r: '1',
          i: 419
        },
        '1,2': {
          r: '1',
          i: 337
        },
        '6,2': {
          r: '1',
          i: 357
        },
        '8,0': {
          r: '1',
          i: 325
        },
        '7,2': {
          r: '1',
          i: 330
        },
        '6,1': {
          r: '1',
          i: 311
        },
        '5,3': {
          r: '1',
          i: 371
        },
        '9,0': {
          r: '1',
          i: 272
        },
        '3,2': {
          r: '1',
          i: 385
        },
        '8,1': {
          r: '1',
          i: 310
        },
        '8,3': {
          r: '1',
          i: 303
        },
        '6,0': {
          r: '1',
          i: 324
        },
        '5,2': {
          r: '1',
          i: 356
        },
        '6,3': {
          r: '1',
          i: 372
        },
        '9,2': {
          r: '1',
          i: 255
        },
        '5,1': {
          r: '1',
          i: 313
        },
        '2,1': {
          r: '1',
          i: 282
        },
        '1,0': {
          r: '1',
          i: 322
        },
        '8,2': {
          r: '1',
          i: 331
        },
        '4,0': {
          r: '1',
          i: 434
        },
        '0,2': {
          r: '1',
          i: 426
        },
        '9,1': {
          r: '1',
          i: 287
        },
        '9,3': {
          r: '1',
          i: 270
        }
      },
      instances: [],
      properties: {
        cat: 'tileset'
      },
      tps: {
        '1,1': {
          block: '0',
          layer: '1'
        },
        '9,2': {
          block: '0'
        },
        '4,2': {
          block: '0'
        },
        '0,0': {
          block: '0',
          layer: '0.5'
        },
        '7,1': {
          block: '0'
        },
        '5,0': {
          block: '0'
        },
        '4,1': {
          block: '0',
          layer: '0.5'
        },
        '7,0': {
          block: '0'
        },
        '0,1': {
          block: '0',
          layer: '0.5'
        },
        '2,0': {
          block: '0',
          layer: '0.5'
        },
        '8,1': {
          block: '0'
        },
        '8,0': {
          block: '0'
        },
        '3,1': {
          block: '0',
          layer: '0.5'
        },
        '3,0': {
          block: '0',
          layer: '0.5'
        },
        '5,1': {
          block: '0'
        },
        '6,2': {
          block: '0'
        },
        '7,2': {
          block: '0'
        },
        '6,1': {
          block: '0'
        },
        '5,3': {
          block: '0'
        },
        '9,0': {
          block: '0'
        },
        '9,1': {
          block: '0'
        },
        '3,2': {
          block: '0'
        },
        '7,3': {
          block: '0'
        },
        '8,3': {
          block: '0'
        },
        '5,2': {
          block: '0'
        },
        '6,3': {
          block: '0'
        },
        '0,2': {
          block: '0',
          layer: '0.5'
        },
        '1,2': {
          block: '0',
          layer: '0.5'
        },
        '2,1': {
          block: '0',
          layer: '0.5'
        },
        '1,0': {
          block: '0',
          layer: '0.5'
        },
        '8,2': {
          block: '0'
        },
        '4,0': {
          block: '0',
          layer: '0.5'
        },
        '6,0': {
          block: '0'
        },
        '2,2': {
          block: '0',
          layer: '0.5'
        },
        '9,3': {
          block: '0'
        }
      }
    },
    camp1: {
      cols: 1,
      rows: 1,
      baseLoc: '0,0',
      origin: '0,0',
      tiles: {
        '0,0': {
          r: '3',
          i: 0
        }
      },
      instances: [],
      properties: {
        cat: 'camp',
        tip: 'skydow'
      },
      tps: {
        '0,0': {
          camp: '1'
        }
      }
    },
    box1: {
      cols: 1,
      rows: 1,
      baseLoc: '0,0',
      origin: '0,0',
      tiles: {
        '0,0': {
          r: '0',
          i: 98
        }
      },
      instances: [],
      properties: {},
      tps: {
        '0,0': {
          s: '1',
          block: '0',
          layer: '1'
        }
      }
    },
    wallset6: {
      cols: 5,
      rows: 3,
      baseLoc: '0,0',
      origin: '0,0',
      tiles: {
        '0,2': {
          r: '5',
          i: 35
        },
        '1,2': {
          r: '5',
          i: 65
        },
        '3,1': {
          r: '5',
          i: 60
        },
        '3,2': {
          r: '5',
          i: 75
        },
        '3,0': {
          r: '5',
          i: 95
        },
        '0,1': {
          r: '5',
          i: 18
        },
        '4,0': {
          r: '5',
          i: 96
        },
        '2,2': {
          r: '5',
          i: 33
        },
        '0,0': {
          r: '5',
          i: 3
        },
        '1,0': {
          r: '5',
          i: 4
        },
        '2,0': {
          r: '5',
          i: 5
        },
        '2,1': {
          r: '5',
          i: 20
        }
      },
      instances: [],
      properties: {
        cat: 'wallset',
        dlayer: '6'
      },
      tps: {
        '3,2': {
          s: '1'
        },
        '0,2': {
          s: '1'
        },
        '1,2': {
          s: '1'
        },
        '3,1': {
          s: '1'
        },
        '0,0': {
          s: '1'
        },
        '1,0': {
          s: '1'
        },
        '3,0': {
          s: '1'
        },
        '4,0': {
          s: '1'
        },
        '2,2': {
          s: '1'
        },
        '0,1': {
          s: '1'
        },
        '2,0': {
          s: '1'
        },
        '2,1': {
          s: '1'
        }
      }
    },
    tilesetA: {
      cols: 9,
      rows: 4,
      baseLoc: '0,0',
      origin: '0,0',
      tiles: {
        '1,1': {
          r: '1',
          i: 299
        },
        '2,2': {
          r: '1',
          i: 19
        },
        '4,2': {
          r: '1',
          i: 299
        },
        '0,0': {
          r: '1',
          i: 3
        },
        '7,1': {
          r: '1',
          i: 299
        },
        '5,0': {
          r: '1',
          i: 299
        },
        '4,1': {
          r: '1',
          i: 33
        },
        '7,0': {
          r: '1',
          i: 299
        },
        '0,1': {
          r: '1',
          i: 63
        },
        '2,0': {
          r: '1',
          i: 4
        },
        '8,0': {
          r: '1',
          i: 299
        },
        '3,1': {
          r: '1',
          i: 34
        },
        '3,0': {
          r: '1',
          i: 49
        },
        '6,2': {
          r: '1',
          i: 299
        },
        '6,1': {
          r: '1',
          i: 299
        },
        '5,3': {
          r: '1',
          i: 299
        },
        '3,2': {
          r: '1',
          i: 299
        },
        '8,1': {
          r: '1',
          i: 299
        },
        '5,2': {
          r: '1',
          i: 299
        },
        '6,3': {
          r: '1',
          i: 299
        },
        '0,2': {
          r: '1',
          i: 18
        },
        '5,1': {
          r: '1',
          i: 299
        },
        '2,1': {
          r: '1',
          i: 64
        },
        '1,0': {
          r: '1',
          i: 7
        },
        '4,0': {
          r: '1',
          i: 48
        },
        '6,0': {
          r: '1',
          i: 299
        },
        '1,2': {
          r: '1',
          i: 78
        }
      },
      instances: [],
      properties: {
        cat: 'tileset'
      },
      tps: {
        '1,1': {
          block: '0',
          layer: '6'
        },
        '4,2': {
          block: '0'
        },
        '0,0': {
          block: '0',
          layer: '6'
        },
        '7,1': {
          block: '0'
        },
        '5,0': {
          block: '0'
        },
        '4,1': {
          block: '0',
          layer: '6'
        },
        '7,0': {
          block: '0'
        },
        '0,1': {
          s: '1',
          block: '0',
          layer: '6'
        },
        '2,0': {
          block: '0',
          layer: '6'
        },
        '8,0': {
          block: '0'
        },
        '3,1': {
          block: '0',
          layer: '6'
        },
        '3,0': {
          block: '0',
          layer: '6'
        },
        '5,1': {
          block: '0'
        },
        '6,2': {
          block: '0'
        },
        '6,1': {
          block: '0'
        },
        '5,3': {
          block: '0'
        },
        '3,2': {
          block: '0'
        },
        '8,1': {
          block: '0'
        },
        '5,2': {
          block: '0'
        },
        '6,3': {
          block: '0'
        },
        '0,2': {
          block: '0',
          layer: '6'
        },
        '1,2': {
          s: '1',
          block: '0',
          layer: '6'
        },
        '2,1': {
          s: '1',
          block: '0',
          layer: '6'
        },
        '1,0': {
          s: '1',
          block: '0',
          layer: '6'
        },
        '4,0': {
          block: '0',
          layer: '6'
        },
        '6,0': {
          block: '0'
        },
        '2,2': {
          block: '0',
          layer: '6'
        }
      }
    },
    weapon2: {
      cols: 1,
      rows: 1,
      baseLoc: '0,0',
      origin: '0,0',
      tiles: {
        '0,0': {
          r: '3',
          i: 17
        }
      },
      instances: [],
      properties: {
        cat: 'weapon',
        tip: 'sword'
      },
      tps: {
        '0,0': {
          stuff: '2'
        }
      }
    },
    dstc2: {
      cols: 1,
      rows: 1,
      baseLoc: '0,0',
      origin: '0,0',
      tiles: {
        '0,0': {
          r: '0',
          i: 33
        }
      },
      instances: [],
      properties: {
        cat: 'stair'
      },
      tps: {
        '0,0': {
          layer: '0.5',
          test: 'edge;tileset1;2,1'
        }
      }
    },
    dstad0a: {
      cols: 3,
      rows: 2,
      baseLoc: '0,0',
      origin: '0,0',
      tiles: {
        '1,1': {
          r: '1',
          i: 156
        },
        '2,1': {
          r: '1',
          i: 352
        },
        '0,0': {
          r: '1',
          i: 381
        },
        '2,0': {
          r: '1',
          i: 382
        },
        '1,0': {
          r: '1',
          i: 156
        },
        '0,1': {
          r: '1',
          i: 351
        }
      },
      instances: [],
      properties: {
        cat: 'stair'
      },
      tps: {
        '2,0': {
          layer: '0.5',
          test: 'flat'
        },
        '1,1': {
          test: 'edge;tileset1;1,0'
        },
        '0,0': {
          layer: '0.5',
          test: 'flat'
        },
        '0,1': {
          test: 'edge;tileset1;1,0'
        },
        '1,0': {
          layer: '0.5',
          test: 'flat'
        },
        '2,1': {
          test: 'edge;tileset1;1,0'
        }
      }
    },
    tileset9: {
      cols: 9,
      rows: 4,
      baseLoc: '0,0',
      origin: '0,0',
      tiles: {
        '1,1': {
          r: '1',
          i: 156
        },
        '2,2': {
          r: '1',
          i: 365
        },
        '4,2': {
          r: '1',
          i: 343
        },
        '0,0': {
          r: '1',
          i: 349
        },
        '7,1': {
          r: '1',
          i: 120
        },
        '5,0': {
          r: '1',
          i: 135
        },
        '4,1': {
          r: '1',
          i: 351
        },
        '7,0': {
          r: '1',
          i: 105
        },
        '0,1': {
          r: '1',
          i: 379
        },
        '2,0': {
          r: '1',
          i: 350
        },
        '8,0': {
          r: '1',
          i: 106
        },
        '3,1': {
          r: '1',
          i: 352
        },
        '3,0': {
          r: '1',
          i: 367
        },
        '6,2': {
          r: '1',
          i: 359
        },
        '6,1': {
          r: '1',
          i: 151
        },
        '5,3': {
          r: '1',
          i: 373
        },
        '3,2': {
          r: '1',
          i: 344
        },
        '8,1': {
          r: '1',
          i: 121
        },
        '5,2': {
          r: '1',
          i: 358
        },
        '6,3': {
          r: '1',
          i: 374
        },
        '0,2': {
          r: '1',
          i: 364
        },
        '5,1': {
          r: '1',
          i: 150
        },
        '2,1': {
          r: '1',
          i: 380
        },
        '1,0': {
          r: '1',
          i: 395
        },
        '4,0': {
          r: '1',
          i: 366
        },
        '6,0': {
          r: '1',
          i: 136
        },
        '1,2': {
          r: '1',
          i: 394
        }
      },
      instances: [],
      properties: {
        cat: 'tileset'
      },
      tps: {
        '1,1': {
          block: '0',
          layer: '1'
        },
        '4,2': {
          block: '0'
        },
        '0,0': {
          block: '0',
          layer: '1'
        },
        '7,1': {
          block: '0'
        },
        '5,0': {
          block: '0'
        },
        '4,1': {
          block: '0',
          layer: '1'
        },
        '7,0': {
          block: '0'
        },
        '0,1': {
          s: '1',
          block: '0',
          layer: '1'
        },
        '2,0': {
          block: '0',
          layer: '1'
        },
        '8,0': {
          block: '0'
        },
        '3,1': {
          block: '0',
          layer: '1'
        },
        '3,0': {
          block: '0',
          layer: '1'
        },
        '5,1': {
          block: '0'
        },
        '6,2': {
          block: '0'
        },
        '6,1': {
          block: '0'
        },
        '5,3': {
          block: '0'
        },
        '3,2': {
          block: '0'
        },
        '8,1': {
          block: '0'
        },
        '5,2': {
          block: '0'
        },
        '6,3': {
          block: '0'
        },
        '0,2': {
          block: '0',
          layer: '1'
        },
        '1,2': {
          s: '1',
          block: '0',
          layer: '1'
        },
        '2,1': {
          s: '1',
          block: '0',
          layer: '1'
        },
        '1,0': {
          s: '1',
          block: '0',
          layer: '1'
        },
        '4,0': {
          block: '0',
          layer: '1'
        },
        '6,0': {
          block: '0'
        },
        '2,2': {
          block: '0',
          layer: '1'
        }
      }
    },
    water4: {
      cols: 5,
      rows: 3,
      baseLoc: '0,0',
      origin: '0,0',
      tiles: {
        '1,1': {
          r: '2',
          i: 16
        },
        '0,0': {
          r: '2',
          i: 90
        },
        '4,1': {
          r: '2',
          i: 84
        },
        '0,1': {
          r: '2',
          i: 105
        },
        '2,0': {
          r: '2',
          i: 92
        },
        '0,2': {
          r: '2',
          i: 120
        },
        '1,2': {
          r: '2',
          i: 121
        },
        '3,1': {
          r: '2',
          i: 83
        },
        '1,0': {
          r: '2',
          i: 91
        },
        '4,0': {
          r: '2',
          i: 69
        },
        '2,2': {
          r: '2',
          i: 122
        },
        '2,1': {
          r: '2',
          i: 107
        },
        '3,0': {
          r: '2',
          i: 68
        }
      },
      instances: [],
      properties: {
        cat: 'tileset'
      },
      tps: {
        '1,1': {
          water: '1'
        },
        '0,0': {
          water: '1'
        },
        '4,1': {
          water: '1'
        },
        '0,1': {
          water: '1'
        },
        '2,0': {
          water: '1'
        },
        '0,2': {
          water: '1'
        },
        '1,2': {
          water: '1'
        },
        '3,1': {
          water: '1'
        },
        '1,0': {
          water: '1'
        },
        '4,0': {
          water: '1'
        },
        '2,2': {
          water: '1'
        },
        '2,1': {
          water: '1'
        },
        '3,0': {
          water: '1'
        }
      }
    },
    house2: {
      cols: 4,
      rows: 4,
      baseLoc: '1,1',
      origin: '0,0',
      tiles: {
        '1,1': {
          r: '4',
          i: 215
        },
        '0,3': {
          r: '4',
          i: 244
        },
        '0,0': {
          r: '4',
          i: 199
        },
        '3,2': {
          r: '4',
          i: 233
        },
        '2,2': {
          r: '4',
          i: 232
        },
        '0,1': {
          r: '4',
          i: 214
        },
        '2,0': {
          r: '4',
          i: 202
        },
        '1,3': {
          r: '4',
          i: 245
        },
        '2,1': {
          r: '4',
          i: 217
        },
        '0,2': {
          r: '4',
          i: 229
        },
        '1,2': {
          r: '4',
          i: 230
        },
        '3,1': {
          r: '4',
          i: 218
        },
        '3,0': {
          r: '4',
          i: 203
        },
        '3,3': {
          r: '4',
          i: 248
        },
        '2,3': {
          r: '4',
          i: 247
        },
        '1,0': {
          r: '4',
          i: 200
        }
      },
      instances: [],
      properties: {},
      tps: {
        '1,1': {
          test: 'flat',
          block: '0',
          layer: '2.5'
        },
        '0,3': {
          test: 'flat',
          block: '0',
          layer: '2'
        },
        '0,0': {
          test: 'flat',
          block: '0',
          layer: '2'
        },
        '3,1': {
          test: 'flat',
          block: '0',
          s: '1',
          layer: '2.5'
        },
        '3,0': {
          test: 'flat',
          block: '0',
          layer: '2'
        },
        '3,3': {
          test: 'flat',
          block: '0',
          layer: '2'
        },
        '0,1': {
          test: 'flat',
          block: '0',
          s: '1',
          layer: '2.5'
        },
        '2,0': {
          test: 'flat',
          block: '0',
          layer: '2'
        },
        '0,2': {
          test: 'flat',
          block: '0',
          s: '1',
          layer: '2.5'
        },
        '1,2': {
          test: 'flat',
          block: '0',
          layer: '2.5'
        },
        '2,3': {
          test: 'flat',
          block: '0',
          layer: '2'
        },
        '1,0': {
          test: 'flat',
          block: '0',
          layer: '2'
        },
        '3,2': {
          test: 'flat',
          block: '0',
          s: '1',
          layer: '2.5'
        },
        '2,2': {
          test: 'flat',
          block: '0',
          layer: '2.5'
        },
        '2,1': {
          test: 'flat',
          block: '0',
          layer: '2.5'
        },
        '1,3': {
          test: 'flat',
          block: '0',
          layer: '2'
        }
      }
    },
    sky030: {
      cols: 1,
      rows: 1,
      baseLoc: '0,0',
      origin: '0,0',
      tiles: {
        '0,0': {
          r: '2',
          i: 66
        }
      },
      instances: [],
      properties: {
        cat: 'sky'
      },
      tps: {}
    },
    tree7: {
      cols: 3,
      rows: 3,
      baseLoc: '1,1',
      origin: '0,0',
      tiles: {
        '0,2': {
          r: '4',
          i: 182
        },
        '1,2': {
          r: '4',
          i: 183
        },
        '0,0': {
          r: '4',
          i: 152
        },
        '1,0': {
          r: '4',
          i: 153
        },
        '1,1': {
          r: '4',
          i: 168
        },
        '2,2': {
          r: '4',
          i: 184
        },
        '0,1': {
          r: '4',
          i: 167
        },
        '2,0': {
          r: '4',
          i: 154
        },
        '2,1': {
          r: '4',
          i: 169
        }
      },
      instances: [],
      properties: {
        layer: 'up'
      },
      tps: {
        '1,1': {
          layer: '3'
        }
      }
    },
    rock4: {
      cols: 1,
      rows: 1,
      baseLoc: '0,0',
      origin: '0,0',
      tiles: {
        '0,0': {
          r: '4',
          i: 90
        }
      },
      instances: [],
      properties: {},
      tps: {
        '0,0': {
          layer: '1.5'
        }
      }
    },
    dstb1: {
      cols: 4,
      rows: 1,
      baseLoc: '1,0',
      origin: '0,0',
      tiles: {
        '2,0': {
          r: '0',
          i: 144
        },
        '0,0': {
          r: '0',
          i: 143
        },
        '3,0': {
          r: '0',
          i: 145
        },
        '1,0': {
          r: '0',
          i: 144
        }
      },
      instances: [],
      properties: {
        cat: 'stair'
      },
      tps: {
        '3,0': {
          test: 'edge;tileset1;1,0'
        },
        '0,0': {
          test: 'edge;tileset1;1,0'
        },
        '1,0': {
          layer: '0.5',
          test: 'edge;tileset1;1,0'
        },
        '2,0': {
          layer: '0.5',
          test: 'edge;tileset1;1,0'
        }
      }
    },
    wallset4: {
      cols: 5,
      rows: 3,
      baseLoc: '0,0',
      origin: '0,0',
      tiles: {
        '0,2': {
          r: '1',
          i: 225
        },
        '1,2': {
          r: '1',
          i: 226
        },
        '3,1': {
          r: '1',
          i: 231
        },
        '3,2': {
          r: '1',
          i: 246
        },
        '3,0': {
          r: '1',
          i: 200
        },
        '0,1': {
          r: '1',
          i: 181
        },
        '4,0': {
          r: '1',
          i: 201
        },
        '2,2': {
          r: '1',
          i: 229
        },
        '0,0': {
          r: '1',
          i: 166
        },
        '1,0': {
          r: '1',
          i: 167
        },
        '2,0': {
          r: '1',
          i: 168
        },
        '2,1': {
          r: '1',
          i: 183
        }
      },
      instances: [],
      properties: {
        cat: 'wallset',
        dlayer: '4'
      },
      tps: {
        '3,2': {
          s: '1'
        },
        '0,2': {
          s: '1'
        },
        '1,2': {
          s: '1'
        },
        '3,1': {
          s: '1'
        },
        '0,0': {
          s: '1'
        },
        '1,0': {
          s: '1'
        },
        '3,0': {
          s: '1'
        },
        '4,0': {
          s: '1'
        },
        '2,2': {
          s: '1'
        },
        '0,1': {
          s: '1'
        },
        '2,0': {
          s: '1'
        },
        '2,1': {
          s: '1'
        }
      }
    },
    dstad2: {
      cols: 2,
      rows: 2,
      baseLoc: '0,0',
      origin: '0,0',
      tiles: {
        '1,1': {
          r: '1',
          i: 396
        },
        '0,0': {
          r: '1',
          i: 352
        },
        '0,1': {
          r: '1',
          i: 367
        },
        '1,0': {
          r: '1',
          i: 397
        }
      },
      instances: [],
      properties: {
        cat: 'stair'
      },
      tps: {
        '1,1': {
          layer: '0.5',
          test: 'flat'
        },
        '0,0': {
          test: 'edge;tileset1;2,1'
        },
        '0,1': {
          test: 'edge;tileset1;2,1'
        },
        '1,0': {
          layer: '0.5',
          test: 'flat'
        }
      }
    },
    dsta0: {
      cols: 3,
      rows: 1,
      baseLoc: '1,0',
      origin: '0,0',
      tiles: {
        '0,0': {
          r: '0',
          i: 146
        },
        '1,0': {
          r: '0',
          i: 147
        },
        '2,0': {
          r: '0',
          i: 148
        }
      },
      instances: [],
      properties: {
        cat: 'stair'
      },
      tps: {
        '0,0': {
          test: 'edge;tileset1;1,2'
        },
        '1,0': {
          layer: '0.5',
          test: 'edge;tileset1;1,2'
        },
        '2,0': {
          test: 'edge;tileset1;1,2'
        }
      }
    },
    water3: {
      cols: 9,
      rows: 3,
      baseLoc: '0,0',
      origin: '0,0',
      tiles: {
        '1,1': {
          r: '8',
          i: 20
        },
        '2,2': {
          r: '8',
          i: 68
        },
        '0,0': {
          r: '8',
          i: 18
        },
        '7,1': {
          r: '8',
          i: 50
        },
        '5,0': {
          r: '8',
          i: 34
        },
        '4,1': {
          r: '8',
          i: 19
        },
        '7,0': {
          r: '8',
          i: 35
        },
        '0,1': {
          r: '8',
          i: 48
        },
        '2,0': {
          r: '8',
          i: 7
        },
        '8,1': {
          r: '8',
          i: 51
        },
        '0,2': {
          r: '8',
          i: 63
        },
        '5,1': {
          r: '8',
          i: 65
        },
        '8,0': {
          r: '8',
          i: 36
        },
        '3,1': {
          r: '8',
          i: 22
        },
        '1,0': {
          r: '8',
          i: 6
        },
        '4,0': {
          r: '8',
          i: 64
        },
        '6,0': {
          r: '8',
          i: 66
        },
        '1,2': {
          r: '8',
          i: 80
        },
        '2,1': {
          r: '8',
          i: 38
        },
        '3,0': {
          r: '8',
          i: 67
        },
        '6,1': {
          r: '8',
          i: 49
        }
      },
      instances: [],
      properties: {
        cat: 'tileset'
      },
      tps: {
        '1,1': {
          block: '0'
        },
        '0,0': {
          block: '0'
        },
        '4,1': {
          block: '0'
        },
        '0,1': {
          block: '0'
        },
        '2,0': {
          block: '0'
        },
        '0,2': {
          block: '0'
        },
        '1,2': {
          block: '0'
        },
        '3,1': {
          block: '0'
        },
        '1,0': {
          block: '0'
        },
        '4,0': {
          block: '0'
        },
        '2,2': {
          block: '0'
        },
        '2,1': {
          block: '0'
        },
        '3,0': {
          block: '0'
        }
      }
    },
    table4: {
      cols: 5,
      rows: 3,
      baseLoc: '4,0',
      origin: '0,0',
      tiles: {
        '4,2': {
          r: '6',
          i: 72
        },
        '0,0': {
          r: '6',
          i: 112
        },
        '3,0': {
          r: '6',
          i: 28
        },
        '4,0': {
          r: '6',
          i: 113
        },
        '4,1': {
          r: '6',
          i: 42
        },
        '1,0': {
          r: '6',
          i: 13
        },
        '2,0': {
          r: '6',
          i: 28
        }
      },
      instances: [],
      properties: {},
      tps: {
        '4,2': {
          layer: '1'
        },
        '0,0': {
          layer: '1'
        },
        '3,0': {
          layer: '1'
        },
        '4,0': {
          layer: '1'
        },
        '4,1': {
          layer: '1'
        },
        '1,0': {
          layer: '1'
        },
        '2,0': {
          layer: '1'
        }
      }
    },
    weapon1: {
      cols: 1,
      rows: 1,
      baseLoc: '0,0',
      origin: '0,0',
      tiles: {
        '0,0': {
          r: '3',
          i: 16
        }
      },
      instances: [],
      properties: {
        cat: 'weapon',
        tip: 'hook'
      },
      tps: {
        '0,0': {
          stuff: '4'
        }
      }
    },
    sky032: {
      cols: 1,
      rows: 1,
      baseLoc: '0,0',
      origin: '0,0',
      tiles: {
        '0,0': {
          r: '0',
          i: 194
        }
      },
      instances: [],
      properties: {
        cat: 'sky'
      },
      tps: {}
    },
    house7: {
      cols: 4,
      rows: 6,
      baseLoc: '1,2',
      origin: '0,0',
      tiles: {
        '2,2': {
          r: '0',
          i: 36
        },
        '1,1': {
          r: '0',
          i: 20
        },
        '0,3': {
          r: '0',
          i: 49
        },
        '2,1': {
          r: '0',
          i: 21
        },
        '0,0': {
          r: '0',
          i: 4
        },
        '3,2': {
          r: '0',
          i: 37
        },
        '1,0': {
          r: '0',
          i: 5
        },
        '3,5': {
          r: '0',
          i: 97
        },
        '1,4': {
          r: '0',
          i: 80
        },
        '2,4': {
          r: '0',
          i: 81
        },
        '2,0': {
          r: '0',
          i: 6
        },
        '1,3': {
          r: '0',
          i: 50
        },
        '1,5': {
          r: '0',
          i: 95
        },
        '0,5': {
          r: '0',
          i: 94
        },
        '0,2': {
          r: '0',
          i: 34
        },
        '1,2': {
          r: '0',
          i: 35
        },
        '3,4': {
          r: '0',
          i: 82
        },
        '2,3': {
          r: '0',
          i: 51
        },
        '3,0': {
          r: '0',
          i: 7
        },
        '0,4': {
          r: '0',
          i: 79
        },
        '2,5': {
          r: '0',
          i: 96
        },
        '3,3': {
          r: '0',
          i: 52
        },
        '3,1': {
          r: '0',
          i: 22
        },
        '0,1': {
          r: '0',
          i: 19
        }
      },
      instances: [],
      properties: {},
      tps: {
        '3,2': {
          test: 'flat',
          block: '0',
          layer: '2'
        },
        '1,1': {
          test: 'flat',
          block: '0',
          layer: '2'
        },
        '0,3': {
          test: 'flat',
          block: '0',
          layer: '2'
        },
        '0,0': {
          test: 'flat',
          block: '0',
          layer: '2'
        },
        '2,3': {
          test: 'flat',
          block: '0',
          layer: '2'
        },
        '3,0': {
          test: 'flat',
          block: '0',
          layer: '2'
        },
        '2,4': {
          test: 'flat',
          block: '0',
          layer: '2'
        },
        '1,4': {
          test: 'flat',
          block: '0',
          layer: '2'
        },
        '0,1': {
          test: 'flat',
          block: '0',
          layer: '2'
        },
        '2,0': {
          test: 'flat',
          block: '0',
          s: '1',
          layer: '2'
        },
        '3,1': {
          test: 'flat',
          block: '0',
          layer: '2'
        },
        '0,5': {
          test: 'flat',
          block: '0',
          layer: '2'
        },
        '0,2': {
          test: 'flat',
          block: '0',
          layer: '2'
        },
        '1,2': {
          test: 'flat',
          block: '0',
          layer: '2'
        },
        '3,4': {
          test: 'flat',
          block: '0',
          layer: '2'
        },
        '1,5': {
          test: 'flat',
          block: '0',
          s: '1',
          layer: '2'
        },
        '1,0': {
          test: 'flat',
          block: '0',
          s: '1',
          layer: '2'
        },
        '0,4': {
          test: 'flat',
          block: '0',
          layer: '2'
        },
        '2,5': {
          test: 'flat',
          block: '0',
          s: '1',
          layer: '2'
        },
        '3,3': {
          test: 'flat',
          block: '0',
          layer: '2'
        },
        '2,2': {
          test: 'flat',
          block: '0',
          layer: '2'
        },
        '3,5': {
          test: 'flat',
          block: '0',
          layer: '2'
        },
        '2,1': {
          test: 'flat',
          block: '0',
          layer: '2'
        },
        '1,3': {
          test: 'flat',
          block: '0',
          layer: '2'
        }
      }
    },
    sky017: {
      cols: 1,
      rows: 1,
      baseLoc: '0,0',
      origin: '0,0',
      tiles: {
        '0,0': {
          r: '7',
          i: 104
        }
      },
      instances: [],
      properties: {
        cat: 'sky'
      },
      tps: {}
    },
    boxStair3: {
      cols: 1,
      rows: 2,
      baseLoc: '0,0',
      origin: '0,0',
      tiles: {
        '0,0': {
          r: '0',
          i: 114
        },
        '0,1': {
          r: '0',
          i: 262
        }
      },
      instances: [],
      properties: {
        cat: 'stair'
      },
      tps: {
        '0,0': {
          test: 'flat',
          block: '0',
          s: '1',
          layer: '1'
        },
        '0,1': {
          layer: '0.5',
          test: 'flat',
          block: '0'
        }
      }
    },
    shadow2_n: {
      cols: 1,
      rows: 2,
      baseLoc: '0,1',
      origin: '0,0',
      tiles: {
        '0,0': {
          r: '4',
          i: 68
        },
        '0,1': {
          r: '4',
          i: 83
        }
      },
      instances: [],
      properties: {
        layer: 'up'
      },
      tps: {}
    },
    boxStair1: {
      cols: 2,
      rows: 1,
      baseLoc: '1,0',
      origin: '0,0',
      tiles: {
        '0,0': {
          r: '0',
          i: 247
        },
        '1,0': {
          r: '0',
          i: 113
        }
      },
      instances: [],
      properties: {
        cat: 'stair'
      },
      tps: {
        '0,0': {
          block: '0',
          layer: '0.5',
          test: 'flat'
        },
        '1,0': {
          test: 'flat',
          block: '0',
          s: '1',
          layer: '1'
        }
      }
    },
    bed3: {
      cols: 3,
      rows: 2,
      baseLoc: '1,0',
      origin: '0,0',
      tiles: {
        '1,1': {
          r: '6',
          i: 160
        },
        '2,1': {
          r: '6',
          i: 161
        },
        '0,0': {
          r: '6',
          i: 144
        },
        '2,0': {
          r: '6',
          i: 146
        },
        '1,0': {
          r: '6',
          i: 145
        },
        '0,1': {
          r: '6',
          i: 159
        }
      },
      instances: [],
      properties: {},
      tps: {
        '2,0': {
          layer: '1'
        },
        '1,1': {
          layer: '1'
        },
        '0,0': {
          layer: '1'
        },
        '0,1': {
          layer: '1'
        },
        '1,0': {
          layer: '1'
        },
        '2,1': {
          layer: '1'
        }
      }
    },
    sky049: {
      cols: 1,
      rows: 1,
      baseLoc: '0,0',
      origin: '0,0',
      tiles: {
        '0,0': {
          r: '8',
          i: 42
        }
      },
      instances: [],
      properties: {
        cat: 'sky'
      },
      tps: {}
    },
    dstbi1a: {
      cols: 4,
      rows: 1,
      baseLoc: '1,0',
      origin: '0,0',
      tiles: {
        '2,0': {
          r: '8',
          i: 87
        },
        '0,0': {
          r: '8',
          i: 86
        },
        '3,0': {
          r: '8',
          i: 88
        },
        '1,0': {
          r: '8',
          i: 87
        }
      },
      instances: [],
      properties: {
        cat: 'stair'
      },
      tps: {
        '3,0': {
          layer: '0',
          test: 'edge;tilesetD;1,0',
          block: '1'
        },
        '0,0': {
          layer: '0',
          test: 'edge;tilesetD;1,0',
          block: '1'
        },
        '1,0': {
          layer: '0',
          test: 'edge;tilesetD;1,0',
          block: '0'
        },
        '2,0': {
          layer: '0',
          test: 'edge;tilesetD;1,0',
          block: '0'
        }
      }
    },
    dstd1: {
      cols: 3,
      rows: 2,
      baseLoc: '1,0',
      origin: '0,0',
      tiles: {
        '1,1': {
          r: '0',
          i: 63
        },
        '2,1': {
          r: '0',
          i: 224
        },
        '0,0': {
          r: '0',
          i: 78
        },
        '2,0': {
          r: '0',
          i: 209
        },
        '1,0': {
          r: '0',
          i: 63
        },
        '0,1': {
          r: '0',
          i: 93
        }
      },
      instances: [],
      properties: {
        cat: 'stair'
      },
      tps: {
        '2,0': {
          test: 'edge;tileset7;1,2'
        },
        '1,1': {
          layer: '0.5',
          test: 'flat'
        },
        '0,0': {
          test: 'edge;tileset7;1,2'
        },
        '0,1': {
          test: 'flat'
        },
        '1,0': {
          test: 'edge;tileset7;1,2'
        },
        '2,1': {
          test: 'flat'
        }
      }
    },
    shadow3_n: {
      cols: 1,
      rows: 1,
      baseLoc: '0,0',
      origin: '0,0',
      tiles: {
        '0,0': {
          r: '4',
          i: 368
        }
      },
      instances: [],
      properties: {
        layer: 'up'
      },
      tps: {}
    },
    dstai3a: {
      cols: 1,
      rows: 3,
      baseLoc: '0,1',
      origin: '0,0',
      tiles: {
        '0,0': {
          r: '8',
          i: 100
        },
        '0,1': {
          r: '8',
          i: 115
        },
        '0,2': {
          r: '8',
          i: 130
        }
      },
      instances: [],
      properties: {
        cat: 'stair'
      },
      tps: {
        '0,0': {
          layer: '0',
          test: 'edge;tilesetD;0,1',
          block: '1'
        },
        '0,1': {
          layer: '0',
          test: 'edge;tilesetD;0,1',
          block: '0'
        },
        '0,2': {
          layer: '0',
          test: 'edge;tilesetD;0,1',
          block: '1'
        }
      }
    },
    lava1: {
      cols: 5,
      rows: 3,
      baseLoc: '0,0',
      origin: '0,0',
      tiles: {
        '1,1': {
          r: '2',
          i: 21
        },
        '0,0': {
          r: '2',
          i: 5
        },
        '4,1': {
          r: '2',
          i: 24
        },
        '0,1': {
          r: '2',
          i: 20
        },
        '2,0': {
          r: '2',
          i: 7
        },
        '0,2': {
          r: '2',
          i: 35
        },
        '1,2': {
          r: '2',
          i: 36
        },
        '3,1': {
          r: '2',
          i: 23
        },
        '1,0': {
          r: '2',
          i: 6
        },
        '4,0': {
          r: '2',
          i: 9
        },
        '2,2': {
          r: '2',
          i: 37
        },
        '2,1': {
          r: '2',
          i: 22
        },
        '3,0': {
          r: '2',
          i: 8
        }
      },
      instances: [],
      properties: {
        cat: 'tileset'
      },
      tps: {
        '1,1': {
          lava: '1'
        },
        '0,0': {
          lava: '1'
        },
        '4,1': {
          lava: '1'
        },
        '0,1': {
          lava: '1'
        },
        '2,0': {
          lava: '1'
        },
        '0,2': {
          lava: '1'
        },
        '1,2': {
          lava: '1'
        },
        '3,1': {
          lava: '1'
        },
        '1,0': {
          lava: '1'
        },
        '4,0': {
          lava: '1'
        },
        '2,2': {
          lava: '1'
        },
        '2,1': {
          lava: '1'
        },
        '3,0': {
          lava: '1'
        }
      }
    },
    sky039: {
      cols: 1,
      rows: 1,
      baseLoc: '0,0',
      origin: '0,0',
      tiles: {
        '0,0': {
          r: '5',
          i: 71
        }
      },
      instances: [],
      properties: {
        cat: 'sky'
      },
      tps: {}
    },
    dstd2: {
      cols: 2,
      rows: 3,
      baseLoc: '1,1',
      origin: '0,0',
      tiles: {
        '0,2': {
          r: '0',
          i: 276
        },
        '1,1': {
          r: '0',
          i: 63
        },
        '1,2': {
          r: '0',
          i: 277
        },
        '0,0': {
          r: '0',
          i: 274
        },
        '0,1': {
          r: '0',
          i: 63
        },
        '1,0': {
          r: '0',
          i: 275
        }
      },
      instances: [],
      properties: {
        cat: 'stair'
      },
      tps: {
        '0,2': {
          test: 'flat'
        },
        '1,1': {
          test: 'edge;tileset7;0,1'
        },
        '1,2': {
          test: 'edge;tileset7;0,1'
        },
        '0,0': {
          test: 'flat'
        },
        '0,1': {
          layer: '0.5',
          test: 'flat'
        },
        '1,0': {
          test: 'edge;tileset7;0,1'
        }
      }
    },
    lib_moveable_4: {
      cols: 2,
      rows: 2,
      baseLoc: '0,0',
      origin: '0,0',
      tiles: {
        '1,1': {
          r: '6',
          i: 71
        },
        '0,0': {
          r: '6',
          i: 55
        },
        '0,1': {
          r: '6',
          i: 70
        },
        '1,0': {
          r: '6',
          i: 56
        }
      },
      instances: [],
      properties: {
        cat: 'device',
        device: 'block',
        dlayer: '2'
      },
      tps: {}
    },
    rock0: {
      cols: 3,
      rows: 3,
      baseLoc: '1,1',
      origin: '0,0',
      tiles: {
        '0,2': {
          r: '4',
          i: 33
        },
        '1,2': {
          r: '4',
          i: 34
        },
        '0,0': {
          r: '4',
          i: 3
        },
        '1,0': {
          r: '4',
          i: 4
        },
        '1,1': {
          r: '4',
          i: 19
        },
        '2,2': {
          r: '4',
          i: 35
        },
        '0,1': {
          r: '4',
          i: 18
        },
        '2,0': {
          r: '4',
          i: 5
        },
        '2,1': {
          r: '4',
          i: 20
        }
      },
      instances: [],
      properties: {},
      tps: {
        '0,2': {
          layer: '3'
        },
        '1,2': {
          layer: '3'
        },
        '0,0': {
          layer: '3'
        },
        '1,0': {
          layer: '3'
        },
        '1,1': {
          layer: '3'
        },
        '2,2': {
          layer: '3'
        },
        '0,1': {
          layer: '3'
        },
        '2,0': {
          layer: '3'
        },
        '2,1': {
          layer: '3'
        }
      }
    },
    table6: {
      cols: 2,
      rows: 2,
      baseLoc: '0,0',
      origin: '0,0',
      tiles: {
        '1,1': {
          r: '6',
          i: 133
        },
        '0,0': {
          r: '6',
          i: 117
        },
        '0,1': {
          r: '6',
          i: 132
        },
        '1,0': {
          r: '6',
          i: 118
        }
      },
      instances: [],
      properties: {},
      tps: {
        '1,1': {
          layer: '1'
        },
        '0,0': {
          layer: '1'
        },
        '0,1': {
          layer: '1'
        },
        '1,0': {
          layer: '1'
        }
      }
    },
    sky012: {
      cols: 1,
      rows: 1,
      baseLoc: '0,0',
      origin: '0,0',
      tiles: {
        '0,0': {
          r: '0',
          i: 76
        }
      },
      instances: [],
      properties: {
        cat: 'sky'
      },
      tps: {}
    },
    sky045: {
      cols: 1,
      rows: 1,
      baseLoc: '0,0',
      origin: '0,0',
      tiles: {
        '0,0': {
          r: '6',
          i: 23
        }
      },
      instances: [],
      properties: {
        cat: 'sky'
      },
      tps: {}
    },
    dstbi3: {
      cols: 1,
      rows: 4,
      baseLoc: '0,1',
      origin: '0,0',
      tiles: {
        '0,2': {
          r: '8',
          i: 40
        },
        '0,3': {
          r: '8',
          i: 55
        },
        '0,0': {
          r: '8',
          i: 25
        },
        '0,1': {
          r: '8',
          i: 40
        }
      },
      instances: [],
      properties: {
        cat: 'stair'
      },
      tps: {
        '0,2': {
          block: '0',
          layer: '0',
          test: 'edge;tilesetC;0,1'
        },
        '0,3': {
          test: 'edge;tilesetC;0,1',
          block: '1',
          layer: '0'
        },
        '0,0': {
          layer: '0',
          test: 'edge;tilesetC;0,1',
          block: '1'
        },
        '0,1': {
          layer: '0',
          test: 'edge;tilesetC;0,1',
          block: '0'
        }
      }
    },
    weapon4: {
      cols: 1,
      rows: 1,
      baseLoc: '0,0',
      origin: '0,0',
      tiles: {
        '0,0': {
          r: '3',
          i: 18
        }
      },
      instances: [],
      properties: {
        cat: 'weapon',
        tip: 'rifle'
      },
      tps: {
        '0,0': {
          stuff: '3'
        }
      }
    },
    lib_moveable_1: {
      cols: 2,
      rows: 2,
      baseLoc: '0,0',
      origin: '0,0',
      tiles: {
        '1,1': {
          r: '4',
          i: 316
        },
        '0,0': {
          r: '4',
          i: 300
        },
        '0,1': {
          r: '4',
          i: 315
        },
        '1,0': {
          r: '4',
          i: 301
        }
      },
      instances: [],
      properties: {
        cat: 'device',
        device: 'block',
        dlayer: '1.5'
      },
      tps: {}
    },
    sky050: {
      cols: 1,
      rows: 1,
      baseLoc: '0,0',
      origin: '0,0',
      tiles: {
        '0,0': {
          r: '8',
          i: 175
        }
      },
      instances: [],
      properties: {
        cat: 'sky'
      },
      tps: {}
    },
    bed7: {
      cols: 3,
      rows: 3,
      baseLoc: '1,1',
      origin: '0,0',
      tiles: {
        '0,2': {
          r: '6',
          i: 204
        },
        '1,2': {
          r: '6',
          i: 205
        },
        '0,0': {
          r: '6',
          i: 174
        },
        '1,0': {
          r: '6',
          i: 175
        },
        '1,1': {
          r: '6',
          i: 190
        },
        '2,2': {
          r: '6',
          i: 206
        },
        '0,1': {
          r: '6',
          i: 189
        },
        '2,0': {
          r: '6',
          i: 176
        },
        '2,1': {
          r: '6',
          i: 191
        }
      },
      instances: [],
      properties: {},
      tps: {
        '0,2': {
          layer: '1'
        },
        '1,2': {
          layer: '1'
        },
        '0,0': {
          layer: '1'
        },
        '1,0': {
          layer: '1'
        },
        '1,1': {
          layer: '1'
        },
        '2,2': {
          layer: '1'
        },
        '0,1': {
          layer: '1'
        },
        '2,0': {
          layer: '1'
        },
        '2,1': {
          layer: '1'
        }
      }
    },
    bed2: {
      cols: 3,
      rows: 2,
      baseLoc: '1,0',
      origin: '0,0',
      tiles: {
        '1,1': {
          r: '6',
          i: 130
        },
        '2,1': {
          r: '6',
          i: 131
        },
        '0,0': {
          r: '6',
          i: 114
        },
        '2,0': {
          r: '6',
          i: 116
        },
        '1,0': {
          r: '6',
          i: 115
        },
        '0,1': {
          r: '6',
          i: 129
        }
      },
      instances: [],
      properties: {},
      tps: {
        '2,0': {
          layer: '1'
        },
        '1,1': {
          layer: '1'
        },
        '0,0': {
          layer: '1'
        },
        '0,1': {
          layer: '1'
        },
        '1,0': {
          layer: '1'
        },
        '2,1': {
          layer: '1'
        }
      }
    },
    table2: {
      cols: 5,
      rows: 3,
      baseLoc: '0,2',
      origin: '0,0',
      tiles: {
        '0,2': {
          r: '6',
          i: 75
        },
        '1,2': {
          r: '6',
          i: 76
        },
        '4,2': {
          r: '6',
          i: 79
        },
        '0,0': {
          r: '6',
          i: 45
        },
        '3,2': {
          r: '6',
          i: 78
        },
        '2,2': {
          r: '6',
          i: 77
        },
        '0,1': {
          r: '6',
          i: 60
        }
      },
      instances: [],
      properties: {},
      tps: {
        '0,2': {
          layer: '1'
        },
        '1,2': {
          layer: '1'
        },
        '4,2': {
          layer: '1'
        },
        '0,0': {
          layer: '1'
        },
        '3,2': {
          layer: '1'
        },
        '2,2': {
          layer: '1'
        },
        '0,1': {
          layer: '1'
        }
      }
    },
    weapon0: {
      cols: 1,
      rows: 1,
      baseLoc: '0,0',
      origin: '0,0',
      tiles: {
        '0,0': {
          r: '3',
          i: 15
        }
      },
      instances: [],
      properties: {
        cat: 'weapon',
        tip: 'hatchet'
      },
      tps: {
        '0,0': {
          stuff: '10'
        }
      }
    },
    bridge4: {
      cols: 9,
      rows: 5,
      baseLoc: '0,1',
      origin: '0,0',
      tiles: {
        '1,1': {
          r: '7',
          i: 104
        },
        '2,2': {
          r: '4',
          i: 401
        },
        '4,2': {
          r: '4',
          i: 402
        },
        '0,0': {
          r: '7',
          i: 267
        },
        '7,1': {
          r: '7',
          i: 160
        },
        '5,0': {
          r: '7',
          i: 98
        },
        '4,1': {
          r: '4',
          i: 402
        },
        '7,0': {
          r: '7',
          i: 173
        },
        '0,1': {
          r: '7',
          i: 83
        },
        '2,0': {
          r: '4',
          i: 386
        },
        '5,2': {
          r: '7',
          i: 104
        },
        '3,4': {
          r: '7',
          i: 217
        },
        '3,1': {
          r: '7',
          i: 84
        },
        '3,0': {
          r: '7',
          i: 267
        },
        '0,4': {
          r: '7',
          i: 187
        },
        '6,2': {
          r: '4',
          i: 403
        },
        '3,3': {
          r: '7',
          i: 202
        },
        '8,0': {
          r: '7',
          i: 174
        },
        '2,3': {
          r: '7',
          i: 100
        },
        '1,3': {
          r: '7',
          i: 100
        },
        '6,1': {
          r: '4',
          i: 403
        },
        '5,3': {
          r: '7',
          i: 99
        },
        '0,3': {
          r: '7',
          i: 172
        },
        '3,2': {
          r: '7',
          i: 267
        },
        '4,3': {
          r: '7',
          i: 267
        },
        '8,1': {
          r: '7',
          i: 85
        },
        '8,3': {
          r: '7',
          i: 189
        },
        '1,4': {
          r: '7',
          i: 132
        },
        '2,4': {
          r: '7',
          i: 132
        },
        '7,2': {
          r: '7',
          i: 160
        },
        '0,2': {
          r: '7',
          i: 267
        },
        '5,1': {
          r: '7',
          i: 104
        },
        '2,1': {
          r: '7',
          i: 104
        },
        '7,3': {
          r: '7',
          i: 188
        },
        '6,3': {
          r: '7',
          i: 267
        },
        '8,2': {
          r: '7',
          i: 85
        },
        '4,0': {
          r: '7',
          i: 267
        },
        '6,0': {
          r: '7',
          i: 267
        },
        '1,2': {
          r: '4',
          i: 401
        },
        '1,0': {
          r: '4',
          i: 386
        }
      },
      instances: [],
      properties: {
        cat: 'bridge',
        size: '2'
      },
      tps: {
        '5,0': {
          block: '0',
          layer: '0.5'
        },
        '0,0': {
          s: '1',
          layer: '3'
        },
        '3,2': {
          s: '1',
          layer: '3'
        },
        '5,3': {
          block: '0',
          layer: '0.5'
        },
        '1,1': {
          layer: '1',
          block: '0'
        },
        '0,1': {
          block: '0',
          layer: '0.5'
        },
        '6,3': {
          s: '1',
          layer: '3'
        },
        '0,2': {
          s: '1',
          layer: '3'
        },
        '5,1': {
          layer: '1',
          block: '0'
        },
        '3,1': {
          block: '0',
          layer: '0.5'
        },
        '3,0': {
          s: '1',
          layer: '3'
        },
        '4,0': {
          s: '1',
          layer: '3'
        },
        '6,0': {
          s: '1',
          layer: '3'
        },
        '2,1': {
          layer: '1',
          block: '0'
        },
        '5,2': {
          layer: '1',
          block: '0'
        },
        '4,3': {
          s: '1',
          layer: '3'
        }
      }
    },
    tileset5: {
      cols: 10,
      rows: 4,
      baseLoc: '0,0',
      origin: '0,0',
      tiles: {
        '5,0': {
          r: '7',
          i: 132
        },
        '2,2': {
          r: '7',
          i: 314
        },
        '7,3': {
          r: '7',
          i: 188
        },
        '0,0': {
          r: '7',
          i: 298
        },
        '7,1': {
          r: '7',
          i: 164
        },
        '1,1': {
          r: '7',
          i: 104
        },
        '4,1': {
          r: '7',
          i: 344
        },
        '4,2': {
          r: '7',
          i: 192
        },
        '0,1': {
          r: '7',
          i: 83
        },
        '2,0': {
          r: '7',
          i: 299
        },
        '7,0': {
          r: '7',
          i: 162
        },
        '3,1': {
          r: '7',
          i: 343
        },
        '3,0': {
          r: '7',
          i: 328
        },
        '1,2': {
          r: '7',
          i: 99
        },
        '6,2': {
          r: '7',
          i: 131
        },
        '8,0': {
          r: '7',
          i: 161
        },
        '7,2': {
          r: '7',
          i: 173
        },
        '6,1': {
          r: '7',
          i: 100
        },
        '5,3': {
          r: '7',
          i: 133
        },
        '9,0': {
          r: '7',
          i: 172
        },
        '3,2': {
          r: '7',
          i: 117
        },
        '8,1': {
          r: '7',
          i: 163
        },
        '8,3': {
          r: '7',
          i: 189
        },
        '6,0': {
          r: '7',
          i: 160
        },
        '5,2': {
          r: '7',
          i: 175
        },
        '6,3': {
          r: '7',
          i: 102
        },
        '9,2': {
          r: '7',
          i: 202
        },
        '5,1': {
          r: '7',
          i: 85
        },
        '2,1': {
          r: '7',
          i: 84
        },
        '1,0': {
          r: '7',
          i: 98
        },
        '8,2': {
          r: '7',
          i: 174
        },
        '4,0': {
          r: '7',
          i: 329
        },
        '0,2': {
          r: '7',
          i: 313
        },
        '9,1': {
          r: '7',
          i: 187
        },
        '9,3': {
          r: '7',
          i: 217
        }
      },
      instances: [],
      properties: {
        cat: 'tileset'
      },
      tps: {
        '1,1': {
          block: '0',
          layer: '1'
        },
        '9,2': {
          block: '0'
        },
        '4,2': {
          block: '0'
        },
        '0,0': {
          block: '0',
          layer: '0.5'
        },
        '7,1': {
          block: '0'
        },
        '5,0': {
          block: '0'
        },
        '4,1': {
          block: '0',
          layer: '1'
        },
        '7,0': {
          block: '0'
        },
        '0,1': {
          block: '0',
          layer: '0.5'
        },
        '2,0': {
          block: '0',
          layer: '0.5'
        },
        '8,1': {
          block: '0'
        },
        '8,0': {
          block: '0'
        },
        '3,1': {
          block: '0',
          layer: '1'
        },
        '3,0': {
          block: '0',
          layer: '1'
        },
        '5,1': {
          block: '0'
        },
        '6,2': {
          block: '0'
        },
        '7,2': {
          block: '0'
        },
        '6,1': {
          block: '0'
        },
        '5,3': {
          block: '0'
        },
        '9,0': {
          block: '0'
        },
        '9,1': {
          block: '0'
        },
        '3,2': {
          block: '0'
        },
        '7,3': {
          block: '0'
        },
        '8,3': {
          block: '0'
        },
        '5,2': {
          block: '0'
        },
        '6,3': {
          block: '0'
        },
        '0,2': {
          block: '0',
          layer: '0.5'
        },
        '1,2': {
          block: '0',
          layer: '0.5'
        },
        '2,1': {
          block: '0',
          layer: '0.5'
        },
        '1,0': {
          block: '0',
          layer: '0.5'
        },
        '8,2': {
          block: '0'
        },
        '4,0': {
          block: '0',
          layer: '1'
        },
        '6,0': {
          block: '0'
        },
        '2,2': {
          block: '0',
          layer: '0.5'
        },
        '9,3': {
          block: '0'
        }
      }
    },
    sky041: {
      cols: 1,
      rows: 1,
      baseLoc: '0,0',
      origin: '0,0',
      tiles: {
        '0,0': {
          r: '5',
          i: 73
        }
      },
      instances: [],
      properties: {
        cat: 'sky'
      },
      tps: {}
    },
    sky015: {
      cols: 1,
      rows: 1,
      baseLoc: '0,0',
      origin: '0,0',
      tiles: {
        '0,0': {
          r: '1',
          i: 139
        }
      },
      instances: [],
      properties: {
        cat: 'sky'
      },
      tps: {}
    },
    fireplace2: {
      cols: 3,
      rows: 1,
      baseLoc: '1,0',
      origin: '0,0',
      tiles: {
        '0,0': {
          r: '6',
          i: 210
        },
        '1,0': {
          r: '6',
          i: 211
        },
        '2,0': {
          r: '6',
          i: 212
        }
      },
      instances: [],
      properties: {},
      tps: {
        '0,0': {
          layer: '1'
        },
        '1,0': {
          layer: '3'
        },
        '2,0': {
          layer: '1'
        }
      }
    },
    sky026: {
      cols: 1,
      rows: 1,
      baseLoc: '0,0',
      origin: '0,0',
      tiles: {
        '0,0': {
          r: '1',
          i: 165
        }
      },
      instances: [],
      properties: {
        cat: 'sky'
      },
      tps: {}
    },
    decobj3: {
      cols: 1,
      rows: 1,
      baseLoc: '0,0',
      origin: '0,0',
      tiles: {
        '0,0': {
          r: '6',
          i: 218
        }
      },
      instances: [],
      properties: {},
      tps: {
        '0,0': {
          layer: '1'
        }
      }
    },
    dste0: {
      cols: 4,
      rows: 2,
      baseLoc: '1,1',
      origin: '0,0',
      tiles: {
        '1,1': {
          r: '0',
          i: 63
        },
        '0,0': {
          r: '0',
          i: 271
        },
        '1,0': {
          r: '0',
          i: 63
        },
        '2,1': {
          r: '0',
          i: 63
        },
        '0,1': {
          r: '0',
          i: 270
        },
        '3,0': {
          r: '0',
          i: 272
        },
        '2,0': {
          r: '0',
          i: 63
        },
        '3,1': {
          r: '0',
          i: 273
        }
      },
      instances: [],
      properties: {
        cat: 'stair'
      },
      tps: {
        '1,1': {
          test: 'edge;tileset7;1,0'
        },
        '0,0': {
          test: 'flat'
        },
        '1,0': {
          layer: '0.5',
          test: 'flat'
        },
        '3,0': {
          test: 'flat'
        },
        '3,1': {
          test: 'edge;tileset7;1,0'
        },
        '0,1': {
          test: 'edge;tileset7;1,0'
        },
        '2,0': {
          layer: '0.5',
          test: 'flat'
        },
        '2,1': {
          test: 'edge;tileset7;1,0'
        }
      }
    },
    shadow3_w: {
      cols: 1,
      rows: 1,
      baseLoc: '0,0',
      origin: '0,0',
      tiles: {
        '0,0': {
          r: '4',
          i: 367
        }
      },
      instances: [],
      properties: {
        layer: 'up'
      },
      tps: {}
    },
    sky004: {
      cols: 1,
      rows: 1,
      baseLoc: '0,0',
      origin: '0,0',
      tiles: {
        '0,0': {
          r: '1',
          i: 321
        }
      },
      instances: [],
      properties: {
        cat: 'sky'
      },
      tps: {}
    },
    decobj7: {
      cols: 1,
      rows: 1,
      baseLoc: '0,0',
      origin: '0,0',
      tiles: {
        '0,0': {
          r: '6',
          i: 222
        }
      },
      instances: [],
      properties: {},
      tps: {
        '0,0': {
          layer: '0.5'
        }
      }
    },
    dstd3: {
      cols: 2,
      rows: 3,
      baseLoc: '0,1',
      origin: '0,0',
      tiles: {
        '0,2': {
          r: '0',
          i: 280
        },
        '1,1': {
          r: '0',
          i: 63
        },
        '1,2': {
          r: '0',
          i: 281
        },
        '0,0': {
          r: '0',
          i: 278
        },
        '0,1': {
          r: '0',
          i: 63
        },
        '1,0': {
          r: '0',
          i: 279
        }
      },
      instances: [],
      properties: {
        cat: 'stair'
      },
      tps: {
        '0,2': {
          test: 'edge;tileset7;2,1'
        },
        '1,1': {
          layer: '0.5',
          test: 'flat'
        },
        '1,2': {
          test: 'flat'
        },
        '0,0': {
          test: 'edge;tileset7;2,1'
        },
        '0,1': {
          test: 'edge;tileset7;2,1'
        },
        '1,0': {
          test: 'flat'
        }
      }
    },
    bridge3: {
      cols: 9,
      rows: 5,
      baseLoc: '0,1',
      origin: '0,0',
      tiles: {
        '1,1': {
          r: '1',
          i: 180
        },
        '2,2': {
          r: '4',
          i: 387
        },
        '4,2': {
          r: '4',
          i: 373
        },
        '0,0': {
          r: '1',
          i: 336
        },
        '7,1': {
          r: '1',
          i: 169
        },
        '5,0': {
          r: '1',
          i: 186
        },
        '4,1': {
          r: '4',
          i: 373
        },
        '7,0': {
          r: '1',
          i: 260
        },
        '0,1': {
          r: '1',
          i: 170
        },
        '2,0': {
          r: '4',
          i: 372
        },
        '5,2': {
          r: '1',
          i: 180
        },
        '3,4': {
          r: '1',
          i: 277
        },
        '3,1': {
          r: '1',
          i: 171
        },
        '3,0': {
          r: '1',
          i: 336
        },
        '0,4': {
          r: '1',
          i: 307
        },
        '6,2': {
          r: '4',
          i: 374
        },
        '3,3': {
          r: '1',
          i: 262
        },
        '8,0': {
          r: '1',
          i: 261
        },
        '2,3': {
          r: '1',
          i: 184
        },
        '1,3': {
          r: '1',
          i: 184
        },
        '6,1': {
          r: '4',
          i: 374
        },
        '5,3': {
          r: '1',
          i: 185
        },
        '0,3': {
          r: '1',
          i: 292
        },
        '3,2': {
          r: '1',
          i: 336
        },
        '4,3': {
          r: '1',
          i: 336
        },
        '8,1': {
          r: '1',
          i: 244
        },
        '8,3': {
          r: '1',
          i: 276
        },
        '1,4': {
          r: '1',
          i: 212
        },
        '2,4': {
          r: '1',
          i: 212
        },
        '7,2': {
          r: '1',
          i: 169
        },
        '0,2': {
          r: '1',
          i: 336
        },
        '5,1': {
          r: '1',
          i: 180
        },
        '2,1': {
          r: '1',
          i: 180
        },
        '7,3': {
          r: '1',
          i: 275
        },
        '6,3': {
          r: '1',
          i: 336
        },
        '8,2': {
          r: '1',
          i: 244
        },
        '4,0': {
          r: '1',
          i: 336
        },
        '6,0': {
          r: '1',
          i: 336
        },
        '1,2': {
          r: '4',
          i: 387
        },
        '1,0': {
          r: '4',
          i: 372
        }
      },
      instances: [],
      properties: {
        cat: 'bridge',
        size: '2'
      },
      tps: {
        '5,0': {
          block: '0',
          layer: '0.5'
        },
        '0,0': {
          s: '1',
          layer: '3'
        },
        '3,2': {
          s: '1',
          layer: '3'
        },
        '5,3': {
          block: '0',
          layer: '0.5'
        },
        '1,1': {
          layer: '1',
          block: '0'
        },
        '0,1': {
          block: '0',
          layer: '0.5'
        },
        '6,3': {
          s: '1',
          layer: '3'
        },
        '0,2': {
          s: '1',
          layer: '3'
        },
        '5,1': {
          layer: '1',
          block: '0'
        },
        '3,1': {
          block: '0',
          layer: '0.5'
        },
        '3,0': {
          s: '1',
          layer: '3'
        },
        '4,0': {
          s: '1',
          layer: '3'
        },
        '6,0': {
          s: '1',
          layer: '3'
        },
        '2,1': {
          layer: '1',
          block: '0'
        },
        '5,2': {
          layer: '1',
          block: '0'
        },
        '4,3': {
          s: '1',
          layer: '3'
        }
      }
    },
    tree6: {
      cols: 6,
      rows: 6,
      baseLoc: '2,2',
      origin: '0,0',
      tiles: {
        '1,1': {
          r: '4',
          i: 295
        },
        '2,2': {
          r: '4',
          i: 311
        },
        '4,2': {
          r: '4',
          i: 313
        },
        '0,0': {
          r: '4',
          i: 279
        },
        '3,5': {
          r: '4',
          i: 357
        },
        '5,0': {
          r: '4',
          i: 284
        },
        '4,1': {
          r: '4',
          i: 298
        },
        '3,4': {
          r: '4',
          i: 342
        },
        '0,1': {
          r: '4',
          i: 294
        },
        '2,0': {
          r: '4',
          i: 281
        },
        '2,1': {
          r: '4',
          i: 296
        },
        '0,5': {
          r: '4',
          i: 354
        },
        '4,5': {
          r: '4',
          i: 358
        },
        '3,1': {
          r: '4',
          i: 297
        },
        '3,0': {
          r: '4',
          i: 282
        },
        '0,4': {
          r: '4',
          i: 339
        },
        '2,5': {
          r: '4',
          i: 356
        },
        '3,3': {
          r: '4',
          i: 327
        },
        '2,3': {
          r: '4',
          i: 326
        },
        '1,3': {
          r: '4',
          i: 325
        },
        '5,3': {
          r: '4',
          i: 329
        },
        '0,3': {
          r: '4',
          i: 324
        },
        '3,2': {
          r: '4',
          i: 312
        },
        '4,3': {
          r: '4',
          i: 328
        },
        '1,4': {
          r: '4',
          i: 340
        },
        '5,5': {
          r: '4',
          i: 359
        },
        '5,4': {
          r: '4',
          i: 344
        },
        '0,2': {
          r: '4',
          i: 309
        },
        '5,1': {
          r: '4',
          i: 299
        },
        '2,4': {
          r: '4',
          i: 341
        },
        '1,0': {
          r: '4',
          i: 280
        },
        '4,0': {
          r: '4',
          i: 283
        },
        '4,4': {
          r: '4',
          i: 343
        },
        '1,2': {
          r: '4',
          i: 310
        },
        '1,5': {
          r: '4',
          i: 355
        },
        '5,2': {
          r: '4',
          i: 314
        }
      },
      instances: [],
      properties: {
        layer: 'up'
      },
      tps: {
        '2,2': {
          layer: '5'
        },
        '3,3': {
          layer: '5'
        },
        '2,3': {
          layer: '5'
        },
        '3,2': {
          layer: '5'
        }
      }
    },
    house4: {
      cols: 7,
      rows: 4,
      baseLoc: '3,1',
      origin: '0,0',
      tiles: {
        '1,1': {
          r: '0',
          i: 24
        },
        '4,2': {
          r: '0',
          i: 42
        },
        '0,0': {
          r: '0',
          i: 8
        },
        '5,0': {
          r: '0',
          i: 13
        },
        '4,1': {
          r: '0',
          i: 27
        },
        '0,1': {
          r: '0',
          i: 23
        },
        '2,0': {
          r: '0',
          i: 10
        },
        '3,1': {
          r: '0',
          i: 26
        },
        '3,0': {
          r: '0',
          i: 11
        },
        '1,2': {
          r: '0',
          i: 39
        },
        '6,2': {
          r: '0',
          i: 44
        },
        '3,3': {
          r: '0',
          i: 56
        },
        '2,3': {
          r: '0',
          i: 55
        },
        '1,3': {
          r: '0',
          i: 54
        },
        '6,1': {
          r: '0',
          i: 29
        },
        '4,3': {
          r: '0',
          i: 57
        },
        '0,3': {
          r: '0',
          i: 53
        },
        '3,2': {
          r: '0',
          i: 41
        },
        '5,3': {
          r: '0',
          i: 58
        },
        '5,2': {
          r: '0',
          i: 43
        },
        '6,3': {
          r: '0',
          i: 59
        },
        '0,2': {
          r: '0',
          i: 38
        },
        '5,1': {
          r: '0',
          i: 28
        },
        '2,1': {
          r: '0',
          i: 25
        },
        '1,0': {
          r: '0',
          i: 9
        },
        '4,0': {
          r: '0',
          i: 12
        },
        '6,0': {
          r: '0',
          i: 14
        },
        '2,2': {
          r: '0',
          i: 40
        }
      },
      instances: [],
      properties: {},
      tps: {
        '1,1': {
          test: 'flat',
          block: '0',
          layer: '2'
        },
        '2,2': {
          test: 'flat',
          block: '0',
          layer: '2'
        },
        '4,2': {
          test: 'flat',
          block: '0',
          layer: '2'
        },
        '0,0': {
          test: 'flat',
          block: '0',
          layer: '2'
        },
        '5,0': {
          test: 'flat',
          block: '0',
          layer: '2'
        },
        '4,1': {
          test: 'flat',
          block: '0',
          layer: '2'
        },
        '0,1': {
          test: 'flat',
          block: '0',
          s: '1',
          layer: '2'
        },
        '2,0': {
          test: 'flat',
          block: '0',
          layer: '2'
        },
        '3,1': {
          test: 'flat',
          block: '0',
          layer: '2'
        },
        '3,0': {
          test: 'flat',
          block: '0',
          layer: '2'
        },
        '6,2': {
          test: 'flat',
          block: '0',
          s: '1',
          layer: '2'
        },
        '3,3': {
          test: 'flat',
          block: '0',
          layer: '2'
        },
        '2,3': {
          test: 'flat',
          block: '0',
          layer: '2'
        },
        '1,3': {
          test: 'flat',
          block: '0',
          layer: '2'
        },
        '6,1': {
          test: 'flat',
          block: '0',
          s: '1',
          layer: '2'
        },
        '5,3': {
          test: 'flat',
          block: '0',
          layer: '2'
        },
        '0,3': {
          test: 'flat',
          block: '0',
          layer: '2'
        },
        '3,2': {
          test: 'flat',
          block: '0',
          layer: '2'
        },
        '4,3': {
          test: 'flat',
          block: '0',
          layer: '2'
        },
        '5,2': {
          test: 'flat',
          block: '0',
          layer: '2'
        },
        '6,3': {
          test: 'flat',
          block: '0',
          layer: '2'
        },
        '0,2': {
          test: 'flat',
          block: '0',
          s: '1',
          layer: '2'
        },
        '5,1': {
          test: 'flat',
          block: '0',
          layer: '2'
        },
        '2,1': {
          test: 'flat',
          block: '0',
          layer: '2'
        },
        '1,0': {
          test: 'flat',
          block: '0',
          layer: '2'
        },
        '4,0': {
          test: 'flat',
          block: '0',
          layer: '2'
        },
        '6,0': {
          test: 'flat',
          block: '0',
          layer: '2'
        },
        '1,2': {
          test: 'flat',
          block: '0',
          layer: '2'
        }
      }
    },
    dstai0: {
      cols: 3,
      rows: 1,
      baseLoc: '1,0',
      origin: '0,0',
      tiles: {
        '0,0': {
          r: '8',
          i: 71
        },
        '1,0': {
          r: '8',
          i: 72
        },
        '2,0': {
          r: '8',
          i: 73
        }
      },
      instances: [],
      properties: {
        cat: 'stair'
      },
      tps: {
        '0,0': {
          test: 'edge;tilesetC;1,2',
          block: '1'
        },
        '1,0': {
          test: 'edge;tilesetC;1,2',
          layer: '0',
          block: '0'
        },
        '2,0': {
          test: 'edge;tilesetC;1,2',
          block: '1'
        }
      }
    },
    sky031: {
      cols: 1,
      rows: 1,
      baseLoc: '0,0',
      origin: '0,0',
      tiles: {
        '0,0': {
          r: '2',
          i: 21
        }
      },
      instances: [],
      properties: {
        cat: 'sky'
      },
      tps: {}
    },
    decobj1: {
      cols: 1,
      rows: 1,
      baseLoc: '0,0',
      origin: '0,0',
      tiles: {
        '0,0': {
          r: '6',
          i: 216
        }
      },
      instances: [],
      properties: {},
      tps: {
        '0,0': {
          layer: '1'
        }
      }
    },
    shadow3_e: {
      cols: 1,
      rows: 1,
      baseLoc: '0,0',
      origin: '0,0',
      tiles: {
        '0,0': {
          r: '4',
          i: 365
        }
      },
      instances: [],
      properties: {
        layer: 'up'
      },
      tps: {}
    },
    wallset5: {
      cols: 5,
      rows: 3,
      baseLoc: '0,0',
      origin: '0,0',
      tiles: {
        '0,2': {
          r: '5',
          i: 125
        },
        '1,2': {
          r: '5',
          i: 81
        },
        '3,1': {
          r: '5',
          i: 79
        },
        '3,2': {
          r: '5',
          i: 79
        },
        '3,0': {
          r: '5',
          i: 79
        },
        '0,1': {
          r: '5',
          i: 80
        },
        '4,0': {
          r: '5',
          i: 79
        },
        '2,2': {
          r: '5',
          i: 126
        },
        '0,0': {
          r: '5',
          i: 110
        },
        '1,0': {
          r: '5',
          i: 81
        },
        '2,0': {
          r: '5',
          i: 111
        },
        '2,1': {
          r: '5',
          i: 80
        }
      },
      instances: [],
      properties: {
        cat: 'wallset',
        dlayer: '3'
      },
      tps: {
        '3,2': {
          s: '1'
        },
        '0,2': {
          s: '1'
        },
        '1,2': {
          s: '1'
        },
        '3,1': {
          s: '1'
        },
        '0,0': {
          s: '1'
        },
        '1,0': {
          s: '1'
        },
        '3,0': {
          s: '1'
        },
        '4,0': {
          s: '1'
        },
        '2,2': {
          s: '1'
        },
        '0,1': {
          s: '1'
        },
        '2,0': {
          s: '1'
        },
        '2,1': {
          s: '1'
        }
      }
    },
    tmAtk: {
      cols: 1,
      rows: 1,
      baseLoc: '0,0',
      origin: '0,0',
      tiles: {
        '0,0': {
          r: '3',
          i: 3
        }
      },
      instances: [],
      properties: {
        cat: 'team',
        tip: 'atk'
      },
      tps: {
        '0,0': {
          team: 'atk'
        }
      }
    },
    dstd0: {
      cols: 3,
      rows: 2,
      baseLoc: '1,1',
      origin: '0,0',
      tiles: {
        '1,1': {
          r: '0',
          i: 63
        },
        '2,1': {
          r: '0',
          i: 273
        },
        '0,0': {
          r: '0',
          i: 271
        },
        '2,0': {
          r: '0',
          i: 272
        },
        '1,0': {
          r: '0',
          i: 63
        },
        '0,1': {
          r: '0',
          i: 270
        }
      },
      instances: [],
      properties: {
        cat: 'stair'
      },
      tps: {
        '2,0': {
          test: 'flat'
        },
        '1,1': {
          test: 'edge;tileset7;1,0'
        },
        '0,0': {
          test: 'flat'
        },
        '0,1': {
          test: 'edge;tileset7;1,0'
        },
        '1,0': {
          layer: '0.5',
          test: 'flat'
        },
        '2,1': {
          test: 'edge;tileset7;1,0'
        }
      }
    },
    fireplace0: {
      cols: 1,
      rows: 3,
      baseLoc: '0,1',
      origin: '0,0',
      tiles: {
        '0,0': {
          r: '6',
          i: 134
        },
        '0,1': {
          r: '6',
          i: 149
        },
        '0,2': {
          r: '6',
          i: 164
        }
      },
      instances: [],
      properties: {},
      tps: {
        '0,0': {
          layer: '1'
        },
        '0,1': {
          layer: '3'
        },
        '0,2': {
          layer: '1'
        }
      }
    },
    igloo2: {
      cols: 5,
      rows: 6,
      baseLoc: '2,2',
      origin: '0,0',
      tiles: {
        '1,1': {
          r: '9',
          i: 21
        },
        '4,2': {
          r: '9',
          i: 39
        },
        '0,0': {
          r: '9',
          i: 5
        },
        '3,5': {
          r: '9',
          i: 83
        },
        '4,1': {
          r: '9',
          i: 24
        },
        '3,4': {
          r: '9',
          i: 68
        },
        '0,1': {
          r: '9',
          i: 20
        },
        '2,0': {
          r: '9',
          i: 7
        },
        '2,3': {
          r: '9',
          i: 52
        },
        '3,0': {
          r: '9',
          i: 8
        },
        '0,4': {
          r: '9',
          i: 65
        },
        '2,5': {
          r: '9',
          i: 82
        },
        '3,3': {
          r: '9',
          i: 53
        },
        '3,1': {
          r: '9',
          i: 23
        },
        '1,3': {
          r: '9',
          i: 51
        },
        '4,3': {
          r: '9',
          i: 54
        },
        '0,3': {
          r: '9',
          i: 50
        },
        '3,2': {
          r: '9',
          i: 38
        },
        '1,4': {
          r: '9',
          i: 66
        },
        '2,4': {
          r: '9',
          i: 67
        },
        '0,2': {
          r: '9',
          i: 35
        },
        '1,2': {
          r: '9',
          i: 36
        },
        '1,5': {
          r: '9',
          i: 81
        },
        '1,0': {
          r: '9',
          i: 6
        },
        '4,0': {
          r: '9',
          i: 9
        },
        '4,4': {
          r: '9',
          i: 69
        },
        '2,2': {
          r: '9',
          i: 37
        },
        '2,1': {
          r: '9',
          i: 22
        }
      },
      instances: [],
      properties: {
        layer: 'up'
      },
      tps: {
        '3,3': {
          skyobj: '1'
        },
        '1,1': {
          skyobj: '1'
        },
        '0,3': {
          layer: '9'
        },
        '4,2': {
          layer: '9'
        },
        '3,1': {
          skyobj: '1'
        },
        '3,0': {
          layer: '9'
        },
        '2,4': {
          skyobj: '1'
        },
        '4,1': {
          layer: '9'
        },
        '1,4': {
          layer: '9'
        },
        '0,1': {
          layer: '9'
        },
        '2,0': {
          layer: '9'
        },
        '0,2': {
          layer: '9'
        },
        '1,2': {
          skyobj: '1'
        },
        '3,4': {
          layer: '9'
        },
        '2,1': {
          skyobj: '1'
        },
        '1,0': {
          layer: '9'
        },
        '3,2': {
          skyobj: '1'
        },
        '2,2': {
          skyobj: '1'
        },
        '2,3': {
          skyobj: '1'
        },
        '1,3': {
          skyobj: '1'
        },
        '4,3': {
          layer: '9'
        }
      }
    },
    sky037: {
      cols: 1,
      rows: 1,
      baseLoc: '0,0',
      origin: '0,0',
      tiles: {
        '0,0': {
          r: '4',
          i: 108
        }
      },
      instances: [],
      properties: {
        cat: 'sky'
      },
      tps: {}
    },
    shadow1_n: {
      cols: 1,
      rows: 1,
      baseLoc: '0,0',
      origin: '0,0',
      tiles: {
        '0,0': {
          r: '4',
          i: 68
        }
      },
      instances: [],
      properties: {
        layer: 'up'
      },
      tps: {}
    },
    sky007: {
      cols: 1,
      rows: 1,
      baseLoc: '0,0',
      origin: '0,0',
      tiles: {
        '0,0': {
          r: '7',
          i: 336
        }
      },
      instances: [],
      properties: {
        cat: 'sky'
      },
      tps: {}
    },
    sea1: {
      cols: 5,
      rows: 3,
      baseLoc: '0,0',
      origin: '0,0',
      tiles: {
        '1,1': {
          r: '2',
          i: 66
        },
        '0,0': {
          r: '2',
          i: 50
        },
        '4,1': {
          r: '2',
          i: 77
        },
        '0,1': {
          r: '2',
          i: 65
        },
        '2,0': {
          r: '2',
          i: 52
        },
        '0,2': {
          r: '2',
          i: 80
        },
        '1,2': {
          r: '2',
          i: 81
        },
        '3,1': {
          r: '2',
          i: 75
        },
        '1,0': {
          r: '2',
          i: 51
        },
        '4,0': {
          r: '2',
          i: 47
        },
        '2,2': {
          r: '2',
          i: 82
        },
        '2,1': {
          r: '2',
          i: 67
        },
        '3,0': {
          r: '2',
          i: 45
        }
      },
      instances: [],
      properties: {
        cat: 'tileset'
      },
      tps: {
        '1,1': {
          water: '1'
        },
        '0,0': {
          water: '1'
        },
        '4,1': {
          water: '1'
        },
        '0,1': {
          water: '1'
        },
        '2,0': {
          water: '1'
        },
        '0,2': {
          water: '1'
        },
        '1,2': {
          water: '1'
        },
        '3,1': {
          water: '1'
        },
        '1,0': {
          water: '1'
        },
        '4,0': {
          water: '1'
        },
        '2,2': {
          water: '1'
        },
        '2,1': {
          water: '1'
        },
        '3,0': {
          water: '1'
        }
      }
    },
    lava: {
      cols: 5,
      rows: 3,
      baseLoc: '0,0',
      origin: '0,0',
      tiles: {
        '1,1': {
          r: '2',
          i: 21
        },
        '0,0': {
          r: '2',
          i: 55
        },
        '4,1': {
          r: '2',
          i: 54
        },
        '0,1': {
          r: '2',
          i: 70
        },
        '2,0': {
          r: '2',
          i: 57
        },
        '0,2': {
          r: '2',
          i: 85
        },
        '1,2': {
          r: '2',
          i: 86
        },
        '3,1': {
          r: '2',
          i: 53
        },
        '1,0': {
          r: '2',
          i: 56
        },
        '4,0': {
          r: '2',
          i: 39
        },
        '2,2': {
          r: '2',
          i: 87
        },
        '2,1': {
          r: '2',
          i: 72
        },
        '3,0': {
          r: '2',
          i: 38
        }
      },
      instances: [],
      properties: {
        cat: 'tileset'
      },
      tps: {
        '1,1': {
          lava: '1'
        },
        '0,0': {
          lava: '1'
        },
        '4,1': {
          lava: '1'
        },
        '0,1': {
          lava: '1'
        },
        '2,0': {
          lava: '1'
        },
        '0,2': {
          lava: '1'
        },
        '1,2': {
          lava: '1'
        },
        '3,1': {
          lava: '1'
        },
        '1,0': {
          lava: '1'
        },
        '4,0': {
          lava: '1'
        },
        '2,2': {
          lava: '1'
        },
        '2,1': {
          lava: '1'
        },
        '3,0': {
          lava: '1'
        }
      }
    },
    shine2_e: {
      cols: 2,
      rows: 1,
      baseLoc: '0,0',
      origin: '0,0',
      tiles: {
        '0,0': {
          r: '4',
          i: 347
        },
        '1,0': {
          r: '4',
          i: 348
        }
      },
      instances: [],
      properties: {
        layer: 'up'
      },
      tps: {}
    },
    lib_moveable_7: {
      cols: 3,
      rows: 1,
      baseLoc: '1,0',
      origin: '0,0',
      tiles: {
        '0,0': {
          r: '4',
          i: 362
        },
        '1,0': {
          r: '4',
          i: 363
        },
        '2,0': {
          r: '4',
          i: 364
        }
      },
      instances: [],
      properties: {
        cat: 'device',
        device: 'block',
        dlayer: '1'
      },
      tps: {}
    },
    sky035: {
      cols: 1,
      rows: 1,
      baseLoc: '0,0',
      origin: '0,0',
      tiles: {
        '0,0': {
          r: '4',
          i: 217
        }
      },
      instances: [],
      properties: {
        cat: 'sky'
      },
      tps: {}
    },
    table04: {
      cols: 7,
      rows: 7,
      baseLoc: '3,3',
      origin: '0,0',
      tiles: {
        '1,1': {
          r: '6',
          i: 23
        },
        '4,4': {
          r: '6',
          i: 23
        },
        '4,2': {
          r: '6',
          i: 23
        },
        '0,0': {
          r: '6',
          i: 7
        },
        '3,5': {
          r: '6',
          i: 23
        },
        '1,6': {
          r: '6',
          i: 38
        },
        '4,5': {
          r: '6',
          i: 23
        },
        '4,1': {
          r: '6',
          i: 23
        },
        '3,4': {
          r: '6',
          i: 23
        },
        '0,1': {
          r: '6',
          i: 22
        },
        '2,0': {
          r: '6',
          i: 8
        },
        '2,6': {
          r: '6',
          i: 38
        },
        '2,1': {
          r: '6',
          i: 23
        },
        '0,5': {
          r: '6',
          i: 22
        },
        '6,4': {
          r: '6',
          i: 24
        },
        '5,0': {
          r: '6',
          i: 8
        },
        '4,6': {
          r: '6',
          i: 38
        },
        '2,3': {
          r: '6',
          i: 23
        },
        '3,0': {
          r: '6',
          i: 8
        },
        '0,4': {
          r: '6',
          i: 22
        },
        '2,5': {
          r: '6',
          i: 23
        },
        '1,2': {
          r: '6',
          i: 23
        },
        '6,2': {
          r: '6',
          i: 24
        },
        '3,3': {
          r: '6',
          i: 23
        },
        '6,6': {
          r: '6',
          i: 39
        },
        '3,1': {
          r: '6',
          i: 23
        },
        '1,3': {
          r: '6',
          i: 23
        },
        '3,6': {
          r: '6',
          i: 38
        },
        '4,3': {
          r: '6',
          i: 23
        },
        '2,2': {
          r: '6',
          i: 23
        },
        '6,5': {
          r: '6',
          i: 24
        },
        '0,3': {
          r: '6',
          i: 22
        },
        '5,6': {
          r: '6',
          i: 38
        },
        '3,2': {
          r: '6',
          i: 23
        },
        '5,3': {
          r: '6',
          i: 23
        },
        '6,1': {
          r: '6',
          i: 24
        },
        '1,4': {
          r: '6',
          i: 23
        },
        '5,5': {
          r: '6',
          i: 23
        },
        '5,4': {
          r: '6',
          i: 23
        },
        '6,3': {
          r: '6',
          i: 24
        },
        '0,2': {
          r: '6',
          i: 22
        },
        '5,1': {
          r: '6',
          i: 23
        },
        '2,4': {
          r: '6',
          i: 23
        },
        '1,0': {
          r: '6',
          i: 8
        },
        '4,0': {
          r: '6',
          i: 8
        },
        '6,0': {
          r: '6',
          i: 9
        },
        '0,6': {
          r: '6',
          i: 37
        },
        '1,5': {
          r: '6',
          i: 23
        },
        '5,2': {
          r: '6',
          i: 23
        }
      },
      instances: [],
      properties: {
        dlayer: '1'
      },
      tps: {
        '1,1': {
          layer: '1'
        },
        '0,6': {
          layer: '1'
        },
        '4,2': {
          layer: '1'
        },
        '0,0': {
          layer: '1'
        },
        '3,5': {
          layer: '1'
        },
        '6,0': {
          layer: '1'
        },
        '5,5': {
          layer: '1'
        },
        '1,6': {
          layer: '1'
        },
        '4,5': {
          layer: '1'
        },
        '4,1': {
          layer: '1'
        },
        '3,4': {
          layer: '1'
        },
        '0,1': {
          layer: '1'
        },
        '2,0': {
          layer: '1'
        },
        '2,6': {
          layer: '1'
        },
        '0,5': {
          layer: '1'
        },
        '6,4': {
          layer: '1'
        },
        '5,0': {
          layer: '1'
        },
        '4,6': {
          layer: '1'
        },
        '2,3': {
          layer: '1'
        },
        '3,0': {
          layer: '1'
        },
        '0,4': {
          layer: '1'
        },
        '2,5': {
          layer: '1'
        },
        '5,1': {
          layer: '1'
        },
        '6,2': {
          layer: '1'
        },
        '3,3': {
          layer: '1'
        },
        '6,6': {
          layer: '1'
        },
        '3,1': {
          layer: '1'
        },
        '1,3': {
          layer: '1'
        },
        '3,6': {
          layer: '1'
        },
        '4,3': {
          layer: '1'
        },
        '6,5': {
          layer: '1'
        },
        '0,3': {
          layer: '1'
        },
        '5,6': {
          layer: '1'
        },
        '3,2': {
          layer: '1'
        },
        '5,3': {
          layer: '1'
        },
        '6,1': {
          layer: '1'
        },
        '1,4': {
          layer: '1'
        },
        '2,4': {
          layer: '1'
        },
        '5,4': {
          layer: '1'
        },
        '6,3': {
          layer: '1'
        },
        '0,2': {
          layer: '1'
        },
        '1,2': {
          layer: '1'
        },
        '1,5': {
          layer: '1'
        },
        '1,0': {
          layer: '1'
        },
        '4,0': {
          layer: '1'
        },
        '4,4': {
          layer: '1'
        },
        '2,2': {
          layer: '1'
        },
        '2,1': {
          layer: '1'
        },
        '5,2': {
          layer: '1'
        }
      }
    },
    handgun: {
      cols: 1,
      rows: 1,
      baseLoc: '0,0',
      origin: '0,0',
      tiles: {
        '0,0': {
          r: '3',
          i: 24
        }
      },
      instances: [],
      properties: {
        cat: 'invisible'
      },
      tps: {}
    },
    sky003: {
      cols: 1,
      rows: 1,
      baseLoc: '0,0',
      origin: '0,0',
      tiles: {
        '0,0': {
          r: '1',
          i: 336
        }
      },
      instances: [],
      properties: {
        cat: 'sky'
      },
      tps: {}
    },
    boxStair0: {
      cols: 2,
      rows: 1,
      baseLoc: '0,0',
      origin: '0,0',
      tiles: {
        '0,0': {
          r: '0',
          i: 99
        },
        '1,0': {
          r: '0',
          i: 248
        }
      },
      instances: [],
      properties: {
        cat: 'stair'
      },
      tps: {
        '0,0': {
          test: 'flat',
          block: '0',
          s: '1',
          layer: '1'
        },
        '1,0': {
          layer: '0.5',
          test: 'flat',
          block: '0'
        }
      }
    },
    sky001: {
      cols: 1,
      rows: 1,
      baseLoc: '0,0',
      origin: '0,0',
      tiles: {
        '0,0': {
          r: '1',
          i: 267
        }
      },
      instances: [],
      properties: {
        cat: 'sky'
      },
      tps: {}
    },
    weapon7: {
      cols: 1,
      rows: 1,
      baseLoc: '0,0',
      origin: '0,0',
      tiles: {
        '0,0': {
          r: '3',
          i: 21
        }
      },
      instances: [],
      properties: {
        cat: 'weapon',
        tip: 'magazine'
      },
      tps: {
        '0,0': {
          stuff: '1'
        }
      }
    },
    sky009: {
      cols: 1,
      rows: 1,
      baseLoc: '0,0',
      origin: '0,0',
      tiles: {
        '0,0': {
          r: '5',
          i: 77
        }
      },
      instances: [],
      properties: {
        cat: 'sky'
      },
      tps: {}
    },
    dstb3: {
      cols: 1,
      rows: 4,
      baseLoc: '0,1',
      origin: '0,0',
      tiles: {
        '0,2': {
          r: '0',
          i: 178
        },
        '0,3': {
          r: '0',
          i: 193
        },
        '0,0': {
          r: '0',
          i: 163
        },
        '0,1': {
          r: '0',
          i: 178
        }
      },
      instances: [],
      properties: {
        cat: 'stair'
      },
      tps: {
        '0,2': {
          layer: '0.5',
          test: 'edge;tileset1;0,1'
        },
        '0,3': {
          test: 'edge;tileset1;0,1'
        },
        '0,0': {
          test: 'edge;tileset1;0,1'
        },
        '0,1': {
          layer: '0.5',
          test: 'edge;tileset1;0,1'
        }
      }
    },
    tileset0D: {
      cols: 10,
      rows: 4,
      baseLoc: '0,0',
      origin: '0,0',
      tiles: {
        '5,0': {
          r: '0',
          i: 286
        },
        '2,2': {
          r: '0',
          i: 92
        },
        '7,3': {
          r: '0',
          i: 306
        },
        '0,0': {
          r: '0',
          i: 60
        },
        '7,1': {
          r: '0',
          i: 302
        },
        '1,1': {
          r: '0',
          i: 76
        },
        '4,1': {
          r: '0',
          i: 60
        },
        '4,2': {
          r: '0',
          i: 292
        },
        '0,1': {
          r: '0',
          i: 75
        },
        '2,0': {
          r: '0',
          i: 62
        },
        '7,0': {
          r: '0',
          i: 287
        },
        '3,1': {
          r: '0',
          i: 62
        },
        '3,0': {
          r: '0',
          i: 92
        },
        '1,2': {
          r: '0',
          i: 91
        },
        '6,2': {
          r: '0',
          i: 290
        },
        '8,0': {
          r: '0',
          i: 288
        },
        '7,2': {
          r: '0',
          i: 282
        },
        '6,1': {
          r: '0',
          i: 301
        },
        '5,3': {
          r: '0',
          i: 304
        },
        '9,0': {
          r: '0',
          i: 293
        },
        '3,2': {
          r: '0',
          i: 291
        },
        '8,1': {
          r: '0',
          i: 303
        },
        '8,3': {
          r: '0',
          i: 307
        },
        '6,0': {
          r: '0',
          i: 300
        },
        '5,2': {
          r: '0',
          i: 289
        },
        '6,3': {
          r: '0',
          i: 305
        },
        '9,2': {
          r: '0',
          i: 294
        },
        '5,1': {
          r: '0',
          i: 285
        },
        '2,1': {
          r: '0',
          i: 77
        },
        '1,0': {
          r: '0',
          i: 61
        },
        '8,2': {
          r: '0',
          i: 283
        },
        '4,0': {
          r: '0',
          i: 90
        },
        '0,2': {
          r: '0',
          i: 90
        },
        '9,1': {
          r: '0',
          i: 308
        },
        '9,3': {
          r: '0',
          i: 309
        }
      },
      instances: [],
      properties: {
        cat: 'tileset',
        flat: '1'
      },
      tps: {
        '1,1': {
          block: '0'
        },
        '4,2': {
          block: '0'
        },
        '0,0': {
          block: '0'
        },
        '7,1': {
          block: '0'
        },
        '5,0': {
          block: '0'
        },
        '4,1': {
          block: '0'
        },
        '7,0': {
          block: '0'
        },
        '0,1': {
          block: '0'
        },
        '2,0': {
          block: '0'
        },
        '8,0': {
          block: '0'
        },
        '3,1': {
          block: '0'
        },
        '3,0': {
          block: '0'
        },
        '5,1': {
          block: '0'
        },
        '6,2': {
          block: '0'
        },
        '6,1': {
          block: '0'
        },
        '5,3': {
          block: '0'
        },
        '3,2': {
          block: '0'
        },
        '8,1': {
          block: '0'
        },
        '5,2': {
          block: '0'
        },
        '6,3': {
          block: '0'
        },
        '0,2': {
          block: '0'
        },
        '1,2': {
          block: '0'
        },
        '2,1': {
          block: '0'
        },
        '1,0': {
          block: '0'
        },
        '4,0': {
          block: '0'
        },
        '6,0': {
          block: '0'
        },
        '2,2': {
          block: '0'
        }
      }
    },
    bed5: {
      cols: 3,
      rows: 3,
      baseLoc: '1,1',
      origin: '0,0',
      tiles: {
        '0,2': {
          r: '6',
          i: 201
        },
        '1,2': {
          r: '6',
          i: 202
        },
        '0,0': {
          r: '6',
          i: 171
        },
        '1,0': {
          r: '6',
          i: 172
        },
        '1,1': {
          r: '6',
          i: 187
        },
        '2,2': {
          r: '6',
          i: 203
        },
        '0,1': {
          r: '6',
          i: 186
        },
        '2,0': {
          r: '6',
          i: 173
        },
        '2,1': {
          r: '6',
          i: 188
        }
      },
      instances: [],
      properties: {},
      tps: {
        '0,2': {
          layer: '1'
        },
        '1,2': {
          layer: '1'
        },
        '0,0': {
          layer: '1'
        },
        '1,0': {
          layer: '1'
        },
        '1,1': {
          layer: '1'
        },
        '2,2': {
          layer: '1'
        },
        '0,1': {
          layer: '1'
        },
        '2,0': {
          layer: '1'
        },
        '2,1': {
          layer: '1'
        }
      }
    },
    rock3: {
      cols: 1,
      rows: 1,
      baseLoc: '0,0',
      origin: '0,0',
      tiles: {
        '0,0': {
          r: '4',
          i: 91
        }
      },
      instances: [],
      properties: {},
      tps: {
        '0,0': {
          layer: '1.5'
        }
      }
    },
    dstai1: {
      cols: 3,
      rows: 1,
      baseLoc: '1,0',
      origin: '0,0',
      tiles: {
        '0,0': {
          r: '8',
          i: 11
        },
        '1,0': {
          r: '8',
          i: 12
        },
        '2,0': {
          r: '8',
          i: 13
        }
      },
      instances: [],
      properties: {
        cat: 'stair'
      },
      tps: {
        '0,0': {
          layer: '0',
          test: 'edge;tilesetC;1,0',
          block: '1'
        },
        '1,0': {
          layer: '0',
          test: 'edge;tilesetC;1,0',
          block: '0'
        },
        '2,0': {
          layer: '0',
          test: 'edge;tilesetC;1,0',
          block: '1'
        }
      }
    },
    boxStair2: {
      cols: 1,
      rows: 2,
      baseLoc: '0,1',
      origin: '0,0',
      tiles: {
        '0,0': {
          r: '0',
          i: 263
        },
        '0,1': {
          r: '0',
          i: 130
        }
      },
      instances: [],
      properties: {
        cat: 'stair'
      },
      tps: {
        '0,0': {
          test: 'flat',
          block: '0',
          layer: '0.5'
        },
        '0,1': {
          test: 'flat',
          block: '0',
          s: '1',
          layer: '1'
        }
      }
    },
    weapon8: {
      cols: 1,
      rows: 1,
      baseLoc: '0,0',
      origin: '0,0',
      tiles: {
        '0,0': {
          r: '3',
          i: 22
        }
      },
      instances: [],
      properties: {
        cat: 'weapon',
        tip: 'shield'
      },
      tps: {
        '0,0': {
          stuff: '6'
        }
      }
    },
    weapon6: {
      cols: 1,
      rows: 1,
      baseLoc: '0,0',
      origin: '0,0',
      tiles: {
        '0,0': {
          r: '3',
          i: 20
        }
      },
      instances: [],
      properties: {
        cat: 'weapon',
        tip: 'shotgun'
      },
      tps: {
        '0,0': {
          stuff: '7'
        }
      }
    },
    house1: {
      cols: 4,
      rows: 5,
      baseLoc: '1,2',
      origin: '0,0',
      tiles: {
        '2,2': {
          r: '4',
          i: 227
        },
        '1,1': {
          r: '4',
          i: 211
        },
        '0,3': {
          r: '4',
          i: 240
        },
        '0,0': {
          r: '4',
          i: 195
        },
        '3,2': {
          r: '4',
          i: 228
        },
        '1,0': {
          r: '4',
          i: 196
        },
        '1,4': {
          r: '4',
          i: 256
        },
        '2,4': {
          r: '4',
          i: 257
        },
        '2,0': {
          r: '4',
          i: 197
        },
        '1,3': {
          r: '4',
          i: 241
        },
        '2,3': {
          r: '4',
          i: 242
        },
        '0,2': {
          r: '4',
          i: 225
        },
        '1,2': {
          r: '4',
          i: 226
        },
        '3,4': {
          r: '4',
          i: 258
        },
        '3,1': {
          r: '4',
          i: 213
        },
        '3,0': {
          r: '4',
          i: 198
        },
        '0,4': {
          r: '4',
          i: 255
        },
        '3,3': {
          r: '4',
          i: 243
        },
        '2,1': {
          r: '4',
          i: 212
        },
        '0,1': {
          r: '4',
          i: 210
        }
      },
      instances: [],
      properties: {},
      tps: {
        '3,2': {
          test: 'flat',
          block: '0',
          layer: '2'
        },
        '1,1': {
          test: 'flat',
          block: '0',
          layer: '2.5'
        },
        '0,3': {
          test: 'flat',
          block: '0',
          layer: '2'
        },
        '0,0': {
          test: 'flat',
          block: '0',
          layer: '2'
        },
        '3,1': {
          test: 'flat',
          block: '0',
          layer: '2'
        },
        '3,0': {
          test: 'flat',
          block: '0',
          layer: '2'
        },
        '2,4': {
          test: 'flat',
          block: '0',
          s: '1',
          layer: '2.5'
        },
        '1,4': {
          test: 'flat',
          block: '0',
          s: '1',
          layer: '2.5'
        },
        '0,1': {
          test: 'flat',
          block: '0',
          layer: '2'
        },
        '2,0': {
          test: 'flat',
          block: '0',
          s: '1',
          layer: '2.5'
        },
        '0,2': {
          test: 'flat',
          block: '0',
          layer: '2'
        },
        '1,2': {
          test: 'flat',
          block: '0',
          layer: '2.5'
        },
        '3,4': {
          test: 'flat',
          block: '0',
          layer: '2'
        },
        '2,1': {
          test: 'flat',
          block: '0',
          layer: '2.5'
        },
        '1,0': {
          test: 'flat',
          block: '0',
          s: '1',
          layer: '2.5'
        },
        '0,4': {
          test: 'flat',
          block: '0',
          layer: '2'
        },
        '3,3': {
          test: 'flat',
          block: '0',
          layer: '2'
        },
        '2,2': {
          test: 'flat',
          block: '0',
          layer: '2.5'
        },
        '2,3': {
          test: 'flat',
          block: '0',
          layer: '2.5'
        },
        '1,3': {
          test: 'flat',
          block: '0',
          layer: '2.5'
        }
      }
    },
    pillar5a: {
      cols: 1,
      rows: 1,
      baseLoc: '0,0',
      origin: '0,0',
      tiles: {
        '0,0': {
          r: '7',
          i: 267
        }
      },
      instances: [],
      properties: {},
      tps: {
        '0,0': {
          s: '1',
          layer: '7'
        }
      }
    },
    dstad1a: {
      cols: 3,
      rows: 2,
      baseLoc: '0,0',
      origin: '0,0',
      tiles: {
        '1,1': {
          r: '1',
          i: 156
        },
        '2,1': {
          r: '1',
          i: 384
        },
        '0,0': {
          r: '1',
          i: 366
        },
        '2,0': {
          r: '1',
          i: 367
        },
        '1,0': {
          r: '1',
          i: 156
        },
        '0,1': {
          r: '1',
          i: 383
        }
      },
      instances: [],
      properties: {
        cat: 'stair'
      },
      tps: {
        '2,0': {
          test: 'edge;tileset1;1,2'
        },
        '1,1': {
          layer: '0.5',
          test: 'flat'
        },
        '0,0': {
          test: 'edge;tileset1;1,2'
        },
        '0,1': {
          layer: '0.5',
          test: 'flat'
        },
        '1,0': {
          test: 'edge;tileset1;1,2'
        },
        '2,1': {
          layer: '0.5',
          test: 'flat'
        }
      }
    },
    carpet0: {
      cols: 10,
      rows: 4,
      baseLoc: '0,0',
      origin: '0,0',
      tiles: {
        '5,0': {
          r: '1',
          i: 51
        },
        '2,2': {
          r: '1',
          i: 425
        },
        '7,3': {
          r: '1',
          i: 221
        },
        '0,0': {
          r: '1',
          i: 409
        },
        '7,1': {
          r: '1',
          i: 55
        },
        '1,1': {
          r: '1',
          i: 82
        },
        '4,1': {
          r: '1',
          i: 433
        },
        '4,2': {
          r: '1',
          i: 14
        },
        '0,1': {
          r: '1',
          i: 57
        },
        '2,0': {
          r: '1',
          i: 410
        },
        '7,0': {
          r: '1',
          i: 52
        },
        '3,1': {
          r: '1',
          i: 432
        },
        '3,0': {
          r: '1',
          i: 417
        },
        '1,2': {
          r: '1',
          i: 80
        },
        '6,2': {
          r: '1',
          i: 13
        },
        '8,0': {
          r: '1',
          i: 68
        },
        '7,2': {
          r: '1',
          i: 253
        },
        '6,1': {
          r: '1',
          i: 54
        },
        '5,3': {
          r: '1',
          i: 27
        },
        '9,0': {
          r: '1',
          i: 179
        },
        '3,2': {
          r: '1',
          i: 29
        },
        '8,1': {
          r: '1',
          i: 53
        },
        '8,3': {
          r: '1',
          i: 222
        },
        '6,0': {
          r: '1',
          i: 67
        },
        '5,2': {
          r: '1',
          i: 12
        },
        '6,3': {
          r: '1',
          i: 28
        },
        '9,2': {
          r: '1',
          i: 192
        },
        '5,1': {
          r: '1',
          i: 56
        },
        '2,1': {
          r: '1',
          i: 58
        },
        '1,0': {
          r: '1',
          i: 65
        },
        '8,2': {
          r: '1',
          i: 254
        },
        '4,0': {
          r: '1',
          i: 418
        },
        '0,2': {
          r: '1',
          i: 424
        },
        '9,1': {
          r: '1',
          i: 194
        },
        '9,3': {
          r: '1',
          i: 207
        }
      },
      instances: [],
      properties: {
        cat: 'tileset'
      },
      tps: {
        '1,1': {
          block: '0',
          layer: '1'
        },
        '9,2': {
          block: '0'
        },
        '4,2': {
          block: '0'
        },
        '0,0': {
          block: '0',
          layer: '0.5'
        },
        '7,1': {
          block: '0'
        },
        '5,0': {
          block: '0'
        },
        '4,1': {
          block: '0',
          layer: '0.5'
        },
        '7,0': {
          block: '0'
        },
        '0,1': {
          block: '0',
          layer: '0.5'
        },
        '2,0': {
          block: '0',
          layer: '0.5'
        },
        '8,1': {
          block: '0'
        },
        '8,0': {
          block: '0'
        },
        '3,1': {
          block: '0',
          layer: '0.5'
        },
        '3,0': {
          block: '0',
          layer: '0.5'
        },
        '5,1': {
          block: '0'
        },
        '6,2': {
          block: '0'
        },
        '7,2': {
          block: '0'
        },
        '6,1': {
          block: '0'
        },
        '5,3': {
          block: '0'
        },
        '9,0': {
          block: '0'
        },
        '9,1': {
          block: '0'
        },
        '3,2': {
          block: '0'
        },
        '7,3': {
          block: '0'
        },
        '8,3': {
          block: '0'
        },
        '5,2': {
          block: '0'
        },
        '6,3': {
          block: '0'
        },
        '0,2': {
          block: '0',
          layer: '0.5'
        },
        '1,2': {
          block: '0',
          layer: '0.5'
        },
        '2,1': {
          block: '0',
          layer: '0.5'
        },
        '1,0': {
          block: '0',
          layer: '0.5'
        },
        '8,2': {
          block: '0'
        },
        '4,0': {
          block: '0',
          layer: '0.5'
        },
        '6,0': {
          block: '0'
        },
        '2,2': {
          block: '0',
          layer: '0.5'
        },
        '9,3': {
          block: '0'
        }
      }
    },
    shadow1_e: {
      cols: 1,
      rows: 1,
      baseLoc: '0,0',
      origin: '0,0',
      tiles: {
        '0,0': {
          r: '4',
          i: 94
        }
      },
      instances: [],
      properties: {
        layer: 'up'
      },
      tps: {}
    },
    flag: {
      cols: 1,
      rows: 1,
      baseLoc: '0,0',
      origin: '0,0',
      tiles: {
        '0,0': {
          r: '3',
          i: 5
        }
      },
      instances: [],
      properties: {
        cat: 'invisible'
      },
      tps: {}
    },
    pillar4a: {
      cols: 1,
      rows: 1,
      baseLoc: '0,0',
      origin: '0,0',
      tiles: {
        '0,0': {
          r: '5',
          i: 77
        }
      },
      instances: [],
      properties: {},
      tps: {
        '0,0': {
          s: '1',
          layer: '7'
        }
      }
    },
    bed1: {
      cols: 2,
      rows: 3,
      baseLoc: '0,1',
      origin: '0,0',
      tiles: {
        '0,2': {
          r: '6',
          i: 199
        },
        '1,1': {
          r: '6',
          i: 185
        },
        '1,2': {
          r: '6',
          i: 200
        },
        '0,0': {
          r: '6',
          i: 169
        },
        '0,1': {
          r: '6',
          i: 184
        },
        '1,0': {
          r: '6',
          i: 170
        }
      },
      instances: [],
      properties: {},
      tps: {
        '0,2': {
          layer: '1'
        },
        '1,1': {
          layer: '1'
        },
        '1,2': {
          layer: '1'
        },
        '0,0': {
          layer: '1'
        },
        '0,1': {
          layer: '1'
        },
        '1,0': {
          layer: '1'
        }
      }
    },
    dstbi2: {
      cols: 1,
      rows: 4,
      baseLoc: '0,1',
      origin: '0,0',
      tiles: {
        '0,2': {
          r: '8',
          i: 44
        },
        '0,3': {
          r: '8',
          i: 59
        },
        '0,0': {
          r: '8',
          i: 29
        },
        '0,1': {
          r: '8',
          i: 44
        }
      },
      instances: [],
      properties: {
        cat: 'stair'
      },
      tps: {
        '0,2': {
          block: '0',
          test: 'edge;tilesetC;2,1',
          layer: '0'
        },
        '0,3': {
          test: 'edge;tilesetC;2,1',
          block: '1',
          layer: '0'
        },
        '0,0': {
          block: '1',
          layer: '0',
          test: 'edge;tilesetC;2,1'
        },
        '0,1': {
          block: '0',
          layer: '0',
          test: 'edge;tilesetC;2,1'
        }
      }
    },
    tileset8: {
      cols: 9,
      rows: 4,
      baseLoc: '0,0',
      origin: '0,0',
      tiles: {
        '1,1': {
          r: '1',
          i: 347
        },
        '2,2': {
          r: '1',
          i: 347
        },
        '4,2': {
          r: '1',
          i: 362
        },
        '0,0': {
          r: '1',
          i: 347
        },
        '7,1': {
          r: '1',
          i: 360
        },
        '5,0': {
          r: '1',
          i: 375
        },
        '4,1': {
          r: '1',
          i: 347
        },
        '7,0': {
          r: '1',
          i: 345
        },
        '0,1': {
          r: '1',
          i: 347
        },
        '2,0': {
          r: '1',
          i: 347
        },
        '8,0': {
          r: '1',
          i: 346
        },
        '3,1': {
          r: '1',
          i: 347
        },
        '3,0': {
          r: '1',
          i: 347
        },
        '6,2': {
          r: '1',
          i: 378
        },
        '6,1': {
          r: '1',
          i: 391
        },
        '5,3': {
          r: '1',
          i: 392
        },
        '3,2': {
          r: '1',
          i: 363
        },
        '8,1': {
          r: '1',
          i: 361
        },
        '5,2': {
          r: '1',
          i: 377
        },
        '6,3': {
          r: '1',
          i: 393
        },
        '0,2': {
          r: '1',
          i: 347
        },
        '5,1': {
          r: '1',
          i: 390
        },
        '2,1': {
          r: '1',
          i: 347
        },
        '1,0': {
          r: '1',
          i: 347
        },
        '4,0': {
          r: '1',
          i: 347
        },
        '6,0': {
          r: '1',
          i: 376
        },
        '1,2': {
          r: '1',
          i: 347
        }
      },
      instances: [],
      properties: {
        cat: 'tileset'
      },
      tps: {
        '1,1': {
          block: '0',
          layer: '0'
        },
        '4,2': {
          block: '0'
        },
        '0,0': {
          block: '0'
        },
        '7,1': {
          block: '0'
        },
        '5,0': {
          block: '0'
        },
        '4,1': {
          block: '0'
        },
        '7,0': {
          block: '0'
        },
        '0,1': {
          block: '0'
        },
        '2,0': {
          block: '0'
        },
        '8,0': {
          block: '0'
        },
        '3,1': {
          block: '0'
        },
        '3,0': {
          block: '0'
        },
        '5,1': {
          block: '0'
        },
        '6,2': {
          block: '0'
        },
        '6,1': {
          block: '0'
        },
        '5,3': {
          block: '0'
        },
        '3,2': {
          block: '0'
        },
        '8,1': {
          block: '0'
        },
        '5,2': {
          block: '0'
        },
        '6,3': {
          block: '0'
        },
        '0,2': {
          block: '0'
        },
        '1,2': {
          block: '0'
        },
        '2,1': {
          block: '0'
        },
        '1,0': {
          block: '0'
        },
        '4,0': {
          block: '0'
        },
        '6,0': {
          block: '0'
        },
        '2,2': {
          block: '0'
        }
      }
    },
    dstb0: {
      cols: 4,
      rows: 1,
      baseLoc: '1,0',
      origin: '0,0',
      tiles: {
        '2,0': {
          r: '0',
          i: 147
        },
        '0,0': {
          r: '0',
          i: 146
        },
        '3,0': {
          r: '0',
          i: 148
        },
        '1,0': {
          r: '0',
          i: 147
        }
      },
      instances: [],
      properties: {
        cat: 'stair'
      },
      tps: {
        '3,0': {
          test: 'edge;tileset1;1,2'
        },
        '0,0': {
          test: 'edge;tileset1;1,2'
        },
        '1,0': {
          layer: '0.5',
          test: 'edge;tileset1;1,2'
        },
        '2,0': {
          layer: '0.5',
          test: 'edge;tileset1;1,2'
        }
      }
    },
    dste2: {
      cols: 2,
      rows: 4,
      baseLoc: '1,1',
      origin: '0,0',
      tiles: {
        '0,2': {
          r: '0',
          i: 63
        },
        '0,3': {
          r: '0',
          i: 276
        },
        '0,0': {
          r: '0',
          i: 274
        },
        '1,0': {
          r: '0',
          i: 275
        },
        '1,1': {
          r: '0',
          i: 63
        },
        '1,2': {
          r: '0',
          i: 63
        },
        '0,1': {
          r: '0',
          i: 63
        },
        '1,3': {
          r: '0',
          i: 277
        }
      },
      instances: [],
      properties: {
        cat: 'stair'
      },
      tps: {
        '0,2': {
          layer: '0.5',
          test: 'flat'
        },
        '0,3': {
          test: 'flat'
        },
        '0,0': {
          test: 'flat'
        },
        '1,0': {
          test: 'edge;tileset7;0,1'
        },
        '1,1': {
          test: 'edge;tileset7;0,1'
        },
        '1,2': {
          test: 'edge;tileset7;0,1'
        },
        '0,1': {
          layer: '0.5',
          test: 'flat'
        },
        '1,3': {
          test: 'edge;tileset7;0,1'
        }
      }
    },
    boat0: {
      cols: 5,
      rows: 3,
      baseLoc: '2,1',
      origin: '0,0',
      tiles: {
        '1,1': {
          r: '4',
          i: 275
        },
        '4,2': {
          r: '4',
          i: 293
        },
        '0,0': {
          r: '4',
          i: 259
        },
        '3,2': {
          r: '4',
          i: 292
        },
        '4,1': {
          r: '4',
          i: 278
        },
        '0,1': {
          r: '4',
          i: 274
        },
        '2,0': {
          r: '4',
          i: 261
        },
        '0,2': {
          r: '4',
          i: 289
        },
        '1,2': {
          r: '4',
          i: 290
        },
        '3,1': {
          r: '4',
          i: 277
        },
        '1,0': {
          r: '4',
          i: 260
        },
        '4,0': {
          r: '4',
          i: 263
        },
        '2,2': {
          r: '4',
          i: 291
        },
        '2,1': {
          r: '4',
          i: 276
        },
        '3,0': {
          r: '4',
          i: 262
        }
      },
      instances: [],
      properties: {},
      tps: {
        '3,2': {
          block: '1',
          layer: '1'
        },
        '1,1': {
          block: '0'
        },
        '1,2': {
          block: '1',
          layer: '1'
        },
        '2,1': {
          block: '0'
        },
        '1,0': {
          block: '1',
          layer: '1'
        },
        '3,0': {
          block: '1',
          layer: '1'
        },
        '2,2': {
          dlayer: '0.5',
          block: '0'
        },
        '4,1': {
          block: '1',
          layer: '1'
        },
        '0,1': {
          block: '1',
          layer: '1'
        },
        '2,0': {
          dlayer: '0.5',
          block: '0'
        },
        '3,1': {
          block: '0'
        }
      }
    },
    table1: {
      cols: 2,
      rows: 2,
      baseLoc: '0,0',
      origin: '0,0',
      tiles: {
        '1,1': {
          r: '6',
          i: 65
        },
        '0,0': {
          r: '6',
          i: 49
        },
        '0,1': {
          r: '6',
          i: 64
        },
        '1,0': {
          r: '6',
          i: 50
        }
      },
      instances: [],
      properties: {},
      tps: {
        '1,1': {
          layer: '1'
        },
        '0,0': {
          layer: '1'
        },
        '0,1': {
          layer: '1'
        },
        '1,0': {
          layer: '1'
        }
      }
    },
    wallset0: {
      cols: 5,
      rows: 3,
      baseLoc: '0,0',
      origin: '0,0',
      tiles: {
        '0,2': {
          r: '0',
          i: 135
        },
        '1,2': {
          r: '0',
          i: 136
        },
        '3,1': {
          r: '0',
          i: 194
        },
        '3,2': {
          r: '0',
          i: 194
        },
        '3,0': {
          r: '0',
          i: 194
        },
        '0,1': {
          r: '0',
          i: 120
        },
        '4,0': {
          r: '0',
          i: 194
        },
        '2,2': {
          r: '0',
          i: 126
        },
        '0,0': {
          r: '0',
          i: 109
        },
        '1,0': {
          r: '0',
          i: 107
        },
        '2,0': {
          r: '0',
          i: 108
        },
        '2,1': {
          r: '0',
          i: 123
        }
      },
      instances: [],
      properties: {
        cat: 'wallset',
        dlayer: '3'
      },
      tps: {
        '3,2': {
          s: '1'
        },
        '0,2': {
          s: '1'
        },
        '1,2': {
          s: '1'
        },
        '3,1': {
          s: '1'
        },
        '0,0': {
          s: '1'
        },
        '1,0': {
          s: '1'
        },
        '3,0': {
          s: '1'
        },
        '4,0': {
          s: '1'
        },
        '2,2': {
          s: '1'
        },
        '0,1': {
          s: '1'
        },
        '2,0': {
          s: '1'
        },
        '2,1': {
          s: '1'
        }
      }
    },
    tileset7: {
      cols: 9,
      rows: 4,
      baseLoc: '0,0',
      origin: '0,0',
      tiles: {
        '1,1': {
          r: '0',
          i: 87
        },
        '2,2': {
          r: '0',
          i: 171
        },
        '4,2': {
          r: '0',
          i: 252
        },
        '0,0': {
          r: '0',
          i: 139
        },
        '7,1': {
          r: '0',
          i: 167
        },
        '5,0': {
          r: '0',
          i: 151
        },
        '4,1': {
          r: '0',
          i: 237
        },
        '7,0': {
          r: '0',
          i: 152
        },
        '0,1': {
          r: '0',
          i: 154
        },
        '2,0': {
          r: '0',
          i: 141
        },
        '8,0': {
          r: '0',
          i: 153
        },
        '3,1': {
          r: '0',
          i: 234
        },
        '3,0': {
          r: '0',
          i: 236
        },
        '6,2': {
          r: '0',
          i: 250
        },
        '6,1': {
          r: '0',
          i: 166
        },
        '5,3': {
          r: '0',
          i: 264
        },
        '3,2': {
          r: '0',
          i: 251
        },
        '8,1': {
          r: '0',
          i: 168
        },
        '5,2': {
          r: '0',
          i: 249
        },
        '6,3': {
          r: '0',
          i: 265
        },
        '0,2': {
          r: '0',
          i: 169
        },
        '5,1': {
          r: '0',
          i: 150
        },
        '2,1': {
          r: '0',
          i: 156
        },
        '1,0': {
          r: '0',
          i: 140
        },
        '4,0': {
          r: '0',
          i: 235
        },
        '6,0': {
          r: '0',
          i: 165
        },
        '1,2': {
          r: '0',
          i: 170
        }
      },
      instances: [],
      properties: {
        cat: 'tileset'
      },
      tps: {
        '1,1': {
          block: '0',
          layer: '1'
        },
        '4,2': {
          block: '0'
        },
        '0,0': {
          block: '0',
          layer: '1'
        },
        '7,1': {
          block: '0'
        },
        '5,0': {
          block: '0'
        },
        '4,1': {
          block: '0',
          layer: '1'
        },
        '7,0': {
          block: '0'
        },
        '0,1': {
          block: '0',
          layer: '1'
        },
        '2,0': {
          block: '0',
          layer: '1'
        },
        '8,0': {
          block: '0'
        },
        '3,1': {
          block: '0',
          layer: '1'
        },
        '3,0': {
          block: '0',
          layer: '1'
        },
        '5,1': {
          block: '0'
        },
        '6,2': {
          block: '0'
        },
        '6,1': {
          block: '0'
        },
        '5,3': {
          block: '0'
        },
        '3,2': {
          block: '0'
        },
        '8,1': {
          block: '0'
        },
        '5,2': {
          block: '0'
        },
        '6,3': {
          block: '0'
        },
        '0,2': {
          block: '0',
          layer: '1'
        },
        '1,2': {
          block: '0',
          layer: '1'
        },
        '2,1': {
          block: '0',
          layer: '1'
        },
        '1,0': {
          block: '0',
          layer: '1'
        },
        '4,0': {
          block: '0',
          layer: '1'
        },
        '6,0': {
          block: '0'
        },
        '2,2': {
          block: '0',
          layer: '1'
        }
      }
    },
    tilesetD: {
      cols: 9,
      rows: 4,
      baseLoc: '0,0',
      origin: '0,0',
      tiles: {
        '1,1': {
          r: '8',
          i: 42
        },
        '2,2': {
          r: '8',
          i: 149
        },
        '4,2': {
          r: '8',
          i: 24
        },
        '0,0': {
          r: '8',
          i: 85
        },
        '7,1': {
          r: '8',
          i: 113
        },
        '5,0': {
          r: '8',
          i: 54
        },
        '4,1': {
          r: '8',
          i: 133
        },
        '7,0': {
          r: '8',
          i: 98
        },
        '0,1': {
          r: '8',
          i: 118
        },
        '2,0': {
          r: '8',
          i: 89
        },
        '8,0': {
          r: '8',
          i: 99
        },
        '3,1': {
          r: '8',
          i: 131
        },
        '3,0': {
          r: '8',
          i: 101
        },
        '6,2': {
          r: '8',
          i: 129
        },
        '6,1': {
          r: '8',
          i: 69
        },
        '5,3': {
          r: '8',
          i: 143
        },
        '3,2': {
          r: '8',
          i: 39
        },
        '8,1': {
          r: '8',
          i: 114
        },
        '5,2': {
          r: '8',
          i: 128
        },
        '6,3': {
          r: '8',
          i: 144
        },
        '0,2': {
          r: '8',
          i: 145
        },
        '5,1': {
          r: '8',
          i: 83
        },
        '2,1': {
          r: '8',
          i: 116
        },
        '1,0': {
          r: '8',
          i: 132
        },
        '4,0': {
          r: '8',
          i: 103
        },
        '6,0': {
          r: '8',
          i: 84
        },
        '1,2': {
          r: '8',
          i: 102
        }
      },
      instances: [],
      properties: {
        cat: 'tileset'
      },
      tps: {
        '1,1': {
          block: '0',
          layer: '1'
        },
        '4,2': {
          block: '0'
        },
        '0,0': {
          block: '1',
          layer: '0.5'
        },
        '7,1': {
          block: '0'
        },
        '5,0': {
          block: '0'
        },
        '4,1': {
          block: '1',
          layer: '0.5'
        },
        '7,0': {
          block: '0'
        },
        '0,1': {
          block: '1',
          layer: '0.5'
        },
        '2,0': {
          block: '1',
          layer: '0.5'
        },
        '8,0': {
          block: '0'
        },
        '3,1': {
          block: '1',
          layer: '0.5'
        },
        '3,0': {
          block: '1',
          layer: '0.5'
        },
        '5,1': {
          block: '0'
        },
        '6,2': {
          block: '0'
        },
        '6,1': {
          block: '0'
        },
        '5,3': {
          block: '0'
        },
        '3,2': {
          block: '0'
        },
        '8,1': {
          block: '0'
        },
        '5,2': {
          block: '0'
        },
        '6,3': {
          block: '0'
        },
        '0,2': {
          block: '1',
          layer: '0.5'
        },
        '1,2': {
          block: '1',
          layer: '0.5'
        },
        '2,1': {
          block: '1',
          layer: '0.5'
        },
        '1,0': {
          block: '1',
          layer: '0.5'
        },
        '4,0': {
          block: '1',
          layer: '0.5'
        },
        '6,0': {
          block: '0'
        },
        '2,2': {
          block: '1',
          layer: '0.5'
        }
      }
    },
    dstad0: {
      cols: 2,
      rows: 2,
      baseLoc: '0,0',
      origin: '0,0',
      tiles: {
        '1,1': {
          r: '1',
          i: 352
        },
        '0,0': {
          r: '1',
          i: 381
        },
        '0,1': {
          r: '1',
          i: 351
        },
        '1,0': {
          r: '1',
          i: 382
        }
      },
      instances: [],
      properties: {
        cat: 'stair'
      },
      tps: {
        '1,1': {
          test: 'edge;tileset1;1,0'
        },
        '0,0': {
          layer: '0.5',
          test: 'flat'
        },
        '0,1': {
          test: 'edge;tileset1;1,0'
        },
        '1,0': {
          layer: '0.5',
          test: 'flat'
        }
      }
    },
    wallsetA: {
      cols: 5,
      rows: 3,
      baseLoc: '0,0',
      origin: '0,0',
      tiles: {
        '0,2': {
          r: '7',
          i: 315
        },
        '1,2': {
          r: '7',
          i: 316
        },
        '3,1': {
          r: '7',
          i: 232
        },
        '3,2': {
          r: '7',
          i: 247
        },
        '3,0': {
          r: '7',
          i: 283
        },
        '0,1': {
          r: '7',
          i: 300
        },
        '4,0': {
          r: '7',
          i: 284
        },
        '2,2': {
          r: '7',
          i: 286
        },
        '0,0': {
          r: '7',
          i: 285
        },
        '1,0': {
          r: '7',
          i: 257
        },
        '2,0': {
          r: '7',
          i: 258
        },
        '2,1': {
          r: '7',
          i: 304
        }
      },
      instances: [],
      properties: {
        cat: 'wallset',
        dlayer: '6'
      },
      tps: {
        '3,2': {
          s: '1'
        },
        '0,2': {
          s: '1'
        },
        '1,2': {
          s: '1'
        },
        '3,1': {
          s: '1'
        },
        '0,0': {
          s: '1'
        },
        '1,0': {
          s: '1'
        },
        '3,0': {
          s: '1'
        },
        '4,0': {
          s: '1'
        },
        '2,2': {
          s: '1'
        },
        '0,1': {
          s: '1'
        },
        '2,0': {
          s: '1'
        },
        '2,1': {
          s: '1'
        }
      }
    },
    bridge1: {
      cols: 7,
      rows: 4,
      baseLoc: '0,1',
      origin: '0,0',
      tiles: {
        '1,1': {
          r: '4',
          i: 106
        },
        '2,2': {
          r: '4',
          i: 122
        },
        '4,2': {
          r: '4',
          i: 252
        },
        '0,0': {
          r: '4',
          i: 194
        },
        '3,2': {
          r: '4',
          i: 166
        },
        '4,3': {
          r: '4',
          i: 267
        },
        '5,0': {
          r: '4',
          i: 170
        },
        '4,1': {
          r: '4',
          i: 252
        },
        '6,0': {
          r: '4',
          i: 171
        },
        '5,2': {
          r: '4',
          i: 140
        },
        '2,0': {
          r: '4',
          i: 237
        },
        '6,3': {
          r: '4',
          i: 186
        },
        '2,1': {
          r: '4',
          i: 107
        },
        '0,2': {
          r: '4',
          i: 165
        },
        '5,1': {
          r: '4',
          i: 125
        },
        '0,1': {
          r: '4',
          i: 150
        },
        '1,0': {
          r: '4',
          i: 237
        },
        '4,0': {
          r: '4',
          i: 224
        },
        '6,2': {
          r: '4',
          i: 141
        },
        '1,2': {
          r: '4',
          i: 121
        },
        '3,1': {
          r: '4',
          i: 151
        },
        '3,0': {
          r: '4',
          i: 239
        },
        '6,1': {
          r: '4',
          i: 126
        },
        '5,3': {
          r: '4',
          i: 185
        }
      },
      instances: [],
      properties: {
        cat: 'bridge',
        size: '1'
      },
      tps: {
        '1,1': {
          block: '0',
          layer: '0.5'
        },
        '5,1': {
          block: '0',
          layer: '0.5'
        },
        '2,1': {
          block: '0',
          layer: '0.5'
        },
        '3,1': {
          block: '0',
          layer: '0.5'
        },
        '5,0': {
          block: '0',
          layer: '0.5'
        },
        '0,1': {
          block: '0',
          layer: '0.5'
        },
        '5,2': {
          block: '0',
          layer: '0.5'
        },
        '5,3': {
          block: '0',
          layer: '0.5'
        }
      }
    },
    dsta3: {
      cols: 1,
      rows: 3,
      baseLoc: '0,1',
      origin: '0,0',
      tiles: {
        '0,0': {
          r: '0',
          i: 163
        },
        '0,1': {
          r: '0',
          i: 178
        },
        '0,2': {
          r: '0',
          i: 193
        }
      },
      instances: [],
      properties: {
        cat: 'stair'
      },
      tps: {
        '0,0': {
          test: 'edge;tileset1;0,1'
        },
        '0,1': {
          layer: '0.5',
          test: 'edge;tileset1;0,1'
        },
        '0,2': {
          test: 'edge;tileset1;0,1'
        }
      }
    },
    sky044: {
      cols: 1,
      rows: 1,
      baseLoc: '0,0',
      origin: '0,0',
      tiles: {
        '0,0': {
          r: '5',
          i: 163
        }
      },
      instances: [],
      properties: {
        cat: 'sky'
      },
      tps: {}
    },
    shadow1_s: {
      cols: 1,
      rows: 1,
      baseLoc: '0,0',
      origin: '0,0',
      tiles: {
        '0,0': {
          r: '4',
          i: 84
        }
      },
      instances: [],
      properties: {
        layer: 'up'
      },
      tps: {}
    },
    table0: {
      cols: 3,
      rows: 3,
      baseLoc: '1,1',
      origin: '0,0',
      tiles: {
        '0,2': {
          r: '6',
          i: 37
        },
        '1,2': {
          r: '6',
          i: 38
        },
        '0,0': {
          r: '6',
          i: 7
        },
        '1,0': {
          r: '6',
          i: 8
        },
        '1,1': {
          r: '6',
          i: 23
        },
        '2,2': {
          r: '6',
          i: 39
        },
        '0,1': {
          r: '6',
          i: 22
        },
        '2,0': {
          r: '6',
          i: 9
        },
        '2,1': {
          r: '6',
          i: 24
        }
      },
      instances: [],
      properties: {
        dlayer: '1'
      },
      tps: {
        '0,2': {
          layer: '1'
        },
        '1,2': {
          layer: '1'
        },
        '0,0': {
          layer: '1'
        },
        '1,0': {
          layer: '1'
        },
        '1,1': {
          layer: '1'
        },
        '2,2': {
          layer: '1'
        },
        '0,1': {
          layer: '1'
        },
        '2,0': {
          layer: '1'
        },
        '2,1': {
          layer: '1'
        }
      }
    },
    dstai0a: {
      cols: 3,
      rows: 1,
      baseLoc: '1,0',
      origin: '0,0',
      tiles: {
        '0,0': {
          r: '8',
          i: 146
        },
        '1,0': {
          r: '8',
          i: 147
        },
        '2,0': {
          r: '8',
          i: 148
        }
      },
      instances: [],
      properties: {
        cat: 'stair'
      },
      tps: {
        '0,0': {
          test: 'edge;tilesetD;1,2',
          block: '1'
        },
        '1,0': {
          test: 'edge;tilesetD;1,2',
          layer: '0',
          block: '0'
        },
        '2,0': {
          test: 'edge;tilesetD;1,2',
          block: '1'
        }
      }
    },
    sky022: {
      cols: 1,
      rows: 1,
      baseLoc: '0,0',
      origin: '0,0',
      tiles: {
        '0,0': {
          r: '1',
          i: 73
        }
      },
      instances: [],
      properties: {
        cat: 'sky'
      },
      tps: {}
    },
    dste1: {
      cols: 4,
      rows: 2,
      baseLoc: '1,0',
      origin: '0,0',
      tiles: {
        '1,1': {
          r: '0',
          i: 63
        },
        '0,0': {
          r: '0',
          i: 78
        },
        '1,0': {
          r: '0',
          i: 63
        },
        '2,1': {
          r: '0',
          i: 63
        },
        '0,1': {
          r: '0',
          i: 93
        },
        '3,0': {
          r: '0',
          i: 209
        },
        '2,0': {
          r: '0',
          i: 63
        },
        '3,1': {
          r: '0',
          i: 224
        }
      },
      instances: [],
      properties: {
        cat: 'stair'
      },
      tps: {
        '1,1': {
          layer: '0.5',
          test: 'flat'
        },
        '0,0': {
          test: 'edge;tileset7;1,2'
        },
        '1,0': {
          test: 'edge;tileset7;1,2'
        },
        '3,0': {
          test: 'edge;tileset7;1,2'
        },
        '3,1': {
          test: 'flat'
        },
        '0,1': {
          test: 'flat'
        },
        '2,0': {
          test: 'edge;tileset7;1,2'
        },
        '2,1': {
          layer: '0.5',
          test: 'flat'
        }
      }
    },
    lib_moveable_2: {
      cols: 2,
      rows: 2,
      baseLoc: '0,0',
      origin: '0,0',
      tiles: {
        '1,1': {
          r: '4',
          i: 318
        },
        '0,0': {
          r: '4',
          i: 302
        },
        '0,1': {
          r: '4',
          i: 317
        },
        '1,0': {
          r: '4',
          i: 303
        }
      },
      instances: [],
      properties: {
        cat: 'device',
        device: 'block',
        dlayer: '1.5'
      },
      tps: {}
    },
    lava2: {
      cols: 5,
      rows: 3,
      baseLoc: '0,0',
      origin: '0,0',
      tiles: {
        '1,1': {
          r: '2',
          i: 21
        },
        '0,0': {
          r: '2',
          i: 93
        },
        '4,1': {
          r: '2',
          i: 24
        },
        '0,1': {
          r: '2',
          i: 108
        },
        '2,0': {
          r: '2',
          i: 95
        },
        '0,2': {
          r: '2',
          i: 123
        },
        '1,2': {
          r: '2',
          i: 124
        },
        '3,1': {
          r: '2',
          i: 23
        },
        '1,0': {
          r: '2',
          i: 94
        },
        '4,0': {
          r: '2',
          i: 9
        },
        '2,2': {
          r: '2',
          i: 125
        },
        '2,1': {
          r: '2',
          i: 110
        },
        '3,0': {
          r: '2',
          i: 8
        }
      },
      instances: [],
      properties: {
        cat: 'tileset'
      },
      tps: {
        '1,1': {
          lava: '1'
        },
        '0,0': {
          lava: '1'
        },
        '4,1': {
          lava: '1'
        },
        '0,1': {
          lava: '1'
        },
        '2,0': {
          lava: '1'
        },
        '0,2': {
          lava: '1'
        },
        '1,2': {
          lava: '1'
        },
        '3,1': {
          lava: '1'
        },
        '1,0': {
          lava: '1'
        },
        '4,0': {
          lava: '1'
        },
        '2,2': {
          lava: '1'
        },
        '2,1': {
          lava: '1'
        },
        '3,0': {
          lava: '1'
        }
      }
    },
    sky011: {
      cols: 1,
      rows: 1,
      baseLoc: '0,0',
      origin: '0,0',
      tiles: {
        '0,0': {
          r: '0',
          i: 87
        }
      },
      instances: [],
      properties: {
        cat: 'sky'
      },
      tps: {}
    },
    house9: {
      cols: 4,
      rows: 5,
      baseLoc: '1,2',
      origin: '0,0',
      tiles: {
        '2,2': {
          r: '5',
          i: 99
        },
        '1,1': {
          r: '5',
          i: 83
        },
        '0,3': {
          r: '5',
          i: 112
        },
        '0,0': {
          r: '5',
          i: 67
        },
        '3,2': {
          r: '5',
          i: 100
        },
        '1,0': {
          r: '5',
          i: 68
        },
        '1,4': {
          r: '5',
          i: 128
        },
        '2,4': {
          r: '5',
          i: 129
        },
        '2,0': {
          r: '5',
          i: 69
        },
        '1,3': {
          r: '5',
          i: 113
        },
        '2,3': {
          r: '5',
          i: 114
        },
        '0,2': {
          r: '5',
          i: 97
        },
        '1,2': {
          r: '5',
          i: 98
        },
        '3,4': {
          r: '5',
          i: 130
        },
        '3,1': {
          r: '5',
          i: 85
        },
        '3,0': {
          r: '5',
          i: 70
        },
        '0,4': {
          r: '5',
          i: 127
        },
        '3,3': {
          r: '5',
          i: 115
        },
        '2,1': {
          r: '5',
          i: 84
        },
        '0,1': {
          r: '5',
          i: 82
        }
      },
      instances: [],
      properties: {},
      tps: {
        '3,2': {
          test: 'flat',
          block: '0',
          s: '1',
          layer: '2'
        },
        '1,1': {
          test: 'flat',
          block: '0',
          layer: '2.5'
        },
        '0,3': {
          test: 'flat',
          block: '0',
          s: '1',
          layer: '2'
        },
        '0,0': {
          test: 'flat',
          block: '0',
          s: '1',
          layer: '2'
        },
        '3,1': {
          test: 'flat',
          block: '0',
          s: '1',
          layer: '2'
        },
        '3,0': {
          test: 'flat',
          block: '0',
          s: '1',
          layer: '2'
        },
        '2,4': {
          test: 'flat',
          block: '0',
          s: '1',
          layer: '2.5'
        },
        '1,4': {
          test: 'flat',
          block: '0',
          s: '1',
          layer: '2.5'
        },
        '0,1': {
          test: 'flat',
          block: '0',
          s: '1',
          layer: '2'
        },
        '2,0': {
          test: 'flat',
          block: '0',
          s: '1',
          layer: '2.5'
        },
        '0,2': {
          test: 'flat',
          block: '0',
          s: '1',
          layer: '2'
        },
        '1,2': {
          test: 'flat',
          block: '0',
          layer: '2.5'
        },
        '3,4': {
          test: 'flat',
          block: '0',
          s: '1',
          layer: '2'
        },
        '2,1': {
          test: 'flat',
          block: '0',
          layer: '2.5'
        },
        '1,0': {
          test: 'flat',
          block: '0',
          s: '1',
          layer: '2.5'
        },
        '0,4': {
          test: 'flat',
          block: '0',
          s: '1',
          layer: '2'
        },
        '3,3': {
          test: 'flat',
          block: '0',
          s: '1',
          layer: '2'
        },
        '2,2': {
          test: 'flat',
          block: '0',
          layer: '2.5'
        },
        '2,3': {
          test: 'flat',
          block: '0',
          layer: '2.5'
        },
        '1,3': {
          test: 'flat',
          block: '0',
          layer: '2.5'
        }
      }
    },
    pillar6a: {
      cols: 1,
      rows: 1,
      baseLoc: '0,0',
      origin: '0,0',
      tiles: {
        '0,0': {
          r: '7',
          i: 250
        }
      },
      instances: [],
      properties: {},
      tps: {
        '0,0': {
          s: '1',
          layer: '7'
        }
      }
    },
    pillar6: {
      cols: 2,
      rows: 2,
      baseLoc: '0,0',
      origin: '0,0',
      tiles: {
        '1,1': {
          r: '7',
          i: 239
        },
        '0,0': {
          r: '7',
          i: 176
        },
        '0,1': {
          r: '7',
          i: 208
        },
        '1,0': {
          r: '7',
          i: 178
        }
      },
      instances: [],
      properties: {},
      tps: {
        '1,1': {
          s: '1',
          layer: '9'
        },
        '0,0': {
          s: '1',
          layer: '9'
        },
        '0,1': {
          s: '1',
          layer: '9'
        },
        '1,0': {
          s: '1',
          layer: '9'
        }
      }
    },
    table05: {
      cols: 8,
      rows: 8,
      baseLoc: '3,3',
      origin: '0,0',
      tiles: {
        '5,0': {
          r: '6',
          i: 8
        },
        '7,6': {
          r: '6',
          i: 24
        },
        '4,2': {
          r: '6',
          i: 23
        },
        '3,5': {
          r: '6',
          i: 23
        },
        '4,1': {
          r: '6',
          i: 23
        },
        '3,4': {
          r: '6',
          i: 23
        },
        '5,1': {
          r: '6',
          i: 23
        },
        '2,6': {
          r: '6',
          i: 23
        },
        '0,5': {
          r: '6',
          i: 22
        },
        '7,0': {
          r: '6',
          i: 9
        },
        '2,3': {
          r: '6',
          i: 23
        },
        '0,6': {
          r: '6',
          i: 22
        },
        '2,5': {
          r: '6',
          i: 23
        },
        '3,3': {
          r: '6',
          i: 23
        },
        '3,1': {
          r: '6',
          i: 23
        },
        '7,2': {
          r: '6',
          i: 24
        },
        '4,3': {
          r: '6',
          i: 23
        },
        '5,6': {
          r: '6',
          i: 23
        },
        '1,4': {
          r: '6',
          i: 23
        },
        '2,4': {
          r: '6',
          i: 23
        },
        '5,4': {
          r: '6',
          i: 23
        },
        '1,2': {
          r: '6',
          i: 23
        },
        '2,1': {
          r: '6',
          i: 23
        },
        '1,0': {
          r: '6',
          i: 8
        },
        '6,0': {
          r: '6',
          i: 8
        },
        '3,7': {
          r: '6',
          i: 38
        },
        '5,2': {
          r: '6',
          i: 23
        },
        '0,7': {
          r: '6',
          i: 37
        },
        '1,1': {
          r: '6',
          i: 23
        },
        '7,3': {
          r: '6',
          i: 24
        },
        '0,0': {
          r: '6',
          i: 7
        },
        '1,5': {
          r: '6',
          i: 23
        },
        '7,1': {
          r: '6',
          i: 24
        },
        '1,6': {
          r: '6',
          i: 23
        },
        '4,5': {
          r: '6',
          i: 23
        },
        '0,1': {
          r: '6',
          i: 22
        },
        '2,0': {
          r: '6',
          i: 8
        },
        '6,4': {
          r: '6',
          i: 23
        },
        '4,6': {
          r: '6',
          i: 23
        },
        '3,0': {
          r: '6',
          i: 8
        },
        '0,4': {
          r: '6',
          i: 22
        },
        '6,2': {
          r: '6',
          i: 23
        },
        '6,6': {
          r: '6',
          i: 23
        },
        '4,7': {
          r: '6',
          i: 38
        },
        '1,3': {
          r: '6',
          i: 23
        },
        '2,7': {
          r: '6',
          i: 38
        },
        '5,3': {
          r: '6',
          i: 23
        },
        '6,5': {
          r: '6',
          i: 23
        },
        '0,3': {
          r: '6',
          i: 22
        },
        '3,2': {
          r: '6',
          i: 23
        },
        '3,6': {
          r: '6',
          i: 23
        },
        '6,1': {
          r: '6',
          i: 23
        },
        '6,7': {
          r: '6',
          i: 38
        },
        '5,5': {
          r: '6',
          i: 23
        },
        '7,5': {
          r: '6',
          i: 24
        },
        '5,7': {
          r: '6',
          i: 38
        },
        '4,4': {
          r: '6',
          i: 23
        },
        '7,4': {
          r: '6',
          i: 24
        },
        '6,3': {
          r: '6',
          i: 23
        },
        '4,0': {
          r: '6',
          i: 8
        },
        '0,2': {
          r: '6',
          i: 22
        },
        '2,2': {
          r: '6',
          i: 23
        },
        '1,7': {
          r: '6',
          i: 38
        },
        '7,7': {
          r: '6',
          i: 39
        }
      },
      instances: [],
      properties: {
        dlayer: '1'
      },
      tps: {
        '5,0': {
          layer: '1'
        },
        '0,2': {
          layer: '1'
        },
        '4,2': {
          layer: '1'
        },
        '3,5': {
          layer: '1'
        },
        '4,1': {
          layer: '1'
        },
        '3,4': {
          layer: '1'
        },
        '4,4': {
          layer: '1'
        },
        '7,4': {
          layer: '1'
        },
        '2,6': {
          layer: '1'
        },
        '0,5': {
          layer: '1'
        },
        '7,0': {
          layer: '1'
        },
        '2,3': {
          layer: '1'
        },
        '2,2': {
          layer: '1'
        },
        '2,5': {
          layer: '1'
        },
        '3,3': {
          layer: '1'
        },
        '3,1': {
          layer: '1'
        },
        '7,2': {
          layer: '1'
        },
        '4,3': {
          layer: '1'
        },
        '5,6': {
          layer: '1'
        },
        '7,6': {
          layer: '1'
        },
        '1,4': {
          layer: '1'
        },
        '2,4': {
          layer: '1'
        },
        '5,4': {
          layer: '1'
        },
        '1,2': {
          layer: '1'
        },
        '3,7': {
          layer: '1'
        },
        '1,0': {
          layer: '1'
        },
        '1,5': {
          layer: '1'
        },
        '5,2': {
          layer: '1'
        },
        '0,7': {
          layer: '1'
        },
        '1,1': {
          layer: '1'
        },
        '7,3': {
          layer: '1'
        },
        '0,0': {
          layer: '1'
        },
        '2,1': {
          layer: '1'
        },
        '7,1': {
          layer: '1'
        },
        '1,6': {
          layer: '1'
        },
        '4,5': {
          layer: '1'
        },
        '0,1': {
          layer: '1'
        },
        '2,0': {
          layer: '1'
        },
        '6,4': {
          layer: '1'
        },
        '4,6': {
          layer: '1'
        },
        '3,0': {
          layer: '1'
        },
        '0,4': {
          layer: '1'
        },
        '6,2': {
          layer: '1'
        },
        '6,6': {
          layer: '1'
        },
        '4,7': {
          layer: '1'
        },
        '1,3': {
          layer: '1'
        },
        '2,7': {
          layer: '1'
        },
        '5,3': {
          layer: '1'
        },
        '6,5': {
          layer: '1'
        },
        '0,3': {
          layer: '1'
        },
        '3,2': {
          layer: '1'
        },
        '3,6': {
          layer: '1'
        },
        '6,1': {
          layer: '1'
        },
        '6,7': {
          layer: '1'
        },
        '5,5': {
          layer: '1'
        },
        '7,5': {
          layer: '1'
        },
        '5,7': {
          layer: '1'
        },
        '1,7': {
          layer: '1'
        },
        '5,1': {
          layer: '1'
        },
        '6,3': {
          layer: '1'
        },
        '4,0': {
          layer: '1'
        },
        '6,0': {
          layer: '1'
        },
        '0,6': {
          layer: '1'
        },
        '7,7': {
          layer: '1'
        }
      }
    },
    tileset2: {
      cols: 10,
      rows: 4,
      baseLoc: '0,0',
      origin: '0,0',
      tiles: {
        '5,0': {
          r: '1',
          i: 132
        },
        '2,2': {
          r: '1',
          i: 421
        },
        '7,3': {
          r: '1',
          i: 188
        },
        '0,0': {
          r: '1',
          i: 405
        },
        '7,1': {
          r: '1',
          i: 164
        },
        '1,1': {
          r: '1',
          i: 104
        },
        '4,1': {
          r: '1',
          i: 429
        },
        '4,2': {
          r: '1',
          i: 329
        },
        '0,1': {
          r: '1',
          i: 83
        },
        '2,0': {
          r: '1',
          i: 406
        },
        '7,0': {
          r: '1',
          i: 162
        },
        '3,1': {
          r: '1',
          i: 428
        },
        '3,0': {
          r: '1',
          i: 413
        },
        '1,2': {
          r: '1',
          i: 99
        },
        '6,2': {
          r: '1',
          i: 131
        },
        '8,0': {
          r: '1',
          i: 161
        },
        '7,2': {
          r: '1',
          i: 173
        },
        '6,1': {
          r: '1',
          i: 100
        },
        '5,3': {
          r: '1',
          i: 133
        },
        '9,0': {
          r: '1',
          i: 172
        },
        '3,2': {
          r: '1',
          i: 314
        },
        '8,1': {
          r: '1',
          i: 163
        },
        '8,3': {
          r: '1',
          i: 189
        },
        '6,0': {
          r: '1',
          i: 160
        },
        '5,2': {
          r: '1',
          i: 175
        },
        '6,3': {
          r: '1',
          i: 102
        },
        '9,2': {
          r: '1',
          i: 202
        },
        '5,1': {
          r: '1',
          i: 85
        },
        '2,1': {
          r: '1',
          i: 84
        },
        '1,0': {
          r: '1',
          i: 98
        },
        '8,2': {
          r: '1',
          i: 174
        },
        '4,0': {
          r: '1',
          i: 414
        },
        '0,2': {
          r: '1',
          i: 420
        },
        '9,1': {
          r: '1',
          i: 187
        },
        '9,3': {
          r: '1',
          i: 217
        }
      },
      instances: [],
      properties: {
        cat: 'tileset'
      },
      tps: {
        '1,1': {
          block: '0',
          layer: '1'
        },
        '9,2': {
          block: '0'
        },
        '4,2': {
          block: '0'
        },
        '0,0': {
          block: '0',
          layer: '0.5'
        },
        '7,1': {
          block: '0'
        },
        '5,0': {
          block: '0'
        },
        '4,1': {
          block: '0',
          layer: '1'
        },
        '7,0': {
          block: '0'
        },
        '0,1': {
          block: '0',
          layer: '0.5'
        },
        '2,0': {
          block: '0',
          layer: '0.5'
        },
        '8,1': {
          block: '0'
        },
        '8,0': {
          block: '0'
        },
        '3,1': {
          block: '0',
          layer: '1'
        },
        '3,0': {
          block: '0',
          layer: '1'
        },
        '5,1': {
          block: '0'
        },
        '6,2': {
          block: '0'
        },
        '7,2': {
          block: '0'
        },
        '6,1': {
          block: '0'
        },
        '5,3': {
          block: '0'
        },
        '9,0': {
          block: '0'
        },
        '9,1': {
          block: '0'
        },
        '3,2': {
          block: '0'
        },
        '7,3': {
          block: '0'
        },
        '8,3': {
          block: '0'
        },
        '5,2': {
          block: '0'
        },
        '6,3': {
          block: '0'
        },
        '0,2': {
          block: '0',
          layer: '0.5'
        },
        '1,2': {
          block: '0',
          layer: '0.5'
        },
        '2,1': {
          block: '0',
          layer: '0.5'
        },
        '1,0': {
          block: '0',
          layer: '0.5'
        },
        '8,2': {
          block: '0'
        },
        '4,0': {
          block: '0',
          layer: '1'
        },
        '6,0': {
          block: '0'
        },
        '2,2': {
          block: '0',
          layer: '0.5'
        },
        '9,3': {
          block: '0'
        }
      }
    },
    rug0: {
      cols: 1,
      rows: 2,
      baseLoc: '0,0',
      origin: '0,0',
      tiles: {
        '0,0': {
          r: '6',
          i: 5
        },
        '0,1': {
          r: '6',
          i: 20
        }
      },
      instances: [],
      properties: {},
      tps: {
        '0,0': {
          layer: '0'
        },
        '0,1': {
          layer: '0'
        }
      }
    },
    house0: {
      cols: 5,
      rows: 4,
      baseLoc: '2,1',
      origin: '0,0',
      tiles: {
        '1,1': {
          r: '4',
          i: 215
        },
        '0,3': {
          r: '4',
          i: 244
        },
        '4,2': {
          r: '4',
          i: 233
        },
        '0,0': {
          r: '4',
          i: 199
        },
        '3,2': {
          r: '4',
          i: 232
        },
        '4,1': {
          r: '4',
          i: 218
        },
        '2,2': {
          r: '4',
          i: 231
        },
        '0,1': {
          r: '4',
          i: 214
        },
        '2,0': {
          r: '4',
          i: 201
        },
        '1,3': {
          r: '4',
          i: 245
        },
        '2,1': {
          r: '4',
          i: 216
        },
        '0,2': {
          r: '4',
          i: 229
        },
        '1,2': {
          r: '4',
          i: 230
        },
        '3,1': {
          r: '4',
          i: 217
        },
        '3,0': {
          r: '4',
          i: 202
        },
        '4,0': {
          r: '4',
          i: 203
        },
        '3,3': {
          r: '4',
          i: 247
        },
        '2,3': {
          r: '4',
          i: 246
        },
        '1,0': {
          r: '4',
          i: 200
        },
        '4,3': {
          r: '4',
          i: 248
        }
      },
      instances: [],
      properties: {},
      tps: {
        '1,1': {
          test: 'flat',
          block: '0',
          layer: '2.5'
        },
        '0,3': {
          test: 'flat',
          block: '0',
          layer: '2'
        },
        '4,2': {
          test: 'flat',
          block: '0',
          s: '1',
          layer: '2.5'
        },
        '0,0': {
          test: 'flat',
          block: '0',
          layer: '2'
        },
        '3,1': {
          test: 'flat',
          block: '0',
          layer: '2.5'
        },
        '3,0': {
          test: 'flat',
          block: '0',
          layer: '2'
        },
        '4,1': {
          test: 'flat',
          block: '0',
          s: '1',
          layer: '2.5'
        },
        '3,3': {
          test: 'flat',
          block: '0',
          layer: '2'
        },
        '0,1': {
          test: 'flat',
          block: '0',
          s: '1',
          layer: '2.5'
        },
        '2,0': {
          test: 'flat',
          block: '0',
          layer: '2'
        },
        '0,2': {
          test: 'flat',
          block: '0',
          s: '1',
          layer: '2.5'
        },
        '1,2': {
          test: 'flat',
          block: '0',
          layer: '2.5'
        },
        '2,3': {
          test: 'flat',
          block: '0',
          layer: '2'
        },
        '1,0': {
          test: 'flat',
          block: '0',
          layer: '2'
        },
        '3,2': {
          test: 'flat',
          block: '0',
          layer: '2.5'
        },
        '4,0': {
          test: 'flat',
          block: '0',
          layer: '2'
        },
        '2,2': {
          test: 'flat',
          block: '0',
          layer: '2.5'
        },
        '2,1': {
          test: 'flat',
          block: '0',
          layer: '2.5'
        },
        '1,3': {
          test: 'flat',
          block: '0',
          layer: '2'
        },
        '4,3': {
          test: 'flat',
          block: '0',
          layer: '2'
        }
      }
    },
    water2: {
      cols: 5,
      rows: 3,
      baseLoc: '0,0',
      origin: '0,0',
      tiles: {
        '1,1': {
          r: '8',
          i: 175
        },
        '0,0': {
          r: '8',
          i: 105
        },
        '4,1': {
          r: '8',
          i: 106
        },
        '0,1': {
          r: '8',
          i: 135
        },
        '2,0': {
          r: '8',
          i: 110
        },
        '0,2': {
          r: '8',
          i: 166
        },
        '1,2': {
          r: '8',
          i: 167
        },
        '3,1': {
          r: '8',
          i: 109
        },
        '1,0': {
          r: '8',
          i: 93
        },
        '4,0': {
          r: '8',
          i: 151
        },
        '2,2': {
          r: '8',
          i: 155
        },
        '2,1': {
          r: '8',
          i: 140
        },
        '3,0': {
          r: '8',
          i: 154
        }
      },
      instances: [],
      properties: {
        cat: 'tileset'
      },
      tps: {
        '1,1': {
          water: '1'
        },
        '0,0': {
          block: '0'
        },
        '4,1': {
          water: '1'
        },
        '0,1': {
          block: '0'
        },
        '2,0': {
          block: '0'
        },
        '0,2': {
          block: '0'
        },
        '1,2': {
          block: '0'
        },
        '3,1': {
          water: '1'
        },
        '1,0': {
          block: '0'
        },
        '4,0': {
          water: '1'
        },
        '2,2': {
          block: '0'
        },
        '2,1': {
          block: '0'
        },
        '3,0': {
          water: '1'
        }
      }
    },
    wallset1: {
      cols: 5,
      rows: 3,
      baseLoc: '0,0',
      origin: '0,0',
      tiles: {
        '0,2': {
          r: '1',
          i: 145
        },
        '1,2': {
          r: '1',
          i: 148
        },
        '3,1': {
          r: '1',
          i: 143
        },
        '3,2': {
          r: '1',
          i: 158
        },
        '3,0': {
          r: '1',
          i: 113
        },
        '0,1': {
          r: '1',
          i: 130
        },
        '4,0': {
          r: '1',
          i: 114
        },
        '2,2': {
          r: '1',
          i: 149
        },
        '0,0': {
          r: '1',
          i: 86
        },
        '1,0': {
          r: '1',
          i: 87
        },
        '2,0': {
          r: '1',
          i: 88
        },
        '2,1': {
          r: '1',
          i: 134
        }
      },
      instances: [],
      properties: {
        cat: 'wallset',
        dlayer: '4'
      },
      tps: {
        '3,2': {
          s: '1'
        },
        '0,2': {
          s: '1'
        },
        '1,2': {
          s: '1'
        },
        '3,1': {
          s: '1'
        },
        '0,0': {
          s: '1'
        },
        '1,0': {
          s: '1'
        },
        '3,0': {
          s: '1'
        },
        '4,0': {
          s: '1'
        },
        '2,2': {
          s: '1'
        },
        '0,1': {
          s: '1'
        },
        '2,0': {
          s: '1'
        },
        '2,1': {
          s: '1'
        }
      }
    },
    sky019: {
      cols: 1,
      rows: 1,
      baseLoc: '0,0',
      origin: '0,0',
      tiles: {
        '0,0': {
          r: '7',
          i: 165
        }
      },
      instances: [],
      properties: {
        cat: 'sky'
      },
      tps: {}
    },
    sky040: {
      cols: 1,
      rows: 1,
      baseLoc: '0,0',
      origin: '0,0',
      tiles: {
        '0,0': {
          r: '5',
          i: 72
        }
      },
      instances: [],
      properties: {
        cat: 'sky'
      },
      tps: {}
    },
    shine2_w: {
      cols: 2,
      rows: 1,
      baseLoc: '1,0',
      origin: '0,0',
      tiles: {
        '0,0': {
          r: '4',
          i: 332
        },
        '1,0': {
          r: '4',
          i: 333
        }
      },
      instances: [],
      properties: {
        layer: 'up'
      },
      tps: {}
    },
    bridge5: {
      cols: 9,
      rows: 5,
      baseLoc: '0,1',
      origin: '0,0',
      tiles: {
        '1,1': {
          r: '7',
          i: 180
        },
        '2,2': {
          r: '4',
          i: 400
        },
        '4,2': {
          r: '4',
          i: 398
        },
        '0,0': {
          r: '7',
          i: 336
        },
        '7,1': {
          r: '7',
          i: 169
        },
        '5,0': {
          r: '7',
          i: 186
        },
        '4,1': {
          r: '4',
          i: 398
        },
        '7,0': {
          r: '7',
          i: 260
        },
        '0,1': {
          r: '7',
          i: 170
        },
        '2,0': {
          r: '4',
          i: 385
        },
        '5,2': {
          r: '7',
          i: 180
        },
        '3,4': {
          r: '7',
          i: 277
        },
        '3,1': {
          r: '7',
          i: 171
        },
        '3,0': {
          r: '7',
          i: 336
        },
        '0,4': {
          r: '7',
          i: 307
        },
        '6,2': {
          r: '4',
          i: 399
        },
        '3,3': {
          r: '7',
          i: 262
        },
        '8,0': {
          r: '7',
          i: 261
        },
        '2,3': {
          r: '7',
          i: 184
        },
        '1,3': {
          r: '7',
          i: 184
        },
        '6,1': {
          r: '4',
          i: 399
        },
        '5,3': {
          r: '7',
          i: 185
        },
        '0,3': {
          r: '7',
          i: 292
        },
        '3,2': {
          r: '7',
          i: 336
        },
        '4,3': {
          r: '7',
          i: 336
        },
        '8,1': {
          r: '7',
          i: 244
        },
        '8,3': {
          r: '7',
          i: 276
        },
        '1,4': {
          r: '7',
          i: 212
        },
        '2,4': {
          r: '7',
          i: 212
        },
        '7,2': {
          r: '7',
          i: 169
        },
        '0,2': {
          r: '7',
          i: 336
        },
        '5,1': {
          r: '7',
          i: 180
        },
        '2,1': {
          r: '7',
          i: 180
        },
        '7,3': {
          r: '7',
          i: 275
        },
        '6,3': {
          r: '7',
          i: 336
        },
        '8,2': {
          r: '7',
          i: 244
        },
        '4,0': {
          r: '7',
          i: 336
        },
        '6,0': {
          r: '7',
          i: 336
        },
        '1,2': {
          r: '4',
          i: 400
        },
        '1,0': {
          r: '4',
          i: 385
        }
      },
      instances: [],
      properties: {
        cat: 'bridge',
        size: '2'
      },
      tps: {
        '5,0': {
          block: '0',
          layer: '0.5'
        },
        '0,0': {
          s: '1',
          layer: '3'
        },
        '3,2': {
          s: '1',
          layer: '3'
        },
        '5,3': {
          block: '0',
          layer: '0.5'
        },
        '1,1': {
          layer: '1',
          block: '0'
        },
        '0,1': {
          block: '0',
          layer: '0.5'
        },
        '6,3': {
          s: '1',
          layer: '3'
        },
        '0,2': {
          s: '1',
          layer: '3'
        },
        '5,1': {
          layer: '1',
          block: '0'
        },
        '3,1': {
          block: '0',
          layer: '0.5'
        },
        '3,0': {
          s: '1',
          layer: '3'
        },
        '4,0': {
          s: '1',
          layer: '3'
        },
        '6,0': {
          s: '1',
          layer: '3'
        },
        '2,1': {
          layer: '1',
          block: '0'
        },
        '5,2': {
          layer: '1',
          block: '0'
        },
        '4,3': {
          s: '1',
          layer: '3'
        }
      }
    },
    sky018: {
      cols: 1,
      rows: 1,
      baseLoc: '0,0',
      origin: '0,0',
      tiles: {
        '0,0': {
          r: '7',
          i: 180
        }
      },
      instances: [],
      properties: {
        cat: 'sky'
      },
      tps: {}
    },
    sky010: {
      cols: 1,
      rows: 1,
      baseLoc: '0,0',
      origin: '0,0',
      tiles: {
        '0,0': {
          r: '5',
          i: 0
        }
      },
      instances: [],
      properties: {
        cat: 'sky'
      },
      tps: {}
    },
    dstbi0: {
      cols: 4,
      rows: 1,
      baseLoc: '1,0',
      origin: '0,0',
      tiles: {
        '2,0': {
          r: '8',
          i: 72
        },
        '0,0': {
          r: '8',
          i: 71
        },
        '3,0': {
          r: '8',
          i: 73
        },
        '1,0': {
          r: '8',
          i: 72
        }
      },
      instances: [],
      properties: {
        cat: 'stair'
      },
      tps: {
        '3,0': {
          block: '1',
          layer: '0',
          test: 'edge;tilesetC;1,2'
        },
        '0,0': {
          layer: '0',
          test: 'edge;tilesetC;1,2',
          block: '1'
        },
        '1,0': {
          test: 'edge;tilesetC;1,2',
          layer: '0',
          block: '0'
        },
        '2,0': {
          layer: '0',
          test: 'edge;tilesetC;1,2',
          block: '0'
        }
      }
    },
    pillar5: {
      cols: 2,
      rows: 2,
      baseLoc: '0,0',
      origin: '0,0',
      tiles: {
        '1,1': {
          r: '7',
          i: 149
        },
        '0,0': {
          r: '7',
          i: 86
        },
        '0,1': {
          r: '7',
          i: 145
        },
        '1,0': {
          r: '7',
          i: 88
        }
      },
      instances: [],
      properties: {},
      tps: {
        '1,1': {
          s: '1',
          layer: '9'
        },
        '0,0': {
          s: '1',
          layer: '9'
        },
        '0,1': {
          s: '1',
          layer: '9'
        },
        '1,0': {
          s: '1',
          layer: '9'
        }
      }
    },
    dstai1a: {
      cols: 3,
      rows: 1,
      baseLoc: '1,0',
      origin: '0,0',
      tiles: {
        '0,0': {
          r: '8',
          i: 86
        },
        '1,0': {
          r: '8',
          i: 87
        },
        '2,0': {
          r: '8',
          i: 88
        }
      },
      instances: [],
      properties: {
        cat: 'stair'
      },
      tps: {
        '0,0': {
          layer: '0',
          test: 'edge;tilesetD;1,0',
          block: '1'
        },
        '1,0': {
          layer: '0',
          test: 'edge;tilesetD;1,0',
          block: '0'
        },
        '2,0': {
          layer: '0',
          test: 'edge;tilesetD;1,0',
          block: '1'
        }
      }
    },
    sky027: {
      cols: 1,
      rows: 1,
      baseLoc: '0,0',
      origin: '0,0',
      tiles: {
        '0,0': {
          r: '1',
          i: 104
        }
      },
      instances: [],
      properties: {
        cat: 'sky'
      },
      tps: {}
    },
    house6: {
      cols: 6,
      rows: 4,
      baseLoc: '2,1',
      origin: '0,0',
      tiles: {
        '4,0': {
          r: '0',
          i: 13
        },
        '1,1': {
          r: '0',
          i: 24
        },
        '0,3': {
          r: '0',
          i: 53
        },
        '4,2': {
          r: '0',
          i: 43
        },
        '0,0': {
          r: '0',
          i: 8
        },
        '3,2': {
          r: '0',
          i: 42
        },
        '1,0': {
          r: '0',
          i: 9
        },
        '4,3': {
          r: '0',
          i: 58
        },
        '5,0': {
          r: '0',
          i: 14
        },
        '4,1': {
          r: '0',
          i: 28
        },
        '2,2': {
          r: '0',
          i: 40
        },
        '0,1': {
          r: '0',
          i: 23
        },
        '2,0': {
          r: '0',
          i: 10
        },
        '1,3': {
          r: '0',
          i: 54
        },
        '2,1': {
          r: '0',
          i: 25
        },
        '0,2': {
          r: '0',
          i: 38
        },
        '5,1': {
          r: '0',
          i: 29
        },
        '3,1': {
          r: '0',
          i: 27
        },
        '3,0': {
          r: '0',
          i: 12
        },
        '1,2': {
          r: '0',
          i: 39
        },
        '3,3': {
          r: '0',
          i: 57
        },
        '2,3': {
          r: '0',
          i: 55
        },
        '5,2': {
          r: '0',
          i: 44
        },
        '5,3': {
          r: '0',
          i: 59
        }
      },
      instances: [],
      properties: {},
      tps: {
        '1,1': {
          test: 'flat',
          block: '0',
          layer: '2'
        },
        '0,3': {
          test: 'flat',
          block: '0',
          layer: '2'
        },
        '4,2': {
          test: 'flat',
          block: '0',
          layer: '2'
        },
        '0,0': {
          test: 'flat',
          block: '0',
          layer: '2'
        },
        '3,1': {
          test: 'flat',
          block: '0',
          layer: '2'
        },
        '3,0': {
          test: 'flat',
          block: '0',
          layer: '2'
        },
        '5,2': {
          test: 'flat',
          block: '0',
          s: '1',
          layer: '2'
        },
        '5,0': {
          test: 'flat',
          block: '0',
          layer: '2'
        },
        '4,1': {
          test: 'flat',
          block: '0',
          layer: '2'
        },
        '3,3': {
          test: 'flat',
          block: '0',
          layer: '2'
        },
        '0,1': {
          test: 'flat',
          block: '0',
          s: '1',
          layer: '2'
        },
        '2,0': {
          test: 'flat',
          block: '0',
          layer: '2'
        },
        '5,1': {
          test: 'flat',
          block: '0',
          s: '1',
          layer: '2'
        },
        '5,3': {
          test: 'flat',
          block: '0',
          layer: '2'
        },
        '0,2': {
          test: 'flat',
          block: '0',
          s: '1',
          layer: '2'
        },
        '1,2': {
          test: 'flat',
          block: '0',
          layer: '2'
        },
        '2,3': {
          test: 'flat',
          block: '0',
          layer: '2'
        },
        '1,0': {
          test: 'flat',
          block: '0',
          layer: '2'
        },
        '3,2': {
          test: 'flat',
          block: '0',
          layer: '2'
        },
        '4,0': {
          test: 'flat',
          block: '0',
          layer: '2'
        },
        '2,2': {
          test: 'flat',
          block: '0',
          layer: '2'
        },
        '2,1': {
          test: 'flat',
          block: '0',
          layer: '2'
        },
        '1,3': {
          test: 'flat',
          block: '0',
          layer: '2'
        },
        '4,3': {
          test: 'flat',
          block: '0',
          layer: '2'
        }
      }
    },
    sky038: {
      cols: 1,
      rows: 1,
      baseLoc: '0,0',
      origin: '0,0',
      tiles: {
        '0,0': {
          r: '4',
          i: 140
        }
      },
      instances: [],
      properties: {
        cat: 'sky'
      },
      tps: {}
    },
    bed6: {
      cols: 3,
      rows: 3,
      baseLoc: '1,1',
      origin: '0,0',
      tiles: {
        '0,2': {
          r: '6',
          i: 207
        },
        '1,2': {
          r: '6',
          i: 208
        },
        '0,0': {
          r: '6',
          i: 177
        },
        '1,0': {
          r: '6',
          i: 178
        },
        '1,1': {
          r: '6',
          i: 193
        },
        '2,2': {
          r: '6',
          i: 209
        },
        '0,1': {
          r: '6',
          i: 192
        },
        '2,0': {
          r: '6',
          i: 179
        },
        '2,1': {
          r: '6',
          i: 194
        }
      },
      instances: [],
      properties: {},
      tps: {
        '0,2': {
          layer: '1'
        },
        '1,2': {
          layer: '1'
        },
        '0,0': {
          layer: '1'
        },
        '1,0': {
          layer: '1'
        },
        '1,1': {
          layer: '1'
        },
        '2,2': {
          layer: '1'
        },
        '0,1': {
          layer: '1'
        },
        '2,0': {
          layer: '1'
        },
        '2,1': {
          layer: '1'
        }
      }
    },
    dstbi3a: {
      cols: 1,
      rows: 4,
      baseLoc: '0,1',
      origin: '0,0',
      tiles: {
        '0,2': {
          r: '8',
          i: 115
        },
        '0,3': {
          r: '8',
          i: 130
        },
        '0,0': {
          r: '8',
          i: 100
        },
        '0,1': {
          r: '8',
          i: 115
        }
      },
      instances: [],
      properties: {
        cat: 'stair'
      },
      tps: {
        '0,2': {
          layer: '0',
          test: 'edge;tilesetD;0,1',
          block: '0'
        },
        '0,3': {
          layer: '0',
          test: 'edge;tilesetD;0,1',
          block: '1'
        },
        '0,0': {
          test: 'edge;tilesetD;0,1',
          layer: '0',
          block: '1'
        },
        '0,1': {
          test: 'edge;tilesetD;0,1',
          layer: '0',
          block: '0'
        }
      }
    },
    shine3_s: {
      cols: 1,
      rows: 1,
      baseLoc: '0,0',
      origin: '0,0',
      tiles: {
        '0,0': {
          r: '4',
          i: 380
        }
      },
      instances: [],
      properties: {
        layer: 'up'
      },
      tps: {}
    },
    pillar7: {
      cols: 2,
      rows: 2,
      baseLoc: '0,0',
      origin: '0,0',
      tiles: {
        '1,1': {
          r: '7',
          i: 229
        },
        '0,0': {
          r: '7',
          i: 166
        },
        '0,1': {
          r: '7',
          i: 225
        },
        '1,0': {
          r: '7',
          i: 168
        }
      },
      instances: [],
      properties: {},
      tps: {
        '1,1': {
          s: '1',
          layer: '9'
        },
        '0,0': {
          s: '1',
          layer: '9'
        },
        '0,1': {
          s: '1',
          layer: '9'
        },
        '1,0': {
          s: '1',
          layer: '9'
        }
      }
    },
    sky024: {
      cols: 1,
      rows: 1,
      baseLoc: '0,0',
      origin: '0,0',
      tiles: {
        '0,0': {
          r: '1',
          i: 89
        }
      },
      instances: [],
      properties: {
        cat: 'sky'
      },
      tps: {}
    },
    boat1: {
      cols: 3,
      rows: 5,
      baseLoc: '1,2',
      origin: '0,0',
      tiles: {
        '1,1': {
          r: '4',
          i: 220
        },
        '0,3': {
          r: '4',
          i: 249
        },
        '0,0': {
          r: '4',
          i: 204
        },
        '2,3': {
          r: '4',
          i: 251
        },
        '1,4': {
          r: '4',
          i: 265
        },
        '2,4': {
          r: '4',
          i: 266
        },
        '2,0': {
          r: '4',
          i: 206
        },
        '0,2': {
          r: '4',
          i: 234
        },
        '1,2': {
          r: '4',
          i: 235
        },
        '0,1': {
          r: '4',
          i: 219
        },
        '1,0': {
          r: '4',
          i: 205
        },
        '0,4': {
          r: '4',
          i: 264
        },
        '2,2': {
          r: '4',
          i: 236
        },
        '2,1': {
          r: '4',
          i: 221
        },
        '1,3': {
          r: '4',
          i: 250
        }
      },
      instances: [],
      properties: {},
      tps: {
        '2,2': {
          dlayer: '0.5',
          block: '0'
        },
        '0,2': {
          dlayer: '0.5',
          block: '0'
        },
        '0,3': {
          block: '1',
          layer: '1'
        },
        '2,1': {
          block: '1',
          layer: '1'
        },
        '1,0': {
          block: '1',
          layer: '1'
        },
        '1,1': {
          block: '0'
        },
        '1,2': {
          block: '0'
        },
        '1,4': {
          block: '1',
          layer: '1'
        },
        '0,1': {
          block: '1',
          layer: '1'
        },
        '1,3': {
          block: '0'
        },
        '2,3': {
          block: '1',
          layer: '1'
        }
      }
    },
    tilesetB: {
      cols: 9,
      rows: 4,
      baseLoc: '0,0',
      origin: '0,0',
      tiles: {
        '1,1': {
          r: '8',
          i: 16
        },
        '2,2': {
          r: '8',
          i: 32
        },
        '4,2': {
          r: '8',
          i: 75
        },
        '0,0': {
          r: '8',
          i: 0
        },
        '7,1': {
          r: '8',
          i: 76
        },
        '5,0': {
          r: '8',
          i: 45
        },
        '4,1': {
          r: '8',
          i: 32
        },
        '7,0': {
          r: '8',
          i: 61
        },
        '0,1': {
          r: '8',
          i: 15
        },
        '2,0': {
          r: '8',
          i: 2
        },
        '8,0': {
          r: '8',
          i: 62
        },
        '3,1': {
          r: '8',
          i: 30
        },
        '3,0': {
          r: '8',
          i: 0
        },
        '6,2': {
          r: '8',
          i: 181
        },
        '6,1': {
          r: '8',
          i: 60
        },
        '5,3': {
          r: '8',
          i: 195
        },
        '3,2': {
          r: '8',
          i: 90
        },
        '8,1': {
          r: '8',
          i: 77
        },
        '5,2': {
          r: '8',
          i: 180
        },
        '6,3': {
          r: '8',
          i: 196
        },
        '0,2': {
          r: '8',
          i: 30
        },
        '5,1': {
          r: '8',
          i: 46
        },
        '2,1': {
          r: '8',
          i: 17
        },
        '1,0': {
          r: '8',
          i: 1
        },
        '4,0': {
          r: '8',
          i: 16
        },
        '6,0': {
          r: '8',
          i: 47
        },
        '1,2': {
          r: '8',
          i: 31
        }
      },
      instances: [],
      properties: {
        cat: 'tileset'
      },
      tps: {
        '1,1': {
          block: '0'
        },
        '4,2': {
          block: '0'
        },
        '0,0': {
          block: '0'
        },
        '7,1': {
          block: '0'
        },
        '5,0': {
          block: '0'
        },
        '4,1': {
          block: '0'
        },
        '7,0': {
          block: '0'
        },
        '0,1': {
          block: '0'
        },
        '2,0': {
          block: '0'
        },
        '8,0': {
          block: '0'
        },
        '3,1': {
          block: '0'
        },
        '3,0': {
          block: '0'
        },
        '5,1': {
          block: '0'
        },
        '6,2': {
          block: '0'
        },
        '6,1': {
          block: '0'
        },
        '5,3': {
          block: '0'
        },
        '3,2': {
          block: '0'
        },
        '8,1': {
          block: '0'
        },
        '5,2': {
          block: '0'
        },
        '6,3': {
          block: '0'
        },
        '0,2': {
          block: '0'
        },
        '1,2': {
          block: '0'
        },
        '2,1': {
          block: '0'
        },
        '1,0': {
          block: '0'
        },
        '4,0': {
          block: '0'
        },
        '6,0': {
          block: '0'
        },
        '2,2': {
          block: '0'
        }
      }
    },
    water: {
      cols: 5,
      rows: 3,
      baseLoc: '0,0',
      origin: '0,0',
      tiles: {
        '1,1': {
          r: '2',
          i: 16
        },
        '0,0': {
          r: '2',
          i: 0
        },
        '4,1': {
          r: '2',
          i: 19
        },
        '0,1': {
          r: '2',
          i: 15
        },
        '2,0': {
          r: '2',
          i: 2
        },
        '0,2': {
          r: '2',
          i: 30
        },
        '1,2': {
          r: '2',
          i: 31
        },
        '3,1': {
          r: '2',
          i: 18
        },
        '1,0': {
          r: '2',
          i: 1
        },
        '4,0': {
          r: '2',
          i: 4
        },
        '2,2': {
          r: '2',
          i: 32
        },
        '2,1': {
          r: '2',
          i: 17
        },
        '3,0': {
          r: '2',
          i: 3
        }
      },
      instances: [],
      properties: {
        cat: 'tileset'
      },
      tps: {
        '1,1': {
          water: '1'
        },
        '0,0': {
          water: '1'
        },
        '4,1': {
          water: '1'
        },
        '0,1': {
          water: '1'
        },
        '2,0': {
          water: '1'
        },
        '0,2': {
          water: '1'
        },
        '1,2': {
          water: '1'
        },
        '3,1': {
          water: '1'
        },
        '1,0': {
          water: '1'
        },
        '4,0': {
          water: '1'
        },
        '2,2': {
          water: '1'
        },
        '2,1': {
          water: '1'
        },
        '3,0': {
          water: '1'
        }
      }
    },
    wallset7: {
      cols: 5,
      rows: 3,
      baseLoc: '0,0',
      origin: '0,0',
      tiles: {
        '0,2': {
          r: '7',
          i: 145
        },
        '1,2': {
          r: '7',
          i: 148
        },
        '3,1': {
          r: '7',
          i: 74
        },
        '3,2': {
          r: '7',
          i: 89
        },
        '3,0': {
          r: '7',
          i: 72
        },
        '0,1': {
          r: '7',
          i: 130
        },
        '4,0': {
          r: '7',
          i: 73
        },
        '2,2': {
          r: '7',
          i: 149
        },
        '0,0': {
          r: '7',
          i: 86
        },
        '1,0': {
          r: '7',
          i: 87
        },
        '2,0': {
          r: '7',
          i: 88
        },
        '2,1': {
          r: '7',
          i: 134
        }
      },
      instances: [],
      properties: {
        cat: 'wallset',
        dlayer: '4'
      },
      tps: {
        '3,2': {
          s: '1'
        },
        '0,2': {
          s: '1'
        },
        '1,2': {
          s: '1'
        },
        '3,1': {
          s: '1'
        },
        '0,0': {
          s: '1'
        },
        '1,0': {
          s: '1'
        },
        '3,0': {
          s: '1'
        },
        '4,0': {
          s: '1'
        },
        '2,2': {
          s: '1'
        },
        '0,1': {
          s: '1'
        },
        '2,0': {
          s: '1'
        },
        '2,1': {
          s: '1'
        }
      }
    },
    pillar8a: {
      cols: 1,
      rows: 1,
      baseLoc: '0,0',
      origin: '0,0',
      tiles: {
        '0,0': {
          r: '7',
          i: 321
        }
      },
      instances: [],
      properties: {},
      tps: {
        '0,0': {
          s: '1',
          layer: '7'
        }
      }
    },
    sky020: {
      cols: 1,
      rows: 1,
      baseLoc: '0,0',
      origin: '0,0',
      tiles: {
        '0,0': {
          r: '1',
          i: 61
        }
      },
      instances: [],
      properties: {
        cat: 'sky'
      },
      tps: {}
    },
    shadow2_s: {
      cols: 1,
      rows: 2,
      baseLoc: '0,0',
      origin: '0,0',
      tiles: {
        '0,0': {
          r: '4',
          i: 69
        },
        '0,1': {
          r: '4',
          i: 84
        }
      },
      instances: [],
      properties: {
        layer: 'up'
      },
      tps: {}
    },
    tmDef: {
      cols: 1,
      rows: 1,
      baseLoc: '0,0',
      origin: '0,0',
      tiles: {
        '0,0': {
          r: '3',
          i: 4
        }
      },
      instances: [],
      properties: {
        cat: 'team',
        tip: 'def'
      },
      tps: {
        '0,0': {
          team: 'def'
        }
      }
    },
    decobj6: {
      cols: 1,
      rows: 1,
      baseLoc: '0,0',
      origin: '0,0',
      tiles: {
        '0,0': {
          r: '6',
          i: 221
        }
      },
      instances: [],
      properties: {},
      tps: {
        '0,0': {
          layer: '0.5'
        }
      }
    },
    sky000: {
      cols: 1,
      rows: 1,
      baseLoc: '0,0',
      origin: '0,0',
      tiles: {
        '0,0': {
          r: '1',
          i: 299
        }
      },
      instances: [],
      properties: {
        cat: 'sky'
      },
      tps: {}
    },
    sky033: {
      cols: 1,
      rows: 1,
      baseLoc: '0,0',
      origin: '0,0',
      tiles: {
        '0,0': {
          r: '5',
          i: 79
        }
      },
      instances: [],
      properties: {
        cat: 'sky'
      },
      tps: {}
    },
    dstbi0a: {
      cols: 4,
      rows: 1,
      baseLoc: '1,0',
      origin: '0,0',
      tiles: {
        '2,0': {
          r: '8',
          i: 147
        },
        '0,0': {
          r: '8',
          i: 146
        },
        '3,0': {
          r: '8',
          i: 148
        },
        '1,0': {
          r: '8',
          i: 147
        }
      },
      instances: [],
      properties: {
        cat: 'stair'
      },
      tps: {
        '3,0': {
          block: '1',
          layer: '0',
          test: 'edge;tilesetD;1,2'
        },
        '0,0': {
          block: '1',
          layer: '0',
          test: 'edge;tilesetD;1,2'
        },
        '1,0': {
          block: '0',
          test: 'edge;tilesetD;1,2',
          layer: '0'
        },
        '2,0': {
          block: '0',
          layer: '0',
          test: 'edge;tilesetD;1,2'
        }
      }
    },
    pillar2: {
      cols: 2,
      rows: 2,
      baseLoc: '0,0',
      origin: '0,0',
      tiles: {
        '1,1': {
          r: '1',
          i: 239
        },
        '0,0': {
          r: '1',
          i: 176
        },
        '0,1': {
          r: '1',
          i: 208
        },
        '1,0': {
          r: '1',
          i: 209
        }
      },
      instances: [],
      properties: {},
      tps: {
        '1,1': {
          s: '1',
          layer: '9'
        },
        '0,0': {
          s: '1',
          layer: '9'
        },
        '0,1': {
          s: '1',
          layer: '9'
        },
        '1,0': {
          s: '1',
          layer: '9'
        }
      }
    },
    sky025: {
      cols: 1,
      rows: 1,
      baseLoc: '0,0',
      origin: '0,0',
      tiles: {
        '0,0': {
          r: '1',
          i: 339
        }
      },
      instances: [],
      properties: {
        cat: 'sky'
      },
      tps: {}
    },
    table06: {
      cols: 9,
      rows: 9,
      baseLoc: '4,4',
      origin: '0,0',
      tiles: {
        '5,0': {
          r: '6',
          i: 8
        },
        '7,6': {
          r: '6',
          i: 23
        },
        '4,2': {
          r: '6',
          i: 23
        },
        '0,8': {
          r: '6',
          i: 37
        },
        '4,1': {
          r: '6',
          i: 23
        },
        '3,4': {
          r: '6',
          i: 23
        },
        '4,4': {
          r: '6',
          i: 23
        },
        '3,5': {
          r: '6',
          i: 23
        },
        '2,6': {
          r: '6',
          i: 23
        },
        '0,5': {
          r: '6',
          i: 22
        },
        '7,0': {
          r: '6',
          i: 8
        },
        '5,8': {
          r: '6',
          i: 38
        },
        '0,6': {
          r: '6',
          i: 22
        },
        '2,5': {
          r: '6',
          i: 23
        },
        '5,1': {
          r: '6',
          i: 23
        },
        '3,3': {
          r: '6',
          i: 23
        },
        '6,8': {
          r: '6',
          i: 38
        },
        '2,3': {
          r: '6',
          i: 23
        },
        '7,2': {
          r: '6',
          i: 23
        },
        '4,3': {
          r: '6',
          i: 23
        },
        '5,6': {
          r: '6',
          i: 23
        },
        '3,1': {
          r: '6',
          i: 23
        },
        '3,8': {
          r: '6',
          i: 38
        },
        '8,3': {
          r: '6',
          i: 24
        },
        '1,4': {
          r: '6',
          i: 23
        },
        '5,2': {
          r: '6',
          i: 23
        },
        '5,4': {
          r: '6',
          i: 23
        },
        '8,7': {
          r: '6',
          i: 24
        },
        '1,2': {
          r: '6',
          i: 23
        },
        '2,1': {
          r: '6',
          i: 23
        },
        '1,0': {
          r: '6',
          i: 8
        },
        '8,6': {
          r: '6',
          i: 24
        },
        '8,0': {
          r: '6',
          i: 9
        },
        '3,7': {
          r: '6',
          i: 23
        },
        '1,8': {
          r: '6',
          i: 38
        },
        '0,7': {
          r: '6',
          i: 22
        },
        '1,1': {
          r: '6',
          i: 23
        },
        '7,3': {
          r: '6',
          i: 23
        },
        '0,0': {
          r: '6',
          i: 7
        },
        '1,5': {
          r: '6',
          i: 23
        },
        '2,8': {
          r: '6',
          i: 38
        },
        '7,1': {
          r: '6',
          i: 23
        },
        '1,6': {
          r: '6',
          i: 23
        },
        '4,5': {
          r: '6',
          i: 23
        },
        '0,1': {
          r: '6',
          i: 22
        },
        '2,0': {
          r: '6',
          i: 8
        },
        '6,4': {
          r: '6',
          i: 23
        },
        '2,4': {
          r: '6',
          i: 23
        },
        '4,6': {
          r: '6',
          i: 23
        },
        '2,7': {
          r: '6',
          i: 23
        },
        '0,4': {
          r: '6',
          i: 22
        },
        '6,2': {
          r: '6',
          i: 23
        },
        '7,8': {
          r: '6',
          i: 38
        },
        '6,6': {
          r: '6',
          i: 23
        },
        '4,7': {
          r: '6',
          i: 23
        },
        '1,3': {
          r: '6',
          i: 23
        },
        '1,7': {
          r: '6',
          i: 23
        },
        '5,3': {
          r: '6',
          i: 23
        },
        '8,4': {
          r: '6',
          i: 24
        },
        '6,5': {
          r: '6',
          i: 23
        },
        '0,3': {
          r: '6',
          i: 22
        },
        '8,5': {
          r: '6',
          i: 24
        },
        '3,2': {
          r: '6',
          i: 23
        },
        '3,0': {
          r: '6',
          i: 8
        },
        '3,6': {
          r: '6',
          i: 23
        },
        '6,1': {
          r: '6',
          i: 23
        },
        '8,1': {
          r: '6',
          i: 24
        },
        '6,7': {
          r: '6',
          i: 23
        },
        '5,5': {
          r: '6',
          i: 23
        },
        '7,5': {
          r: '6',
          i: 23
        },
        '5,7': {
          r: '6',
          i: 23
        },
        '8,8': {
          r: '6',
          i: 39
        },
        '0,2': {
          r: '6',
          i: 22
        },
        '7,4': {
          r: '6',
          i: 23
        },
        '6,3': {
          r: '6',
          i: 23
        },
        '8,2': {
          r: '6',
          i: 24
        },
        '4,0': {
          r: '6',
          i: 8
        },
        '6,0': {
          r: '6',
          i: 8
        },
        '2,2': {
          r: '6',
          i: 23
        },
        '4,8': {
          r: '6',
          i: 38
        },
        '7,7': {
          r: '6',
          i: 23
        }
      },
      instances: [],
      properties: {
        dlayer: '1'
      },
      tps: {
        '5,0': {
          layer: '1'
        },
        '2,2': {
          layer: '1'
        },
        '4,2': {
          layer: '1'
        },
        '0,8': {
          layer: '1'
        },
        '8,7': {
          layer: '1'
        },
        '4,1': {
          layer: '1'
        },
        '3,4': {
          layer: '1'
        },
        '3,5': {
          layer: '1'
        },
        '2,6': {
          layer: '1'
        },
        '0,5': {
          layer: '1'
        },
        '7,0': {
          layer: '1'
        },
        '2,3': {
          layer: '1'
        },
        '2,5': {
          layer: '1'
        },
        '7,4': {
          layer: '1'
        },
        '3,3': {
          layer: '1'
        },
        '6,8': {
          layer: '1'
        },
        '3,1': {
          layer: '1'
        },
        '7,2': {
          layer: '1'
        },
        '4,3': {
          layer: '1'
        },
        '5,6': {
          layer: '1'
        },
        '5,8': {
          layer: '1'
        },
        '3,8': {
          layer: '1'
        },
        '7,6': {
          layer: '1'
        },
        '8,3': {
          layer: '1'
        },
        '1,4': {
          layer: '1'
        },
        '5,2': {
          layer: '1'
        },
        '5,4': {
          layer: '1'
        },
        '8,0': {
          layer: '1'
        },
        '1,2': {
          layer: '1'
        },
        '3,7': {
          layer: '1'
        },
        '1,0': {
          layer: '1'
        },
        '6,0': {
          layer: '1'
        },
        '1,5': {
          layer: '1'
        },
        '2,4': {
          layer: '1'
        },
        '0,7': {
          layer: '1'
        },
        '1,1': {
          layer: '1'
        },
        '7,3': {
          layer: '1'
        },
        '0,0': {
          layer: '1'
        },
        '2,1': {
          layer: '1'
        },
        '2,8': {
          layer: '1'
        },
        '7,1': {
          layer: '1'
        },
        '1,6': {
          layer: '1'
        },
        '4,5': {
          layer: '1'
        },
        '0,1': {
          layer: '1'
        },
        '2,0': {
          layer: '1'
        },
        '1,8': {
          layer: '1'
        },
        '8,6': {
          layer: '1'
        },
        '6,4': {
          layer: '1'
        },
        '4,6': {
          layer: '1'
        },
        '2,7': {
          layer: '1'
        },
        '0,4': {
          layer: '1'
        },
        '6,2': {
          layer: '1'
        },
        '7,8': {
          layer: '1'
        },
        '6,6': {
          layer: '1'
        },
        '4,7': {
          layer: '1'
        },
        '1,3': {
          layer: '1'
        },
        '1,7': {
          layer: '1'
        },
        '5,3': {
          layer: '1'
        },
        '8,4': {
          layer: '1'
        },
        '6,5': {
          layer: '1'
        },
        '0,3': {
          layer: '1'
        },
        '8,5': {
          layer: '1'
        },
        '3,2': {
          layer: '1'
        },
        '3,0': {
          layer: '1'
        },
        '3,6': {
          layer: '1'
        },
        '6,1': {
          layer: '1'
        },
        '8,1': {
          layer: '1'
        },
        '6,7': {
          layer: '1'
        },
        '5,5': {
          layer: '1'
        },
        '7,5': {
          layer: '1'
        },
        '5,7': {
          layer: '1'
        },
        '8,8': {
          layer: '1'
        },
        '0,2': {
          layer: '1'
        },
        '5,1': {
          layer: '1'
        },
        '6,3': {
          layer: '1'
        },
        '8,2': {
          layer: '1'
        },
        '4,0': {
          layer: '1'
        },
        '4,4': {
          layer: '1'
        },
        '0,6': {
          layer: '1'
        },
        '4,8': {
          layer: '1'
        },
        '7,7': {
          layer: '1'
        }
      }
    },
    dstad2a: {
      cols: 2,
      rows: 3,
      baseLoc: '0,0',
      origin: '0,0',
      tiles: {
        '0,2': {
          r: '1',
          i: 367
        },
        '1,1': {
          r: '1',
          i: 156
        },
        '1,2': {
          r: '1',
          i: 396
        },
        '0,0': {
          r: '1',
          i: 352
        },
        '0,1': {
          r: '1',
          i: 156
        },
        '1,0': {
          r: '1',
          i: 397
        }
      },
      instances: [],
      properties: {
        cat: 'stair'
      },
      tps: {
        '0,2': {
          test: 'edge;tileset1;2,1'
        },
        '1,1': {
          layer: '0.5',
          test: 'flat'
        },
        '1,2': {
          layer: '0.5',
          test: 'flat'
        },
        '0,0': {
          test: 'edge;tileset1;2,1'
        },
        '0,1': {
          test: 'edge;tileset1;2,1'
        },
        '1,0': {
          layer: '0.5',
          test: 'flat'
        }
      }
    },
    shadow2_e: {
      cols: 2,
      rows: 1,
      baseLoc: '0,0',
      origin: '0,0',
      tiles: {
        '0,0': {
          r: '4',
          i: 93
        },
        '1,0': {
          r: '4',
          i: 94
        }
      },
      instances: [],
      properties: {
        layer: 'up'
      },
      tps: {}
    },
    house5: {
      cols: 4,
      rows: 7,
      baseLoc: '1,3',
      origin: '0,0',
      tiles: {
        '1,1': {
          r: '0',
          i: 20
        },
        '2,2': {
          r: '0',
          i: 36
        },
        '0,0': {
          r: '0',
          i: 4
        },
        '3,5': {
          r: '0',
          i: 82
        },
        '1,6': {
          r: '0',
          i: 95
        },
        '3,4': {
          r: '0',
          i: 67
        },
        '0,1': {
          r: '0',
          i: 19
        },
        '2,0': {
          r: '0',
          i: 6
        },
        '2,6': {
          r: '0',
          i: 96
        },
        '0,5': {
          r: '0',
          i: 79
        },
        '2,3': {
          r: '0',
          i: 51
        },
        '3,0': {
          r: '0',
          i: 7
        },
        '0,4': {
          r: '0',
          i: 64
        },
        '2,5': {
          r: '0',
          i: 81
        },
        '3,3': {
          r: '0',
          i: 52
        },
        '3,1': {
          r: '0',
          i: 22
        },
        '1,3': {
          r: '0',
          i: 50
        },
        '3,6': {
          r: '0',
          i: 97
        },
        '0,3': {
          r: '0',
          i: 49
        },
        '3,2': {
          r: '0',
          i: 37
        },
        '1,4': {
          r: '0',
          i: 65
        },
        '2,4': {
          r: '0',
          i: 66
        },
        '0,2': {
          r: '0',
          i: 34
        },
        '1,2': {
          r: '0',
          i: 35
        },
        '1,5': {
          r: '0',
          i: 80
        },
        '1,0': {
          r: '0',
          i: 5
        },
        '0,6': {
          r: '0',
          i: 94
        },
        '2,1': {
          r: '0',
          i: 21
        }
      },
      instances: [],
      properties: {},
      tps: {
        '1,1': {
          test: 'flat',
          block: '0',
          layer: '2'
        },
        '0,6': {
          test: 'flat',
          block: '0',
          layer: '2'
        },
        '0,0': {
          test: 'flat',
          block: '0',
          layer: '2'
        },
        '3,5': {
          test: 'flat',
          block: '0',
          layer: '2'
        },
        '1,6': {
          test: 'flat',
          block: '0',
          s: '1',
          layer: '2'
        },
        '3,4': {
          test: 'flat',
          block: '0',
          layer: '2'
        },
        '0,1': {
          test: 'flat',
          block: '0',
          layer: '2'
        },
        '2,0': {
          test: 'flat',
          block: '0',
          s: '1',
          layer: '2'
        },
        '2,6': {
          test: 'flat',
          block: '0',
          s: '1',
          layer: '2'
        },
        '0,5': {
          test: 'flat',
          block: '0',
          layer: '2'
        },
        '2,3': {
          test: 'flat',
          block: '0',
          layer: '2'
        },
        '3,0': {
          test: 'flat',
          block: '0',
          layer: '2'
        },
        '0,4': {
          test: 'flat',
          block: '0',
          layer: '2'
        },
        '2,5': {
          test: 'flat',
          block: '0',
          layer: '2'
        },
        '3,3': {
          test: 'flat',
          block: '0',
          layer: '2'
        },
        '3,1': {
          test: 'flat',
          block: '0',
          layer: '2'
        },
        '1,3': {
          test: 'flat',
          block: '0',
          layer: '2'
        },
        '3,6': {
          test: 'flat',
          block: '0',
          layer: '2'
        },
        '0,3': {
          test: 'flat',
          block: '0',
          layer: '2'
        },
        '3,2': {
          test: 'flat',
          block: '0',
          layer: '2'
        },
        '1,4': {
          test: 'flat',
          block: '0',
          layer: '2'
        },
        '2,4': {
          test: 'flat',
          block: '0',
          layer: '2'
        },
        '0,2': {
          test: 'flat',
          block: '0',
          layer: '2'
        },
        '1,2': {
          test: 'flat',
          block: '0',
          layer: '2'
        },
        '1,5': {
          test: 'flat',
          block: '0',
          layer: '2'
        },
        '1,0': {
          test: 'flat',
          block: '0',
          s: '1',
          layer: '2'
        },
        '2,2': {
          test: 'flat',
          block: '0',
          layer: '2'
        },
        '2,1': {
          test: 'flat',
          block: '0',
          layer: '2'
        }
      }
    },
    bed0: {
      cols: 2,
      rows: 3,
      baseLoc: '0,1',
      origin: '0,0',
      tiles: {
        '0,2': {
          r: '6',
          i: 154
        },
        '1,1': {
          r: '6',
          i: 140
        },
        '1,2': {
          r: '6',
          i: 155
        },
        '0,0': {
          r: '6',
          i: 124
        },
        '0,1': {
          r: '6',
          i: 139
        },
        '1,0': {
          r: '6',
          i: 125
        }
      },
      instances: [],
      properties: {},
      tps: {
        '0,2': {
          layer: '1'
        },
        '1,1': {
          layer: '1'
        },
        '1,2': {
          layer: '1'
        },
        '0,0': {
          layer: '1'
        },
        '0,1': {
          layer: '1'
        },
        '1,0': {
          layer: '1'
        }
      }
    },
    water5: {
      cols: 5,
      rows: 3,
      baseLoc: '0,0',
      origin: '0,0',
      tiles: {
        '1,1': {
          r: '2',
          i: 26
        },
        '0,0': {
          r: '2',
          i: 10
        },
        '4,1': {
          r: '2',
          i: 29
        },
        '0,1': {
          r: '2',
          i: 25
        },
        '2,0': {
          r: '2',
          i: 12
        },
        '0,2': {
          r: '2',
          i: 40
        },
        '1,2': {
          r: '2',
          i: 41
        },
        '3,1': {
          r: '2',
          i: 28
        },
        '1,0': {
          r: '2',
          i: 11
        },
        '4,0': {
          r: '2',
          i: 14
        },
        '2,2': {
          r: '2',
          i: 42
        },
        '2,1': {
          r: '2',
          i: 27
        },
        '3,0': {
          r: '2',
          i: 13
        }
      },
      instances: [],
      properties: {
        cat: 'tileset'
      },
      tps: {
        '1,1': {
          water: '1'
        },
        '0,0': {
          water: '1'
        },
        '4,1': {
          water: '1'
        },
        '0,1': {
          water: '1'
        },
        '2,0': {
          water: '1'
        },
        '0,2': {
          water: '1'
        },
        '1,2': {
          water: '1'
        },
        '3,1': {
          water: '1'
        },
        '1,0': {
          water: '1'
        },
        '4,0': {
          water: '1'
        },
        '2,2': {
          water: '1'
        },
        '2,1': {
          water: '1'
        },
        '3,0': {
          water: '1'
        }
      }
    },
    sky006: {
      cols: 1,
      rows: 1,
      baseLoc: '0,0',
      origin: '0,0',
      tiles: {
        '0,0': {
          r: '7',
          i: 250
        }
      },
      instances: [],
      properties: {
        cat: 'sky'
      },
      tps: {}
    },
    tree2: {
      cols: 5,
      rows: 5,
      baseLoc: '2,2',
      origin: '0,0',
      tiles: {
        '2,2': {
          r: '4',
          i: 72
        },
        '1,1': {
          r: '4',
          i: 56
        },
        '0,3': {
          r: '4',
          i: 85
        },
        '4,2': {
          r: '4',
          i: 74
        },
        '0,0': {
          r: '4',
          i: 40
        },
        '3,2': {
          r: '4',
          i: 73
        },
        '1,0': {
          r: '4',
          i: 41
        },
        '4,1': {
          r: '4',
          i: 59
        },
        '1,4': {
          r: '4',
          i: 101
        },
        '2,4': {
          r: '4',
          i: 102
        },
        '2,0': {
          r: '4',
          i: 42
        },
        '1,3': {
          r: '4',
          i: 86
        },
        '2,3': {
          r: '4',
          i: 87
        },
        '0,2': {
          r: '4',
          i: 70
        },
        '1,2': {
          r: '4',
          i: 71
        },
        '3,4': {
          r: '4',
          i: 103
        },
        '3,1': {
          r: '4',
          i: 58
        },
        '3,0': {
          r: '4',
          i: 43
        },
        '0,4': {
          r: '4',
          i: 100
        },
        '4,0': {
          r: '4',
          i: 44
        },
        '4,4': {
          r: '4',
          i: 104
        },
        '3,3': {
          r: '4',
          i: 88
        },
        '2,1': {
          r: '4',
          i: 57
        },
        '0,1': {
          r: '4',
          i: 55
        },
        '4,3': {
          r: '4',
          i: 89
        }
      },
      instances: [],
      properties: {
        layer: 'up'
      },
      tps: {
        '2,2': {
          layer: '5'
        }
      }
    },
    chair1: {
      cols: 1,
      rows: 1,
      baseLoc: '0,0',
      origin: '0,0',
      tiles: {
        '0,0': {
          r: '6',
          i: 6
        }
      },
      instances: [],
      properties: {},
      tps: {
        '0,0': {
          layer: '0.5'
        }
      }
    },
    decobj5: {
      cols: 1,
      rows: 1,
      baseLoc: '0,0',
      origin: '0,0',
      tiles: {
        '0,0': {
          r: '6',
          i: 220
        }
      },
      instances: [],
      properties: {},
      tps: {
        '0,0': {
          layer: '1'
        }
      }
    },
    pillar3a: {
      cols: 1,
      rows: 1,
      baseLoc: '0,0',
      origin: '0,0',
      tiles: {
        '0,0': {
          r: '1',
          i: 321
        }
      },
      instances: [],
      properties: {},
      tps: {
        '0,0': {
          s: '1',
          layer: '7'
        }
      }
    },
    dstai3: {
      cols: 1,
      rows: 3,
      baseLoc: '0,1',
      origin: '0,0',
      tiles: {
        '0,0': {
          r: '8',
          i: 25
        },
        '0,1': {
          r: '8',
          i: 40
        },
        '0,2': {
          r: '8',
          i: 55
        }
      },
      instances: [],
      properties: {
        cat: 'stair'
      },
      tps: {
        '0,0': {
          block: '1',
          layer: '0',
          test: 'edge;tilesetC;0,1'
        },
        '0,1': {
          block: '0',
          layer: '0',
          test: 'edge;tilesetC;0,1'
        },
        '0,2': {
          block: '1',
          layer: '0',
          test: 'edge;tilesetC;0,1'
        }
      }
    },
    decobj2: {
      cols: 1,
      rows: 1,
      baseLoc: '0,0',
      origin: '0,0',
      tiles: {
        '0,0': {
          r: '6',
          i: 217
        }
      },
      instances: [],
      properties: {},
      tps: {
        '0,0': {
          layer: '1'
        }
      }
    },
    tilesetC: {
      cols: 9,
      rows: 4,
      baseLoc: '0,0',
      origin: '0,0',
      tiles: {
        '1,1': {
          r: '8',
          i: 42
        },
        '2,2': {
          r: '8',
          i: 74
        },
        '4,2': {
          r: '8',
          i: 24
        },
        '0,0': {
          r: '8',
          i: 10
        },
        '7,1': {
          r: '8',
          i: 113
        },
        '5,0': {
          r: '8',
          i: 54
        },
        '4,1': {
          r: '8',
          i: 58
        },
        '7,0': {
          r: '8',
          i: 98
        },
        '0,1': {
          r: '8',
          i: 43
        },
        '2,0': {
          r: '8',
          i: 14
        },
        '8,0': {
          r: '8',
          i: 99
        },
        '3,1': {
          r: '8',
          i: 56
        },
        '3,0': {
          r: '8',
          i: 26
        },
        '6,2': {
          r: '8',
          i: 129
        },
        '6,1': {
          r: '8',
          i: 69
        },
        '5,3': {
          r: '8',
          i: 143
        },
        '3,2': {
          r: '8',
          i: 39
        },
        '8,1': {
          r: '8',
          i: 114
        },
        '5,2': {
          r: '8',
          i: 128
        },
        '6,3': {
          r: '8',
          i: 144
        },
        '0,2': {
          r: '8',
          i: 70
        },
        '5,1': {
          r: '8',
          i: 83
        },
        '2,1': {
          r: '8',
          i: 41
        },
        '1,0': {
          r: '8',
          i: 57
        },
        '4,0': {
          r: '8',
          i: 28
        },
        '6,0': {
          r: '8',
          i: 84
        },
        '1,2': {
          r: '8',
          i: 27
        }
      },
      instances: [],
      properties: {
        cat: 'tileset'
      },
      tps: {
        '1,1': {
          block: '0',
          layer: '1'
        },
        '4,2': {
          block: '0'
        },
        '0,0': {
          block: '1',
          layer: '0.5'
        },
        '7,1': {
          block: '0'
        },
        '5,0': {
          block: '0'
        },
        '4,1': {
          block: '1',
          layer: '0.5'
        },
        '7,0': {
          block: '0'
        },
        '0,1': {
          block: '1',
          layer: '0.5'
        },
        '2,0': {
          block: '1',
          layer: '0.5'
        },
        '8,0': {
          block: '0'
        },
        '3,1': {
          block: '1',
          layer: '0.5'
        },
        '3,0': {
          block: '1',
          layer: '0.5'
        },
        '5,1': {
          block: '0'
        },
        '6,2': {
          block: '0'
        },
        '6,1': {
          block: '0'
        },
        '5,3': {
          block: '0'
        },
        '3,2': {
          block: '0'
        },
        '8,1': {
          block: '0'
        },
        '5,2': {
          block: '0'
        },
        '6,3': {
          block: '0'
        },
        '0,2': {
          block: '1',
          layer: '0.5'
        },
        '1,2': {
          block: '1',
          layer: '0.5'
        },
        '2,1': {
          block: '1',
          layer: '0.5'
        },
        '1,0': {
          block: '1',
          layer: '0.5'
        },
        '4,0': {
          block: '1',
          layer: '0.5'
        },
        '6,0': {
          block: '0'
        },
        '2,2': {
          block: '1',
          layer: '0.5'
        }
      }
    },
    tileset0: {
      cols: 9,
      rows: 4,
      baseLoc: '0,0',
      origin: '0,0',
      tiles: {
        '1,1': {
          r: '0',
          i: 87
        },
        '2,2': {
          r: '0',
          i: 103
        },
        '4,2': {
          r: '0',
          i: 252
        },
        '0,0': {
          r: '0',
          i: 71
        },
        '7,1': {
          r: '0',
          i: 167
        },
        '5,0': {
          r: '0',
          i: 151
        },
        '4,1': {
          r: '0',
          i: 132
        },
        '7,0': {
          r: '0',
          i: 152
        },
        '0,1': {
          r: '0',
          i: 86
        },
        '2,0': {
          r: '0',
          i: 73
        },
        '8,0': {
          r: '0',
          i: 153
        },
        '3,1': {
          r: '0',
          i: 131
        },
        '3,0': {
          r: '0',
          i: 116
        },
        '6,2': {
          r: '0',
          i: 250
        },
        '6,1': {
          r: '0',
          i: 166
        },
        '5,3': {
          r: '0',
          i: 264
        },
        '3,2': {
          r: '0',
          i: 251
        },
        '8,1': {
          r: '0',
          i: 168
        },
        '5,2': {
          r: '0',
          i: 249
        },
        '6,3': {
          r: '0',
          i: 265
        },
        '0,2': {
          r: '0',
          i: 101
        },
        '5,1': {
          r: '0',
          i: 150
        },
        '2,1': {
          r: '0',
          i: 88
        },
        '1,0': {
          r: '0',
          i: 72
        },
        '4,0': {
          r: '0',
          i: 117
        },
        '6,0': {
          r: '0',
          i: 165
        },
        '1,2': {
          r: '0',
          i: 102
        }
      },
      instances: [],
      properties: {
        cat: 'tileset'
      },
      tps: {
        '1,1': {
          block: '0',
          layer: '1'
        },
        '4,2': {
          block: '0'
        },
        '0,0': {
          block: '0'
        },
        '7,1': {
          block: '0'
        },
        '5,0': {
          block: '0'
        },
        '4,1': {
          block: '0'
        },
        '7,0': {
          block: '0'
        },
        '0,1': {
          block: '0'
        },
        '2,0': {
          block: '0'
        },
        '8,0': {
          block: '0'
        },
        '3,1': {
          block: '0'
        },
        '3,0': {
          block: '0'
        },
        '5,1': {
          block: '0'
        },
        '6,2': {
          block: '0'
        },
        '6,1': {
          block: '0'
        },
        '5,3': {
          block: '0'
        },
        '3,2': {
          block: '0'
        },
        '8,1': {
          block: '0'
        },
        '5,2': {
          block: '0'
        },
        '6,3': {
          block: '0'
        },
        '0,2': {
          block: '0'
        },
        '1,2': {
          block: '0'
        },
        '2,1': {
          block: '0'
        },
        '1,0': {
          block: '0'
        },
        '4,0': {
          block: '0'
        },
        '6,0': {
          block: '0'
        },
        '2,2': {
          block: '0'
        }
      }
    }
  },
  editor: {
    size: '30,30',
    layers: [
      {
        map: 'tileset0'
      },
      {
        map: {}
      },
      {
        map: {}
      },
      {
        map: {}
      },
      {
        map: {}
      }
    ],
    objs: {},
    walls: {}
  }
})
