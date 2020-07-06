import React from 'react'
import 'bulma/css/bulma.css'
import { Section } from 'bloomer'
import Header from './components/Header'
import SearchForm from './components/SearchForm'
import Result from './components/Result'


function App() {
  return (
    <div className="App">
      <Header headerText="Hello World!" />
      <Section>
        <SearchForm />
      </Section>
      <Section>
        <Result />
        <Result />
        <Result />
        <Result />
      </Section>
    </div>
  )
}

export default App
