import React, { FC } from "react";
import LanguageUseTable from "../components/LanguageUseTable";

const LanguageUsePage: FC<{ countries: Country[] }> = ({ countries }) => (
  <>
    <LanguageUseTable countries={countries} />
  </>
);

export default LanguageUsePage;
