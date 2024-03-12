import clear_icon from "../assets/clear.png";
function Home() {
  return (
    <div>
      <div className="Heading">
        <p className="text-slate-100 text-4xl pt-5 leading-[1.5] font-semibold font-sans">Welcome to <span className="text-slate-800 font-bold bg-gradient-to-r from-cyan-500 to-blue-500 block text-5xl text-transparent bg-clip-text"> Weather App</span></p>
      </div>
      <div className="image flex justify-center items-center">
        <img src={clear_icon} alt="" />
      </div>
      <div className="description pb-10 px-5 leading-[1.5]">
        <p className="text-l  text-slate-200 font-semibold">Enter a city name in the search bar above</p>
        <p className="text-l text-slate-400 font-semibold pt-2">To see the weather details like Temperature, Wind Speed and Humidity</p>
      </div>
    </div>
  )
}

export default Home
