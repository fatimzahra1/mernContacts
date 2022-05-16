import React from 'react'
import {Link} from 'react-router-dom'

function About() {
  return (
    <Link to="/about">
        <h1>About This App</h1>
        <p className='my-1'>
This is a full stack Mern app for a contacts register
        </p>
        <p className='bg-dark p'> </p>
    </Link>)
}

export default About