import { useState, useEffect, useRef } from "react";
import p1 from "@/assets/p1.png";
import p2 from "@/assets/p2.jpeg";
import p3 from "@/assets/p3.png";
import p4 from "@/assets/p4.jpeg";
import p5 from "@/assets/p5.jpeg";

const content = [p1, p2, p3, p4, p5, p1];
let intervalDuration = 3000;

const Carousel = ({widthNumber,id}: {widthNumber: number,id:string}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const imgRef = useRef(content.length);

  useEffect(() => {
    const c = document.getElementById(id);
    const intervalId = setInterval(() => {
      if (!c) return;

      setCurrentIndex((prevIndex) => (prevIndex + 1) % imgRef.current);

      c.style.transform = `translateX(-${currentIndex * widthNumber}vw)`;
      c.style.transition = currentIndex === 0 ? "none" : "transform 0.5s ease";
      intervalDuration = currentIndex === 0 ? 0 : 3000;
    }, intervalDuration);

    return () => {
      clearInterval(intervalId);
    };
  }, [currentIndex]);

  return (
    <div className={`overflow-hidden mx-[${(100-widthNumber)/2}vw]`}>
      <div className="flex cursor-pointer" id={id}>
        {content.map((img, index) => (
          <img key={index} src={img} alt="" className="min-w-full h-48 object-contain" />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
