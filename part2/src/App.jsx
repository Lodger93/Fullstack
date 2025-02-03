import { useState, useEffect } from 'react'
import axios from 'axios'
import DisplayPersons from './components/DisplayPersons'
import PersonForm from './components/PersonForm'
import Filter from './components/Filter'
import phonebookService from './services/phonebook'
import './App.css'

const App = () => {
  const [persons, setPersons] = useState([])

  useEffect(() => {
    phonebookService.getAll()
      .then(initialPhonebook => {
        setPersons(initialPhonebook)
      })
  }, [])


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
