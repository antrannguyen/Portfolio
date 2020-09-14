import React, { Component } from 'react';
import Header from './components/Header/header';
import About from './components/AboutV2/index';
import Project from './components/Projects/projects';
import TechStack from './components/TechStack/techStack';
import Blogs from './container/Blogs/index';
// import Contact from './components/Contact/contact';
import Footer from './components/Footer/footer';
import Contact from './components/Contact';

export default class App extends Component {
  render() {
    return (
      <div className='App'>
        <Header />
        <About />
        <Project />
        {/* <TechStack /> */}
        {/* <Blogs /> */}
        <Contact />
        <Footer />
        {/* <Contact /> */}
      </div>
    );
  }
}
