import Info from './info';
import Search from './Search';
import {useState}from"react";
export default function WeatherApp(){
    const[weatherInfo,SetWeatherInfo]=useState({
        city:"Delhi",
         temp : 25.05,
        min : 25.05,
        max  : 25.05,
        humidity:47,
    });
    let UpdateInfo=(result)=>{
       SetWeatherInfo(result);
    }
    return(
          <>
             <Search UpdateInfo={UpdateInfo}/>
             <Info info={weatherInfo}/>
          </>
    );
}