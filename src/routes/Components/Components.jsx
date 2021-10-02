import { hot } from 'react-hot-loader/root'
import React from 'react'
import { ComponentsStyle, ButtonsGap, PlaylistStyle } from './Components.styles'
import Button from '../../components/Button/Button'
import { Play } from 'react-feather'
import Input from '../../components/Input/Input'
import AudioBlock from '../../components/AudioBlock/AudioBlock'
import Card from '../../components/Card/Card'
import Form from '../../components/Form/Form'
import LyricsBlock from '../../components/LyricsBlock/LyricsBlock'
import Player from '../../components/Player/Player'
import WreckedImage from '../../assets/wrecked.jpg'
import LFTGImage from '../../assets/lftg.jpg'
import ArtistImage from '../../assets/artist.jpg'

let lyrics =
  'Look for the good in everything\n' +
  'Look for the people who will set your soul free\n' +
  "It always seems impossible until it's done\n" +
  'Look for the good in everyone\n\n' +
  'People done gone crazy, people done gone mad\n' +
  'People done forgot the superpowers we all have\n' +
  'We were born to love, not hate, we can decide our fate\n' +
  'And look for the good in everyone and celebrate all our mistakes\n' +
  "If there's a silver lining (silver lining)\n" +
  'You still have to find it, find it, find it'

function Components() {
  return (
    <div>
      <ComponentsStyle>
        <p>Наши компоненты слева направо:</p>
        <ButtonsGap>
          <Button
            isColorfull={true}
            onClick={() => {
              alert('Hi!')
            }}
          >
            Search
          </Button>
          <Button>Search</Button>
          <Button>
            <Play size={40} />
          </Button>
          <Button>Search</Button>
        </ButtonsGap>
        <ButtonsGap>
          <Button
            isColorfull={true}
            onClick={() => {
              alert('Hi!')
            }}
            isDisabled={true}
          >
            Search
          </Button>
          <Button isDisabled={true}>Search</Button>
          <Button isDisabled={true}>
            <Play size={40} />
          </Button>
          <Button isDisabled={true}>Search</Button>
        </ButtonsGap>
        <PlaylistStyle>
          <div>
            <AudioBlock song="Here's some song" artist="Some strange artist" duration="3:40" />
          </div>
          <div>
            <AudioBlock
              song="Here's another song"
              artist="Another strange artist"
              image={WreckedImage}
              duration="3:14"
            />
          </div>
          <div>
            <AudioBlock song="And one more song" artist="One more strange artist" image={LFTGImage} duration="42:42" />
          </div>
          <div>
            <AudioBlock song="And.. Just kidding)" artist="Same old strange artist" duration="4:20" />
          </div>
        </PlaylistStyle>
        <Form>
          <Input type="music" />
          <Input type="events" />
          <Input type="date" />
          <Input type="blablabla" />
        </Form>
        <div>
          <Player size="maximized" song="Here's some song" artist="Some strange artist" duration="3:40" />
        </div>
        <div>
          <Card
            type="artist"
            image={ArtistImage}
            artist="Jason  Mraz"
            shortDescription="Guitarist, singer and songwriter."
            description="Lorem Ipsum. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
            youtubeLink="https://www.youtube.com"
            wikiLink="https://www.wikipedia.org/"
          />
          <Card
            type="event"
            image={ArtistImage}
            artist="Jason  Mraz"
            location="Tatneft Arena"
            city="Kazan"
            date="30.09.2021"
            time="20:00"
            eventLink="https://www.songkick.com/"
          />
          <Card type="blablabla" />
        </div>
        <div>
          <LyricsBlock lyrics={lyrics} />
        </div>
      </ComponentsStyle>
      <Player size="minimized" song="Here's some song" artist="Some strange artist" duration="3:40" />
    </div>
  )
}

export default hot(Components)
