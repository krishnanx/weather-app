import React,{useContext, useEffect, useState} from 'react'
const Url='https://www.weatherapi.com/docs/#'
const API_KEY = '0fd2b9d39c994c0890c64412240207';
import axios from 'axios';
import { weather } from './contexts/Wcontext';
import "./Weather.css"
import icon from './Pics/C.png'
import { Data } from './contexts/DataContext';
import { Error } from './contexts/ErrorContext';
import { Icon } from './contexts/IconContext';

export const fetchData=async(myCity,setError)=>{
  try {
      const response = await axios.get(`http://api.weatherapi.com/v1/current.json?key=0fd2b9d39c994c0890c64412240207&q=${myCity}&aqi=yes`);
      console.log(response)
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
    let content = null;
    let feel = null;
    let image = null;
    let uv=null;
    let time=null;
    const [city,setCity]=useContext(weather)
    const [data,setData]=useContext(Data)
    const [error,setError]=useContext(Error);
    const wlogo=useContext(Icon);
    const themeStyle={
      backgroundColor:error===null?'none': error?'white' :'black',
      opacity:error===null?'none': error?'0' :'0.5',
      //border:error===null?'none': error?'none' :'solid',
      transition:error===null?'none': error?'none' :'transform 3s ease-in-out,opacity 1s'
  }
    
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
      case null:
        content = <p></p>;
        break;
      case true:
        content = <p>Enter correct city</p>;
        break;
      case false:
        let code=null;
        let time=null;
        let timing=null;
        code=data.current.condition.code;
        time=data.current.is_day;
        if(time==1){
          timing='day';
        }
        else{
          timing='night';
        }
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
        image=<img src={wlogo[code][timing]}/>
        feel=(
          <>
            <span className='feels' style={themeStyle}>
              <p className='RealFeel'>Real feel</p>
              <p className='Rtemp'>{data.current.feelslike_c}°C</p>
            </span>
          </>
          )
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
      <div className='bottom'>
        <div className='card-1'  >
          {feel}
        </div>
        <div className='card-1'  >
          {uv}
        </div>
      </div>
        
    </div>

  )
}

export default Weather