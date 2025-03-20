'use client'

import React from 'react'
import { Card, CardContent, CardHeader } from './ui/card'

const WeeksWeather = () => {

  return (
    <div>
        <Card className='max-w-[13rem] min-h-[22rem] max-h-[22rem] p-0 light-yellow border-0 mx-20'>
            <CardHeader className='dark-yellow rounded-t-xl py-16'>
                <div>
                    {/* <img className='flex justify-items-center pb-1' src="" alt="weather icon" /> */}
                    <p className='text-2xl text-center pt-1'>weather</p>
                </div>
            </CardHeader>
            <CardContent>
                
                <div>
                    <p className='text-5xl text-center py-1'>temp</p>
                    <p className='text-center text-xl pt-1'>day of week</p>
                </div>
                
                
            </CardContent>
        </Card>
        
    </div>
  )
}

export default WeeksWeather