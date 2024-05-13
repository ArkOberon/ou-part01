const Total = (props) => {
  const arrayExer = props.parts.map((exer) => exer.exercises)
  
  return (
    <>
      <p>Number of exercises: {arrayExer.reduce((accumulator, currentValue) => accumulator + currentValue)}</p>
    </>
  )
}

export default Total