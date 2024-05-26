import axios from 'axios'
import * as cheerio from 'cheerio'

class LyricsService {
  API_KEY = 'FTIqsYkbGHcGQr6Wrm2pDA3tNKETgdwRrKhGj4hU4XbM_tn44sen35fSEnkJRyvI'
  API_ENDPOINT = `https://api.genius.com`

  formatLyrics(extracted) {
    const $ = cheerio.load(extracted)
    let lyrics = $('div[class="lyrics"]').text().trim()
    if (!lyrics) {
      lyrics = ''
      $('div[class^="Lyrics__Container"]').each((i, elem) => {
        if ($(elem).text().length !== 0) {
          let snippet = $(elem)
            .html()
            .replace(/<br>/g, '\n')
            .replace(/<(?!\s*br\s*\/?)[^>]+>/gi, '')
          lyrics += $('<textarea/>').html(snippet).text().trim() + '\n\n'
        }
      })
    }
    if (!lyrics) return null
    return lyrics.trim()
  }

  async getSong(artist, title) {
    try {
      let query = artist + ' ' + title
      query = query.split(/[’]/).join('')
      query = query.split(/[()]/).join(' ')

      console.log(query)
      let resp = await axios.get(`${this.API_ENDPOINT}/search/`, {
        params: {
          q: query,
          access_token: this.API_KEY
        }
      })

      console.log(resp)

      let page = resp.data.response.hits[0]
      let data

      if (page) {
        if (page.result.artist_names == 'Spotify') {
          page = resp.data.response.hits[1]
        }
        let url = page?.result.url

        let html = await axios.get(url)
        data = this.formatLyrics(html.data)
        console.log(data)
      }

      return data ?? 'No lyrics found'
    } catch (error) {
      console.log(error)
    }
  }
}

const lyricsService = new LyricsService()

export default lyricsService
