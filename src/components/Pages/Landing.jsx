import React from 'react'
import Weather from '../Weather'
import HomePage from '../HomePage/HomePage'
import './Landing.css'
const Landing = () => {
  return (
    <div className='L'>
        <HomePage/>
        <Weather/>
    </div>
  )
}

export default Landing