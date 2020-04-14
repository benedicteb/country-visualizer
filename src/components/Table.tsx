import React, { FC, useEffect, useState } from "react";
import SortableTableHeaderCell from "./SortableTableHeaderCell";
import { ONE_MILLION, SortMethods } from "../constants";
import { ascending, descending } from "../comparators";
import { kilometerSquaredToMilSquared } from "../utils";

const Table: FC<{ initialCountries: Country[] | [] }> = ({
  initialCountries = []
}) => {
  const [countries, setCountries] = useState(initialCountries);
  const [currentSortMethod, setCurrentSortMethod] = useState<
    SortMethods | undefined
  >(undefined);

  useEffect(() => {
    setCountries(initialCountries);
  }, [initialCountries]);

  return (
    <table>
      <thead>
        <tr>
          <SortableTableHeaderCell
            onSortAscending={() => {
              setCountries(
                countries
                  .slice()
                  .sort((a, b) =>
                    ascending(a.name.toLowerCase(), b.name.toLowerCase())
                  )
              );

              setCurrentSortMethod(SortMethods.Name);
            }}
            onSortDescending={() => {
              setCountries(
                countries
                  .slice()
                  .sort((a, b) =>
                    descending(a.name.toLowerCase(), b.name.toLowerCase())
                  )
              );

              setCurrentSortMethod(SortMethods.Name);
            }}
            active={currentSortMethod === SortMethods.Name}
          >
            Name
          </SortableTableHeaderCell>
          <SortableTableHeaderCell
            onSortAscending={() => {
              setCountries(
                countries
                  .slice()
                  .sort((a, b) =>
                    ascending(a.region.toLowerCase(), b.region.toLowerCase())
                  )
              );

              setCurrentSortMethod(SortMethods.Region);
            }}
            onSortDescending={() => {
              setCountries(
                countries
                  .slice()
                  .sort((a, b) =>
                    descending(a.region.toLowerCase(), b.region.toLowerCase())
                  )
              );

              setCurrentSortMethod(SortMethods.Region);
            }}
            active={currentSortMethod === SortMethods.Region}
          >
            Region
          </SortableTableHeaderCell>
          <SortableTableHeaderCell
            onSortAscending={() => {
              setCountries(
                countries
                  .slice()
                  .sort((a, b) =>
                    ascending(
                      a.area === undefined ? -1 : a.area,
                      b.area === undefined ? -1 : b.area
                    )
                  )
              );

              setCurrentSortMethod(SortMethods.Area);
            }}
            onSortDescending={() => {
              setCountries(
                countries
                  .slice()
                  .sort((a, b) =>
                    descending(
                      a.area === undefined ? -1 : a.area,
                      b.area === undefined ? -1 : b.area
                    )
                  )
              );

              setCurrentSortMethod(SortMethods.Area);
            }}
            active={currentSortMethod === SortMethods.Area}
          >
            Area ("mil" squared)
          </SortableTableHeaderCell>
          <SortableTableHeaderCell
            onSortAscending={() => {
              setCountries(
                countries
                  .slice()
                  .sort((a, b) => ascending(a.population, b.population))
              );

              setCurrentSortMethod(SortMethods.Population);
            }}
            onSortDescending={() => {
              setCountries(
                countries
                  .slice()
                  .sort((a, b) => descending(a.population, b.population))
              );

              setCurrentSortMethod(SortMethods.Population);
            }}
            active={currentSortMethod === SortMethods.Population}
          >
            Population (million)
          </SortableTableHeaderCell>
        </tr>
      </thead>
      <tbody>
        {countries.map(country => (
          <tr key={country.name}>
            <td>{country.name}</td>
            <td>{country.region}</td>
            <td>
              {country.area !== undefined
                ? `${Math.round(
                    kilometerSquaredToMilSquared(country.area)
                  )} mil^2`
                : "n/a"}
            </td>
            <td>{(country.population / ONE_MILLION).toFixed(1)}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
