import { hot } from 'react-hot-loader/root'
import React from 'react'
import { MainStyle } from './Main.styles'
import Player from '../../components/Player/Player'

function Main() {
  return (
    <MainStyle>
      <p>Hello, world!</p>
      <Player size="minimized" song="Here's some song" artist="Some strange artist" duration="3:40" />
    </MainStyle>
  )
}

export default hot(Main)
