import React, { FC, useEffect, useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { downloadListOfCountries } from "./utils";
import Layout from "./components/Layout";
import CountryTablePage from "./pages/CountryTablePage";
import SummaryPage from "./pages/SummaryPage";
import LanguageUsePage from "./pages/LanguageUsePage";
import NotFoundPage from "./pages/NotFoundPage";

const App: FC = () => {
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
    <Router>
      <Layout>
        <Switch>
          <Route exact path={"/"}>
            <CountryTablePage countries={countries} />
          </Route>
          <Route path="/summary">
            <SummaryPage countries={countries} />
          </Route>
          <Route path={"/languages"}>
            <LanguageUsePage countries={countries} />
          </Route>

          <Route path={"*"}>
            <NotFoundPage />
          </Route>
        </Switch>
      </Layout>
    </Router>
  );
};

export default App;
