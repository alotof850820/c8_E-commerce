import Carousel from "@/components/Carousel";
import Item from "@/components/Item";
import Footer from "@/components/Footer";
import Recommend from "@/components/Recommend";

const Home = () => {
  return (
    <div className="w-full h-full mt-[6.5rem] flex flex-col gap-3 items-center">
      <div className="w-full h-[43vw] cursor-pointer">
        <img
          className="w-full h-full object-contain"
          src="https://fakeimg.pl/1920x1080"
          alt=""
        />
      </div>

      <Carousel widthNumber={90} id="carousel"></Carousel>
      <div className="w-full h-[43vw] cursor-pointer">
        <img
          className="w-full h-full object-contain"
          src="https://fakeimg.pl/1920x1080"
          alt=""
        />
      </div>
      <div className="w-full h-[43vw] cursor-pointer">
        <img
          className="w-full h-full object-contain"
          src="https://fakeimg.pl/1920x1080"
          alt=""
        />
      </div>
      <div className="w-full h-[43vw] cursor-pointer">
        <img
          className="w-full h-full object-contain"
          src="https://fakeimg.pl/1920x1080"
          alt=""
        />
      </div>
      <Carousel widthNumber={100} id="carousel2"></Carousel>
      <Item></Item>
      <Item></Item>
      <Item></Item>
      <Recommend></Recommend>
      <Footer></Footer>
    </div>
  );
};

export default Home;
