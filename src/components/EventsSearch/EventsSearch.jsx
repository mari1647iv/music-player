import { hot } from 'react-hot-loader/root'
import React from 'react'
import Form from '../Form/Form'
import Input from '../Input/Input'
import Button from '../Button/Button'

/**
 * @param onSubmit
 * @param isDisabled
 * @returns {JSX.Element}
 * @constructor
 */
function EventsSearch(props) {
  const { onSubmit, isDisabled } = props

  return (
    <Form onSubmit={onSubmit} defaultValues={{ artist: '', from: '', to: '' }}>
      <Input type="events" name="artist" rules={{ required: { message: 'Artist is required!', value: true } }} />
      <div>
        <Input type="date" name="from" />
        <Input type="date" name="to" />
        <Button isColorfull={true} isDisabled={isDisabled} type="submit">
          Search
        </Button>
      </div>
    </Form>
  )
}

export default hot(EventsSearch)
