import { useEffect, useState } from "react"
import Lists from "./components/Lists";


function App() {
  const [searchquery, setSearchquery] = useState('');
  const [allCountriesData, SetAllCountriesData] = useState([]);
  const [filteredCountriesData, SetfilteredCountriesData] = useState([]);

  useEffect(() => {
    fetch("https://studies.cs.helsinki.fi/restcountries/api/all")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        SetAllCountriesData(data);
      })
  }, []);

  useEffect(() => {
    if (searchquery.trim() === '') {
      SetfilteredCountriesData([]);
      return;
    }

    const data = allCountriesData.filter((country) => {
      return country.name.common.toLowerCase().includes(searchquery.toLowerCase());
    })
    SetfilteredCountriesData(data);
  }, [searchquery]);
  return (
    <>
      <span>find countries </span>
      <input onChange={(e) => setSearchquery(e.target.value)} />
     {searchquery.length > 0 && <Lists filteredCountriesData={filteredCountriesData}/>}
    </>

  )
}

export default App
