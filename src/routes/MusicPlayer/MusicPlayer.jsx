import { hot } from 'react-hot-loader/root'
import React from 'react'
import { MusicPlayerStyle, MusicBody } from './MusicPlayer.styles'

import Card from '../../components/Card/Card'
import Player from '../../components/Player/Player'
import LyricsBlock from '../../components/LyricsBlock/LyricsBlock'

function MusicPlayer() {
  return (
    <MusicPlayerStyle>
      <MusicBody>
        <Player size="maximized" song="Look For The Good" artist="Jason  Mraz" />
        <LyricsBlock
          lyrics={
            'Look for the good in everything\n' +
            'Look for the people who will set your soul free\n' +
            "It always seems impossible until it's done\n" +
            'Look for the good in everyone\n\n' +
            'People done gone crazy, people done gone mad\n' +
            'People done forgot the superpowers we all have\n' +
            'We were born to love, not hate, we can decide our fate\n' +
            'And look for the good in everyone and celebrate all our mistakes\n' +
            "If there's a silver lining (silver lining)\n" +
            'You still have to find it, find it, find it\n\n' +
            'Look for the good in everything\n' +
            'Look for the people who will set your soul free\n' +
            "It always seems impossible until it's done\n" +
            'Look for the good in everyone\n\n' +
            'Everyone needs sunshine, everyone needs rain\n' +
            "Everyone is carryin' around some kind of pain\n" +
            "I see who you are, you're just like me\n" +
            "I see you're searching for a purpose, guided by a dream\n" +
            "I see who you are, I'm just like you\n" +
            'I get lost sometimes and I forget what I came here to do\n' +
            'I keep on trying (keep on trying)\n' +
            'When it gets frightening\n\n' +
            'Look for the good in everyone\n' +
            'Everyone needs sunshine, everyone needs rain\n' +
            "Everyone is carryin' around some kind of pain\n" +
            "I see who you are, you're just like me\n"
          }
        />
      </MusicBody>
      <Card
        type="artist"
        artist="Jason Mraz"
        description="Lorem Ipsum. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
        youtubeLink="https://www.youtube.com/"
        wikiLink="https://wiki.com/"
      />
    </MusicPlayerStyle>
  )
}

export default hot(MusicPlayer)
