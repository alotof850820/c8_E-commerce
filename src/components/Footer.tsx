import { Icon } from "@iconify/react/dist/iconify.js";

const Footer = () => {
  return (
    <div className="w-full p-3 gap-10 text-white flex items-center justify-between flex-col bg-custom-gray-100">
      <div className="w-full flex items-center justify-center flex-col gap-3">
        <div className=" w-full flex items-baseline justify-around mt-8">
          <div className="text-[0.55rem] flex items-center flex-col">
            <div className="mb-3 text-[0.68rem]">購物說明</div>
            <div>購買須知</div>
            <div>付款說明</div>
            <div>運送政策</div>
            <div>出貨公告</div>
            <div>退換貨政策</div>
            <div>電子發票說明</div>
          </div>
          <div className="text-[0.55rem] flex items-center flex-col">
            <div className="mb-3 text-[0.68rem]">About us.</div>
            <div>品牌故事</div>
            <div>門市位置</div>
            <div>會員權益</div>
          </div>
          <div className="text-[0.55rem] flex items-center flex-col">
            <div className="mb-3 text-[0.68rem]">Follow us.</div>
            <p>dress up to the nines</p>
            <div className="text-base flex mt-2">
              <Icon icon="ph:instagram-logo" />
              <Icon icon="ph:facebook-logo" />
              <Icon icon="ph:twitter-logo" />
              <Icon icon="ph:youtube-logo" />
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center text-xl gap-3">
          <Icon icon="fontisto:paypal" />
          <Icon icon="bi:alipay" />
          <Icon icon="logos:unionpay" />
          <Icon icon="logos:google-pay" />
          <Icon icon="fa-brands:cc-apple-pay" />
        </div>
      </div>
      <div className="flex justify-center gap-6 flex-col">
        <div className="flex items-center justify-center text-[0.48rem] text-[#337Ab7] gap-3 font-bold">
          <div>防詐騙宣導</div>
          <div>隱私政策</div>
          <div>條款與細則</div>
          <div>線上即時客服</div>
        </div>
        <div className="flex items-center justify-center flex-col text-[0.5rem]">
          <div className="info">2024 © C8® 六九號商店</div>
          <div className="info">門市地址：台北市士林區xx路xx號</div>
          <div className="info">客服信箱：service@nineselect.com</div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
