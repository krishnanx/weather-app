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
      setError('active');
      return response.data;
      
    } catch (error) {
      setError('error');
      console.log("LOL")
      console.log(error.message)
      console.log("LOL")
    }
  
}
const Weather = () => {
    let content = null;
    let image = null;
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
    switch (error) {
      case 'loading':
        content = <p>Loading...</p>;
        break;
      case 'error':
        content = <p>Error loading data.</p>;
        break;
      case 'active':
        content = (
          <>
            <div className='right'>
              <div className='cityNameDiv'>
                <h1 className='cityName'>
                  {data.location.name}
                </h1>
              </div>
              <div className='temp'>
                <p>{data.current.temp_c}°C</p>
              </div>
            </div>
        
          </>
        );
        break;
      default:
        content = <p>Unknown status.</p>;
        break;
    }
   
    
  return (
    <div className='DATA'>
      <div className='main-w'>
        {image}
        {content}
      </div>
        
    </div>

  )
}

export default Weather