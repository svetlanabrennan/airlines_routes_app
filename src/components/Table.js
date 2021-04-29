import React from 'react';

const Table = (props) => {
  return (
    <table>
      <thead>
        <tr>
          {props.columns.map((col) => (
            <th key={col.property}>
              {col.name}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {props.routes.map((route) => (
          <tr>

            <td>
              {route.airline}
            </td>

            <td>
              {route.src}
            </td>

            <td>
              {route.dest}
            </td>

          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default Table;