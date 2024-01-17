import { useState } from "react";
import CountryData from "./CountryData";

const List = ({ country }) => {
    const [show, setShow] = useState(false);
    return <div>
        {country.name.common} <button onClick={() => setShow(!show)}>{show ? <>hide</> : <>show</>}</button>
        {
            show && <CountryData country={country} />
        }
    </div>
}

export default List