import React,{useState,createContext} from 'react'
export const weather = createContext();

const Wcontext = ({children}) => {
  const [City,setCity]=useState(null);
  return (
    <weather.Provider value={[City,setCity]}>
        {children}
    </weather.Provider>
  )
}

export default Wcontext