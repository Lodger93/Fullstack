

const Header = ({ course }) => {
    return (
      <h1>{course.name}</h1>
    )
  }
  
  const Part = ({ part }) => {
    return (
      <p>
        {part.name} {part.exercises}
      </p>    
    )
  }
  
  const Content = ({course}) => {
    return (
      <>
      {course.parts.map(part =>
         <Part key={part.id} part={part} />
      )}
      </>
    )
  
  }
  
  const Total = ({ course }) => {
    
    const total = course.parts.reduce( (s, p, i) => {
      console.log(i,'What is happening s:', s,'p:', p.exercises)
      return(s + p.exercises) 
    }, 0
  )
    return(
      <p><b>total of {total} exercises </b></p>
    )
  }
  
  const Course = ({ course }) => { 
    console.log(course)
    return (
      <div>
        <Header course={course} />
        <Content course={course} />
        <Total course={course} />
      </div>
    )
  }

  export default Course