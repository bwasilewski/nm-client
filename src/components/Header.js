import React from 'react'
import { Section, Title } from 'bloomer'


const Header =({ headerText }) => (
  <header className="App-header">
    <Section>
      <Title isSize="1">{ headerText }</Title> 
    </Section>
  </header>
)

export default Header
