import React, { FC } from "react";
import SummaryTable from "../components/SummaryTable";

const SummaryPage: FC<{ countries: Country[] }> = ({ countries }) => (
  <section>
    <SummaryTable countries={countries} />
  </section>
);

export default SummaryPage;
