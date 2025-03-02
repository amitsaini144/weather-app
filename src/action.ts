"use server";

import axios from "axios";
import { WeatherData } from "@/types/apiResponse";

export async function fetchWeather(city: string) {
    try {
        const apiKey = process.env.NEXT_PUBLIC_WEATHER_API_KEY;
        const res = await axios.get<WeatherData>(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`);

        if (!res.data)
            throw new Error("City not found");

        return res.data;
    }
    catch (error) {
        if (error instanceof Error)
            return { error: error.message };
        return { error: "Something went wrong" };
    }
}
