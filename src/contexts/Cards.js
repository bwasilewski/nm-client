import React, { useState } from 'react'

const defaultState = []

export const CardsContext = React.createContext()


export const CardsProvider = props => {
  const [cards, setCards] = useState(defaultState)

  return(
    <CardsContext.Provider value={[cards, setCards]}>
      {props.children}
    </CardsContext.Provider>
  )
}
