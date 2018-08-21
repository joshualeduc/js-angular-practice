import React, { Component } from 'react'
import { BrowserRouter } from 'react-router-dom'
import Header from './components/Header'
import Home from './components/Home'
import Results from './components/Results'
import './App.css'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <BrowserRouter>
          <Home />
          <Results />
        </BrowserRouter>
      </div>
    );
  }
}

export default App
