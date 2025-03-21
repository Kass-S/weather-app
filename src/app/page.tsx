
import TodaysWeather from "@/components/TodaysWeather";
import WeeksWeather from "@/components/WeeksWeather";

export default function Home() {

  return (
    <div className="m-0 min-h-screen min-w-screen bg-[url(/assets/weatherbg.png)] bg-no-repeat bg-cover font-farro float-right">
      <div className="grid grid-rows-3 grid-cols-2">
        <div className="row-span-3">
          <TodaysWeather/>
        </div>
        <div className="col-[2] ">
          <input type="text" placeholder="Search a City" className="light-yellow p-2 rounded-md" />
        </div>        
      </div>
      
      <WeeksWeather/>
      
    </div>
  );
}
