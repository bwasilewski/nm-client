import React from 'react'
import { 
  Control,
  Field, 
  Input } from 'bloomer'

const SearchForm = () => {
  const inputChange = ev => {
    console.log('Event: ', ev)
  }
  
  return (
    <form>
      <Field>
        <Control>
          <Input onChange={inputChange} type="text" placeholder="Search" /> 
        </Control>
      </Field>
    </form>
  )
}

export default SearchForm
