import React, { FC } from "react";
import { ONE_MILLION } from "../constants";
import { ascending } from "../comparators";

const SummaryTable: FC<{ countries: Country[] }> = ({ countries }) => {
  const populations = countries.map(country => country.population);
  const sumOfPopulations = populations.reduce((a, b) => a + b, 0);
  const averagePopulation =
    countries.length > 0 ? sumOfPopulations / countries.length : undefined;

  const countriesSortedByArea = countries
    // Filter out countries with no area - makes sense to have the smallest
    // one with an actual value.
    .filter(country => country.area !== undefined)
    .sort((a, b) =>
      ascending(
        a.area === undefined ? -1 : a.area,
        b.area === undefined ? -1 : b.area
      )
    );
  const smallestAreaCountry =
    countries.length > 0 ? countriesSortedByArea[0].name : "n/a";
  const biggestAreaCountry =
    countries.length > 0
      ? countriesSortedByArea[countriesSortedByArea.length - 1].name
      : "n/a";

  return (
    <div>
      <table>
        <tbody>
          <tr>
            <th>Population average</th>
            <td>
              {averagePopulation !== undefined
                ? (averagePopulation / ONE_MILLION).toFixed(1)
                : "n/a"}
            </td>
          </tr>
          <tr>
            <th>Smallest area</th>
            <td>{smallestAreaCountry}</td>
          </tr>
          <tr>
            <th>Biggest area</th>
            <td>{biggestAreaCountry}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default SummaryTable;
