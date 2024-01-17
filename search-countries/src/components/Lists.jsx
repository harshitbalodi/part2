import List from './List';
import CountryData from './CountryData';


const Lists = ({ filteredCountriesData }) => {
    if (filteredCountriesData.length > 10) return <div>Too many matches, specify another filter</div>
    if(filteredCountriesData.length === 0) return <div style={{color:'red'}}> type a valid country name!!!</div>
    return (

        <div>
            {

                filteredCountriesData.length === 1 ? (
                    <CountryData country={filteredCountriesData[0]} />
                ) :
                    (
                        filteredCountriesData.map((country) => {
                            return <List country={country} key={country.name.common} />
                        })

                    )

            }

        </div>
    )
}

export default Lists