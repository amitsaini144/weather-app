import { create } from "zustand";
import { WeatherData } from "@/types/apiResponse";

interface WeatherStore {
    weather: WeatherData | null;
    setWeather: (weather: WeatherData) => void;
}

const useWeatherStore = create<WeatherStore>((set) => ({
    weather: null,
    setWeather: (weather: WeatherData) => set({ weather }),
}));

export default useWeatherStore;