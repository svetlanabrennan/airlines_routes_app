import React, { Component } from 'react';
import { routes, getAirlineById, getAirportByCode } from './data'
import Table from './components/Table'
import './App.css';

const App = () => {

  const columns = [
    { name: "Airline", property: "airline" },
    { name: "Source Airport", property: "src" },
    { name: "Destination Airport", property: "dest" },
  ];


  // returns the human friendly value for property
  const formatValue = (property, value) => {
    if (property === "airline") {
      return getAirlineById(value).name;
    } else {
      return getAirportByCode(value).name;
    }
  };

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
      <Table columns={columns} rows={routes} format={formatValue} />
    </div>
  );
};

export default App;
