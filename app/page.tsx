import GetInTouch from "./components/GetInTouch";
import Mission from "./components/Mission";
import ShowCase from "./components/ShowCase";
import CarouselSwiper from "./components/CarouselSwiper";

export default function Home() {
  return (
    <div className="min-h-screen">
      <CarouselSwiper />
      <Mission />
      <GetInTouch />
      <ShowCase />
    </div>
  );
}
