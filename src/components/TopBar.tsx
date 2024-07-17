import { Icon } from "@iconify/react";
import { FC, useEffect, useState } from "react";
import "./topbar.scss";
import { TopBarProps } from "./types/topbar";

const TopBar: FC<TopBarProps> = ({ num }) => {
  const [number, setNumber] = useState(num);
  const texts = [
    "CALVIN KLEIN現貨｜兩件9折",
    "CALVIN KLEIN現貨｜兩件8折",
    "CALVIN KLEIN現貨｜兩件7折",
    "CALVIN KLEIN現貨｜兩件6折",
    "CALVIN KLEIN現貨｜兩件9折",
  ];
  const [scrollCounts, setScrollCounts] = useState(texts.map(() => 0));

  useEffect(() => {
    const interval = setInterval(() => {
      setScrollCounts((prevCounts) =>
        prevCounts.map((count) => (count + 1) % texts.length)
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 w-full overflow-hidden h-24 bg-white flex flex-col items-center font-bold text-black shadow-[0_2px_12px_0_rgba(0,0,0,0.1)] box-border text-[24px] z-[999]">
      <div className=" text-custom-gray-200 w-full relative bg-custom-gray-100  min-h-[24%]">
        {texts.map((text, index) => (
          <div
            key={index}
            className={`w-full flex items-center justify-center text-[8.5px] py-1.5`}
            style={{
              transform: `translateY(-${scrollCounts[index] * 100}%)`,
              transition:
                scrollCounts[index] === 0 ? "none" : "transform 2s ease",
            }}
          >
            {text}
          </div>
        ))}
      </div>
      <div className="min-h-[38%] px-2 font-normal text-custom-gray-300 text-base z-[1001] bg-white flex justify-between w-full items-center">
        <div className="text-[0.5rem] flex items-center gap-2">
          <div className="flex items-center justify-center gap-[0.1rem]">
            <Icon icon="material-symbols:attach-money" />
            <span>TWD</span>
            <Icon icon="pepicons-pencil:angle-down" />
          </div>
          <div className="flex items-center justify-center gap-[0.1rem]">
            <Icon icon="icon-park-outline:earth" />
            <span>繁體中文</span>
            <Icon icon="pepicons-pencil:angle-down" />
          </div>
        </div>
        <div className="center">C=8</div>

        <div className="text-[0.75rem] flex items-center gap-2">
          <Icon icon="bi:chat" />
          <Icon className="text-[1rem] " icon="bitcoin-icons:search-outline" />
          <Icon icon="solar:user-linear" />
          <div className="relative" onClick={() => setNumber(number + 1)}>
            <Icon className="text-[1rem] " icon="bi:cart" />
            <span className="absolute top-[-0.27rem] right-1.5 text-[0.4rem] text-red-400">
              {number}
            </span>
          </div>
        </div>
      </div>
      <div className=" min-h-[38%] h-auto px-2 font-normal text-custom-gray-300 text-base z-[1001] bg-custom-gray-100 flex justify-center w-full items-center">
        <div className="px-10 text-white text-[0.6rem] flex justify-center items-center gap-3 flex-wrap">
          {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((_, index) => {
            const [isOpen, setIsOpen] = useState(false);
            return (
              <div
                key={index}
                className="relative inline-block"
                onMouseEnter={() => setIsOpen(true)}
                onMouseLeave={() => setIsOpen(false)}
              >
                <div className="flex items-center justify-center gap-[0.1rem] group">
                  <span>最新消息</span>
                  <Icon icon="pepicons-pencil:angle-down" />
                </div>
                <div
                  style={{
                    top: '11.5%',
                    left: `${index * 10}%`,
                    display: isOpen ? "block" : "none",
                  }}
                  className="fixed left-0 mt-2 w-48 bg-custom-gray-100 borderrounded-md shadow-lg group-hover:block"
                >
                  <ul className="py-1">
                    <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                      选项1
                    </li>
                    <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                      选项2
                    </li>
                    <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                      选项3
                    </li>
                  </ul>
                </div>
              </div>
            );
          })}

          {/* <div className="flex items-center justify-center gap-[0.1rem]">
            <span>所有品牌</span>
            <Icon icon="pepicons-pencil:angle-down" />
          </div>
          <div className="flex items-center justify-center gap-[0.1rem]">
            <span>NIKE</span>
            <Icon icon="pepicons-pencil:angle-down" />
          </div>
          <div className="flex items-center justify-center gap-[0.1rem]">
            <span>NEW BALANCE</span>
            <Icon icon="pepicons-pencil:angle-down" />
          </div>
          <div className="flex items-center justify-center gap-[0.1rem]">
            <span>服飾配件</span>
            <Icon icon="pepicons-pencil:angle-down" />
          </div>
          <div className="flex items-center justify-center gap-[0.1rem]">
            <span>質感生活</span>
            <Icon icon="pepicons-pencil:angle-down" />
          </div>
          <div className="flex items-center justify-center gap-[0.1rem]">
            <span>香水香氣</span>
            <Icon icon="pepicons-pencil:angle-down" />
          </div>
          <div className="flex items-center justify-center gap-[0.1rem]">
            <span>零碼專區</span>
            <Icon icon="pepicons-pencil:angle-down" />
          </div>
          <div className="flex items-center justify-center gap-[0.1rem]">
            <span>關於C8</span>
            <Icon icon="pepicons-pencil:angle-down" />
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default TopBar;
