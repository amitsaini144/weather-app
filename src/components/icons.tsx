import { Sun, Moon, Cloud, CloudRain, CloudLightning, Snowflake, Haze } from "lucide-react";
import { JSX } from "react";

export const getWeatherIcon = (iconCode: string) => {
    const iconMap: Record<string, JSX.Element> = {
        "01d": <Sun className="w-6 h-6 text-yellow-500" />, // ☀️ Clear (Day)
        "01n": <Moon className="w-6 h-6 text-gray-500" />, // 🌙 Clear (Night)
        "02d": <Cloud className="w-6 h-6 text-gray-400" />, // ⛅ Few Clouds (Day)
        "02n": <Cloud className="w-6 h-6 text-gray-500" />, // ⛅ Few Clouds (Night)
        "03d": <Cloud className="w-6 h-6 text-gray-400" />, // 🌥 Scattered Clouds
        "03n": <Cloud className="w-6 h-6 text-gray-500" />,
        "04d": <Cloud className="w-6 h-6 text-gray-500" />, // ☁ Overcast Clouds
        "04n": <Cloud className="w-6 h-6 text-gray-600" />,
        "09d": <CloudRain className="w-6 h-6 text-blue-500" />, // 🌧 Shower Rain
        "09n": <CloudRain className="w-6 h-6 text-blue-600" />,
        "10d": <CloudRain className="w-6 h-6 text-blue-500" />, // 🌦 Rain
        "10n": <CloudRain className="w-6 h-6 text-blue-600" />,
        "11d": <CloudLightning className="w-6 h-6 text-yellow-500" />, // ⛈ Thunderstorm
        "11n": <CloudLightning className="w-6 h-6 text-yellow-600" />,
        "13d": <Snowflake className="w-6 h-6 text-blue-300" />, // ❄ Snow
        "13n": <Snowflake className="w-6 h-6 text-blue-400" />,
        "50d": <Haze className="w-6 h-6 text-gray-400" />, // 🌫 Mist
        "50n": <Haze className="w-6 h-6 text-gray-500" />,
    };

    return iconMap[iconCode] || <Cloud className="w-6 h-6 text-gray-400" />; // Default: Cloud
};