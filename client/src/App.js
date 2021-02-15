import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Footer from '../src/components/Footer';


class App extends Component {
  
  onSubmit = fields => {
    // console.log('App comp got: ', fields);
  };
  render() {
  return (
    <div className="App">
      <Header />
      <Main />
      <About />
      <Portfolio />
      <Contact onSubmit={fields => this.onSubmit(fields)} />
      <Footer />
    </div>
  );
};
}

export default App;
