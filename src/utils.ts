const ALL_COUNTRIES_URL = "https://restcountries.eu/rest/v2/all";

const kilometerSquaredToMilSquared = (kilometer: number): number => {
  return kilometer * 0.3861;
};

const downloadListOfCountries = (
  fields = ["name", "area", "population", "region", "languages"]
): Promise<Country[]> => {
  return fetch(`${ALL_COUNTRIES_URL}?fields=${fields.join(";")}`)
    .then(response => {
      if (!response.ok) {
        throw Error(response.statusText);
      }

      return response.json();
    })
    .then(json => json as Country[]);
};

export { kilometerSquaredToMilSquared, downloadListOfCountries };
