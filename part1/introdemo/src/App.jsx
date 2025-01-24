
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
      <p>{props.parts[props.indx]} {props.excercises[props.indx]}</p>
    </div>
  )
}


const Content = (props) => {
  return (
    <div>
      <Part indx={0} parts={props.parts} excercises={props.excercises} />
      <Part indx={1} parts={props.parts} excercises={props.excercises} />
      <Part indx={2} parts={props.parts} excercises={props.excercises} />
    </div>
  )
}

const Total = (props) => {
  return (
    <div>
      <p>{props.excercises[0] +props.excercises[1] +props.excercises[2]}</p>
    </div>
  )
}

const App = () => {
  const now = new Date()
  const course = 'Half-Stack application development'
  const parts = ['Fundamentals of React',
                  'Using props to pass data',
                  'State of a component']

  const excercises = [10, 7, 14]

  console.log(now)

  return (
    <div>
    <Header course={course}/>
    <Content parts={parts} excercises={excercises}/>
    <Total excercises={excercises}/>
    </div>
  )
}

export default App

