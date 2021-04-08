import { Twr } from '../type'
import React, { useEffect, useRef, useState } from 'react'

export const useTwrRender = (twr: Twr, showHead = true, showHands = true, showFoot = true, showCape = true): React.MutableRefObject<HTMLCanvasElement | null> => {
  const view = useRef<null | HTMLCanvasElement>(null)
  const [app, setApp] = useState<unknown>(null)
  useEffect(() => {
    if (view.current !== null) {
      // @ts-expect-error using vanilla javascript
      // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access,@typescript-eslint/no-unsafe-call,@typescript-eslint/no-unsafe-assignment
      const application = new window.PIXI.Application({ width: 200, height: 200, transparent: true, view: view.current, preserveDrawingBuffer: true })
      setApp(application)
      return () => {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-call,@typescript-eslint/no-unsafe-member-access
        application?.destroy(true)
      }
    }
  }, [view])
  useEffect(() => {
    if (app !== null) {
      console.log(twr)
      if ('data' in twr) {
        // @ts-expect-error using vanilla javascript
        // eslint-disable-next-line @typescript-eslint/no-unsafe-call,@typescript-eslint/no-unsafe-member-access
        window.twroleRender.render(app, twr, showHead, showHands, showFoot, showCape).catch(console.error)
      } else {
        // @ts-expect-error using vanilla javascript
        // eslint-disable-next-line @typescript-eslint/no-unsafe-call,@typescript-eslint/no-unsafe-member-access
        window.twrRender.render(app, twr, showHead, showHands, showFoot, showCape).catch(console.error)
      }
    }
  }, [app, showFoot, showHands, showHead, twr])
  return view
}
