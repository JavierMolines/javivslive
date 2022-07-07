import React from 'react'
import { IWindow } from './types'
import { Container } from './styles'

const Window: React.FC<IWindow> = ({ children }) => {
  return (
    <Container>
        {children}
    </Container>
  )
}

export { Window }
