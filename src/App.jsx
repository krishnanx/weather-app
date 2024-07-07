import { useState } from 'react'
import './App.css'
import Landing from './components/Pages/Landing'
import Navbar from './components/Navbar/Navbar'
import Wcontext from './components/contexts/Wcontext'
import DataContext from './components/contexts/DataContext'
import ErrorContext from './components/contexts/ErrorContext'
import IconContext from './components/contexts/IconContext'
import LocDataErrorContext from './components/contexts/LocDataErrorContext'
import LocDataContext from './components/contexts/LocDataContext'
function App() {
  

  return (
   <div>
    <LocDataContext>
      <LocDataErrorContext>
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
      </LocDataErrorContext>
    
    </LocDataContext>
    
   
    
   
      
   </div>
  )
}

export default App
