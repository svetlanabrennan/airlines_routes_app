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

  const filteredRoutes = routes.filter(route => {
    return (
      (route.airline === airline || airline === "all") &&
      (route.src === airport || route.dest === airport || airport === "all")
    );
  });

  // airlines that have a selected route
  const filteredAirlines = airlines.filter(airline => {
    return filteredRoutes.find(route => route.airline === airline.id);
  })

  // airlines with unavailable routes
  let unavailableAirlines = airlines.filter(airline => !filteredAirlines.find(air => air.id === airline.id))

  // add disable select option for unavailable airlines
  unavailableAirlines.map(airline => airline.disabled = "disabled");

  // combine available and unavailable airlines
  const combinedAirlines = filteredAirlines.concat(unavailableAirlines).sort((a, b) => {
    return a.id - b.id
  });

  // airports that have a selected route
  const filteredAirports = airports.filter(airport => {
    return filteredRoutes.find(route => route.src === airport.code || route.dest === airport.code);
  })

  // airport codes that have a selected route
  const filteredAirportCodes = filteredAirports.map(airport => airport.code);

  // add disabled to select option for unavailable airports
  const combinedAirports = airports.map(airport => {
    if (filteredAirportCodes.includes(airport.code)) {
      return airport
    } else {
      return airport = Object.assign(airport, { disabled: "disabled" });
    }
  })

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
          options={combinedAirlines}
          idName={"airlines"}
          property={"id"}
          title={"All Airlines"}
          onSelect={handleAirline}
        />

          flying in or out of

          <Select
          options={combinedAirports}
          idName={"airports"}
          property={"code"}
          title={"All Airports"}
          onSelect={handleAirport}
        />

      </div>
      <Table columns={columns} rows={filteredRoutes} format={formatValue} />
    </div >
  );
};

export default App;