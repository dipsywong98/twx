class TwroleRender {
  url = 'https://dipsy.me/gaf-player'
  actorGaf = null
  decoGaf = null
  initP = null
  initDone = false
  loadGaf = async name => {
    return new Promise(resolve => {
      function onConverted(pEvent) {
        resolve(pEvent.target.gafBundle)
      }
      var converter = new GAF.ZipToGAFAssetConverter()
      converter.once(GAF.GAFEvent.COMPLETE, onConverted)
      converter.convert(this.url+'/'+name + '/' + name + '.gaf')
    })
  }
  init = async () => {
    const p1 = this.loadGaf('twactor').then((gaf) => this.actorGaf = gaf).catch(r => {
      console.error('load twactor gg',r)
    })
    const p2 = this.loadGaf('decorations').then((gaf) => this.decoGaf = gaf).catch(r => {
      console.error('load decorations gg',r)
    })
    await Promise.all([p1, p2])
    this.initDone = true
  }
  constructor() {
    this.initP = this.init().then(() => console.log('done'))
  }
  render = async (pixiApp, twroleJson, showHead, showHands, showFoot, showCape) => {
    if(!this.initDone) {
      pixiApp.stage.addChild(new PIXI.Text('loading'))
      await this.initP
    }
    pixiApp.stage.removeChildren()
    const container = new PIXI.Container()
    pixiApp.stage.addChild(container)
    container.x = 100
    container.y = 100

    const renderItem = (bundleName, code, frame, x,y,sx,sy,r) => {
      const bundle = bundleName === 'twactor' ? this.actorGaf : this.decoGaf
      const gafTimeline = bundle.getGAFTimeline(bundleName, code)
      const gafMovieClip = new GAF.GAFMovieClip(gafTimeline)
      gafMovieClip.gotoAndStop(frame)
      gafMovieClip.x = x
      gafMovieClip.y = y
      gafMovieClip.scale.x = sx
      gafMovieClip.scale.y = sy
      gafMovieClip.rotation = r //* Math.PI / 180
      container.addChild(gafMovieClip)
      return gafMovieClip
    }

    const {data: { cr: { head, hand, foot, deco, cape } }} = twroleJson

    showHands && renderItem('twactor', 'lib_actor_hand', hand.f, 10, 20, 1, -1, 0)
    showHands && renderItem('twactor', 'lib_actor_hand', hand.f, 10, -20, 1, 1, 0)
    showFoot && renderItem('twactor', 'lib_actor_foot', foot.f, 8, -8, 1, 1, -90)
    showFoot && renderItem('twactor', 'lib_actor_foot', foot.f, 8, 8, 1, -1, 90)
    showCape && renderItem('twactor', 'lib_actor_cape', cape.f, 0, 0, 1, 1, 0)
    if(!deco.find(({code, c}) => code === '_head_' || c === 'head')) {
      showHead && renderItem('twactor', 'lib_actor_head', head.f, 0, 0, 1, 1, 0)
    }
    deco.forEach(({ code, x, y, sx, sy, r, c }) => {
      code = code || c
      if(code === '_head_' || c === 'head') {
        showHead && renderItem('twactor', 'lib_actor_head', head.f, x, y, sx, sy, r)
      }else{
        try {
          renderItem('decorations', code, 1, x, y, sx*2, sy*2, r)
        } catch (e) {
          console.log(e)
        }
      }
    })
  }
}

window.twroleRender = new TwroleRender()
