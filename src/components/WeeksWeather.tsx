'use client'

import React, { useEffect, useState } from 'react'
import { Card, CardContent, CardHeader } from './ui/card'
import { apiCall5Forcast, apiCallGeo } from '@/lib/service';

const WeeksWeather = () => {
    
    const [temp, setTemp] = useState(0);
    const [imgIcon, setImgIcon] = useState('');
    const [weekWeather, setWeekWeather] = useState('');
    
    
    const WeeksWeatherCall = async () => {
        const geoData = await apiCallGeo('stockton');
        console.log(geoData[0]);
        const data5Day = await apiCall5Forcast(geoData[0].lat, geoData[0].lon);
        console.log(data5Day);

        setTemp(data5Day.list[4].main.temp);
        setImgIcon(data5Day.list[4].weather[0].icon);
        setWeekWeather(data5Day.list[4].weather[0].description);  
    }
    

    useEffect(() => {
        //WeeksWeatherCall();
    }, [])

  return (
    <div>
        <Card className='max-w-[13rem] min-h-[25rem] max-h-[25rem] p-0 light-yellow border-0 mx-20'>
            <CardHeader className='dark-yellow rounded-t-xl py-2'>
                <div>
                    <img className='flex justify-items-center pb-1' src={`https://openweathermap.org/img/wn/${imgIcon}@2x.png`} alt="weather icon" />
                    <p className='text-2xl text-center pt-1'>{weekWeather}</p>
                </div>
            </CardHeader>
            <CardContent>
                
                <div>
                    <p className='text-6xl text-center py-4'>{temp}</p>
                    <p className='text-center text-xl pt-6'>day of week</p>
                </div>
                
                
            </CardContent>
        </Card>
        
    </div>
  )
}

export default WeeksWeather