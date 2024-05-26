//import axios from 'axios'

class ArtistService {
  API_KEY = '423643-MusicPla-4Q9OH0NG'
  API_ENDPOINT = 'https://tastedive.com/api/similar'

  async getArtist(/*artist*/) {
    /*await axios.get(this.API_ENDPOINT, {
      params: { q: artist, type: 'music', info: 1, limit: 1, k: this.API_KEY }
    })

    data =*/
    let data = {
      name: 'aaaa',
      description: 'ddd',
      youtube: 'ccc',
      wiki: 'wwww'
    }

    return data
  }
}

const artistService = new ArtistService()

export default artistService
