import Editor from '@monaco-editor/react'
import React from 'react'
import { IMonacoEditor } from './types'

const MonacoEditor: React.FC<IMonacoEditor> = ({ callbackOnChange }) => {
  const onChangeMonacoEditor = (value: string) => {
    callbackOnChange(value)
  }

  return (
    <Editor
      theme='vs-dark'
      defaultLanguage='typescript'
      defaultValue='console.log("Type your code!.")'
      onChange={(value) => onChangeMonacoEditor(value ?? '')}
    />
  )
}

export { MonacoEditor }
