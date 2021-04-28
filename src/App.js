import React, { Component } from 'react';
import { routes, airlines, airports } from './data'
import './App.css';

const App = () => {

  return (
    <div className="app">
      <header className="header">
        <h1 className="title">Airline Routes</h1>
      </header>
      <section>
        <p>
          Welcome to the app!
    </p>
      </section>
    </div>
  );
};

export default App;