import React from 'react'
import contactService from '../services/contactService'
const Contact = ({ setSearchList, setPersons, PersonName, number, id }) => {
    const handleDelete = (e) => {
        e.preventDefault();
        contactService.deleteContact(id).then((res) => {
            return contactService.getall();
        }).then((res) => {
            setPersons(res.data);
            setSearchList(res.data);
        })
    }
    return <>
        <p>
            {PersonName}
            {number}
            <button style={{ "color": "blue" }} onClick={handleDelete}>delete</button>
        </p>
    </>
}

const Persons = ({ setSearchList, setPersons, searchList }) => {
    return (
        <div>
            {
                searchList.map((person) => {
                    return (
                        <Contact
                            setSearchList={setSearchList}
                            setPersons={setPersons}
                            PersonName={person.name}
                            number={person.number}
                            id={person.id}
                            key={person.id}
                        />
                    )
                })

            }
        </div>
    )
}

export default Persons