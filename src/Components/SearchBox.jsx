import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import {  useState } from 'react';


// eslint-disable-next-line react/prop-types
const SearchBox = ({updateInfo}) => {
  let[city, setCity] = useState("");
  let [error, setError] =  useState(false);

  const API_URL = "https://api.openweathermap.org/data/2.5/weather?"
  const API_KEY=  "a5e99f90b36d5a0cf54e07bd2a66622a"
  
 
    async function getWeather(){
      try{
      const response = await fetch(`${API_URL}q=${city}&appid=${API_KEY}&units=metric`)
      const data = await response.json()
      console.log(data);
  
      let result = {
        city: city,
        temp: data.main.temp,
        Max_Temp: data.main.temp_max,
        Min_Temp: data.main.temp_min,
        humidity: data.main.humidity,
        pressure: data.main.pressure,
        feelsLike: data.main.feels_like,
        weather: data.weather[0].description,
        windspeed: data.wind.speed
      };
      return result
    }catch(error){
      console.log(error);
    }
}

  let handleChange = (e)=>{
    setCity(e.target.value)
  };

   let handleSubmit = async(e)=> {
    try{
    e.preventDefault()
    // setCity(e.target.value)
    setCity("")
    let newInfo = await getWeather()
    updateInfo(newInfo)
    } catch(error){
      setError(error)
    }
  };

  
  return (
    <>
    <div>
       <h1 className='text-2xl underline'> Search For The Weather</h1>
      <form onSubmit={handleSubmit}>
       <div className='m-4'>
        <TextField
              required
              id="outlined-required"
              label="City Name"
              defaultValue=""
              value={city}
              onChange={handleChange}
            />
            </div>
            <div className='my-4'>
              <Button type='submit' variant="contained" color="success" size='large'>
               Search
              </Button>
            </div>
        </form>
        {error && <p>Invalid City Name</p>}
          
    </div> 
    </>
  )
}

export default SearchBox