import { FunctionComponent, useState } from 'react'
import { Button } from '@material-ui/core'
import JSONTree from 'react-json-tree'

export const ClickShowRaw: FunctionComponent<{ raw: unknown }> = ({ raw }) => {
  const [show, setShow] = useState(false)
  return (
    <>
      <Button onClick={() => setShow(!show)}>Show</Button>
      {show && <JSONTree data={raw}/>}
    </>
  )

}
