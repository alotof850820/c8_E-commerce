import { useState, useEffect } from 'react';

const useDropdownPosition = (
  triggerRef: React.RefObject<HTMLDivElement>,
  dropdownRef: React.RefObject<HTMLDivElement>,
  index: number
) => {
  const [position, setPosition] = useState({ left: "0" });

  useEffect(() => {
    const handlePosition = () => {
      if (triggerRef.current && dropdownRef.current) {
        const triggerRect = triggerRef.current.getBoundingClientRect();
        const dropdownRect = dropdownRef.current.getBoundingClientRect();
        let left = "0";

        if (triggerRect.left + dropdownRect.width > window.innerWidth) {
          left = `${window.innerWidth - (triggerRect.left + dropdownRect.width)}px`;
        }
        setPosition({ left });
      }
    };

    handlePosition();

    const resizeHandler = () => {
      handlePosition();
    };

    window.addEventListener("resize", resizeHandler);

    return () => {
      window.removeEventListener("resize", resizeHandler);
    };
  }, [triggerRef, dropdownRef, index]);

  return position;
};

export default useDropdownPosition;
