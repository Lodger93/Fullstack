
const Header = (props) => {
  return (
    <div>
      <h1>{props.course} </h1>
    </div>
  )
}

const Part = (props) => {
  return (
    <div>
      <p>{props.parts[props.indx].name} {props.parts[props.indx].excercises}</p>
    </div>
  )
}


const Content = (props) => {
  return (
    <div>
      <Part indx={0} parts={props.parts} />
      <Part indx={1} parts={props.parts} />
      <Part indx={2} parts={props.parts} />
    </div>
  )
}

const Total = (props) => {
  return (
    <div>
      <p>{props.parts[0].excercises+props.parts[1].excercises+props.parts[2].excercises}</p>
    </div>
  )
}

const App = () => {
  const now = new Date()
  const course = {
            name: 'Half-Stack application development',
            parts:[
              {
                name: 'Fundamentals of React',
                excercises: 10
              },
              {
                name:'Using props to pass data',
                excercises: 7
              },
              {  
                name:'State of a component',
                excercises: 14
              }
            ]
          }
  console.log(now)

  return (
    <div>
    <Header course={course.name}/>
    <Content parts={course.parts}/>
    <Total parts={course.parts}/>
    </div>
  )
}

export default App

