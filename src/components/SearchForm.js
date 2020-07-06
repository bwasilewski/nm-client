import React, { useContext, useEffect, useState } from 'react'
import { CardsContext } from '../contexts/Cards'
import { 
  Control,
  Field, 
  Input } from 'bloomer'

const SearchForm = () => {
  const [cards, setCards] = useContext(CardsContext)

  const inputChange = ev => {
    // console.log('Event: ', ev)
    const target = ev.target
    const newCards = cards.filter(card => card.name.search(target.value) !== -1)
    console.log(newCards)
    setCards(newCards)
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
