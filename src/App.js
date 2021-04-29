import React, { useState } from 'react';
import { routes, airlines, airports, getAirlineById, getAirportByCode } from './data'
import Table from './components/Table'
import Select from './components/Select'
import './App.css';

const App = () => {
  const [airline, setAirline] = useState("all");
  const [airport, setAirport] = useState("all");


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

  const handleAirline = (value) => {
    if (value !== "all") {
      value = parseInt(value, 10);
    }
    setAirline(value);
  }

  const handleAirport = (value) => {
    setAirport(value);
  }

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
      <div>
        Show routes on
          <Select
          options={airlines}
          idName={"airlines"}
          property={"id"}
          title={"All Airlines"}
          onSelect={handleAirline}
        />

          flying in or out of

          <Select
          options={airports}
          idName={"airports"}
          property={"code"}
          title={"All Airports"}
          onSelect={handleAirport}
        />

      </div>
      <Table columns={columns} rows={routes} format={formatValue} />
    </div >
  );
};

export default App;
