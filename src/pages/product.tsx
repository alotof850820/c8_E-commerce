import Footer from "@/components/Footer";
import { Icon } from "@iconify/react/dist/iconify.js";
// import Recommend from "@/components/Recommend";

const Home = () => {
  return (
    <div className="w-full h-full xs:mt-[6rem] mt-[3.5rem] flex flex-col gap-5">
      <div className="flex gap-3 flex-col mx-auto w-full xs:w-[600px] px-5">
        <div className="text-[0.5rem] flex justify-start w-full py-2 text-custom-gray-150 font-bold">
          全部商品 / 最新消息 / 新品上市
        </div>
        <div className="flex gap-3">
          <div className=" cursor-pointer flex flex-col gap-1.5 ">
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
          <div className="w-full flex gap-3 flex-col">
            {[1, 2, 3].map((_) => (
              <div
                className="w-full h-[23rem] cursor-pointer"
                style={{
                  backgroundImage:
                    "url('https://shoplineimg.com/553d27fae36c8e318500006e/6656ac6796a877001379e4e8/1296x.webp?source_format=jpg')",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              ></div>
            ))}
          </div>

          <div className="xs:block hidden w-full p-1">
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
              <div className="w-full text-center bg-custom-gray-100 p-1.5 text-white cursor-pointer">
                加入購物車
              </div>
              <div className="cursor-pointer flex items-center justify-center w-full text-custom-yellow-100 text-center bg-custom-gray-100 p-1.5">
                <Icon className="mb-[1px]" icon="bi:cart" />
                立即購買
              </div>
            </div>

            <div className="mt-6 border-t-[1px] text-[0.6rem] break-words">
              <div className="text-[0.6rem] font-bold mt-3">商品描述</div>
              RÉTRO 實木桌上收納櫃 尺寸：49.5*13.5*47cm 材質：新西蘭進口松木
              注意事項 ✔️【預購】商品不接受退換貨服務
              依消費者要求所為之客製化給付 不提供『個人因素退換貨』
              確認尺寸正確再進行下單 下單即表示同意
              ✔️【現貨】商品提供七日內退貨服務 若因尺寸不合或未符期望
              收到後七日內與客服聯繫 並遵循玖號商店退貨辦法辦理退貨 ✔️
              賣場部分商品包裝為“破壞袋”寄出
              若需要紙箱加固包裝，請至賣場頁面做紙箱加購 ✔️
              賣場商品如遇缺貨斷貨等因素，
              會以訂單訊息通知取消，造成不便敬請見諒
            </div>
            <div className=" border-t-[1px] text-[0.6rem] break-words">
              <div className="text-[0.6rem] font-bold my-3">送貨及付款方式</div>
              送貨方式 一般宅配 $75 (須先完成付款才進行配送，限台灣本島)
              付款方式 LINE Pay Apple Pay 信用卡付款（VISA / Master/JCB）
              轉帳匯款(付款後請私訊臉書/Line@進行人工對帳) zingala
              無卡分期（分3期），先買後付 zingala 無卡分期（分6期），先買後付
              zingala 無卡分期（分12期），先買後付
            </div>
            <div className=" border-t-[1px] text-[0.6rem] break-words">
              <div className="text-[0.6rem] font-bold my-3">顧客評價</div>
              尚未有任何評價
            </div>
          </div>
        </div>

        <div className="xs:hidden block w-full p-1">
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
            <div className="w-full text-center bg-custom-gray-100 p-1.5 text-white cursor-pointer">
              加入購物車
            </div>
            <div className="cursor-pointer flex items-center justify-center w-full text-custom-yellow-100 text-center bg-custom-gray-100 p-1.5">
              <Icon className="mb-[1px]" icon="bi:cart" />
              立即購買
            </div>
          </div>

          <div className="mt-6 border-t-[1px] text-[0.6rem] break-words">
            <div className="text-[0.6rem] font-bold mt-3">商品描述</div>
            RÉTRO 實木桌上收納櫃 尺寸：49.5*13.5*47cm 材質：新西蘭進口松木
            注意事項 ✔️【預購】商品不接受退換貨服務 依消費者要求所為之客製化給付
            不提供『個人因素退換貨』 確認尺寸正確再進行下單 下單即表示同意
            ✔️【現貨】商品提供七日內退貨服務 若因尺寸不合或未符期望
            收到後七日內與客服聯繫 並遵循玖號商店退貨辦法辦理退貨 ✔️
            賣場部分商品包裝為“破壞袋”寄出
            若需要紙箱加固包裝，請至賣場頁面做紙箱加購 ✔️
            賣場商品如遇缺貨斷貨等因素， 會以訂單訊息通知取消，造成不便敬請見諒
          </div>
          <div className=" border-t-[1px] text-[0.6rem] break-words">
            <div className="text-[0.6rem] font-bold my-3">送貨及付款方式</div>
            送貨方式 一般宅配 $75 (須先完成付款才進行配送，限台灣本島) 付款方式
            LINE Pay Apple Pay 信用卡付款（VISA / Master/JCB）
            轉帳匯款(付款後請私訊臉書/Line@進行人工對帳) zingala
            無卡分期（分3期），先買後付 zingala 無卡分期（分6期），先買後付
            zingala 無卡分期（分12期），先買後付
          </div>
          <div className=" border-t-[1px] text-[0.6rem] break-words">
            <div className="text-[0.6rem] font-bold my-3">顧客評價</div>
            尚未有任何評價
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Home;
