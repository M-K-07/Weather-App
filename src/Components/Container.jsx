import {useEffect, useState} from "react";
import search_icon from "../assets/search.png";
import Error from "./Error";
import WeatherDetails from "./WeatherDetails";
import Home from "./Home";
import "./animation.css"

function Container() {
const [info, setInfo] = useState([])
const [error, setError] = useState(null)

  const fetchData = async () => {
    const element = document.querySelector(".search_bar");
    if (element.value === "") {
        setError("Enter a valid City Name")
        setInfo([])
        return 0
    }
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${element.value}&appid=${import.meta.env.VITE_API_KEY}&units=metric`;
    const api = await fetch(url);
    if (api.status === 404) {
        setError("City not found");
        setInfo([]);
        return;
      }

      if (!api.ok) {
        setError(`Error: ${api.status} - ${api.statusText}`);
        setInfo([]);
        return;
      }
    const data = await api.json();
    setInfo([data])
    setError(null)
    console.log(data);
  };

const display=()=>{
  const element = document.querySelector(".search_bar");
  if (element===null){
    return <Home/>
  }
  return error? <Error/>: <WeatherDetails info={info}/>
}

  return (
    <div className="container w-[400px] bg-gradient-to-r animate-fade from-slate-800 to-blue-900 block my-[73px] mx-auto rounded-xl text-center">
      <div className="search p-8 flex justify-around">
        <input
          type="text"
          placeholder="Enter City Name"
          className="search_bar rounded-xl py-3 px-7 bg-slate-300 font-semibold text-black border-none outline-none"
        />
        <div>
          <button
            onClick={fetchData}
            className="search_btn w-[50px] h-[50px] rounded-[50%] bg-slate-300 cursor-pointer border-none outline-none flex justify-center items-center"
          >
            <img src={search_icon} alt="" className="search_icon w-[20px]" />
          </button>
        </div>
      </div>
    {display()}
 </div>

  );
}

export default Container;
