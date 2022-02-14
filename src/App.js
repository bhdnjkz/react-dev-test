import React, { Component } from 'react'
import logo from './logo.svg';
import './App.css';

export default class App extends Component {
  render() {
    return (
      <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hello, friend! This is a front page component for a future application!
        </p>
        <button 
          className="button"
          type="button"
          onClick={() => {console.log('clicked')}}
          >
            Click me!
          </button>
      </header>
    </div>
  );
  }
}