import { CurrentCall, Day5, GeoCall } from "@/interfaces/interfaces";
import { APIKEY } from "./environment";

const apiCallGeo = async (city: string) => {
    const response = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=${APIKEY}`);
    const data: GeoCall[] = await response.json();
    return data;
}

const apiCallCurrent = async (lat: number, lon: number) => {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=imperial&appid=${APIKEY}`);
    const data: CurrentCall = await response.json();
    return data;
}

const apiCall5Forcast = async (lat: number, lon: number) => {
    const response = await fetch(
        `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=imperial&appid=${APIKEY}`
      );
      const data: Day5 = await response.json();
      return data;
}

export {apiCallGeo, apiCallCurrent, apiCall5Forcast}