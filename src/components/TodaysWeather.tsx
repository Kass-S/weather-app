'use client'

import { Card, CardContent, CardHeader } from './ui/card'
import { apiCallCurrent, apiCallGeo, apiCall5Forcast } from '@/lib/service'
import { useEffect, useState } from "react";

const TodaysWeather = () => {

    const [city, setCity] = useState('');
    const [country, setCountry] = useState('');
    const [temp, setTemp] = useState(0);
    const [minTemp, setMinTemp] = useState(0);
    const [maxTemp, setMaxTemp] = useState(0);
    const [imgIcon, setImgIcon] = useState('');
    const [todaysWeather, setTodaysWeather] = useState('');
    
    
    const TodaysWeatherCall = async () => {
        const geoData = await apiCallGeo('stockton');
        console.log(geoData[0]);
        const currentData = await apiCallCurrent(geoData[0].lat, geoData[0].lon);
        console.log(currentData);
        setCity(currentData.name);
        setCountry(currentData.sys.country);
        setTemp(currentData.main.temp);
        setMinTemp(currentData.main.temp_min);
        setMaxTemp(currentData.main.temp_max);
        setImgIcon(currentData.weather[0].icon);
        setTodaysWeather(currentData.weather[0].description);
    }
    

    useEffect(() => {
        //TodaysWeatherCall();
    }, [])
    
  return (
    // className='mx-20 mt-15 mb-15'
    <div >
        <Card className='max-w-[33rem] min-h-[12rem] max-h-[12rem] p-0 light-yellow border-0 mt-5 gap-0'>
            <CardHeader className='dark-yellow rounded-t-xl'>
                <div className='flex justify-between py-1 items-center'>
                    <p className='text-xl'>{city}, {country}</p>
                    <img className='w-[2rem] h-[2rem]' src="/assets/heart.png" alt="fav icon" />
                </div>
            </CardHeader>
            <CardContent>
                <div className='flex justify-around'>
                    <div>
                        <p className='text-6xl text-center pt-6'>{temp}</p>
                        <p className='text-center text-xl pt-4'>{minTemp}/{maxTemp}</p>
                    </div>
                    <div>
                        <img className='flex justify-items-center' src={`https://openweathermap.org/img/wn/${imgIcon}@2x.png`} alt="weather icon" />
                        <p className='text-xl text-center'>{todaysWeather}</p>
                    </div>
                </div>
            </CardContent>
        </Card>
        
    </div>
  )
}

export default TodaysWeather