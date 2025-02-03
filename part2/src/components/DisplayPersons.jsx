import trashIcon from '../assets/trash.svg'
import phonebookService from '../services/phonebook'

const Person =({person, persons, setPersons})=>{
 
    const handleDeletion =()=>{
      if (window.confirm(`Delete ${person.name}?`)) {
          const updatedPersons = persons.filter(p => p.id !== person.id);
          phonebookService.deletePerson(person.id);
          setPersons(updatedPersons);
      }
    }

    return (
        <tr>
          <td> {person.name} </td>
          <td> {person.number} </td>
          <td className='trash'> <img onClick={handleDeletion} src={trashIcon} style={{ cursor: 'pointer' }} /></td>
        </tr>

  )
}


const DisplayPersons=({personsToDisplay, persons, setPersons})=>{
  return(
    <table>
      <tbody>
        {personsToDisplay.map((person, i) => <Person key={i} person={person} persons={persons} setPersons={setPersons}/>)}
      </tbody>
  </table>
  )
}

export default DisplayPersons