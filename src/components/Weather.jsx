import React,{useContext, useEffect, useState} from 'react'
const Url='https://www.weatherapi.com/docs/#'
const API_KEY = '0fd2b9d39c994c0890c64412240207';
import axios from 'axios';
import { weather } from './Wcontext';
export const fetchData=async(myCity)=>{
  try {
      const response = await axios.get(`http://api.weatherapi.com/v1/current.json?key=0fd2b9d39c994c0890c64412240207&q=${myCity}&aqi=yes`)
        
      if(!response){
        setError(true)
      }

      const json = response.data;
      console.log(json)
      return response.data;
      
    } catch (error) {
      console.log("LOL")
      console.log(error.message)
      console.log("LOL")
    }
  
}
const Weather = () => {
    const [city,setCity]=useContext(weather)
    // useEffect(()=>{
    //     const fetchData=async()=>{
    //         try {
    //             const response = await axios.get(`http://api.weatherapi.com/v1/current.json?key=0fd2b9d39c994c0890c64412240207&q=${city}&aqi=yes`)
                  
    //             if(!response){
    //               setError(true)
    //             }

    //             const json = response.data;
    //             console.log(json)
                
    //           } catch (error) {
    //             console.log(error.message)
    //           }
            
    //     }
    //     fetchData();
    //    },)
       
  return (
    <div>
      
        
    </div>
  )
}

export default Weather