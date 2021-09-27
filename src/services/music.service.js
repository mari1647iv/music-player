class MusicService {
  API_ENDPOINT = 'http://localhost:3003'

  async getSongs() {
    const response = [{}]

    return response.data
  }

  async getSonById(id) {
    const response = {}

    return response
  }
}

const musicService = new MusicService()

export default musicService
