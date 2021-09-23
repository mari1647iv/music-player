import { hot } from 'react-hot-loader/root'
import React from 'react'
import { HeaderStyle, LogoStyle, TitleContainer, TitleStyle } from './Header.styles'
import { ArrowLeft, Calendar } from 'react-feather'
import Logo from '../../assets/logo.svg'
import { Link } from 'react-router-dom'

function Header() {
  const location = window.location.pathname

  return (
    <HeaderStyle>
      <TitleContainer>
        {location === '/main' ? (
          ''
        ) : (
          <Link to="/main">
            <ArrowLeft size={55} color="#cecece" strokeWidth="1.5px" />
          </Link>
        )}
        <Link to="/" className="link">
          <TitleStyle>
            <p>Frontend Project</p>
            <h1>Music Player</h1>
          </TitleStyle>
        </Link>
      </TitleContainer>
      <LogoStyle src={Logo} alt="Service logo" />
      <Link to="/events">
        <Calendar size={36} color={location === '/events' ? '#00FFC2' : '#cecece'} />
      </Link>
    </HeaderStyle>
  )
}

export default hot(Header)
