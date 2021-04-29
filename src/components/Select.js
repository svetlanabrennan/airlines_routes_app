import React from 'react';

const Select = ({ options, idName, property, title, onSelect }) => {
  function handleChange(event) {
    event.preventDefault();
    onSelect(event.target.value)
  }

  return (
    <div>
      <select id={idName} onChange={handleChange}>
        <option value="all">{title}</option>
        {options.map(option => {
          return <option value={option[property]}>{option.name}</option>
        })}
      </select>
    </div>
  )
}

export default Select