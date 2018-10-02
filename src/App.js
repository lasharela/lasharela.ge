import React, { Component } from 'react';
import NavigationPanel from './components/NavigationPanel'
import Separator from './components/Separator'
import {Container, Row, } from 'reactstrap'

import About from './sections/About'
import Development from './sections/Development'
// import Education from './sections/education'
import Experience from './sections/Experience'
import Interests from './sections/Interests'
import Skills from './sections/Skills'
import Startups from './sections/Startups'

import './assets/styles/main.css';

import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import {
  faAward
} from '@fortawesome/free-solid-svg-icons'

library.add(
  fab,
  faAward
)


class App extends Component {
  render() {
    return (
      <div className="App">
        <NavigationPanel />
        <Container fluid className="p-0">
        
          <About />
          <Separator />

          <Experience />
          <Separator />

          <Startups  />
          <Separator />

          <Development />
          <Separator />

          <Skills />
          <Separator />

          <Interests />
          <Separator />

        </Container>
      </div>
    );
  }
}

export default App;
