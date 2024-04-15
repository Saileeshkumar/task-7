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
// Function to calculate total population of countries
async function getTotalPopulation() {
  const countries = await fetchCountryData();
  const totalPopulation = countries.reduce((acc, country) => acc + country.population, 0);
  console.log("Total population of countries:", totalPopulation);
}

// Call the function to get total population
getTotalPopulation();
