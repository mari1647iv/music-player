import { hot } from 'react-hot-loader/root'
import React from 'react'
import { useForm, FormProvider } from 'react-hook-form'
import { SearchForm } from './Form.styles'

function Form(props) {
  const { children, onSubmit, defaultValues } = props
  const methods = useForm({ defaultValues })

  return (
    <FormProvider {...methods}>
      <SearchForm
        onSubmit={methods.handleSubmit((data) => {
          onSubmit(data)
        })}
      >
        {children}
      </SearchForm>
    </FormProvider>
  )
}

export default hot(Form)
