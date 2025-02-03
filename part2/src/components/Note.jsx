import trashIcon from '../assets/trash.svg'
const Note = ({ note, toggleImportance }) => {

  const label = note.important
    ? 'make not important' 
    : 'make important';

    return (
      <div>
      
      <li className="note"> 
        {note.content}
        <button onClick={toggleImportance}>{label}</button>
      </li>
      {/* <img className='trash' src={trashIcon} style={{ cursor: 'pointer' }} /> */}

      
      
      </div>
    )
  }

export default Note
