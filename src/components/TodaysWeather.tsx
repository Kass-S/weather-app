'use client'

import React from 'react'
import { Card, CardContent, CardHeader } from './ui/card'

interface TodaysWeatherInterface {
    city: string,
    country: string,
    temp: number,
    minTemp: number,
    maxTemp: number,
    imgIcon: string,
    todaysWeather: string
}


const TodaysWeather = (props: TodaysWeatherInterface) => {
    
  return (
    // className='mx-20 mt-15 mb-15'
    <div >
        <Card className='max-w-[33rem] min-h-[12rem] max-h-[12rem] p-0 light-yellow border-0 mt-5 gap-0'>
            <CardHeader className='dark-yellow rounded-t-xl'>
                <div className='flex justify-between py-1 items-center'>
                    <p className='text-xl'>{props.city}, {props.country}</p>
                    <img className='w-[2rem] h-[2rem]' src="/assets/heart.png" alt="fav icon" />
                </div>
            </CardHeader>
            <CardContent>
                <div className='flex justify-around'>
                    <div>
                        <p className='text-6xl text-center pt-6'>{props.temp}°</p>
                        <p className='text-center text-xl pt-4'>{props.minTemp}°/{props.maxTemp}°</p>
                    </div>
                    <div>
                        <img className='flex justify-items-center' src={`https://openweathermap.org/img/wn/${props.imgIcon}@2x.png`} alt="weather icon" />
                        <p className='text-xl text-center'>{props.todaysWeather}</p>
                    </div>
                </div>
            </CardContent>
        </Card>
        
    </div>
  )
}

export default TodaysWeather