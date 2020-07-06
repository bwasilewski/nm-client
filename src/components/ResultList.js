import React, { useContext, useEffect, useState } from 'react'
import Result from './Result'
import { CardsContext } from '../contexts/Cards'
import { SubsetContext } from '../contexts/Subset'
import { GetCards } from '../events'

const ResultList = () => {
  const [cards, setCards] = useContext(CardsContext)
  const [subset, setSubset] = useContext(SubsetContext)
  const [err, setErr] = useState(null)
  const [loading, setLoading] = useState(false)

  const handleSuccess = response => {
    setLoading(false)
    setCards(response)
    setSubset(response)
    console.log(response)
  }

  const handleFail = err => {
    setLoading(false)
    setErr(err)
  }

  useEffect(() => {
    setLoading(true)
    if ( cards.length === 0 ) {
      GetCards()
        .then(response => handleSuccess(response))
        .catch(err => handleFail(err))
    }
  }, [])

  return (
    <div>
      { loading === true && <span>Loading...</span> }
      { err !== null && <span>There was an error</span> }
      { err === null && subset.length > 0 && subset.map(card => <Result card={card} key={card.id} />) }
    </div>
  )
}

export default ResultList
