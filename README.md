# Music Player - React Web Application

[![CI][workflow-shield]][workflow-url]
[![Contributors][contributors-shield]][contributors-url]
[![Issues][issues-shield]][issues-url]
[![Tag][tag-shield]][tag-url]
[![MIT License][license-shield]][license-url]

<!-- TABLE OF CONTENTS -->
<details open="open">
  <summary>Table of Contents</summary>
  <ul>
    <li><a href="#about">About</a>
      <ul>
        <li><a href="#frontend">Frontend Description</a></li>
        <li><a href="#backend">Backend Description</a></li>
      </ul>
    </li>
    <li><a href="#getting_started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#authors">Authors</a></li>
    <li><a href="#license">License</a></li>
  </ul>
</details>

## About <a name = "about"></a>

Simple web music player with the ability to see the song lyrics, artist info, and information about upcoming music events.

Features description & MVP: https://docs.google.com/document/d/1enQtu05d_Va8euEKDsHXV75I_egNgr_5gt9eRKrfQuE/edit?usp=sharing

### Frontend Description <a name = "frontend"></a>

During the course project, we have implemented a simple web music player with some standard functionality, the ability to see the song lyrics, and artist info. As well the information about upcoming music events such as concerts and festivals could be found on the web service.

The application contains 3 pages:

- music list with the ability to search for desired music to listen
- music player where the user is able to navigate through the playing music stream, see the playing song’s lyrics and information about the artist
- upcoming events with events search form where the events could also be filtered by the desired artist

### Backend Description <a name = "backend"></a>

For the backend, we used Public APIs:

- Genius <!-- or Lyrics.ovh --> - song lyrics database
- TasteDive - artists database
- Songkick - music events database

## Getting Started <a name = "getting_started"></a>

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. <!--See [deployment](#deployment) for notes on how to deploy the project on a live system.-->

### Prerequisites <a name = "prerequisites"></a>

Download the project using

```bash
git clone https://github.com/mari1647iv/music-player.git
```

Install project dependecies using `npm`

```npm
npm i
```

### Installation <a name = "installation"></a>

Start the application:

```npm
npm start
```

,or build it for production:

```npm
npm build
```

## Authors <a name = "authors"></a>

**Marina Ivanova, Innopolis University BS18-SE-01**

- Github: @mari1647iv
- Email: m.ivanova@innopolis.university

**Marina Nikolaeva, Innopolis University BS18-DS-02**

- Github: @nmaria03
- Email: m.nikolaeva@innopolis.university

Project Link: https://github.com/mari1647iv/music-player

## License <a name = "license"></a>

Distributed under the MIT License. See `LICENSE.md` for more information.

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

[workflow-shield]: https://img.shields.io/github/workflow/status/mari1647iv/music-player/Node.js%20CI?style=for-the-badge
[workflow-url]: https://github.com/mari1647iv/music-player/actions/workflows/node.js.yml
[contributors-shield]: https://img.shields.io/github/contributors/mari1647iv/music-player.svg?style=for-the-badge
[contributors-url]: https://github.com/mari1647iv/music-player/graphs/contributors
[issues-shield]: https://img.shields.io/github/issues/mari1647iv/music-player.svg?style=for-the-badge
[issues-url]: https://github.com/mari1647iv/music-player/issues
[license-shield]: https://img.shields.io/github/license/mari1647iv/music-player.svg?color=orange&style=for-the-badge
[license-url]: https://github.com/mari1647iv/music-player/blob/main/LICENSE
[tag-shield]: https://img.shields.io/github/v/tag/mari1647iv/music-player?style=for-the-badge
[tag-url]: https://github.com/mari1647iv/music-player/tags
