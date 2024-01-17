import React from 'react'
import contactService from '../services/contactService';
const PersonForm = ({ newName, setNewName, newNumber, setNewNumber, persons, setPersons, setSearchList, setAddMessage, setErrorMessage }) => {

    const handleAdd = (e) => {
        e.preventDefault();
        if (persons.some((person) => person.name === newName)) {
            const actionAdd = window.confirm(`${newName} is already added to phonebook, replace the old number`);
            if (actionAdd) {
                const person = persons.find((person) => {
                    return person.name === newName;
                })
                contactService.updateContact(person.id, { name: newName, number: newNumber })
                    .then((res) => {
                        return contactService.getall();
                    }
                    )
                    .then((res) => {
                        setPersons(res.data);
                        setSearchList(res.data);
                        setAddMessage(`Added ${newName}`);
                        setTimeout(() => setAddMessage(null), 5000);
                    }).
                    catch((err) => {
                        setErrorMessage(`Information of ${newName} has been already been removed from server`);
                        setTimeout(() => setErrorMessage(null), 5000);
                    })


            }
        }
        else {
            contactService.addContact({ name: newName, number: newNumber }).then(res => {
                console.log(res.data);
                const newlist = persons.concat(res.data)
                setPersons(newlist);
                setSearchList(newlist);
                setAddMessage(`Added ${newName}`);
                setTimeout(() => setAddMessage(null), 5000);
            })
            
        }


        setNewName("");
        setNewNumber("");
    }

    return (
        <div>
            <form>
                <div>
                    name: <input onChange={(e) => setNewName(e.target.value)} value={newName} />
                </div>

                <div>
                    number: <input onChange={(e) => setNewNumber(e.target.value)} value={newNumber} />
                </div>

                <div>
                    <button type="submit" onClick={handleAdd}>add</button>
                </div>
            </form>
        </div>
    )
}

export default PersonForm