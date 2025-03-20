'use client'

import React, { useState } from 'react'
import { Card, CardContent, CardHeader } from './ui/card'
import { apiCallCurrent, apiCallGeo, apiCall5Forcast } from '@/lib/service'

const TodaysWeather = () => {
    const [city, setCity] = useState('');
    const [country, setCountry] = useState('');
    


    const test = async () => {
        // const testData = await apiCallGeo('stockton');
        // console.log(testData[0]);
        // const testCurrent = await apiCallCurrent(37.9577016, -121.2907796);
        // console.log(testCurrent);
        //const test5Day = await apiCall5Forcast(37.9577016, -121.2907796);
        //console.log(test5Day);
    }
    test()
    
  return (
    <div className='mx-20 mt-15 mb-15'>
        <Card className='max-w-[33rem] min-h-[12rem] max-h-[12rem] p-0 light-yellow border-0 mt-5 gap-4'>
            <CardHeader className='dark-yellow rounded-t-xl'>
                <div className='flex justify-between py-1 items-center'>
                    <p className='text-xl'>City, Country</p>
                    <img className='w-[2rem] h-[2rem]' src="/assets/heart.png" alt="fav icon" />
                </div>
            </CardHeader>
            <CardContent>
                <div className='flex justify-around'>
                    <div>
                        <p className='text-5xl text-center pb-2'>temp</p>
                        <p className='text-center text-xl pt-2'>high/low</p>
                    </div>
                    <div>
                        {/* <img className='flex justify-items-center' src="" alt="weather icon" /> */}
                        <p className='text-xl text-center'>weather</p>
                    </div>
                </div>
            </CardContent>
        </Card>
        
    </div>
  )
}

export default TodaysWeather