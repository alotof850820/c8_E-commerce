import { useState } from "react";

interface DropdownState {
  isOpen: boolean;
  position: {
    top: number;
    left: number;
  };
}

const useDropdown = (length: number,id: string) => {
  const [dropdowns, setDropdowns] = useState<DropdownState[]>(
    Array(length).fill({ isOpen: false, position: { top: 0, left: 0 } })
  );

  const handleMouseEnter = (index: number) => {
    const triggerElement = document.getElementById(id);
    if (triggerElement) {
      triggerElement.style.zIndex = "9999";
      const rect = triggerElement.getBoundingClientRect();

      const top = rect.bottom - 10; // 底部位置
      const left = rect.left; // 左边位置
      setDropdowns((prev) =>
        prev.map((dropdown, i) =>
          i === index ? { isOpen: true, position: { top, left } } : dropdown
        )
      );
    }
  };

  const handleMouseLeave = (index: number) => {
    setDropdowns((prev) =>
      prev.map((dropdown, i) =>
        i === index ? { ...dropdown, isOpen: false } : dropdown
      )
    );
  };

  return {
    dropdowns,
    handleMouseEnter,
    handleMouseLeave,
  };
};

export default useDropdown;
