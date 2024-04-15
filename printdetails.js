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
// Function to print details of countries
async function printCountryDetails() {
  const countries = await fetchCountryData();
  console.log("Details of countries:");
  countries.forEach(country => {
    console.log("Name:", country.name.common);
    console.log("Capital:", country.capital);
    console.log("Flag:", country.flags.svg);
    console.log("-----------------------");
  });
}

// Call the function to print country details
printCountryDetails();
