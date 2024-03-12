import { useEffect } from "react";
import humididty_icon from "../assets/humidity.png";
import wind_icon from "../assets/wind.png";
import WeatherImage from "./WeatherImage";
import "./animation.css"
function WeatherDetails(props) {
  
  useEffect(() => {
    const tempDetailsAnimation = document.querySelector('.temp_details');
    tempDetailsAnimation.style.animation = 'fade 1s ease';
  
    const HumidityAnimation = document.getElementById('humidity');
    HumidityAnimation.style.animation = 'right 1s ease';
  
    const WindAnimation = document.getElementById('wind');
    WindAnimation.style.animation = 'left 1s ease';
  }, [props.info]);
    
  return (
      <div>
        {(props.info).map((details, index) => {
          return (
            <div className="temp_details" key={index}>
              <div>
              <WeatherImage details={details}/>
              </div>
              <p className="temperature_city text-[46px] font-semibold text-slate-200 ">{Math.floor(details.main.temp)}°C</p>
              <p className="temperature_city text-[50px] font-semibold text-slate-200 pb-9"> {details.name} </p>
              <div className="details flex justify-around">
                <div className="content flex mb-5 " id="humidity">
                  <img src={humididty_icon} alt="" className="w-[44px] h-[38px] my-2" />
                  <div className="ml-4 ">
                    <p className="humidity text-slate-200 text-xl">{details.main.humidity} %</p>
                    <h3 className="text-slate-200 text-">Humidity</h3>
                  </div>
                </div>
                <div className="content flex" id="wind">
                  <img src={wind_icon} alt="" className="w-[34px] h-[38px] my-2 " />
                  <div className="ml-4 ">
                    <p className="wind text-slate-200 text-xl">{details.wind.speed} km/h</p>
                    <h3 className="text-slate-200 text-">Wind Speed</h3>
                  </div>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    )
  }
  
  export default WeatherDetails;
  