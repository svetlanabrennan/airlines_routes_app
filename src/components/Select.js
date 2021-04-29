import React from 'react';

const Select = ({ options, idName, property, title, onSelect, value = "all" }) => {
  function handleChange(event) {
    event.preventDefault();
    onSelect(event.target.value)
  }


  return (
    <div>
      <select id={idName} onChange={handleChange}>
        <option value={value} selected={value === "all" ? true : false}>{title}</option>
        {options.map(option => {
          return <option value={option[property]} disabled={option.disabled}>{option.name}</option>
        })}
      </select>
    </div>
  )
}

export default Select