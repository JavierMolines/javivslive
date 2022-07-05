import React from 'react'
import { IWindow } from './types'
import { Container } from './styles'

const Window: React.FC<IWindow> = ({ children, withSpaces }) => {
  // BODY OF COMPONENT
  return (
    <Container withSpaces={withSpaces} >
        {children}
    </Container>
  )
}

export { Window }
