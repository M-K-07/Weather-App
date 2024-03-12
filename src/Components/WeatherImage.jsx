import { useEffect, useState } from "react";
import clear_icon from "../assets/clear.png";
import cloud_icon from "../assets/clouds.png";
import drizzle_icon from "../assets/drizzle.png";
import mist_icon from "../assets/mist.png";
import rain_icon from "../assets/rain.png";
import snow_icon from "../assets/snow.png";
import "./animation.css"

function WeatherImage(props) {
    const [icon, setIcon] = useState(clear_icon)

    useEffect(()=>{
        const icon=document.querySelector('.weather_icon')
        icon.style.animation="fade 0.2s ease"
        if(props.details.weather[0].main==="Clouds"){
            setIcon(cloud_icon)
        }
        else if(props.details.weather[0].main=="Rain"){
            setIcon(rain_icon)
        }
        else if(props.details.weather[0].main=="Snow"){
            setIcon(snow_icon)
        }
        else if(props.details.weather[0].main=="Mist"){
            setIcon(mist_icon)
        }
        else if(props.details.weather[0].main=="Drizzle"){
            setIcon(drizzle_icon)
        }
        else if(props.details.weather[0].main=="Clear"){
            setIcon(clear_icon)
        }
    },[props.details.weather])
  return (
    <div>
      <img src={icon} alt="" className="weather_icon block mx-auto" />
    </div>
  );
}

export default WeatherImage;
