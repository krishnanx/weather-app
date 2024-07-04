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
import {weather} from "../contexts/Wcontext"
import Weather, { fetchData } from '../Weather';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Data } from '../contexts/DataContext';
import { Error } from '../contexts/ErrorContext';
const HomePage = () => {
    
    const [value, setValue] = useState("");
    const [city,setCity] = useContext(weather);
    const [data,setData]= useContext(Data);
    const [showElement, setShowElement] = useState(false);
    const [error,setError]=useContext(Error)
    const themeStyle={
        backgroundColor:error===null?'none': error?'white' :'black',
        opacity:error===null?'none': error?'0' :'0.5',
        //border:error===null?'none': error?'none' :'solid',
        transition:error===null?'none': error?'none' :'transform 3s ease-in-out,opacity 1s'
    }
    //const [data,setData]=useContext(Data);
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
        const weatherData = fetchData(value,setError);
        
        weatherData.then(json=>{
            setData(json);
            console.log(json);
            
           
        })
        


       }
       AOS.init({
        duration: 2000, // animation duration in milliseconds
        /*once: false, // whether animation should happen only once - while scrolling down*/
        easing: 'ease-in-out', // easing function for the animation
        
      });
      switch (error) {
        case null:
            var content=null;
            content = <p></p>;
            break;
        case 'error':
            content = <p>Enter correct city</p>;
             break;
        case 'active':
            content=null
            content = (
            <>
             
          
            </>
          );
          break;
        default:
            content=null
            content = <p>Unknown status.</p>;
            break;
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
       
        <div data-aos="fade" /*className={`container-2 ${showElement ? 'visible' : ''}`}*/ className='container-2'>
            <div className='column-1'>
                <div className='card-3' style={themeStyle}>

                </div>
                <div className='card-3' style={themeStyle}>

                </div>
            </div>
            
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
                <div className='display'>
                    <Weather />
                </div>
                <img src={clear2} className='pic'></img>
            </div>
            <div className='column-3'>
                <div className='card-3' style={themeStyle}>

                </div>
                <div className='card-3' style={themeStyle}>

                </div>
            </div>
            
           
           
                
        </div>
 
       
        
        
        
         
    </div>
  )
}

export default HomePage