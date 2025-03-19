'use client'

import React from 'react'
import { Card, CardContent, CardHeader } from './ui/card'
import { apiCallCurrent, apiCallGeo, apiCall5Forcast } from '@/lib/service'

const TodaysWeather = () => {
    const test = async () => {
        const testData = await apiCallGeo('stockton');
        console.log(testData[0]);
        const testCurrent = await apiCallCurrent(37.9577016, -121.2907796);
        console.log(testCurrent.weather[0].main);
        const test5Day = await apiCall5Forcast(37.9577016, -121.2907796);
        console.log(test5Day);
    }
    test()
    
  return (
    <div>
        <Card className='max-w-[33rem] min-h-[13rem] max-h-[13rem] p-0 light-yellow border-0'>
            <CardHeader className='dark-yellow rounded-t-xl'>
                <div className='flex justify-between py-1'>
                    <p className='text-2xl'>City, State Country</p>
                    <img className='w-[2rem] h-[2rem]' src="/assets/heart.png" alt="fav icon" />
                </div>
            </CardHeader>
            <CardContent>
                <div className='flex justify-around'>
                    <div>
                        <p className='text-6xl text-center pb-2'>temp</p>
                        <p className='text-center text-2xl pt-2'>high/low</p>
                    </div>
                    <div>
                        {/* <img className='flex justify-items-center' src="" alt="weather icon" /> */}
                        <p className='text-2xl text-center'>weather</p>
                    </div>
                </div>
            </CardContent>
        </Card>
        
    </div>
  )
}

export default TodaysWeather