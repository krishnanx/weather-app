import { useState } from 'react'
import './App.css'
import Landing from './components/Pages/Landing'
import Navbar from './components/Navbar/Navbar'
import Wcontext from './components/contexts/Wcontext'
import DataContext from './components/contexts/DataContext'
import ErrorContext from './components/contexts/ErrorContext'
import IconContext from './components/contexts/IconContext'
function App() {
  

  return (
   <div>
    <IconContext>
      <ErrorContext>
        <DataContext>
          <Wcontext >
            <Navbar/>
            <Landing/>
          </Wcontext>
        </DataContext>
      </ErrorContext>
    </IconContext>
   
    
   
      
   </div>
  )
}

export default App
