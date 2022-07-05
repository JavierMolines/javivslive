// TYPES FOR Window
import React from 'react'

export interface IStylesCustom {
    withSpaces?: boolean
}

export interface IWindow extends IStylesCustom {
    children: React.ReactNode
}
