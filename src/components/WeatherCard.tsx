"use client";

import { Cloud } from "lucide-react";
import { getWeatherIcon } from "@/components/icons";
import useWeatherStore from "@/store/weatherStore";
import { formatDateTime } from "@/lib/formatter";

export default function WeatherCard() {
    const weather = useWeatherStore((state) => state.weather);

    if (!weather) return <p className="text-sm text-neutral-400">Get the latest weather of a city.</p>;

    const roundedTemp = Math.round(weather.main.temp);
    const roundedFeelsLike = Math.round(weather.main.feels_like);
    const roundedVisibility = (weather.visibility / 1000).toFixed(1);
    const roundedWindSpeed = (weather.wind.speed).toFixed(1);
    const formattedDateTime = formatDateTime(weather.dt);

    return (
        <div className="rounded-lg shadow-md p-3 sm:p-6 flex flex-col justify-center border gap-y-4 w-full">
            <div>
                <span className="text-orange-500 text-sm">{formattedDateTime}</span>
                <h1 className="text-3xl font-semibold mb-2">{weather?.name}, {weather.sys.country}</h1>
                <p className="text-sm font-semibold tracking-wide">Feels like {roundedFeelsLike}°C. {weather.weather[0].main}.</p>
            </div>

            <div className="flex  justify-between sm:items-center">
                <div className="flex items-center gap-2 w-[40%]">
                    <div className="w-6 h-6 rounded-full text-orange-500 flex items-center justify-center">
                        {getWeatherIcon(weather.weather[0].icon)}
                    </div>
                    <p className="text-3xl font-light">{roundedTemp}°C</p>
                </div>
                <div className="flex items-center border-l border-orange-500 px-8 sm:px-4 w-[60%]">
                    <ul className="flex flex-col sm:flex-row sm:flex-wrap sm:items-center gap-x-3 gap-y-2">
                        <li className="flex items-center gap-1">
                            <Cloud className="w-4 h-4" />
                            <p className="text-xs font-light">{roundedWindSpeed}m/s NW</p>
                        </li>
                        <li className="flex items-center gap-1">
                            <Cloud className="w-4 h-4" />
                            <p className="text-xs font-light">{weather.main.pressure}hPa</p>
                        </li>
                        <li className="flex items-center gap-1">
                            <p className="text-xs font-light">Humidity: {weather.main.humidity}%</p>
                        </li>
                        <li className="flex items-center gap-1">
                            <p className="text-xs font-light">Visibility: {roundedVisibility}km</p>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}