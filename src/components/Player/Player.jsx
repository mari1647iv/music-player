import { hot } from 'react-hot-loader/root'
import React, { useEffect, useState } from 'react'
import { MinimizedPlayer, MaximizedPlayer, Slider, Container, Info } from './Player.styles.js'
import { Play, SkipBack, SkipForward, Repeat, Share2, Pause } from 'react-feather'
import { Link } from 'react-router-dom'
import Button from '../Button/Button'
import { useSelector, useDispatch } from 'react-redux'
import { next, previous } from '../../store/features/player/playerSlice'
import musicService from '../../services/musicService.js'

function formatTime(time) {
  let min = Math.floor(time / 60)
  let sec = Math.floor(time % 60)
  if (sec < 10) {
    sec = `0${sec}`
  }
  return `${min} : ${sec}`
}

function Player(props) {
  const { size, image } = props
  const [isPlaying, setIsPlaying] = useState(false)
  const [current, setCurrent] = useState(0)
  const [loading, setLoading] = useState(true)
  const [audio, setAudio] = useState(undefined)

  const progressBar = React.createRef()
  let path
  const [currentSong, setCurrentSong] = useState(undefined)
  let id = useSelector((state) => state.player.current)
  const dispatch = useDispatch()

  useEffect(async () => {
    setLoading(true)
    const resp = await musicService.getSonById(id)
    path = resp.url
    setAudio(new Audio(path))
    setCurrent(0)
    setCurrentSong(resp)
    setLoading(false)
  }, [id])

  function update() {
    setCurrent(audio.currentTime)
  }

  let updateInterval

  function playPause() {
    setIsPlaying(!isPlaying)
    if (isPlaying) {
      audio.pause()
      clearInterval(updateInterval)
    } else {
      updateInterval = setInterval(() => {
        update()
      }, 1000)
      audio.play()
    }
  }

  function handleAudioNavigation() {
    setCurrent(audio.currentTime)
  }

  function switchToPrev() {
    dispatch(previous())
  }

  function switchToNext() {
    dispatch(next())
  }

  switch (size) {
    case 'minimized':
      return (
        <MinimizedPlayer>
          {!!currentSong && !loading && (
            <>
              <Slider>
                <>
                  {!!audio.duration && (
                    <input
                      type="range"
                      ref={progressBar}
                      value={audio.currentTime}
                      min="0"
                      max={audio.duration}
                      onChange={handleAudioNavigation}
                    />
                  )}
                  <div>
                    <span>{formatTime(current)}</span>
                    <span className="song-duration">{currentSong.duration.replace(':', ' : ')}</span>
                  </div>
                </>
              </Slider>
              <div>
                <Container className="container-grow">
                  <img src={image ? image : 'assets/default.svg'} alt="Song album" />
                  <Link to="/player">
                    <Info className="player-info">
                      <p>{currentSong.name}</p>
                      <p>{currentSong.artist}</p>
                    </Info>
                  </Link>
                  <div className="controls">
                    <Button type="icon" onClick={switchToPrev}>
                      <SkipBack size={44} />
                    </Button>
                    <Button type="icon" onClick={playPause}>
                      {isPlaying ? <Pause size={44} strokeWidth="1.8px" /> : <Play size={44} />}
                    </Button>
                    <Button type="icon" onClick={switchToNext}>
                      <SkipForward size={44} />
                    </Button>
                  </div>
                </Container>
                <Container>
                  <label>
                    <input type="checkbox" />
                    <i>
                      <Repeat size={30} />
                    </i>
                  </label>
                  <Button type="icon">
                    <Share2 size={30} />
                  </Button>
                </Container>
              </div>
            </>
          )}
        </MinimizedPlayer>
      )
    case 'maximized':
      return (
        <MaximizedPlayer>
          {!!currentSong && !loading && (
            <>
              <img src={image ? image : 'assets/default.svg'} alt="Song album" />
              <div className="player-container">
                <Info className="player-info">
                  <p>{currentSong.name}</p>
                  <p>{currentSong.artist}</p>
                </Info>
                <div className="buttons">
                  <div className="controls">
                    <Button type="icon">
                      <SkipBack size={44} onClick={switchToPrev} />
                    </Button>
                    <Button id="playButton" type="icon" onClick={playPause}>
                      {isPlaying ? <Pause size={44} strokeWidth="1.8px" /> : <Play size={44} />}
                    </Button>
                    <Button type="icon" onClick={switchToNext}>
                      <SkipForward size={44} />
                    </Button>
                  </div>
                  <Container>
                    <label>
                      <input type="checkbox" />
                      <i>
                        <Repeat size={30} />
                      </i>
                    </label>
                    <Button type="icon">
                      <Share2 size={30} />
                    </Button>
                  </Container>
                </div>
                <Slider>
                  <>
                    {!!audio.duration && (
                      <input
                        type="range"
                        ref={progressBar}
                        value={audio.currentTime}
                        min="0"
                        max={audio.duration}
                        onChange={handleAudioNavigation}
                      />
                    )}
                    <span>{formatTime(current)}</span>
                    <span className="song-duration">{currentSong.duration.replace(':', ' : ')}</span>
                  </>
                </Slider>
              </div>
            </>
          )}
        </MaximizedPlayer>
      )
    default:
      break
  }
}

export default hot(Player)
