import { hot } from 'react-hot-loader/root'
import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { GlobalStyle } from './index.styles'
import Header from './components/Header/Header'
import Main from './routes/Main/Main'
import MusicPlayer from './routes/MusicPlayer/MusicPlayer'
import Events from './routes/Events/Events'
import Components from './routes/Components/Components'
import { store } from './store/store'
import { Provider } from 'react-redux'

function App() {
  return (
    <Provider store={store}>
      <GlobalStyle />
      <Router>
        <Route exact path="/">
          <Header />
          <Main />
        </Route>
        <Route path="/main">
          <Header />
          <Main />
        </Route>
        <Route path="/player">
          <Header />
          <MusicPlayer />
        </Route>
        <Route path="/events">
          <Header />
          <Events />
        </Route>
        <Route path="/components">
          <Header />
          <Components />
        </Route>
      </Router>
    </Provider>
  )
}

export default hot(App)
