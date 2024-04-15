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
// Function to get countries that use US dollars as currency
async function getUsDollarCountries() {
  const countries = await fetchCountryData();
  const usDollarCountries = countries.filter(country => country.currencies && country.currencies.USD);
  console.log("Countries that use US dollars as currency:", usDollarCountries.map(country => country.name.common));
}

// Call the function to get countries using US dollars
getUsDollarCountries();
