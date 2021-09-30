import { hot } from 'react-hot-loader/root'
import React from 'react'
import { SearchForm } from '../Form/Form.styles'
import Input from '../Input/Input'
import Button from '../Button/Button'
import { useForm } from 'react-hook-form'

/**
 * Encapsulates logic of context from react-hook-form
 * @param onSubmit
 * @param isDisabled
 * @returns {JSX.Element}
 * @constructor
 */
function EventsSearch(props) {
  const { onSubmit, isDisabled } = props
  const { register, handleSubmit } = useForm({ artist: '', from: '', to: '' })

  return (
    <SearchForm
      onSubmit={handleSubmit((data) => {
        console.log(data)
        onSubmit(data)
      })}
    >
      <Input type="events" registerFunction={register('artist', { required: true })} />
      <div>
        <Input type="date" registerFunction={register('from')} />
        <Input type="date" registerFunction={register('to')} />
        <Button isColorfull={true} isDisabled={isDisabled} type="submit">
          Search
        </Button>
      </div>
    </SearchForm>
  )
}

export default hot(EventsSearch)
