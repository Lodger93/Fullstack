import trashIcon from '../assets/trash.svg'
const Person =({person, persons, setPersons})=>{
 
    const handleDeletion =()=>{
        console.log("Deleting item");
        const updatedPersons = persons.filter(p => p.id !== person.id);
        setPersons(updatedPersons);
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