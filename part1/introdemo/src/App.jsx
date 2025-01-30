import { useState } from 'react'

const Button = ({ onClick, text }) => (
  <button onClick={onClick}>
    {text}
  </button>
)

const StatisticLine = ({ text, value }) => {
  return (
    <p>{text}: {value}</p>
  )
}

const Statistics = ({ good, neutral, bad }) => {

  if (good + neutral + bad === 0) {
    return (
      <p>No feedback given</p>
    )
  }
  return (
    <>
      <StatisticLine text="Good" value={good} />
      <StatisticLine text="Neutral" value={neutral} />
      <StatisticLine text="Bad" value={bad} />
      <StatisticLine text="Average" value={(good - bad) / (good + neutral + bad)} />
      <StatisticLine text="Positive" value={(good / (good + neutral + bad)) * 100 + '%'} />
    </>
  )

}
const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <h1> Give Feedback</h1>
      <Button onClick={() => setGood(good + 1)} text='Good' />
      <Button onClick={() => setNeutral(neutral + 1)} text='Neutral' />
      <Button onClick={() => setBad(bad + 1)} text='Bad' />
      
      <h1> Statistics</h1>
      <Statistics good={good} neutral={neutral} bad={bad} />

    </div>
  )
}

export default App