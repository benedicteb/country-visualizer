import React, { FC } from "react";
import SummaryTable from "../components/SummaryTable";

const SummaryPage: FC<{ countries: Country[] }> = ({ countries }) => (
  <>
    <SummaryTable countries={countries} />
  </>
);

export default SummaryPage;
