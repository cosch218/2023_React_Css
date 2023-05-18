import React from 'react'
import { styled } from 'styled-components'

// 스타일드 컴포넌트를 통해서 버튼
const Button = styled.a`
  color: ${props => props.color};
  background-color: ${props=>props.bgcolor};
  /* font-size 크기를 받아와서 그 크기대로 출력 */
  font-size: ${props=>props.fontsize}rem;
`

const TomatoButton = styled(Button)`
  color: tomato;
`

// ...rest 는 나머지 연산자로 남은 매개변수의 값들을 배열/객체로 들고 온다

export default function StyleButton({children, ...rest}) {
  console.log(rest);
  /** 아래 ...은 스프레드 연산자로 안의 값을 풀어서 씀 */
  return (
  <TomatoButton {...rest}>{children}</TomatoButton>
  )
}
