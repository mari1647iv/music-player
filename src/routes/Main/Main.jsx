import { hot } from 'react-hot-loader/root'
import React, { useState } from 'react'
import { MainStyle, MainBody } from './Main.styles'
import Button from '../../components/Button/Button'
import AudioBlock from '../../components/AudioBlock/AudioBlock'
import Player from '../../components/Player/Player'
import musicService from '../../services/musicService'
import { useSelector, useDispatch } from 'react-redux'
import { setSong } from '../../store/features/player/playerSlice'

function Main() {
  const [playlist, setPlaylist] = useState(undefined)
  const [loading, setLoading] = useState(true)
  const songPlaying = useSelector((state) => state.player.current)
  const dispatch = useDispatch()

  async function getMusic() {
    let data = await musicService.getSongs()
    setPlaylist(data)
    setLoading(false)
  }

  async function songChoice() {
    let id = document.querySelector('input[name="playlist"]:checked').value
    dispatch(setSong(id))
  }

  return (
    <MainStyle>
      <MainBody>
        <Button onClick={getMusic} style={{ border: '1px solid #cecece' }}>
          Load Music
        </Button>
        {!!playlist && !loading && (
          <form onChange={songChoice}>
            {playlist.map((song) => (
              <AudioBlock key={song.id} id={song.id} song={song.name} artist={song.artist} duration={song.duration} />
            ))}
          </form>
        )}
      </MainBody>
      {!!songPlaying && <Player size="minimized" />}
    </MainStyle>
  )
}

export default hot(Main)
