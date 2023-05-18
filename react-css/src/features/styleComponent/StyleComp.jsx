import React from 'react'
import styled from 'styled-components'

const Title = styled.h1`
  color: blue;
  background-color: yellow;
`

// const StyledButton이라는 이름으로 a 태그에 color 값, background-color 값을 이용하여 작성
const StyledButton = styled.a`
  color: red;
  background-color: #eaeaea;
`

export default function StyleComp(props) {
  return (
    <div>
      <Title>{props.children}</Title>
      {/** 작성한 버튼 출력 */}
      <StyledButton>버튼</StyledButton>
    </div>
  )
}
