
export interface WeatherData {
    name: string;
    main: {
        temp: number;
        feels_like: number;
        humidity: number;
        pressure: number;
    };
    wind: {
        speed: number;
    };
    sys: {
        country: string;
    };
    weather: Array<{
        main: string;
        icon: string;
    }>;
    visibility: number;
    dt: number;
}

export type WeatherResponse = WeatherData | { error: string };
