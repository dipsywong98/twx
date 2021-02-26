const url = 'https://dipsy.me/gaf-player'
class TwrRender {
  actorGaf = null
  decoGaf = null
  loadGaf = async name => {
    return new Promise(resolve => {
      function onConverted(pEvent) {
        resolve(pEvent.target.gafBundle)
      }
      var converter = new GAF.ZipToGAFAssetConverter()
      converter.once(GAF.GAFEvent.COMPLETE, onConverted)
      converter.convert(url+'/'+name + '/' + name + '.gaf')
    })
  }
  init = async () => {
    this.loadGaf('twactor').then((gaf) => this.actorGaf = gaf).catch(r => {
      console.error('load twactor gg',r)
    })
    this.loadGaf('decorations').then((gaf) => this.decoGaf = gaf).catch(r => {
      console.error('load decorations gg',r)
    })
  }
  constructor() {
    this.init()
  }
  render(pixiApp, twrJson, showHead, showHands, showFoot) {
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
      gafMovieClip.rotation = r * Math.PI / 180
      container.addChild(gafMovieClip)
      return gafMovieClip
    }

    const {head, hand, foot, decos} = twrJson

    showHands && renderItem('twactor', 'lib_actor_hand', hand, 10, 20, 1, -1, 0)
    showHands && renderItem('twactor', 'lib_actor_hand', hand, 10, -20, 1, 1, 0)
    showFoot && renderItem('twactor', 'lib_actor_foot', foot, 8, -8, 1, 1, -90)
    showFoot && renderItem('twactor', 'lib_actor_foot', foot, 8, 8, 1, -1, 90)
    showHead && renderItem('twactor', 'lib_actor_head', head, 0, 0, 1, 1, 0)
    decos.forEach(({ code, x, y, sx, sy, r }) => {
      try {
        renderItem('decorations', code, 1, x, y, sx, sy, r)
      } catch (e) {
        console.log(e)
      }
    })
  }
}

window.twrRender = new TwrRender()
