import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import Nav from '../src/components/Nav';
import Main from './components/Main';
import Footer from '../src/components/Footer';
import Contact from '../src/components/Contact';

function App() {
  return (
    <div className="App">
      <Nav />
      <Main />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
