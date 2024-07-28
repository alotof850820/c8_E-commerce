import Carousel from "@/components/Carousel";
import Item from "@/components/Item";
import Footer from "@/components/Footer";
import useRouter from "@/router/hook";
// import Recommend from "@/components/Recommend";

const Home = () => {
  const { goRouter } = useRouter();
  const content = [
    "https://shoplineimg.com/553d27fae36c8e318500006e/653a410c67e09500171b6619/2160x.webp?source_format=jpg",
    "https://shoplineimg.com/553d27fae36c8e318500006e/6656aae18b60a80019dbf24b/2160x.webp?source_format=jpeg",
    "https://shoplineimg.com/553d27fae36c8e318500006e/653a410c67e09500171b6619/2160x.webp?source_format=jpg",
    "https://shoplineimg.com/553d27fae36c8e318500006e/6656aae18b60a80019dbf24b/2160x.webp?source_format=jpeg",
    "https://shoplineimg.com/553d27fae36c8e318500006e/653a410c67e09500171b6619/2160x.webp?source_format=jpg",
  ];
  const content1 = [
    "https://shoplineimg.com/553d27fae36c8e318500006e/6421381349864d001da47ac3/2160x.webp?source_format=jpg",
    "https://shoplineimg.com/553d27fae36c8e318500006e/6421380b3abca853c3b90d57/2160x.webp?source_format=jpg",
    "https://shoplineimg.com/553d27fae36c8e318500006e/642137fa9b569f001416c7e7/2160x.webp?source_format=jpg",
    "https://shoplineimg.com/553d27fae36c8e318500006e/6421381349864d001da47ac3/2160x.webp?source_format=jpg",
  ];
  return (
    <div className="w-full h-full xs:mt-[5.5rem] mt-[3.5rem] flex flex-col gap-3 items-center">
      <div
        onClick={goRouter("product")}
        className="w-full cursor-pointer"
      >
        <img
          className="w-full h-full object-contain"
          src="https://shoplineimg.com/553d27fae36c8e318500006e/668b9d96e938cbae591bfa56/2160x.webp?source_format=jpg"
          alt=""
        />
      </div>

      <Carousel content={content} widthNumber={80} id="carousel"></Carousel>
      <div className="w-[78%] cursor-pointer">
        <img
          className="w-full h-full object-contain"
          src="https://shoplineimg.com/553d27fae36c8e318500006e/6656ac6796a877001379e4e8/1296x.webp?source_format=jpg"
          alt=""
        />
      </div>
      <div className="w-[78%] cursor-pointer">
        <img
          className="w-full h-full object-contain"
          src="https://shoplineimg.com/553d27fae36c8e318500006e/6656ac73e46d78001c6b91d5/1296x.webp?source_format=jpg"
          alt=""
        />
      </div>
      <div className="w-[78%] cursor-pointer flex gap-4">
        <img
          className="w-[48%] h-full object-contain"
          src="https://shoplineimg.com/553d27fae36c8e318500006e/653a40848271020014b2156c/720x.webp?source_format=jpg"
          alt=""
        />
        <img
          className="w-[48%]  h-full object-contain"
          src="https://shoplineimg.com/553d27fae36c8e318500006e/653a408eb7191600208559a2/720x.webp?source_format=jpg"
          alt=""
        />
      </div>
      <div className="w-[78%] cursor-pointer">
        <img
          className="w-full h-full object-contain"
          src="https://shoplineimg.com/553d27fae36c8e318500006e/653a3da3f236a60014378153/1296x.webp?source_format=jpg"
          alt=""
        />
      </div>
      <div className="w-[78%] cursor-pointer">
        <img
          className="w-full h-full object-contain"
          src="https://shoplineimg.com/553d27fae36c8e318500006e/653a3e00e782ac000e092dbe/1296x.webp?source_format=jpg"
          alt=""
        />
      </div>
      <div className="w-[78%] cursor-pointer">
        <img
          className="w-full h-full object-contain"
          src="https://shoplineimg.com/553d27fae36c8e318500006e/64eee9175653f70020dd2a71/1296x.webp?source_format=jpg"
          alt=""
        />
      </div>
      <Carousel content={content1} widthNumber={100} id="carousel2"></Carousel>
      <Item
        componentId={1}
        p1={
          "https://shoplineimg.com/553d27fae36c8e318500006e/65533bdaf2ef84001a611176/720x.webp?source_format=jpg"
        }
        p6={
          "https://shoplineimg.com/553d27fae36c8e318500006e/6685398f48aa650010312f96/375x.webp?source_format=jpeg"
        }
      ></Item>
      <Item
        componentId={2}
        p1={
          "https://shoplineimg.com/553d27fae36c8e318500006e/643cfc677a1b6b000e7762f8/720x.webp?source_format=jpg"
        }
        p6={
          "https://shoplineimg.com/553d27fae36c8e318500006e/66843fb2b5719e00169d3417/375x.webp?source_format=jpeg"
        }
      ></Item>
      {/* <Recommend></Recommend> */}
      <div className="w-full h-full flex items-center justify-center flex-col gap-2">
        <div className="flex items-center justify-center">
          <div className="text-custom-gray-150 font-semibold text-[0.65rem]">
            反詐騙宣導
          </div>
        </div>
        <div
          className="w-[80%] h-52"
          style={{
            background: `url('https://img.shoplineapp.com/media/image_clips/656ebe9cde64d0001a4bc978/original.jpg?1701756571') no-repeat center center / contain`,
          }}
        ></div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Home;
