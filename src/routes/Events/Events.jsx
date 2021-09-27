import { hot } from 'react-hot-loader/root'
import React, { useState } from 'react'
import { EventsStyle, SearchForm, EventsGrid } from './Events.styles'
import Input from '../../components/Input/Input'
import Button from '../../components/Button/Button'
import Card from '../../components/Card/Card'
import ArtistImage from '../../assets/artist.jpg'

function Events() {
  const [events, setEvents] = useState([
    {
      id: 1,
      artist: 'Jason Mraz',
      image: ArtistImage,
      location: 'Tatneft Arena',
      city: 'Kazan',
      date: '30.09.2021',
      time: '20:00',
      link: 'https://www.songkick.com/'
    }
  ])

  function searchEvents() {
    let response = [
      {
        id: 1,
        artist: 'Event 1',
        image: ArtistImage,
        location: 'Tatneft Arena',
        city: 'Kazan',
        date: '30.09.2021',
        time: '20:00',
        link: 'https://www.songkick.com/'
      },
      {
        id: 2,
        artist: 'Event 2',
        image: undefined,
        location: 'Kazan Arena',
        city: 'Moscow',
        date: '15.09.2021',
        time: '21:00',
        link: 'https://www.songkick.com/'
      },
      {
        id: 3,
        artist: 'Event 3',
        image: ArtistImage,
        location: 'Some location',
        city: 'St. Petersburg',
        date: '30.10.2022',
        time: '18:00',
        link: 'https://www.songkick.com/'
      }
    ]
    setEvents(response)
  }

  return (
    <EventsStyle>
      <SearchForm>
        <Input type="events" />
        <div>
          <Input type="date" />
          <Input type="date" />
          <Button isColorfull={true} onClick={searchEvents}>
            Search
          </Button>
        </div>
      </SearchForm>
      <EventsGrid>
        {events.map((event) => (
          <Card
            type="event"
            image={event.image}
            artist={event.artist}
            location={event.location}
            city={event.city}
            date={event.date}
            time={event.time}
            eventLink={event.link}
            key={event.id}
          />
        ))}
      </EventsGrid>
    </EventsStyle>
  )
}

export default hot(Events)
