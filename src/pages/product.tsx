import Footer from "@/components/Footer";
import { Icon } from "@iconify/react/dist/iconify.js";
// import Recommend from "@/components/Recommend";

const Home = () => {
  return (
    <div className="w-full h-full xs:mt-[5.5rem] mt-[3.5rem] flex flex-col">
      <div className="text-[0.5rem] flex justify-start w-full py-2 text-custom-gray-150 font-bold">
        全部商品 / 最新消息 / 新品上市
      </div>
      <div className="flex gap-3">
        <div className="cursor-pointer flex flex-col gap-1.5 ">
          {[1, 2, 3, 4, 5].map((_) => (
            <div
              className="w-[2.5rem] h-[2.5rem] cursor-pointer border-custom-gray-100 border-2"
              style={{
                backgroundImage:
                  "url('https://shoplineimg.com/553d27fae36c8e318500006e/6656ac6796a877001379e4e8/1296x.webp?source_format=jpg')",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            ></div>
          ))}
        </div>

        <div className="cursor-pointer">
          <div
            className="w-[15rem] h-[23rem] cursor-pointer"
            style={{
              backgroundImage:
                "url('https://shoplineimg.com/553d27fae36c8e318500006e/6656ac6796a877001379e4e8/1296x.webp?source_format=jpg')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          ></div>
        </div>

        <div className="w-full p-1">
          <div className="text-[0.9rem] font-bold">
            【預購】RÉTRO 實木桌上收納櫃
          </div>
          <div className="text-[0.5rem] font-bold text-custom-gray-200 p-2 bg-custom-gray-50 border-l-[2.5px] border-custom-gray-100">
            指定分類，24SS LIFESTYLE｜兩件95折 三件9折
          </div>
          <div className=" mt-2">
            <div className="text-custom-gray-100 text-[0.8rem] font-bold">
              NT$4280
            </div>
            <div className=" mt-2 bg-custom-gray-300 rounded-sm text-white p-1 w-fit text-[0.55rem]">
              預計 25 日後出貨（工作日不含假日）
            </div>
          </div>

          <div className="flex items-center justify-center gap-5 my-2 w-full">
            <Icon
              className="text-[1.5rem] text-custom-gray-100 rounded-full cursor-pointer"
              icon="icons8:minus"
            />
            <div className="text-[0.8rem]">1</div>
            <Icon
              className=" text-[1.5rem] text-custom-gray-100 rounded-full cursor-pointer"
              icon="icons8:plus"
            />
          </div>

          <div className="flex items-center justify-center gap-1 text-[0.5rem] font-bold">
            <div className="w-full text-center bg-custom-gray-100 p-1.5 text-white">
              加入購物車
            </div>
            <div className="flex items-center justify-center w-full text-custom-yellow-100 text-center bg-custom-gray-100 p-1.5">
              <Icon className="mb-[1px]" icon="bi:cart" />
              立即購買
            </div>
          </div>

          <div className="mt-6 border-t-[1px]">
            <div className="text-[0.6rem] font-bold mt-3">商品描述</div>
            <div>balbalblablablablablbalbalab</div>
            <div>balbalblablablablablbalbalab</div>
            <div>balbalblablablablablbalbalab</div>
            <div>balbalblablablablablbalbalab</div>
            <div>balbalblablablablablbalbalab</div>
            <div>balbalblablablablablbalbalab</div>
            <div>balbalblablablablablbalbalab</div>
            <div>balbalblablablablablbalbalab</div>
            <div>balbalblablablablablbalbalab</div>
            <div>balbalblablablablablbalbalab</div>
            <div>balbalblablablablablbalbalab</div>
            <div>balbalblablablablablbalbalab</div>
            <div>balbalblablablablablbalbalab</div>
            <div>balbalblablablablablbalbalab</div>
            <div>balbalblablablablablbalbalab</div>
            <div>balbalblablablablablbalbalab</div>
            <div>balbalblablablablablbalbalab</div>
          </div>
          <div className=" border-t-[1px]">
            <div className="text-[0.6rem] font-bold my-3">送貨及付款方式</div>
          </div>
          <div className=" border-t-[1px]">
            <div className="text-[0.6rem] font-bold my-3">顧客評價</div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Home;
