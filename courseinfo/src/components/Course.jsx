import React from 'react'
import Content from './Content'
import Header from './Header'

const Course = ({course}) => { 
    const Total=course.parts.reduce((sum,part)=>{
        return part.exercises+sum;
    },0);
  return (
    <div>
        <Header name={course.name}/>
        <Content parts={course.parts}/>
        {Total}
    </div>
  )
}
export default Course