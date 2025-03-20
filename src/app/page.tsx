import TodaysWeather from "@/components/TodaysWeather";
import WeeksWeather from "@/components/WeeksWeather";


export default function Home() {
  return (
    <div className="m-0 min-h-screen min-w-screen bg-[url(/assets/weatherbg.png)] bg-no-repeat bg-cover font-farro float-right">
      <div>
        <TodaysWeather/>

        <WeeksWeather/>
      </div>
    </div>
  );
}
