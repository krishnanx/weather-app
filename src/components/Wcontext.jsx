import React,{useState,createContext} from 'react'
export const weather = createContext();

const Wcontext = ({children}) => {
  const [city,setCity]=useState(null);
  return (
    <weather.Provider value={[city,setCity]}>
        {children}
    </weather.Provider>
  )
}

export default Wcontext