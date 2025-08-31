const Header = (props) => {
  console.log(props)
  return <h1>{props.course}</h1>
      }

const Part = (props) => {
  console.log(props)
  return <p>{props.name} {props.exc}</p>
}
      
const Content = (props) => {
  return (
    <div>
      <Part name={props.p1} exc={props.e1} />
      <Part name={props.p2} exc={props.e2} />
      <Part name={props.p3} exc={props.e3} />
      </div>
  )
}

const Total = (props) => {
  return <p>Number of exercises {props.e1 + props.e2 + props.e3}</p>
}

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }
  return (
    <div>
      <Header course={course.name} />
      <Content parts={parts} />
      <Total parts={parts} />
    </div>
  )
}

export default App
