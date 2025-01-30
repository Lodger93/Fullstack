import { useState } from 'react'

const Button = ({ onClick, text }) => (
  <button onClick={onClick}>
    {text}
  </button>
)

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
      <p>Good: {good}</p>
      <p>Neutral: {neutral}</p>
      <p>Bad: {bad}</p>

      <p>All: {good + neutral + bad}</p>

      {good + neutral + bad === 0 ? 
      <p>Start rating to see average etc.</p> : 
      (
        <>
          <p>Average: {(good - bad) / (good + neutral + bad)}</p>
          <p>Positive: {(good / (good + neutral + bad)) * 100}%</p>
        </>
      )}

    </div>
  )
}

export default App