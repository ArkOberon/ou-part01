import {useState} from 'react'
import ReactDOM from 'react-dom'

const Button = ({action, nameButton}) => <button onClick={action}>{nameButton}</button>

const Display = ({quotes, votes}) => {
  return (
    <>
      <p>{quotes}</p>
      <p>{votes}</p>
    </>
  )
}

const Ranking = ({quoteTop, voteTop}) => {
  return (
    <> 
      <h2>Anecdote with most Votes</h2>
      <p>{quoteTop}</p>
      <h3>Number of votes: {voteTop}</h3>      
    </>
  )
}

const App = () => {
  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState({0: 0, 1: 0, 2: 0, 3: 0, 4: 0, 5: 0})

  const handleClick = () => {
    let numberArray = Math.floor(Math.random()*anecdotes.length);
    return numberArray
  }  

  const handleVote = () => {    
    let totalCount = { ...votes } 
    totalCount[selected] ++ 
    setVotes(totalCount)
  }

  const top = () => {  
    const ranking = Object.entries(votes)    
    ranking.sort((a,b) => b[1]-a[1])  
    const topRanking = ranking[0]    
    return topRanking
  }

  const quoteTop = top().at(0)
  const voteTop = top().at(1)

  return (
    <>
      <div>
        <Display quotes={`${anecdotes[selected]}`} votes={votes[selected]}/>
      </div>
      <Button action={handleVote} nameButton={'Vote Quote'}/>
      <Button action={() => setSelected(handleClick)} nameButton={'Next Quotes'}/>
      <div>
        <Ranking quoteTop={`${anecdotes[quoteTop]}`} voteTop={voteTop} />
      </div>
    </>
  )
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)

