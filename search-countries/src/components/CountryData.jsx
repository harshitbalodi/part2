import { useState, useEffect } from "react";
import { APIKEY } from '../Utility/constants';


const CountryData = ({ country }) => {

    const languages = [];
    for (const key in country.languages) {
        languages.push(country.languages[key]);
    }
    const [weatherdata, setWeatherdata] = useState(null);
    useEffect(() => {
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${country.capital[0]}&appid=${APIKEY}`)
            .then((res) => {
                return res.json();
            })
            .then((res) => setWeatherdata(res))
            .catch((err) => console.log(err))
    }, [])

    return <div>
        <h2>{country.name.common}</h2>
        <p>capital {country.capital[0]}</p>
        <p>area {country.area} km.sq</p>
        <h3>Languages:</h3>
        <ul>
            {
                languages.map((language) => {
                    return <li key={language}>{language}</li>
                })
            }
        </ul>
        <img src={country.flags.png} alt={country.flags.alt} />
        {
            weatherdata && weatherdata.weather && (weatherdata.main?.temp != undefined) && <div>
                <h3> Weather in {country?.capital[0]}</h3>
                <p> temperature {(weatherdata?.main?.temp - 273.15).toFixed(2)} Celcius</p>
                <img src={`https://openweathermap.org/img/wn/${weatherdata?.weather[0]?.icon}@2x.png`} alt={`${weatherdata?.weather[0]?.description}`} />
            </div>
        }

    </div>
}

export default CountryData;