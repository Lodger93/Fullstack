import { useState } from 'react'
import phonebookService from '../services/phonebook'

const PersonForm =({persons, setPersons, setNotificationMessage, setErrorMessage})=>{

    const [newName, setNewName] = useState('')
    const [newNumber, setNewNumber] = useState('')
  
    const handleNameChange =(event)=>setNewName(event.target.value)
    const handleNumberChange = (event)=>setNewNumber(event.target.value)
    
    const addPerson = (event) =>{
      event.preventDefault()
  
      const alreadyInPersons = persons.some(person => person.name === newName)
  
      if(alreadyInPersons){
        const person = {...persons.find(p => p.name === newName), number: newNumber}

        if (window.confirm(`${newName} is already in the phonebook. Do you want to replace the old number with the new one?`)){
        
            phonebookService.update(person.id, person)
             .then(returnedPerson => {
                const updatedPersons = persons.map( p=> p.id===returnedPerson.id ? returnedPerson : p )
                setPersons(updatedPersons)
             })
              .catch( error => {
                phonebookService.notification(`Information of ${person.name} has already been removed from the server`, setErrorMessage)   
              })
            }
      }
      else{
        const personObject = {
          name: newName,
          number: newNumber
        }

        phonebookService.create(personObject)
          .then(returnedPerson => {
            setPersons(persons.concat(returnedPerson))
            setNewName('')
            setNewNumber('')
          })
      phonebookService.notification('Phonebook has been updated', setNotificationMessage)
      }
    }
  
    return(
      <form onSubmit={addPerson}>
          <div>
            Name: 
            <input value = {newName} 
            onChange={handleNameChange}/>
          </div>
  
          <div>
            Number:
            <input value = {newNumber}
            onChange={handleNumberChange}/>
          </div>
  
          <div>
            <button type="submit">Add</button>
          </div>
        </form>
    )
  }

  export default PersonForm