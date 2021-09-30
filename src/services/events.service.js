import axios from 'axios'

class EventsService {
  API_ENDPOINT = 'https://api.songkick.com/api/3.0/events.json'

  API_KEY = 'ayo0ADNZo1OQi066'

  async getEvents(artist, from, to) {
    const response = await axios.get(this.API_ENDPOINT, {
      params: { apikey: this.API_KEY, artist_name: artist, min_date: from, max_date: to }
    })
    const data = response.data

    return data
  }
}

const eventsService = new EventsService()

export default eventsService
