import React, { Component } from 'react';
import Header from './components/Header/header';
import About from './components/About';
import Project from './components/Projects';
import Footer from './components/Footer/footer';
import Contact from './components/Contact';

export default class App extends Component {
  render() {
    return (
      <div className='App'>
        <Header />
        <About />
        <Project />
        <Contact />
        <Footer />
      </div>
    );
  }
}
