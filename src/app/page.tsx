import Header from "./components/Header";
import HeroSection from "./components/HeroSection";

export default function Home() {
  return (
    <div className="p-4 bg-black overflow-hidden">
      <Header/>
      <div className="border-gray-500 w-full"></div>
      <HeroSection/>
    </div>
  );
}
