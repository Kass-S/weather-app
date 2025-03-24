'use client'

import React from 'react'
import { Card, CardContent, CardHeader } from './ui/card'

interface WeeksWeatherInterface {
    temp: number,
    imgIcon: string,
    weekWeather: string,
    dayofweek: string
}

const WeeksWeather = (props: WeeksWeatherInterface) => {

  return (
    <div className='mt-4'>
        <Card className='min-w-[13rem] max-w-[13rem] min-h-[25rem] max-h-[25rem] p-0 light-yellow border-0 flex justify-self-center'>
            <CardHeader className='dark-yellow rounded-t-xl py-2 min-h-48 max-h-48'>
                <div>
                    <img className='flex justify-self-center pb-1' src={props.imgIcon} alt="weather icon" />
                    <p className='text-2xl text-center pt-1'>{props.weekWeather}</p>
                </div>
            </CardHeader>
            <CardContent>
                
                <div>
                    <p className='text-6xl text-center py-4'>{props.temp}°</p>
                    <p className='text-center text-xl pt-6'>{props.dayofweek}</p>
                </div>
                
                
            </CardContent>
        </Card>
        
    </div>
  )
}

export default WeeksWeather