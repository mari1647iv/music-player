import { hot } from 'react-hot-loader/root'
import React from 'react'
import { InputStyle } from './Input.styles'
import { Search, Calendar } from 'react-feather'

function Input(props) {
  const { type } = props
  let icon
  let placeholder = 'Type Some Text'

  if (type === 'music') {
    icon = <Search size={36} />
    placeholder = 'Search Music'
  } else if (type === 'events') {
    icon = <Search size={36} />
    placeholder = 'Search Events'
  } else if (type === 'date') icon = <Calendar size={36} />

  return (
    <InputStyle>
      <i className="input-icon">{icon}</i>
      <input type={type === 'date' ? 'date' : 'text'} className="input-box" placeholder={placeholder} />
    </InputStyle>
  )
}

export default hot(Input)
