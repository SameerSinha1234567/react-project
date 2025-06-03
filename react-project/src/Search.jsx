import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import {useState} from "react";
export default function Search({UpdateInfo})
{
    const API_URL ="http://api.openweathermap.org/data/2.5/weather";
    const API_KEY="68868e39f9a2ccd6f054f2eee0b74b41";
    let getWeatherInfo=async()=>{
        let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
        let jsonresponse = await response.json();
        console.log(jsonresponse);
        let getResult={
            city:city,
        temp : jsonresponse.main.temp,
        min : jsonresponse.main.temp_min,
        max  : jsonresponse.main.temp_min,
        humidity:jsonresponse.main.humidity,
        };
        console.log(getResult);
        return getResult;
    };
    
    let[city,SetCity]=useState("");
     let handleChange=(event)=>{
        SetCity(event.target.value);
     };
      let handleSubmit=async(event)=>{
        event.preventDefault();
        SetCity("");
        let newinfo= await getWeatherInfo();
        UpdateInfo(newinfo);
     };
     
return(
    <>
      <form onSubmit={handleSubmit}>
        <h3>Search for Weather</h3>
        <TextField
         id="outlined-basic"
          label="City Name"
           variant="outlined"
           value={city}
           onChange={handleChange}
        />
        <br></br>
         <br></br>
        <Button variant="contained" type="submit">Submit</Button>
      </form>
       
    </>
);
}