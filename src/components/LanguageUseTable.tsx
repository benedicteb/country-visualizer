import React, { FC } from "react";

const LanguageUseTable: FC<{ countries: Country[] }> = ({ countries }) => {
  const languageUsages: {
    [key: string]: { countries: string[]; speakers: number };
  } = {};

  countries.forEach(country => {
    country.languages.forEach(language => {
      if (!languageUsages[language.name]) {
        languageUsages[language.name] = {
          countries: [country.name],
          speakers: country.population
        };
      } else {
        languageUsages[language.name].speakers =
          languageUsages[language.name].speakers + country.population;

        languageUsages[language.name].countries.push(country.name);
      }
    });
  });

  return (
    <table>
      <thead>
        <tr>
          <th>Language</th>
          <th>Countries</th>
          <th>Sum of populations</th>
        </tr>
      </thead>
      <tbody>
        {Object.keys(languageUsages).map(languageName => (
          <tr key={languageName}>
            <td>{languageName}</td>
            <td>{languageUsages[languageName].countries.join(", ")}</td>
            <td>{languageUsages[languageName].speakers}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default LanguageUseTable;
