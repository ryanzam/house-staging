import GetInTouch from "./components/GetInTouch";
import HeroSection from "./components/HeroSection";
import Mission from "./components/Mission";

export default function Home() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <Mission />
      <GetInTouch />
    </div>
  );
}
