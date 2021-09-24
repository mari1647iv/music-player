import { hot } from 'react-hot-loader/root'
import React from 'react'
import { MainStyle, MainBody, SearchForm } from './Main.styles'
import Input from '../../components/Input/Input'
import Button from '../../components/Button/Button'
import AudioBlock from '../../components/AudioBlock/AudioBlock'
import Player from '../../components/Player/Player'
import WreckedImage from '../../assets/wrecked.jpg'
import LFTGImage from '../../assets/lftg.jpg'

function Main() {
  return (
    <MainStyle>
      <MainBody>
        <SearchForm>
          <Input type="music" />
          <Button isColorfull={true}>Search</Button>
        </SearchForm>
        <AudioBlock song="Here's some song" artist="Some strange artist" duration="3:40" />
        <AudioBlock song="Here's another song" artist="Another strange artist" image={WreckedImage} duration="3:14" />
        <AudioBlock song="And one more song" artist="One more strange artist" image={LFTGImage} duration="42:42" />
        <AudioBlock song="And.. Just kidding)" artist="Same old strange artist" duration="4:20" />
        <AudioBlock song="Here's some song" artist="Some strange artist" duration="3:40" />
        <AudioBlock song="Here's another song" artist="Another strange artist" image={WreckedImage} duration="3:14" />
        <AudioBlock song="And one more song" artist="One more strange artist" image={LFTGImage} duration="42:42" />
        <AudioBlock song="And.. Just kidding)" artist="Same old strange artist" duration="4:20" />
        <AudioBlock song="Here's some song" artist="Some strange artist" duration="3:40" />
        <AudioBlock song="Here's another song" artist="Another strange artist" image={WreckedImage} duration="3:14" />
        <AudioBlock song="And one more song" artist="One more strange artist" image={LFTGImage} duration="42:42" />
        <AudioBlock song="And.. Just kidding)" artist="Same old strange artist" duration="4:20" />
      </MainBody>
      <Player size="minimized" song="Here's some song" artist="Some strange artist" duration="3:40" />
    </MainStyle>
  )
}

export default hot(Main)
