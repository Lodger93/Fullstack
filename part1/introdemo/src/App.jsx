import { useState } from 'react'

const Button = ({ onClick, text }) => (
  <div><button onClick={onClick}>
    {text}
  </button>
  </div>
)

const StatisticLine = ({ text, value }) => {
  return (
    <tr> 
      <td>{text} </td> 
      <td>{value}</td>
    </tr>
  )
}

const Statistics = ({ good, neutral, bad }) => {

  if (good + neutral + bad === 0) {
    return (
      <p>No feedback given</p>
    )
  }
  return (
    <table>
      <tbody>
      <StatisticLine text="Good" value={good} />
      <StatisticLine text="Neutral" value={neutral} />
      <StatisticLine text="Bad" value={bad} />
      <StatisticLine text="Average" value={(good - bad) / (good + neutral + bad)} />
      <StatisticLine text="Positive" value={(good / (good + neutral + bad)) * 100 + '%'} />
      </tbody>
    </table>
  )

}
const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]


  const [values, setValues] = useState(new Array(anecdotes.length).fill(0))

  const vote = () => {
    const copy = [...values]
    copy[selected] += 1
    setValues(copy)
  }
   
  const [selected, setSelected] = useState(0)

  return (
    <div>
      <h1>Anecdote of the day</h1>
      {anecdotes[selected]}
      <p>has {values[selected]} votes</p>
      <Button onClick={() => setSelected(Math.floor(Math.random() * anecdotes.length))} text="Next Anecdote" />
      <Button onClick={vote} text="Vote" />

      <h1>Anecdote with most votes</h1>
      {anecdotes[values.indexOf(Math.max(...values))]}
      <p>has {Math.max(...values)} votes</p>
    </div>
  )
}

export default App