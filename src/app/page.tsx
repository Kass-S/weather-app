'use client'
import TodaysWeather from "@/components/TodaysWeather";
import WeeksWeather from "@/components/WeeksWeather";
import { apiCallCurrent, apiCallGeo, apiCall5Forcast } from '@/lib/service'
import { useEffect, useState } from "react";

export default function Home() {
  const [currentCity, setCurrentCity] = useState('');
  const [currentCountry, setCurrentCountry] = useState('');
  const [currenttemp, setCurrentTemp] = useState(0);
  const [minTemp, setMinTemp] = useState(0);
  const [maxTemp, setMaxTemp] = useState(0);
  const [currentImgIcon, setCurrentImgIcon] = useState('');
  const [todaysWeather, setTodaysWeather] = useState('');

  const [weekTemp, setWeekTemp] = useState(0);
  const [weekImgIcon, setWeekImgIcon] = useState('');
  const [weekWeather, setWeekWeather] = useState('');
    
    
  const WeatherCall = async () => {
    const geoData = await apiCallGeo('stockton');
    console.log(geoData[0]);

    const currentData = await apiCallCurrent(geoData[0].lat, geoData[0].lon);
    console.log(currentData);
    const data5Day = await apiCall5Forcast(geoData[0].lat, geoData[0].lon);
    console.log(data5Day);
    
    setCurrentCity(currentData.name);
    setCurrentCountry(currentData.sys.country);
    setCurrentTemp(Math.round(currentData.main.temp));
    setMinTemp(Math.round(currentData.main.temp_min));
    setMaxTemp(Math.round(currentData.main.temp_max));
    setCurrentImgIcon(currentData.weather[0].icon);
    setTodaysWeather(currentData.weather[0].description);

    // map it so the proper info displays starts at 4 then increments by 8 in list
    setWeekTemp(Math.round(data5Day.list[4].main.temp));
    setWeekImgIcon(data5Day.list[4].weather[0].icon);
    setWeekWeather(data5Day.list[4].weather[0].description);
  }
    

  useEffect(() => {
    //WeatherCall();
  }, [])



  return (
    <div className="m-0 min-h-screen min-w-screen bg-[url(/assets/weatherbg.png)] bg-no-repeat bg-cover font-farro float-right">
      <div className="grid grid-rows-3 grid-cols-2">
        <div className="row-span-3">
          <TodaysWeather city={currentCity} country={currentCountry} temp={currenttemp} minTemp={minTemp} maxTemp={maxTemp} imgIcon={currentImgIcon} todaysWeather={todaysWeather} />
        </div>
        <div className="col-[2] ">
          <input type="text" placeholder="Search a City" className="light-yellow p-2 rounded-md" />
        </div>        
      </div>
      
      {/* need to map this out */}
      <WeeksWeather temp={weekTemp} imgIcon={weekImgIcon} weekWeather={weekWeather} dayofweek="placeholder" />
      
    </div>
  );
}
