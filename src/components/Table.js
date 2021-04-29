import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

const Table = ({ columns, rows, format, pageLimit = 25 }) => {
  const [page, setPage] = useState(0);

  const previousPage = (event) => {
    event.preventDefault();
    setPage(page - 1);
  }

  const nextPage = (event) => {
    event.preventDefault();
    setPage(page + 1);
  }

  const start = page * pageLimit;
  const end = start + pageLimit;

  return (
    <div>
      <table>
        <thead>
          <tr>
            {columns.map((col) => (
              <th key={col.property}>
                {col.name}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.slice(start, end).map((route) => {
            return (
              <tr key={uuidv4()}>
                <td>{format("airline", route.airline)}</td>
                <td>{format("src", route.src)}</td>
                <td>{format("desc", route.dest)}</td>
              </tr>
            )
          })}
        </tbody>
      </table >

      <p>Showing {start + 1} - {start + rows.slice(start, end).length} of {rows.length} routes.</p>

      <div>
        <button onClick={previousPage} disabled={page === 0}>Previous Page</button>
        <button onClick={nextPage} disabled={start + pageLimit >= rows.length}>Next Page</button>
      </div>
    </div>
  )
}

export default Table;