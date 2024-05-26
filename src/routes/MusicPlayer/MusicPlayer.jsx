import { hot } from 'react-hot-loader/root'
import React, { useState, useEffect } from 'react'
import { MusicPlayerStyle, MusicBody } from './MusicPlayer.styles'

import Card from '../../components/Card/Card'
import Player from '../../components/Player/Player'
import LyricsBlock from '../../components/LyricsBlock/LyricsBlock'
import artistService from '../../services/artistService'
import lyricsService from '../../services/lyricsService'
import musicService from '../../services/musicService'
import { useSelector } from 'react-redux'

function MusicPlayer() {
  const [artistInfo, setArtistInfo] = useState(undefined)
  const [lyrics, setLyrics] = useState(undefined)
  const [loading, setLoading] = useState(false)
  let id = useSelector((state) => state.player.current)

  useEffect(async () => {
    setLoading(true)
    const data = await musicService.getSonById(id)

    const resp = await artistService.getArtist(data.artist)
    setArtistInfo(resp)
    console.log(artistInfo)

    const lyricsData = await lyricsService.getSong(data.artist, data.name)
    setLyrics(lyricsData)

    setLoading(false)
  }, [id])

  return (
    <MusicPlayerStyle>
      <MusicBody>
        <Player size="maximized" song="Look For The Good" artist="Jason  Mraz" />
        <LyricsBlock lyrics={lyrics} />
      </MusicBody>
      {!!artistInfo && !loading && (
        <Card
          type="artist"
          artist={artistInfo.name}
          description={artistInfo.description}
          youtubeLink={artistInfo.youtube}
          wikiLink={artistInfo.wiki}
        />
      )}
    </MusicPlayerStyle>
  )
}

export default hot(MusicPlayer)
