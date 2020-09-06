import React, {useState, useEffect} from 'react';
import {
  MenuItem,
  FormControl,
  Card,
  CardContent,
  Select
} from '@material-ui/core'
import './App.css';


function App() {

  const [countries, setCountries] = useState([]);
  const [country, setCountry] = useState('worldwide');

  useEffect(() => {
     const getCountriesData = async () => {
       await fetch("https://disease.sh/v3/covid-19/countries")
       .then((response) => response.json())
       .then((data) => {
         const countries = data.map((country) => (
              {
                name:country.country,
                value:country.countryInfo.iso2
              }
         ));
         setCountries(countries);
       })
     }

     getCountriesData();
  }, []);

  const onCountryChange = (event) => {
    const countryCode = event.target.value;
    console.log("Yooooo", countryCode);
    setCountry(countryCode);
  }

  return (
    <div className="App">
      <div className="app__header">
      <h1>Covid 19 tracker</h1>

      <FormControl className="app__dropdown">
            <Select variant="outlined" value={country} onChange={onCountryChange}>
            <MenuItem value="worldwide">WorldWide</MenuItem>
           {
              countries.map((country, index) => (

                  <MenuItem value={country.value} key={index}>{country.name}</MenuItem>

              ))
           }

      </Select>
      </FormControl>
      </div>


      {/* header */}
      {/* tittle + select input dropdown field */}

      {/* info Boxs */}
     <div className="app__stats">

     </div>
       {/* table */}
      {/* Graph */}
       {/* Map */}
    </div>
  );
}

export default App;
