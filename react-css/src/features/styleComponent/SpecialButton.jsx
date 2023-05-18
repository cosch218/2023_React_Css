import React from 'react'
import CommonButton from './CommonButton'

import { styled } from 'styled-components'
const ButtonTest = styled(CommonButton)`
    ${(props)=>{
        switch (props.mode) {
            case "dark":
                return `
                    background-color: #2b2b2b;
                    color : white;
                `
            case "light":
                return `
                background-color : white;
                color: #2b2b2b;
                border : solid 2px #2b2b2b;
            `
        }
    }}
`

export default function SpecialButton({children, ...rest}) {
  return (
    <ButtonTest {...rest}>{children}</ButtonTest>
  )
}