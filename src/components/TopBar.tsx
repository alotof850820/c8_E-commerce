import { Icon } from "@iconify/react";
import { FC, useEffect, useState } from "react";
import { TopBarProps } from "./types/topbar";
import DropDown from "./DropDown";
import useDropdown from "@/utils/useDropdown";

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
    <div className="fixed top-0 w-full overflow-hidden bg-white flex flex-col items-center font-bold text-black shadow-[0_2px_12px_0_rgba(0,0,0,0.1)] box-border text-[24px] z-[999]">
      <div className=" text-custom-gray-200 w-full relative bg-custom-gray-100  max-h-6">
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
      <div className="py-2 px-2 font-normal text-custom-gray-300 text-base z-[1001] bg-white flex justify-between w-full items-center">
        <div className="text-[0.5rem] flex items-center gap-2">
          {[0, 1].map((_, index) => {
            const { dropdowns, handleMouseEnter, handleMouseLeave } =
              useDropdown(2, `trigger${index}`);
            const { isOpen, position } = dropdowns[index];

            return (
              <div
                key={index}
                id={`dropdown${index}`}
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={() => handleMouseLeave(index)}
              >
                <div
                  id={`trigger${index}`}
                  className="flex items-center justify-center gap-[0.1rem]"
                >
                  <Icon icon="material-symbols:attach-money" />
                  <span>TWD</span>
                  <Icon icon="pepicons-pencil:angle-down" />
                </div>
                {isOpen && (
                  <DropDown
                    className="text-black bg-white"
                    id={`dropdown${index}`}
                    position={position}
                  />
                )}
              </div>
            );
          })}

          {/* <div>
            <div className="flex items-center justify-center gap-[0.1rem]">
              <Icon icon="icon-park-outline:earth" />
              <span>繁體中文</span>
              <Icon icon="pepicons-pencil:angle-down" />
            </div>
          </div> */}
        </div>
        <div className="center">C=8</div>

        <div className="text-[0.75rem] flex items-center gap-2">
          <Icon className="cursor-pointer" icon="bi:chat" />
          <Icon className="text-[1rem] cursor-pointer" icon="bitcoin-icons:search-outline" />
          <Icon className="cursor-pointer" icon="solar:user-linear" />
          <div className="relative cursor-pointer" onClick={() => setNumber(number + 1)}>
            <Icon className="text-[1rem] " icon="bi:cart" />
            <span className="absolute top-[-0.27rem] right-1.5 text-[0.4rem] text-red-400">
              {number}
            </span>
          </div>
        </div>
      </div>
      <div className="z-[1] py-2 font-normal text-custom-gray-300 text-base bg-custom-gray-100 flex justify-center w-full items-center">
        <div className=" text-white text-[0.6rem] flex justify-center items-center gap-3 flex-wrap">
          {[0, 1, 2, 3, 4, 5, 6, 7, 8].map((_, index) => {
            const { dropdowns, handleMouseEnter, handleMouseLeave } =
              useDropdown(10, `trigger2${index}`);
            const { isOpen, position } = dropdowns[index];

            return (
              <div
                key={index}
                id={`dropdown2${index}`}
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={() => handleMouseLeave(index)}
              >
                <div
                  id={`trigger2${index}`}
                  className="flex items-center justify-center gap-[0.1rem] cursor-pointer"
                >
                  <span>最新消息</span>
                  <Icon icon="pepicons-pencil:angle-down" />
                </div>
                {isOpen && (
                  <DropDown id={`dropdown2${index}`} position={position} />
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default TopBar;
