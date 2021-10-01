import { hot } from 'react-hot-loader/root'
import React, { useState } from 'react'
import { MainStyle, MainBody } from './Main.styles'
import Button from '../../components/Button/Button'
import AudioBlock from '../../components/AudioBlock/AudioBlock'
import Player from '../../components/Player/Player'
import musicService from '../../services/musicService'

function Main() {
  const [playlist, setPlaylist] = useState(undefined)
  const [loading, setLoading] = useState(true)
  const [songPlaying, setSongPlaying] = useState(undefined)

  async function getMusic() {
    let data = await musicService.getSongs()
    setPlaylist(data)
    setLoading(false)
  }

  async function songChoice() {
    let id = document.querySelector('input[name="playlist"]:checked').value
    let resp = await musicService.getSonById(id)
    setSongPlaying(resp)
  }

  return (
    <MainStyle>
      <MainBody>
        <Button onClick={getMusic}>Load Music</Button>
        {!!playlist && !loading && (
          <form onChange={songChoice}>
            {playlist.map((song) => (
              <AudioBlock key={song.id} id={song.id} song={song.name} artist={song.artist} duration={song.duration} />
            ))}
          </form>
        )}
      </MainBody>
      {!!songPlaying && (
        <Player size="minimized" song={songPlaying.name} artist={songPlaying.artist} duration={songPlaying.duration} />
      )}
    </MainStyle>
  )
}

export default hot(Main)
