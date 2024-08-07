import { useState, useEffect, useRef } from "react";

let intervalDuration = 3000;

const Carousel = ({
  widthNumber,
  id,
  content,
}: {
  widthNumber: number;
  id: string;
  content: any[];
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const imgRef = useRef(content.length);
  const margin = `0 ${(100 - widthNumber) / 2}vw`;
  const intervalIdRef = useRef<number | null>(null);

  useEffect(() => {
    const c = document.getElementById(id);

    const updateCarousel = () => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % imgRef.current);
      if (c) {
        c.style.transform = `translateX(-${currentIndex * widthNumber}vw)`;
        c.style.transition = currentIndex === 0 ? "none" : "transform 0.5s ease";
      }
      intervalDuration = currentIndex === 0 ? 0 : 3000;
    };

    intervalIdRef.current = window.setTimeout(updateCarousel, intervalDuration);

    return () => {
      if (intervalIdRef.current !== null) {
        clearTimeout(intervalIdRef.current);
      }
    };
  }, [currentIndex, id, widthNumber]);

  return (
    <div className={`overflow-hidden`} style={{ margin }}>
      <div className="flex cursor-pointer" id={id}>
        {content.map((img, index) => (
          <img
            key={index}
            src={img}
            alt=""
            className="min-w-full max-h-96 object-cover"
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
