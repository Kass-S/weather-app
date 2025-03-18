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
    }
    name: string
    sys: {
        country: string
    }
    weather: Weather[]  

}

interface Weather {
    description: string,
    icon: string,
    main: string
}