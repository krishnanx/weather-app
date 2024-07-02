import React from 'react'
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
const HomePage = () => {
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
        <div className='container-2'>
            <img src={clear2} className='pic'></img>
            
        </div>
        
        
         
    </div>
  )
}

export default HomePage