import React, { useEffect, useRef } from 'react'
import { IView } from './types'
import { Container } from './styles'
import { Window } from '../Window'
import { baseHtml } from '../../utils/dynamic/html'
import { MonacoEditor } from '../MonacoEditor'
import { ContentIframe } from '../Iframe/styles'

const View: React.FC<IView> = () => {
  const iFrame = useRef<HTMLIFrameElement>(null)
  const renderTextInFrame = (js: string) => {
    if (iFrame.current === null) return
    iFrame.current.srcdoc = baseHtml(js)
  }

  const onChangeTextArea = (value: string) => {
    const config = { text: value }
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
        <MonacoEditor callbackOnChange={onChangeTextArea} />
      </Window>
      <Window>
        <ContentIframe ref={iFrame} />
      </Window>
    </Container>
  )
}

export { View }
