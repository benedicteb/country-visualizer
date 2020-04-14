import React, { useEffect, useState } from "react";
import "./App.css";
import Layout from "./Layout";
import Table from "./Table";
import { downloadListOfCountries } from "../utils";

function App() {
  const [countries, setCountries] = useState<Country[] | []>([]);

  useEffect(() => {
    const asyncEffect = async () => {
      let countries;

      try {
        countries = await downloadListOfCountries();
      } catch (error) {
        return;
      }

      setCountries(countries);
    };

    asyncEffect();
  }, []);

  return (
    <Layout>
      <Table initialCountries={countries} />
    </Layout>
  );
}

export default App;