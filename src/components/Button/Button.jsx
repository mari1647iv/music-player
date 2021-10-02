import { hot } from 'react-hot-loader/root'
import React from 'react'
import { ButtonStyles } from './Button.styles'

function Button(props) {
  const { isColorfull, children, isDisabled, onClick, type, ...rest } = props
  return (
    <ButtonStyles
      isColorfull={isColorfull}
      disabled={isDisabled}
      onClick={onClick}
      type={type ? type : 'button'}
      {...rest}
    >
      {' '}
      {children}{' '}
    </ButtonStyles>
  )
}

export default hot(Button)
