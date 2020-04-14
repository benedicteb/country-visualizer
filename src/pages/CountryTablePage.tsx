import React, { FC } from "react";
import Table from "../components/Table";

const CountryTablePage: FC<{ countries: Country[] }> = ({ countries }) => (
  <section>
    <Table initialCountries={countries} />
  </section>
);

export default CountryTablePage;
