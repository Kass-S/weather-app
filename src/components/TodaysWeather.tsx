import React from 'react'
import { Card, CardContent, CardHeader } from './ui/card'

const TodaysWeather = () => {
  return (
    <div>
        <Card className='max-w-[35rem] min-h-[13rem] p-0 light-yellow border-0'>
            <CardHeader className='dark-yellow rounded-t-xl'>
                <p>City, State Country</p>
                <p>fav image</p>
            </CardHeader>
            <CardContent>
                <p>temperature</p>
                <p>high/low</p>
                <p>weather image</p>
                <p>weather</p>
            </CardContent>
        </Card>
    </div>
  )
}

export default TodaysWeather