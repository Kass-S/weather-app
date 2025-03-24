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

  // const [weekTemp, setWeekTemp] = useState(0);
  // const [weekImgIcon, setWeekImgIcon] = useState('');
  const [weekWeather, setWeekWeather] = useState<any[]>([]);
    
    
  const WeatherCall = async (cityInput: string) => {
    const geoData = await apiCallGeo(cityInput);
    console.log(geoData[0]);

    if(geoData[0].name.toLowerCase() == cityInput.toLowerCase()){
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

      
      const filter5Day = data5Day.list.filter((list, index) => index % 8 == 0);

      // setWeekTemp(Math.round(data5Day.list[4].main.temp));
      // setWeekImgIcon(data5Day.list[4].weather[0].icon);
      setWeekWeather(filter5Day.slice(0, 5));
    }

    
  }
    

  useEffect(() => {
    //WeatherCall();
  }, [])



  return (
    <div className="m-0 min-h-screen min-w-screen bg-[url(/assets/weatherbg.png)] bg-no-repeat bg-cover font-farro float-right">
      <div className="grid sm:grid-rows-3 sm:grid-cols-2 mx-20 lg:mx-36 mt-10">
        <div className="row-span-3">
          <TodaysWeather city={currentCity} country={currentCountry} temp={currenttemp} minTemp={minTemp} maxTemp={maxTemp} imgIcon={currentImgIcon} todaysWeather={todaysWeather} />
        </div>
        <div className="sm:col-[2] flex justify-center sm:justify-end sm:max-h-10 mt-4 sm:mt-0">
          <input type="text" placeholder="Search a City" className="light-yellow py-2 lg:pr-28 pl-10 rounded-md" onKeyDown={(event) => {
            if(event.key === "Enter"){
              
              WeatherCall((event.target as HTMLInputElement).value);
              (event.target as HTMLInputElement).value ='';
            }
          }} />
        </div>        
      </div>
      
      
      <div className="mx-20 lg:mx-36 mt-4 sm:mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
        {
          weekWeather.map((day, index) => (
            <WeeksWeather key={index} temp={Math.round(day.main.temp)} imgIcon={`https://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png`} weekWeather={day.weather[0].description} dayofweek="placeholder" />
          ))
        }
        
      </div> 
    </div>
  );
}
