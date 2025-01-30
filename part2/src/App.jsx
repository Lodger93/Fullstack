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
       <Part part={part}/>
    )}
    </>
  )

}

const Total = ({ course }) => {
  var sum = 0
  for (var i = 0; i < course.parts.length; i++) {
    sum += course.parts[i].exercises
  }
  return(
    <p><b>total of {sum} exercises </b></p>
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