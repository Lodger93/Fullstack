import { useState } from 'react'

const PersonForm =({persons, setPersons})=>{

    const [newName, setNewName] = useState('')
    const [newNumber, setNewNumber] = useState('')
  
    const handleNameChange =(event)=>setNewName(event.target.value)
    const handleNumberChange = (event)=>setNewNumber(event.target.value)
    
    const addPerson = (event) =>{
      event.preventDefault()
  
      const alreadyInPersons = persons.some(person => person.name === newName)
  
      if(alreadyInPersons){
        alert(newName + " already in phonebook")
      }
      else{
        const personObject = {
          name: newName,
          number: newNumber
        }
        const newPersons = persons.concat(personObject)
        setPersons(newPersons)
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