import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import Nav from '../src/components/Nav';
import Main from './components/Main';
import Footer from '../src/components/Footer';
import Form from './components/Form';
// import { render } from 'react-dom';

class App extends Component {
  
  onSubmit = fields => {
    console.log('App comp got: ', fields);
  };
  render() {
  return (
    <div className="App">
      <Nav />
      <Main />
      <Form onSubmit={fields => this.onSubmit(fields)} />
      <Footer />
    </div>
  );
};
}

export default App;
