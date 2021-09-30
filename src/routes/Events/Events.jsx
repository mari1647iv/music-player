import { hot } from 'react-hot-loader/root'
import React, { useState } from 'react'
import { EventsStyle, EventsGrid, Loading } from './Events.styles'
import Card from '../../components/Card/Card'
import eventsService from '../../services/events.service'
import EventsSearch from '../../components/EventsSearch/EventsSearch'

function Events() {
  const [events, setEvents] = useState(undefined)
  const [loading, setLoading] = useState(false)

  async function searchEvents({ artist, from, to }) {
    let data = [{}]
    setLoading(true)

    data = await eventsService.getEvents(artist, from, to)
    console.log(data)
    setTimeout(() => {
      setEvents(data.resultsPage.results.event)
      setLoading(false)
    }, 1000)
  }

  return (
    <EventsStyle>
      <EventsSearch onSubmit={searchEvents} isDisabled={loading} />
      {loading && (
        <Loading>
          <div></div>
          <div></div>
        </Loading>
      )}
      {!!events && !loading && (
        <EventsGrid>
          {events.map((event) => (
            <Card
              type="event"
              artist={event.displayName}
              location={event.venue.displayName}
              city={event.location.city}
              date={event.start.date}
              time={event.start.time}
              eventLink={event.uri}
              key={event.id}
            />
          ))}
        </EventsGrid>
      )}
    </EventsStyle>
  )
}

export default hot(Events)
