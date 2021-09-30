import { hot } from 'react-hot-loader/root'
import React from 'react'
import { SearchForm } from './Form.styles'

function Form(props) {
  const { children, onSubmit } = props

  return <SearchForm onSubmit={onSubmit}> {children} </SearchForm>
}

export default hot(Form)
