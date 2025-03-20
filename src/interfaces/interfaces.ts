export interface GeoCall {
    country: string,
    lat: number,
    local_names: {en: string},
    lon: number,
    name: string,
    state: string
}

export interface CurrentCall {
    main: {
        temp: number,
        temp_max: number,
        temp_min: number
    },
    name: string
    sys: {
        country: string
    },
    weather: WeatherCurrent[]  

}

interface WeatherCurrent {
    description: string,
    icon: string,
    main: string
}

export interface Day5 {
    city: {
        coord: {
            lat: number,
            lon: number
        },
        name: string,
        country: string
    }
    list: List[]
}

interface List {
    main: {
        temp: number
    },
    weather: Weather5Day[]
}

interface Weather5Day {
    description: string,
    icon: string,
    main: string
}