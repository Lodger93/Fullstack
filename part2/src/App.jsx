import { useState, useEffect } from 'react'
import axios from 'axios'
import DisplayPersons from './components/DisplayPersons'
import PersonForm from './components/PersonForm'
import Filter from './components/Filter'
import './App.css'

const App = () => {
  const [persons, setPersons] = useState([])

  useEffect(() => {
    console.log('effect')
    axios
      .get('http://localhost:3001/persons')
      .then(response => {
        console.log('promise fulfilled')
        setPersons(response.data)
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
