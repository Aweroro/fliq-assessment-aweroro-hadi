import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import FeaturedLogosSection from "./components/FeaturedLogosSection";
import CardIntro from "./components/CardIntro";
import CardFeatures from "./components/CardFeatures";
import Footer from "./components/Footer";
import MaxWidthWrapper from "./components/MaxWidthWrapper";

export default function Home() {
  return (
    <div className="p-4 bg-black overflow-hidden">
      <MaxWidthWrapper>
        <Header/>
        <HeroSection/>
        <FeaturedLogosSection/>
        <CardIntro/>
        <CardFeatures/>
        <Footer/>
      </MaxWidthWrapper>
    </div>
  );
}
