import React,{ createContext, useState } from 'react'
export const Data = createContext();
const DataContext = ({children}) => {
    const [data,setData]=useState(null);
  return (
    <div>
        <Data.Provider value={[data,setData]}>
        {children}
        </Data.Provider>
    </div>
  )
}

export default DataContext