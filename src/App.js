import React from 'react';
import './App.css';
import { Cards, Charts, CountryPicker } from './Components'
import { fetchData, fetchCountryData } from './Components/api/api'
import coronaImg from './img/image.png'
import Axios from 'axios';

// import Cards from './Components/Cards/Cards'
// import Charts from './Components/Charts/Charts'


function App() {

  const [data, setData] = React.useState({}) ;

  const [countries, setCountries] = React.useState([])

  const [country, setCountry] = React.useState('') ;

  React.useEffect(() => {
    const responseData = async () => {
      setData(await fetchData()) ;
    }
    responseData() ;
  }, [])

  React.useEffect(() => {
    const responseData = async () => {
      setCountries(await fetchCountryData())
    }
    responseData()
  }, []) 

  const handleCountry = async (country) => {
    const fetchedData = await fetchData(country)

    setCountry(country) ;
    setData(fetchedData) ;
  }

  return (
    <div className="app">
      <img src = {coronaImg} alt = "corona" className = 'img' />
      <Cards data = {data} className = "cards" />
      <CountryPicker countries = {countries} handleSelect = {handleCountry} />
      <Charts data = {data} country = {country} />
    </div>
  );
}

export default App;
