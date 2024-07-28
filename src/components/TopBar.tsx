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
  const texts1 = ["TWD", "繁體中文"];
  const texts2 = [
    "最新消息",
    "所有品牌",
    "NIKE",
    "NEW BALANCE",
    "服飾配件",
    "質感生活",
    "關於C8",
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
    <div className=" fixed top-0 w-full overflow-hidden bg-white flex flex-col items-center font-bold text-black shadow-[0_2px_12px_0_rgba(0,0,0,0.1)] box-border text-[24px] z-[999]">
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

      <div className="xs:flex hidden relative py-2 px-2 font-normal text-custom-gray-300 text-base z-[1001] bg-white flex justify-between w-full items-center">
        <div className="text-[0.5rem] flex items-center gap-2">
          {texts1.map((item, index) => {
            const { dropdowns, handleMouseEnter, handleMouseLeave } =
              useDropdown(texts1.length, `trigger${index}`);
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
                  <Icon
                    icon={
                      index === 1
                        ? "icon-park-outline:earth"
                        : "material-symbols:attach-money"
                    }
                  />
                  <span>{item}</span>
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
        </div>
        <div className="z-[-1] absolute inset-0 flex items-center justify-center">
          C=8
        </div>

        <div className="text-[0.75rem] flex items-center gap-2">
          <Icon
            className="cursor-pointer hover:text-custom-gray-100"
            icon="bi:chat"
          />
          <div className="flex items-center">
            <input
              placeholder="搜尋"
              className="border-b-[1px] border-solid border-black text-[0.52rem] text-custom-gray-300 outline-none"
              type="text"
            />
            <Icon
              className="text-[1rem] cursor-pointer hover:text-custom-gray-100"
              icon="bitcoin-icons:search-outline"
            />
          </div>

          <Icon
            className="cursor-pointer hover:text-custom-gray-100"
            icon="solar:user-linear"
          />
          <div
            className="relative cursor-pointer hover:text-custom-gray-100 user-select-none"
            onClick={() => setNumber(number + 1)}
          >
            <Icon className="text-[1rem] " icon="bi:cart" />
            <span className="select-none absolute inset-0 flex items-center justify-center text-[0.4rem] text-red-400">
              {number}
            </span>
          </div>
        </div>
      </div>

      <div className="xs:hidden relative font-normal text-custom-gray-300 text-base z-[1001] bg-white flex justify-between w-full items-center">
        <div className="px-2 text-[0.75rem] flex items-center gap-2">
          <div className="flex items-center">
            {/* <input
              placeholder="搜尋"
              className="border-b-[1px] border-solid border-black text-[0.52rem] text-custom-gray-300 outline-none"
              type="text"
            /> */}
            <Icon
              className="text-[1rem] cursor-pointer hover:text-custom-gray-100"
              icon="bitcoin-icons:search-outline"
            />
          </div>

          <Icon
            className="cursor-pointer hover:text-custom-gray-100"
            icon="solar:user-linear"
          />
        </div>
        <div className="z-[-1] absolute inset-0 flex items-center justify-center">
          C=8
        </div>

        <div className="text-[0.75rem] flex items-center gap-2">
          <div
            className="relative cursor-pointer hover:text-custom-gray-100 user-select-none"
            onClick={() => setNumber(number + 1)}
          >
            <Icon className="text-[1rem] " icon="bi:cart" />
            <span className="select-none absolute inset-0 flex items-center justify-center text-[0.4rem] text-red-400">
              {number}
            </span>
          </div>
          <div className="py-2 px-2 relative cursor-pointer user-select-none bg-[rgba(0,0,0,0.05)]">
            <Icon className="text-[1rem] " icon="ph:list-light" />
          </div>
        </div>
      </div>

      <div className="xs:block hidden z-[1] py-1 font-normal text-custom-gray-300 text-base bg-custom-gray-100 flex justify-center w-full items-center">
        <div className=" text-white text-[0.6rem] flex justify-center items-center gap-3 flex-wrap">
          {texts2.map((item, index) => {
            const { dropdowns, handleMouseEnter, handleMouseLeave } =
              useDropdown(texts2.length, `trigger2${index}`);
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
                  <span>{item}</span>
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
