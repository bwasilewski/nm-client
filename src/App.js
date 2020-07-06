import React from 'react'
import 'bulma/css/bulma.css'
import { Section } from 'bloomer'
import Header from './components/Header'
import SearchForm from './components/SearchForm'
import ResultList from './components/ResultList'
import { CardsProvider } from './contexts/Cards'
import { SubsetProvider } from './contexts/Subset'

function App() {

  return (
    <CardsProvider>
        <SubsetProvider>
          <div className="App">
            <Header headerText="Magic: The Gathering Card Filterer" />
            <Section>
              <SearchForm />
            </Section>
            <Section>
              <ResultList />
            </Section>
          </div>
        </SubsetProvider>
    </CardsProvider>
  )
}

export default App
