import React,{createContext, useState} from 'react'
export const Error = createContext();
const ErrorContext = ({children}) => {
    const[error,setError] =useState('loading');
    
  return (
    <div>
        <Error.Provider value={[error,setError]}>
            {children}
        </Error.Provider>
    </div>
  )
}

export default ErrorContext