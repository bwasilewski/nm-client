import React, { useState } from 'react'

const defaultState = []

export const SubsetContext = React.createContext()


export const SubsetProvider = props => {
  const [subset, setSubset] = useState(defaultState)

  return(
    <SubsetContext.Provider value={[subset, setSubset]}>
      {props.children}
    </SubsetContext.Provider>
  )
}
