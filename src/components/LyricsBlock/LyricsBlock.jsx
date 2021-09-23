import { hot } from 'react-hot-loader/root'
import React from 'react'
import { LyricsStyles } from './LyricsBlock.styles.js'

function LyricsBlock(props) {
  const { lyrics } = props
  return <LyricsStyles>{lyrics}</LyricsStyles>
}

export default hot(LyricsBlock)
