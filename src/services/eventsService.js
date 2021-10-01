import axios from 'axios'

class EventsService {
  API_ENDPOINT = 'https://api.songkick.com/api/3.0/events.json'

  API_KEY = 'ayo0ADNZo1OQi066'

  async getEvents(artist, from, to) {
    let response

    if (!to.length) {
      to = '3000-12-31'
    }
    if (!from.length) {
      let today = new Date()
      from =
        today.getFullYear() +
        '-' +
        (today.getMonth() < 9 ? '0' : '') +
        (today.getMonth() + 1) +
        '-' +
        (today.getDate() < 10 ? '0' : '') +
        today.getDate()
    }

    response = await axios.get(this.API_ENDPOINT, {
      params: { apikey: this.API_KEY, artist_name: artist, min_date: from, max_date: to }
    })

    return response
  }
}

const eventsService = new EventsService()

export default eventsService
