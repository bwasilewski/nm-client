import React, { useContext, useEffect, useState } from 'react'
import 'bulma/css/bulma.css'
import { Section } from 'bloomer'
import Header from './components/Header'
import SearchForm from './components/SearchForm'
import ResultList from './components/ResultList'
import { CardsProvider } from './contexts/Cards'


function App() {

  return (
    <CardsProvider>
      <div className="App">
        <Header headerText="Hello World!" />
        <Section>
          <SearchForm />
        </Section>
        <Section>
          <ResultList />
        </Section>
      </div>
    </CardsProvider>
  )
}

export default App
