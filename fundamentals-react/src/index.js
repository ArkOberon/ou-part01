import React from 'react'
import ReactDOM from 'react-dom'

const exercises1 = 10
const exercises2 = 7
const exercises3 = 14

const Header = (props) => {
  return (
    <>
      <h1>{props.course}</h1>
    </>
  )
}

const Part = (props) => {
  return (
    <>
      <p>{props.partName}: {props.exercises}</p>
    </>
  )
}

const Content = (props) => {
  return (
    <>
      <p>
        <Part partName={'Fundamentals of React'} exercises={exercises1}/>
      </p>
      <p>
        <Part partName={'Using props to pass data'} exercises={exercises2}/>
      </p>
      <p>
        <Part partName={'State of a component'} exercises={exercises3}/>
      </p>      
    </>
  )
}

const Total = (props) => {
  return (
  <div>   
    <p>Number of exercises {props.add}</p>
  </div>
  )
}

const App = () => { 
  return (
    <>     
      <Header course={'Half Stack applicaiton development'}/>
      <Content />
      <Total add={exercises1 + exercises2 + exercises3}/>
    </>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
