import { hot } from 'react-hot-loader/root'
import React from 'react'
import { ButtonStyles } from './Button.styles'

function Button(props) {
  const { isColorfull, children, isDisabled, onClick, type } = props
  return (
    <ButtonStyles isColorfull={isColorfull} disabled={isDisabled} onClick={onClick} type={type ? type : 'button'}>
      {' '}
      {children}{' '}
    </ButtonStyles>
  )
}

export default hot(Button)
