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

// Function to get countries from Asia
async function getCountriesFromAsia() {
  const countries = await fetchCountryData();
  const asiaCountries = countries.filter(country => country.region === "Asia");
  console.log("Countries from Asia:", asiaCountries.map(country => country.name.common));
}

// Call the function to get countries from Asia
getCountriesFromAsia();
