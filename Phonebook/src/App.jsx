import { useEffect, useState } from 'react'
import Filter from './Components/Filter'
import Persons from './Components/Persons'
import PersonForm from './Components/PersonForm'
import contactService from './services/contactService'
import AddNotification from './Components/AddNotification'
import ErrorNotitfication from './Components/ErrorNotitfication'

const App = () => {
  const [persons, setPersons] = useState([]);
  const [searchList, setSearchList] = useState(persons);
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');
  const [addMessage, setAddMessage] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);
  useEffect(() => {
    contactService.getall().then((res) => {
      setPersons(res.data);
      setSearchList(res.data);
    }).catch((err) => console.log(err))
  }, [])

  return (
    <div>
      <h2>Phonebook</h2>
      <AddNotification
        addMessage={addMessage}
      />
      
      <ErrorNotitfication
        errorMessage={errorMessage}
      />

      <Filter
        persons={persons}
        setSearchList={setSearchList}
      />

      <h2>add a new</h2>

      <PersonForm
        newName={newName}
        setNewName={setNewName}
        newNumber={newNumber}
        setNewNumber={setNewNumber}
        persons={persons}
        setPersons={setPersons}
        setSearchList={setSearchList}
        setAddMessage={setAddMessage}
        setErrorMessage={setErrorMessage}
      />

      <h3>Numbers</h3>
      <Persons
        setPersons={setPersons}
        setSearchList={setSearchList}
        searchList={searchList}
      />

    </div>
  )
}

export default App