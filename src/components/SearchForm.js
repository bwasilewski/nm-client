import React, { useContext} from 'react'
import { CardsContext } from '../contexts/Cards'
import { SubsetContext } from '../contexts/Subset'
import { 
  Control,
  Field, 
  Input } from 'bloomer'

const SearchForm = () => {
  const [cards, setCards] = useContext(CardsContext)
  const [subset, setSubset] = useContext(SubsetContext)
  const inputChange = ev => {
    const target = ev.target
    const newCards = cards.filter(card => card.name.search(target.value) !== -1)
    setSubset(newCards)
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
