import React, { useEffect, useRef } from 'react'
import { IView } from './types'
import { Container, ContentTextArea } from './styles'
import { Window } from '../Window'
import { baseHtml } from '../../utils/dynamic/html'
import { ContentIframe } from '../Iframe/styles'

const View: React.FC<IView> = () => {
  const iFrame = useRef<HTMLIFrameElement>(null)
  const iArea = useRef<HTMLTextAreaElement>(null)

  const renderTextInFrame = (js: string) => {
    if (iFrame.current === null) return
    iFrame.current.srcdoc = baseHtml(js)
  }

  const onChangeTextArea = () => {
    if (iArea.current === null) return

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

    renderTextInFrame(config.text)
  }

  useEffect(() => {
    renderTextInFrame('')
  }, [])

  return (
    <Container>
      <Window>
        <ContentTextArea ref={iArea} name="contentSend" id="contentSend" onChange={onChangeTextArea} />
      </Window>
      <Window>
        <ContentIframe ref={iFrame} />
      </Window>
    </Container>
  )
}

export { View }
