import React, { useRef } from 'react'
import { IView } from './types'
import { Container } from './styles'
import { Window } from '../Window'
import { baseHtml } from './html'

const View: React.FC<IView> = () => {
  const iFrame = useRef<HTMLIFrameElement>(null)
  const iArea = useRef<HTMLTextAreaElement>(null)
  const onChangeTextArea = () => {
    if (iArea.current === null) return
    if (iFrame.current === null) return

    const config = { text: iArea.current.value }
    const regExp = /console.log(.*)/ig
    const matchText = config.text.match(regExp) ?? []
    if (config.text !== null && matchText.length > 0 && regExp.test(config.text)) {
      for (const item of matchText) {
        const textFilter = item.replace(/console.log/ig, '').replace(/[(|)]/ig, '')
        const newSourceFormat = `document.body.innerHTML += ${textFilter}`
        config.text = config.text.replace(regExp, newSourceFormat)
      }
    }

    iFrame.current.srcdoc = baseHtml(config.text)
  }

  return (
    <Container>
        <Window>
            <textarea
              ref={iArea}
              name="contentSend"
              id="contentSend"
              onChange={onChangeTextArea}
              style={{
                backgroundColor: 'transparent',
                border: 'none',
                outline: 'none',
                padding: '0',
                margin: '0',
                display: 'block',
                width: '100%',
                height: '100%',
                resize: 'none'
              }}
            />
        </Window>
        <Window>
            <iframe
              ref={iFrame}
              style={{
                border: 'none',
                display: 'block',
                width: '100%',
                height: '100%'
              }}
            />
        </Window>
    </Container>
  )
}

export { View }
