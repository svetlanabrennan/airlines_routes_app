import React, { Component } from 'react';
import { routes } from './data'
import Table from './components/Table'
import './App.css';

const App = () => {

  const columns = [
    { name: "Airline", property: "airline" },
    { name: "Source Airport", property: "src" },
    { name: "Destination Airport", property: "dest" },
  ];

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
      <Table columns={columns} routes={routes} />
    </div>
  );
};

export default App;