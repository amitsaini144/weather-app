"use client";

import { useState } from "react";
import { fetchWeather } from "@/action";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import useWeatherStore from "@/store/weatherStore";
import { toast } from "sonner";
import { WeatherResponse } from "@/types/apiResponse";

export default function SearchBar() {
    const [query, setQuery] = useState("");
    const setWeather = useWeatherStore((state) => state.setWeather);
    const [loading, setLoading] = useState(false);

    function isErrorResponse(data: WeatherResponse): data is { error: string } {
        return 'error' in data;
    }

    const handleSearch = async () => {
        if (query.length <= 2) return;
        setLoading(true);

        try {
            const data = await fetchWeather(query);
            if (isErrorResponse(data))
                toast.error("City not found");
            else
                setWeather(data);
        } catch (error) {
            console.error(error);
            toast.error("Something went wrong");
        } finally {
            setLoading(false);
        }
    }

    return (
        <div className="flex w-full items-center space-x-2">
            <Input
                type="text"
                value={query}
                placeholder="Search city"
                onChange={(e) => setQuery(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSearch()}
            />
            <Button onClick={handleSearch} disabled={loading || query.length <= 2}>
                {loading ? "Loading..." : "Search"}
            </Button>
        </div>
    );
}