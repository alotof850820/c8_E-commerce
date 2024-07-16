import "./home.scss";
import Carousel from "@/components/Carousel";
import Item from "@/components/Item";
import Footer from "@/components/Footer";
import Recommend from "@/components/Recommend";

const Home = () => {
  return (
    <div className="home">
      <Carousel></Carousel>
      <Item></Item>
      <Item></Item>
      <Item></Item>
      <Recommend></Recommend>
      <Footer></Footer>
    </div>
  );
};

export default Home;
