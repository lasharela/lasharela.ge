import React, { Component } from 'react';
import NavigationPanel from './components/NavigationPanel'
import Separator from './components/Separator'
import {Container, } from 'reactstrap'
import {SECTIONS} from './config/content'

import LoadModul from './components/LoadModulesByType'

import About from './sections/About'
import Projects from './sections/Projects'
// import Education from './sections/education'
import Experience from './sections/Experience'
import Interests from './sections/Interests'
import Skills from './sections/Skills'
import Startups from './sections/Startups'

import './assets/styles/main.css';

import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import {
  faAward, faCheck
} from '@fortawesome/free-solid-svg-icons'

library.add(
  fab,
  faAward,
  faCheck
)




// make references to the components by type
const Components = {
    About,
    Projects,
    Experience,
    Interests,
    Skills,
    Startups
  }


class App extends Component {
  render() {
    return (
      <div className="App">
        <NavigationPanel sections={SECTIONS} />
        <Container fluid className="p-0">

          {
            SECTIONS.map((section, index) => (
              <div id={section.id} key={index}>
                <LoadModul section={section} components={Components} key={index} />
                <Separator />
              </div>
            ))
          } 

        </Container>
      </div>
    );
  }
}

export default App;
