import React from 'react'
import { Section } from 'bloomer'


const Header =({ headerText }) => (
  <header className="App-header">
    <Section>
      <h1>{ headerText }</h1> 
    </Section>
  </header>
)

export default Header
