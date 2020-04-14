import React, { FC } from "react";
import Table from "../components/Table";

const CountryTablePage: FC<{ countries: Country[] }> = ({ countries }) => (
  <>
    <Table initialCountries={countries} />
  </>
);

export default CountryTablePage;
