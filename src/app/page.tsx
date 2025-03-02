import WeatherCard from "@/components/WeatherCard";
import SearchBar from "@/components/SearchBar";

export default function Home() {

  return (
    <div className="flex flex-col items-center justify-center h-screen px-2">
      <div className="flex flex-col items-center justify-center gap-4 max-w-xl w-full">
        <SearchBar />
        <WeatherCard />
      </div>
    </div>
  );
}
