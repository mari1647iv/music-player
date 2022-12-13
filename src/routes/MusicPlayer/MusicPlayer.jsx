import { hot } from 'react-hot-loader/root'
import React, { useState, useEffect } from 'react'
import { MusicPlayerStyle, MusicBody } from './MusicPlayer.styles'

import Card from '../../components/Card/Card'
import Player from '../../components/Player/Player'
import LyricsBlock from '../../components/LyricsBlock/LyricsBlock'
import artistService from '../../services/artistService'
import musicService from '../../services/musicService'
import { useSelector } from 'react-redux'

function MusicPlayer() {
  const [artistInfo, setArtistInfo] = useState(undefined)
  const [loading, setLoading] = useState(false)
  let id = useSelector((state) => state.player.current)

  useEffect(async () => {
    setLoading(true)
    const data = await musicService.getSonById(id)
    const resp = await artistService.getArtist(data.artist)
    setArtistInfo(resp)
    console.log(artistInfo)
    setLoading(false)
  }, [id])

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
      {!!artistInfo && !loading && (
        <Card type="artist" artist="aaaaa" description="bbbbb" youtubeLink="cccccc" wikiLink="dddddd" />
      )}
    </MusicPlayerStyle>
  )
}

export default hot(MusicPlayer)
