import { hot } from 'react-hot-loader/root'
import React, { useState } from 'react'
import { EventsStyle, EventsGrid, Loading } from './Events.styles'
import Card from '../../components/Card/Card'
import eventsService from '../../services/eventsService'
import EventsSearch from '../../components/EventsSearch/EventsSearch'

function Events() {
  const [events, setEvents] = useState(undefined)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(undefined)

  async function searchEvents({ artist, from, to }) {
    setEvents(undefined)
    setLoading(true)
    setError(undefined)

    try {
      let resp = await eventsService.getEvents(artist, from, to)
      console.log(resp)
      setTimeout(() => {
        if (resp.status === 200) {
          let data = resp.data.resultsPage.results.event
          if (data) {
            setEvents(data)
          } else {
            setError('Sorry! No results found.')
          }
        } else {
          setError(resp.status)
        }
      }, 1000)
    } catch (e) {
      setTimeout(() => {
        setError('Something went wrong')
      }, 1000)
    }
    setLoading(false)
  }

  return (
    <EventsStyle>
      <EventsSearch onSubmit={searchEvents} isDisabled={loading} />
      {loading && !error && (
        <Loading>
          <div></div>
          <div></div>
        </Loading>
      )}
      {!!error && <p>{error}</p>}
      {!!events && !loading && !error && (
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
