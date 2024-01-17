import React from 'react'
import { useState } from 'react';

const Filter = ({ persons, setSearchList }) => {
    const [searchName, setSearchName] = useState('');

    const handleFilter = (e) => {
        const searchquery = e.target.value.trim();
        setSearchName(searchquery);
        if (searchquery === '') {
            setSearchList(persons);
        } else {
            const filteredList = persons.filter((person) =>
                person.name.toUpperCase().includes(searchquery.toUpperCase())
            );
            setSearchList(filteredList);
            
        }
    };
    
    return (
        <div>
            filter shown with <input onChange={handleFilter} value={searchName} />
        </div>
    )
}

export default Filter