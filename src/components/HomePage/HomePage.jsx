import React,{useState,useEffect, useContext} from 'react'

import Typewriter from 'typewriter-effect';
import './HomePage.css'
import clear from "../Pics/clear.jpg"
import cloudy from "../Pics/cloudy.jpg"
import rainy from "../Pics/rainy.jpeg"
import thunder from "../Pics/thunder.jpg"
import snowy from "../Pics/snowy.jpg"
import windy from "../Pics/windy.jpg"
import foggy from "../Pics/foggy.jpg"
import humidity from "../Pics/humid.jpg"
import clear2 from "../Pics/clear-2.jpg"
import {weather} from "../contexts/Wcontext"
import Weather, { fetchData } from '../Weather';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Data } from '../contexts/DataContext';
import { Error } from '../contexts/ErrorContext';
import North from "../../assets/weatherIcons/north.png"
import West from "../../assets/weatherIcons/west.png"
import East from "../../assets/weatherIcons/east.png"
import South from "../../assets/weatherIcons/south.png"
import Northwest from "../../assets/weatherIcons/northwest.png"
import Northeast from "../../assets/weatherIcons/northeast.png"
import Southeast from "../../assets/weatherIcons/Southeast.png"
import Southwest from "../../assets/weatherIcons/Southwest.png"
import P from "../../assets/weatherIcons/pressure.png"
const HomePage = () => {
    let aqi=null;
    let content=null;
    let wind=null;
    let humid=null;
    let pressure=null;
    let dir=null;
    const [value, setValue] = useState("");
    const [direction,setDirection]=useState({
        N:North,
        E:East,
        W:West,
        S:South,
        NE:Northeast,
        NW:Northwest,
        SE:Southeast,
        SW:Southwest,
        NNE:Northeast,
        NNW:Northwest,
        ENE:Northeast,
        ESE:Southeast,
        SSE:Southeast,
        SSW:Southwest,
        WSW:Southwest,
        WNW:Northwest
        
    })
    const [directionName, setDirectionName] = useState({
        N: 'North',
        E: 'East',
        W: 'West',
        S: 'South',
        NE: 'Northeast',
        NW: 'Northwest',
        SE:'Southeast',
        SW:'Southwest',
        NNE: 'North-Northeast',
        NNW: 'North-Northwest',
        ENE: 'East-Northeast',
        ESE: 'East-Southeast',
        SSE: 'South-Southeast',
        SSW: 'South-Southwest',
        WSW: 'West-Southwest',
        WNW: 'West-Northwest'
    });

    const [city,setCity] = useContext(weather);
    const [data,setData]= useContext(Data);
    const [showElement, setShowElement] = useState(false);
    const [error,setError]=useContext(Error);
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
        let latitude=null;
        let longitude=null;
        const weatherData = fetchData(value,latitude,longitude,setError);
        console.log(weatherData)
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
            break;
        case true:
            break;
        case false:
            aqi = (
            <>
                <span className='aqi-div' style={themeStyle}>
                    <p className='aqi'>
                        AQI 
                    </p>
                    <p className='CO'>
                        CO: {data.current.air_quality.co}
                    </p>
                    <p className='PM2_5'>
                        PM2.5: {data.current.air_quality.pm2_5}
                    </p>
                    <p className='pm10'>
                        PM10: {data.current.air_quality.pm10}
                    </p>
                </span>
          
            </>
          );
          wind=(
            <>
            <span className='wind_div' style={themeStyle}>
                <p className='wind'>
                    {directionName[data.current.wind_dir]}
                </p>
                <div className='speed_div'>
                    <div className='S'>
                        <p className='speed'>{data.current.wind_kph}</p>
                        <p className='speed'>
                        KMPH
                        </p>
                    </div>
                    <img className="speed_img" src={direction[data.current.wind_dir]}/>
                </div>
            </span>
            </>
          )
          humid=(
            <>
                <span className="humid-div" style={themeStyle}>
                    <p className='humid'>
                        Humidity
                    </p>
                    <p className='humid-value'>
                        {data.current.humidity}%
                    </p>
                </span>
            </>
          )
          pressure=(
            <>
                <span className='pressure-div' style={themeStyle}>
                   <p className='pressure'>
                        Pressure(mb)
                   </p>
                   <div className='pressure-img-div'>
                    <p className='pressure-value'>
                            {data.current.pressure_mb}
                    </p>
                    <img src={P}/>
                   </div>
                  
                </span>
            </>
          )
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
                    <img src={humidity} className='size-3'></img>
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
                <div className='card-3'>
                    {aqi}
                </div>
                <div className='card-3'>
                    {humid}
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
                <div className='card-3'>
                    {wind}
                </div>
                <div className='card-3'>
                    {pressure}
                </div>
            </div>
        </div>
    </div>
  )
}

export default HomePage