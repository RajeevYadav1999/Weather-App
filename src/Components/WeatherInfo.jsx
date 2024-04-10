/* eslint-disable react/prop-types */
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import LightModeIcon from '@mui/icons-material/LightMode';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';


const WeatherInfo = ({info}) => {
  const init_Img ="https://i.pinimg.com/736x/e1/3a/4d/e13a4d737425141353603f7a3edb73cd.jpg"

  const rain_Img = "https://images.pexels.com/photos/1530423/pexels-photo-1530423.jpeg?auto=compress&cs=tinysrgb&w=600"

  const cold_Img ="https://images.unsplash.com/photo-1612208695882-02f2322b7fee?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29sZCUyMHdlYXRoZXJ8ZW58MHx8MHx8fDA%3D"


  return (
    <>
    <Card className='relative mr-auto ml-auto mt-5' sx={{ maxWidth: 345 , border:"1px solid black", padding:'2px'}}>
      <CardMedia
        sx={{ height: 200 }}
        image={info.humidity > 75 ? rain_Img : info.temp > 15 ? init_Img : cold_Img}
        title=""
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {info.city} &nbsp;
          {info.humidity > 75 ? <ThunderstormIcon/> : info.temp > 15 ? <LightModeIcon/> : <AcUnitIcon/>}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          <div>Temp:  <i><b>{info.temp}&deg;C</b></i> </div>
         <div> Max_Temp : <i><b>{info.Max_Temp}&deg;C </b></i></div>
          <div>Min_Temp : <i><b>{info.Min_Temp}&deg;C</b></i></div> 
          <div>Humidity : <i><b>{info.humidity}</b></i> </div> 
          <div>Weather :  <i><b>{info.weather}</b></i></div>
          <div>Feels Like: <i><b>{info.feelsLike}</b></i></div>

        </Typography>
      </CardContent>
    </Card>
    </>
  )
}

export default WeatherInfo