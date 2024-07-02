import React,{useEffect, useState} from 'react'
const Url='https://www.weatherapi.com/docs/#'
const API_KEY = '0fd2b9d39c994c0890c64412240207';
import axios from 'axios';
const Weather = () => {
    const city="Paris"
    useEffect(()=>{
        const fetchData=async()=>{
            try {
                const response = await axios.get(`http://api.weatherapi.com/v1/current.json?key=0fd2b9d39c994c0890c64412240207&q=${city}&aqi=yes`)
                  
                if(!response){
                  setError(true)
                }

                const json = response.data;
                console.log(json)
                
              } catch (error) {
                console.log(error.message)
              }
            
        }
        fetchData();
       },[])
       
  return (
    <div>
      
        
    </div>
  )
}

export default Weather