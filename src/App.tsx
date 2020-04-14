import React, { useEffect, useState } from "react";
import "./App.css";
import Layout from "./Layout";
import Table from "./Table";

const URL = "https://restcountries.eu/rest/v2/all";

const downloadListOfCountries = (): Promise<Country[]> => {
  return fetch(URL)
    .then(response => {
      if (!response.ok) {
        throw Error("Unable to fetch countries");
      }

      return response.json();
    })
    .then(json => json as Country[]);
};

function App() {
  const initialCountries: Country[] = [];
  const [countries, setCountries] = useState(initialCountries);

  useEffect(() => {
    const asyncEffect = async () => {
      const countries = await downloadListOfCountries();

      setCountries(countries);
    };

    asyncEffect();
  }, []);

  return (
    <Layout>
      <Table countries={countries} />
    </Layout>
  );
}

export default App;
