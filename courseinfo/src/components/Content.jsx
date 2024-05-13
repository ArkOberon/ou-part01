import Part from "./Part"

const Content = (props) => {
  return (
    <>  
      {
        props.parts.map((course, idx) => {
          return  <Part key={idx} name={course.name}  excercises={course.exercises} />          
        })   
      }
    </>
  )
}

export default Content