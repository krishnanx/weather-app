import React,{useEffect} from 'react'
const Url='https://www.weatherapi.com/docs/#'
const API_KEY = '0fd2b9d39c994c0890c64412240207';
const Weather = () => {
    useEffect(()=>{
        const fetchData=async()=>{
            try {
                const response = await axios.get(Url, {
                  params: {
                    key: API_KEY,
                    q: city,
                  }
                });
              } catch (error) {
               
              }
        }
       })
  return (
    <div>
      
        
    </div>
  )
}

export default Weather