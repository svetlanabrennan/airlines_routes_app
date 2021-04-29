import React from 'react';
import { v4 as uuidv4 } from 'uuid';

const Select = ({ options, idName, property, title, onSelect, value = "all" }) => {
  function handleChange(event) {
    event.preventDefault();
    onSelect(event.target.value);
  }

  return (
    <select id={idName} onChange={handleChange}>
      <option
        value={value}
        selected={value === "all" ? true : false}
        disabled={value === "all" ? "" : "disabled"}
      >
        {title}
      </option>
      {options.map(option => {
        return <option
          key={uuidv4()}
          value={option[property]}
          disabled={option.disabled}
        >
          {option.name}
        </option>
      })}
    </select>
  )
}

export default Select