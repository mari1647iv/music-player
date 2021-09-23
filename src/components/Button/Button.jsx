import { hot } from 'react-hot-loader/root'
import React from 'react'
import { ButtonStyles } from './Button.styles'

function Button(props) {
  const { isColorfull, children, isDisabled, onClick } = props
  return (
    <ButtonStyles isColorfull={isColorfull} disabled={isDisabled} onClick={onClick}>
      {' '}
      {children}{' '}
    </ButtonStyles>
  )
}

export default hot(Button)
