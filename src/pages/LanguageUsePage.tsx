import React, { FC } from "react";
import LanguageUseTable from "../components/LanguageUseTable";

const LanguageUsePage: FC<{ countries: Country[] }> = ({ countries }) => (
  <section>
    <LanguageUseTable countries={countries} />
  </section>
);

export default LanguageUsePage;
