const Filter =({newFilter, setNewFilter})=>{
  const handleFilterChange =(event)=>{
    setNewFilter(event.target.value)
  }
  return(
    <div className="filter">
      Filter: 
      <input value={newFilter}
            onChange={handleFilterChange} />
    </div>
  )
}
export default Filter