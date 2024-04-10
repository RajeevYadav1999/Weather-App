import SearchBox from "./SearchBox"
import WeatherInfo from "./WeatherInfo"
import { useState } from "react"


const WeatherApp = () => {

    // eslint-disable-next-line no-unused-vars
    let[info, setInfo]= useState({
    city: "Mohali",
    temp: 35,
    Max_Temp : 40,
    Min_Temp : 32, 
    humidity : 32,
    weather: "Clear Sky",
    feelsLike : 33,
  })

  let updateInfo = (newInfo)=>{
    setInfo(newInfo)
  }

  return (
    <>
    <SearchBox updateInfo={updateInfo}/> 
    <WeatherInfo info={info}/>
    </>
  )
}

export default WeatherApp