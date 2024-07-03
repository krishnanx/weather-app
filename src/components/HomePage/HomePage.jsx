import React,{useState,useEffect, useContext} from 'react'
import Zoom from 'react-reveal/Zoom';
import Typewriter from 'typewriter-effect';
import './HomePage.css'
import clear from "../Pics/clear.jpg"
import cloudy from "../Pics/cloudy.jpg"
import rainy from "../Pics/rainy.jpeg"
import thunder from "../Pics/thunder.jpg"
import snowy from "../Pics/snowy.jpg"
import windy from "../Pics/windy.jpg"
import foggy from "../Pics/foggy.jpg"
import humid from "../Pics/humid.jpg"
import clear2 from "../Pics/clear-2.jpg"
import {weather} from "../Wcontext"
import { fetchData } from '../Weather';
const HomePage = () => {
    
    const [value, setValue] = useState("");
    const [city,setCity] = useContext(weather);
    const [showElement, setShowElement] = useState(false);
    useEffect(() => {
        const handleScroll = () => {
          const scrollThreshold =700;
          console.log(window.scrollY);
          if (window.scrollY > scrollThreshold) {
            setShowElement(true);

          } else {
            setShowElement(false);
          }
        };
      
        window.addEventListener('scroll', handleScroll);
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, []);
       const HandleClick=(value)=>{
        const weatherData = fetchData(value);
        console.log(weatherData)

       }
  return (
    <div className='Home' /*style={{height:'500px'}}*/>
        <div className='container' >
            <span className='ani-div'>
                <Typewriter
                    options={{
                        strings:["Where Accuracy Meets Convenience.","Your Weather, Your Way." , "Forecasting for a Brighter Day." ] ,
                        autoStart:true ,
                        loop:true
                    }} />

            </span>
            <div className='Top'>
                <div className='weather-1'>
                    <img src={rainy} className='size-1'></img>
                </div>
                <div className='weather-1'>
                    <img src={cloudy} className='size-2'></img>
                </div>
                <div className='weather-1'>
                    <img src={humid} className='size-3'></img>
                </div>
                <div className='weather-1'>
                    <img src={snowy} className='size-4'></img>
                </div>
            </div>
            <div className='Bottom'>
                <div className='weather-1'>
                    <img src={foggy} className='size-5'></img>
                </div>
                <div className='weather-1'>
                    <img src={clear} className='size-6'></img>
                </div>
                <div className='weather-1'>
                    <img src={windy} className='size-7'></img>
                </div>
                <div className='weather-1' id="thunde">
                    <img src={thunder} className='size-8'></img>
                    
                </div>
            </div>
        </div>
       
        <div className={`container-2 ${showElement ? 'visible' : ''}`}>
            
            <div className='pic-div'>
                <form className='form'>
                    <input 
                    type="text" 
                    className='textbox' 
                    placeholder='Enter City' 
                    onChange={(e)=>{
                        setValue(e.target.value)
                        console.log(e.target.value)
                    }}
                    value={value}
                    /> 
                    <button 
                    className="button-17" 
                    role="button"
                    onClick={(e)=>{
                        e.preventDefault();
                        HandleClick(value);
                    }}
                    >Search
                    </button>
                </form>
                <img src={clear2} className='pic'></img>
            </div>
           
           
                
        </div>
 
       
        
        
        
         
    </div>
  )
}

export default HomePage