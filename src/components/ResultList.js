import React, { useContext, useEffect, useState } from 'react'
import { CardsContext } from '../contexts/Cards'
import { GetCards } from '../events'

const ResultList = () => {
  const [cards, setCards] = useContext(CardsContext)
  const [err, setErr] = useState(null)
  const [loading, setLoading] = useState(false)

  const handleSuccess = response => {
    setLoading(false)
    setCards(response)
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
      { cards.length > 0 && cards.map(card => <div key={card.id}>{card.name}</div>) }
    </div>
  )
}

export default ResultList
