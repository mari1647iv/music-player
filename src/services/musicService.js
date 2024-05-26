class MusicService {
  API_ENDPOINT = 'http://localhost:3003'

  PLAYLIST = [
    {
      id: 0,
      name: 'American Pie',
      artist: 'Don McLean',
      duration: '8:34',
      url: 'assets/playlist/DonMcLean-AmericanPie.mp3'
    },
    {
      id: 1,
      name: 'Believer',
      artist: 'Imagine Dragons',
      duration: '3:24',
      url: 'assets/playlist/ImagineDragons-Believer.mp3'
    },
    {
      id: 2,
      name: 'Старый Гимн Площадей',
      artist: 'Екатерина Яшникова',
      duration: '2:46',
      url: 'assets/playlist/Yashnikova-StaryiGimnPloshadei.mp3'
    },
    {
      id: 3,
      name: 'Rocket Man',
      artist: 'Elton John',
      duration: '12:09',
      url: 'assets/playlist/EltonJohn-RocketMan.mp3'
    },
    {
      id: 4,
      name: "(I'm Gonna) Love Me Again",
      artist: 'Elton John',
      duration: '4:11',
      url: 'assets/playlist/EltonJohn-LoveMeAgain.mp3'
    },
    {
      id: 5,
      name: 'Доширак',
      artist: 'Екатерина Яшникова',
      duration: '3:35',
      url: 'assets/playlist/Yashnikova-Doshirak.mp3'
    },
    {
      id: 6,
      name: 'Look For The Good',
      artist: 'Jason Mraz',
      duration: '5:10',
      url: 'assets/playlist/JasonMraz-LookForTheGood.mp3'
    }
  ]

  async getSongs() {
    return this.PLAYLIST
  }

  async getSonById(id) {
    return this.PLAYLIST.find((element) => {
      return element.id == id
    })
  } //fix name
}

const musicService = new MusicService()

export default musicService
