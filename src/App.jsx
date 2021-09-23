import { hot } from 'react-hot-loader/root'
import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { GlobalStyle } from './index.styles'
import Header from './components/Header/Header'
import Main from './routes/Main/Main'
import MusicPlayer from './routes/MusicPlayer/MusicPlayer'
import Events from './routes/Events/Events'
import Components from './routes/Components/Components'

function App() {
  return (
    <>
      <GlobalStyle />
      <Router>
        <Header />
        <Route exact path="/">
          <Components />
        </Route>
        <Route path="/main">
          <Main />
        </Route>
        <Route path="/player">
          <MusicPlayer />
        </Route>
        <Route path="/events">
          <Events />
        </Route>
        <Route path="/components">
          <Components />
        </Route>
      </Router>
    </>
  )
}

export default hot(App)
