import { useState } from 'react'


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

const App = () => {
  const course = {
    id: 1,
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
        id: 1
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        id: 2
      },
      {
        name: 'State of a component',
        exercises: 14,
        id: 3
      }
    ]
  }

  return <Course course={course} />
}

export default App