// Function to fetch data from API
async function fetchCountryData() {
    try {
      const response = await fetch("https://restcountries.com/v3.1/all");
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }
// Function to get countries with population less than 2 lakhs
async function getCountriesWithSmallPopulation() {
  const countries = await fetchCountryData();
  const smallPopulationCountries = countries.filter(country => country.population < 200000);
  console.log("Countries with population less than 2 lakhs:", smallPopulationCountries.map(country => country.name.common));
}

// Call the function to get countries with small population
getCountriesWithSmallPopulation();
