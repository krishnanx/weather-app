import React,{createContext, useState} from 'react'
export const LocError = createContext();
const LocDataErrorContext = ({children}) => {
    const [LocDataError,setLocDataError] = useState(null);
  return (
    <div>
        <LocError.Provider value={[LocDataError,setLocDataError]}>
            {children}
        </LocError.Provider>
    </div>
  )
}

export default LocDataErrorContext