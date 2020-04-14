import React, { FC } from "react";

const Table: FC<{ countries: Country[] }> = ({ countries }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Area</th>
        </tr>
      </thead>
      <tbody>
        {countries.map(country => (
          <tr key={country.name}>
            <td>{country.name}</td>
            <td>{country.area}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
