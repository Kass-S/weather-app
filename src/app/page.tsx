import TodaysWeather from "@/components/TodaysWeather";


export default function Home() {
  return (
    <div className="min-h-screen min-w-screen bg-[url(/assets/weatherbg.png)] bg-no-repeat bg-cover font-farro">
      <TodaysWeather/>
      
    </div>
  );
}
