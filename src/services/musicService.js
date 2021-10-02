class MusicService {
  API_ENDPOINT = 'http://localhost:3003'

  PLAYLIST = [
    {
      id: 0,
      name: 'American Pie',
      artist: 'Don McLean',
      duration: '8:34'
    },
    {
      id: 1,
      name: 'Believer',
      artist: 'Imagine Dragons',
      duration: '3:24'
    },
    {
      id: 2,
      name: 'Старый Гимн Площадей',
      artist: 'Екатерина Яшникова',
      duration: '2:46'
    },
    {
      id: 3,
      name: 'Rocket Man',
      artist: 'Elton John',
      duration: '12:09'
    },
    {
      id: 4,
      name: "(I'm Gonna) Love Me Again",
      artist: 'Elton John',
      duration: '4:11'
    },
    {
      id: 5,
      name: 'Доширак',
      artist: 'Екатерина Яшникова',
      duration: '3:35'
    },
    {
      id: 6,
      name: 'Look For The Good',
      artist: 'Jason Mraz',
      duration: '5:10'
    }
  ]

  async getSongs() {
    return this.PLAYLIST
  }

  async getSonById(id) {
    return this.PLAYLIST.find((element) => {
      return element.id == id
    })
  }
}

const musicService = new MusicService()

export default musicService
