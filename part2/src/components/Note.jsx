import trashIcon from '../assets/trash.svg'
const Note = ({ note, toggleImportance }) => {

  const label = note.important
   ? 'make not important' : 'make important'

    return (
      <div>
      
      <li style={{ flex: 1 }}>{note.content} </li>
      {/* <img className='trash' src={trashIcon} style={{ cursor: 'pointer' }} /> */}

      <button onClick={toggleImportance}>{label}</button>
      
      </div>
    )
  }

export default Note
