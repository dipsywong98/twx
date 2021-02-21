import { FunctionComponent, useState } from 'react'
import { Button, ButtonGroup } from '@material-ui/core'
import { JsonTree } from './JsonTree'
import { copyToClipboard } from '../utils/copyToClipboard'
import { download } from '../utils/download'

export const ClickShowRaw: FunctionComponent<{ raw: unknown, defaultShow?: number, name?: string }> = ({
                                                                                                         raw,
                                                                                                         defaultShow,
                                                                                                         name
                                                                                                       }) => {
  const [show, setShow] = useState(defaultShow ?? 0)
  const selected = {
    color: `rgba(0, 0, 0, 0.54)`,
    backgroundColor: `rgba(0, 0, 0, 0.12)`
  }
  return (
    <>
      <ButtonGroup>
        <Button onClick={() => setShow(0)} disabled={show === 0}>Hide JSON</Button>
        <Button onClick={() => setShow(1)} disabled={show === 1}>Tree JSON</Button>
        <Button onClick={() => setShow(2)} disabled={show === 2}>Raw JSON</Button>
      </ButtonGroup>
      <ButtonGroup style={{ marginLeft: '8px' }}>
        <Button onClick={() => copyToClipboard(JSON.stringify(raw, null, 2))}>Copy JSON</Button>
        <Button
          onClick={() => download(JSON.stringify(raw, null, 2), name !== undefined ? `${name}.json` : 'download.json')}>
          Download JSON
        </Button>
      </ButtonGroup>
      {show === 1 && <JsonTree data={raw}/>}
      {show === 2 && (
        <pre>
          {JSON.stringify(raw, null, 2)}
        </pre>
      )}
    </>
  )

}
