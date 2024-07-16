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
        prevCounts.map(
          (count) => (count + 1) % texts.length 
        )
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);
  return (
    <div className="fixed inset-0 w-full overflow-hidden h-7 bg-white flex flex-col items-center justify-between font-bold text-black shadow-[0_2px_12px_0_rgba(0,0,0,0.1)] box-border text-[24px] z-[999]">
      <div className="text-custom-gray-200 w-full relative bg-custom-gray-100">
        {texts.map((text, index) => (
          <div
            key={index}
            className={`w-full flex items-center justify-center text-[8.5px] py-2`}
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
      {/* <div className="text-custom-gray-200 flex items-center justify-center text-[8.5px] h-6 w-full bg-custom-gray-100">
        CALVIN KLEIN現貨｜兩件9折
      </div>
      <div className="text-custom-gray-200 flex items-center justify-center text-[8.5px] h-6 w-full bg-custom-gray-100">
        CALVIN KLEIN現貨｜兩件9折
      </div>
      <div className="text-custom-gray-200 flex items-center justify-center text-[8.5px] h-6 w-full bg-custom-gray-100">
        CALVIN KLEIN現貨｜兩件9折
      </div>
      <div className="text-custom-gray-200 flex items-center justify-center text-[8.5px] h-6 w-full bg-custom-gray-100">
        CALVIN KLEIN現貨｜兩件9折
      </div> */}
      {/* <div className="flex justify-between w-full items-center">
        <div className="flex items-center gap-2">
          <Icon icon="bitcoin-icons:search-outline" />
          <Icon icon="solar:user-linear" />
        </div>

        <div className="center">C=8</div>

        <div className="flex items-center gap-2">
          <button onClick={() => setNumber(number + 1)}>+1</button>
          <div className="relative">
            <Icon icon="bi:cart" />
            <span className="absolute top-1 right-2 text-xs text-red-400">
              <div className="number">{number}</div>
            </span>
          </div>
        </div>
      </div> */}
      {/* <div className="top_bar">
        <div className="left">
          <Icon icon="bitcoin-icons:search-outline" />
          <Icon icon="solar:user-linear" />
        </div>

        <div className="center">C=8</div>

        <div className="right">
          <button onClick={() => setNumber(number + 1)}>+1</button>
          <div className="cart_box">
            <Icon icon="bi:cart" />
            <span className="number_box">
              <div className="number">{number}</div>
            </span>
          </div>

          <div className="list">
            <Icon icon="ph:list" />
          </div>
        </div>
      </div>
      <div className="top_bar">
        <div className="left">
          <Icon icon="bitcoin-icons:search-outline" />
          <Icon icon="solar:user-linear" />
        </div>

        <div className="center">C=8</div>

        <div className="right">
          <button onClick={() => setNumber(number + 1)}>+1</button>
          <div className="cart_box">
            <Icon icon="bi:cart" />
            <span className="number_box">
              <div className="number">{number}</div>
            </span>
          </div>

          <div className="list">
            <Icon icon="ph:list" />
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default TopBar;
