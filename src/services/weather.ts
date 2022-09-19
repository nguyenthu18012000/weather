import { sendGet } from "../helpers/axios";

const getDataWeather = async (
    params: any,
    onSuccess = (data: any) => { },
    onError = () => { }
) => {
    try {
        const dataWeatherPath = `v1/forecast.json?key=4a1daaa108484c67bb424252221309&q=${params.location}&days=${params.days}&aqi=no&alerts=no`;
        const data = await sendGet(dataWeatherPath);
        if (data) {
            onSuccess(data);
        }
    } catch (error) {
        console.log("11 error")
    }
}

const WeatherServices = {
    getDataWeather,
}

export default WeatherServices;
