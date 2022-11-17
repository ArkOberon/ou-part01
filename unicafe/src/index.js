import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Header = ({title}) => <h1>{title}</h1>

const Button = ({nameButton, handleClick}) => <button onClick={handleClick}>{nameButton}</button>

const Data = ({nameData, total}) => {
  return(
    <>
      <tr>
        <td>{nameData}</td>
        <td>{total}</td>   
      </tr>
    </>
  )
}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const totalComments = good + bad + neutral

  const average = () => {
    const goodPoints = 1 * good
    const neutralPoints = 0 * neutral
    const badPoints = -1 * bad
    const calculateAverage = (goodPoints + badPoints + neutralPoints) / totalComments
    
    return (calculateAverage * 100).toFixed(2)
  }

  const totalAverage = `${average()}%`

  const percentGood = () => {
    const totalGoods = ((100 * good) / totalComments).toFixed(2)
    return `${totalGoods}%`
  }

  const totalGood = percentGood()

  return (
    <>
      <Header title={'give feedback'}/>
      <div>
        <Button nameButton={'good'} handleClick={() => setGood(good + 1)}/>
        <Button nameButton={'neutral'} handleClick={() => setNeutral(neutral + 1)}/>
        <Button nameButton={'bad'} handleClick={() => setBad(bad + 1)}/>
      </div>  
      <Header title={'statistics'}/>   
      { (totalComments === 0) ? <h3>No Feedback Given</h3> :
        <table>
          <tbody>
            <Data nameData={'good'} total={good}/>
            <Data nameData={'neutral'} total={neutral}/>
            <Data nameData={'bad'} total={bad}/>  
            <Data nameData={'All Comments'} total={totalComments}/> 
            <Data nameData={'Average'} total={totalAverage}/> 
            <Data nameData={'Positive'} total={totalGood}/> 
          </tbody>
        </table>
      }  
    </>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)