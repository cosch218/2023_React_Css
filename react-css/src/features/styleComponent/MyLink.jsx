import React from 'react'
import { styled } from 'styled-components'
import { Link } from 'react-router-dom'

const StyleLink = styled(Link)`
  font-size: 1.2rem;
  font-weight: bold;
  color: #ff7c0a;
  text-decoration: none;

  &:hover {
    color: #ff430a;
  }
`

export default function MyLink({children, ...rest}) {
  return (
    <StyleLink {...rest} to='/about'>{children}</StyleLink>
  )
}
