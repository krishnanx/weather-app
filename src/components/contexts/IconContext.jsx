import React,{createContext, useState} from 'react'
export const Icon = createContext();
import Sunny from "../../assets/weatherIcons/Sunny.png"
import SMist from "../../assets/weatherIcons/SMist.png"
import NMist from "../../assets/weatherIcons/Nmist.png"
import NCloudy from "../../assets/weatherIcons/NCloudy.png"
import Rain from "../../assets/weatherIcons/Rain.png"
import Moon from "../../assets/weatherIcons/Moon.png"
import SCloudy from "../../assets/weatherIcons/SCloudy.png"
import Snowy from "../../assets/weatherIcons/Snowy.png"
import Sleet from "../../assets/weatherIcons/Sleet.png"
import SSlightRain from "../../assets/weatherIcons/SSlightRain.png"
import ThunderStorm from "../../assets/weatherIcons/ThunderStorm.png"
import Freezingrain from "../../assets/weatherIcons/Freezingrain.png"
const IconContext = ({children}) => {
    const [wlogo,setWlogo]=useState(
        {
            1000: { day: Sunny, night: Moon },
            1003: { day: SCloudy, night: NCloudy },
            1006: { day: SCloudy, night: NCloudy },
            1009: { day: SCloudy, night: NCloudy },
            1030: { day: SMist, night: NMist },
            1063: { day: Rain, night:Rain },
            1066: { day: Snowy, night: Snowy },
            1069: { day: Sleet, night:Sleet },
            1072: { day: Freezingrain, night:Freezingrain },
            1087: { day: ThunderStorm, night: ThunderStorm },
            1114: { day: Snowy, night: Snowy },
            1117: { day: Snowy, night: Snowy },
            1135: { day: SMist, night: NMist },
            1147: { day: 'Freezing fog', night: 'Freezing fog' },
            1150: { day: Rain, night: Rain },
            1153: { day: Rain, night: Rain },
            1168: { day: Freezingrain, night:Freezingrain },
            1171: { day: Freezingrain, night: Freezingrain },
            1180: { day: Rain, night: Rain },
            1183: { day: Rain, night: Rain },
            1186: { day: Rain, night: Rain },
            1189: { day: Rain, night: Rain },
            1192: { day: Rain, night: Rain },
            1195: { day: Rain, night: Rain },
            1198: { day: Freezingrain, night: Freezingrain },
            1201: { day: ThunderStorm, night: ThunderStorm },
            1204: { day: Sleet, night:Sleet },
            1207: { day: Sleet, night: Sleet },
            1210: { day: Snowy, night: Snowy },
            1213: { day: 'Light snow', night: 'Light snow' },
            1216: { day: 'Patchy moderate snow', night: 'Patchy moderate snow' },
            1219: { day: 'Moderate snow', night: 'Moderate snow' },
            1222: { day: 'Patchy heavy snow', night: 'Patchy heavy snow' },
            1225: { day: 'Heavy snow', night: 'Heavy snow' },
            1237: { day: 'Ice pellets', night: 'Ice pellets' },
            1240: { day:  Rain, night:  Rain },
            1243: { day:  Rain, night:  Rain },
            1246: { day:  Rain, night:  Rain},
            1249: { day: 'Light sleet showers', night: 'Light sleet showers' },
            1252: { day: 'Moderate or heavy sleet showers', night: 'Moderate or heavy sleet showers' },
            1255: { day: 'Light snow showers', night: 'Light snow showers' },
            1258: { day: 'Moderate or heavy snow showers', night: 'Moderate or heavy snow showers' },
            1261: { day: 'Light showers of ice pellets', night: 'Light showers of ice pellets' },
            1264: { day: 'Moderate or heavy showers of ice pellets', night: 'Moderate or heavy showers of ice pellets' },
            1273: { day: ThunderStorm, night: ThunderStorm },
            1276: { day: ThunderStorm, night:ThunderStorm },
            1279: { day: 'Patchy light snow with thunder', night: 'Patchy light snow with thunder' },
            1282: { day: 'Moderate or heavy snow with thunder', night: 'Moderate or heavy snow with thunder' }
        }
            )
    return (
    <div>
        <Icon.Provider value={wlogo}>
            {children}
        </Icon.Provider>
    </div>
  )
}

export default IconContext