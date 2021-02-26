import { Twr } from '../type'
import React, { useEffect, useRef, useState } from 'react'

export const useTwrRender = (twr: Twr, showHead = true, showHands = true, showFoot = true): React.MutableRefObject<HTMLCanvasElement | null> => {
  const view = useRef<null | HTMLCanvasElement>( null )
  const [app, setApp] = useState<unknown>(null)
  useEffect(() => {
    if(view.current !== null) {
      // @ts-ignore
      const application = new window.PIXI.Application({ width: 200, height: 200, transparent: true, view: view.current })
      console.log('create pixi', application)
      setApp(application)
      return () => {
        application?.destroy(true)
      }
    }
  }, [view])
  useEffect(() => {
    console.log('app?', app)
    if(app!==null) {
      // @ts-ignore
      window.twrRender.render(app, twr, showHead, showHands, showFoot).catch(console.error)
    }
  }, [app, showFoot, showHands, showHead, twr])
  return view
}

