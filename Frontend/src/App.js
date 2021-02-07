import React from 'react';
import Cards from './components/Cards.js'
import Buttons from './components/Buttons.js'
import './App.css'

export default class App extends React.Component {
  render() {

        const About = ()=>(
          <div>
            <h3>This is a speech-to-speech translation application.</h3>
          </div>
      );

      const Header = ()=>(
        <header>
          <h1>SPEECH-TO-SPEECH</h1>
        </header>
    );

      return (
          <React.Fragment>
            <Header/>
            <About/>
            <Buttons/>
            <Cards/>
          </React.Fragment>
      );  
  }
}
