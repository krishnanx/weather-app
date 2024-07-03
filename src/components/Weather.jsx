import React,{useContext, useEffect, useState} from 'react'
const Url='https://www.weatherapi.com/docs/#'
const API_KEY = '0fd2b9d39c994c0890c64412240207';
import axios from 'axios';
import { weather } from './contexts/Wcontext';
import "./Weather.css"
import icon from './Pics/C.png'
import { Data } from './contexts/DataContext';
import { Error } from './contexts/ErrorContext';
export const fetchData=async(myCity,setError)=>{
  try {
      const response = await axios.get(`http://api.weatherapi.com/v1/current.json?key=0fd2b9d39c994c0890c64412240207&q=${myCity}&aqi=yes`)
      const json = response.data;
      //console.log(json)
      setError(false);
      return response.data;
      
    } catch (error) {
      setError(true);
      console.log("LOL")
      console.log(error.message)
      console.log("LOL")
    }
  
}
const Weather = () => {
    const [city,setCity]=useContext(weather)
    const [data,setData]=useContext(Data)
    const [error,setError]=useContext(Error);
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
    <div className='DATA'>
      <div className='main-w'>
        <img className="icons" src={icon}/>
        {error?<p></p>:<p>{data.location.name}</p>}
      </div>
        
    </div>

  )
}

export default Weather