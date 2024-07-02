import { useState } from 'react'
import './App.css'
import Landing from './components/Pages/Landing'
import Navbar from './components/Navbar/Navbar'
import Wcontext from './components/Wcontext'

function App() {
  

  return (
   <div>
    <Wcontext >
      <Navbar/>
      <Landing/>
    </Wcontext>
      
   </div>
  )
}

export default App
