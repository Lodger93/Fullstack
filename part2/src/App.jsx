import { useState } from 'react'

import DisplayPersons from './components/DisplayPersons'
import PersonForm from './components/PersonForm'
import Filter from './components/Filter'
import './App.css'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ])

  const [newFilter, setNewFilter] = useState('')
  const personsToDisplay = persons.filter(person => person.name.includes(newFilter))

  return ( 
    <div>
      <h1>Phonebook</h1>
      <Filter newFilter={newFilter} setNewFilter={setNewFilter}/> 
      <h2>Add new</h2>
      <PersonForm persons={persons} setPersons={setPersons}/>
      <h2>Numbers</h2>
      <DisplayPersons personsToDisplay={personsToDisplay} persons={persons} setPersons={setPersons}/>
    </div>
  )
}

export default App
