import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import FeaturedLogosSection from "./components/FeaturedLogosSection";
import CardIntro from "./components/CardIntro";
import CardFeatures from "./components/CardFeatures";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="p-4 bg-black overflow-hidden">
      <Header/>
      <HeroSection/>
      <FeaturedLogosSection/>
      <CardIntro/>
      <CardFeatures/>
      <Footer/>
    </div>
  );
}
