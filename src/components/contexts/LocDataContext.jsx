import React, { createContext, useState } from 'react'
export const LocData = createContext();
const LocDataContext = ({children}) => {
  const [locData,setLocData] = useState([])
  return (
    <div>
        <LocData.Provider value={[locData,setLocData]}>
          {children}
        </LocData.Provider>
    </div>
  )
}

export default LocDataContext
