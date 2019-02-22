import React, { Component } from 'react';
import Navbar from './components/Navbar'
import './App.css';
import Home from './components/Home'
import AboutMe from './components/AboutMe'
import Portfolio from './components/Portfolio'
import Resume from './components/Resume'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Projects from './components/Projects'
import Carousel from './components/Carousel'



class App extends Component {
  render() {
    return (
      <div id="app">
        <div>
          <Navbar/>
          <Home/>
          <Projects/>
          <AboutMe/>
          <Contact/>
        </div>
      </div>
    );
  }
}

export default App;
