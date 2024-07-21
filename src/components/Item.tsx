import { Icon } from "@iconify/react";
const Item = ({ componentId,p1,p6 }: { componentId: number | string,p1: string,p6: string }) => {
  const data = [
    { id: 1, title: "【現貨】VEJA CAMPO NATURAL 氤氳蘭斯 CP0502429A" },
    { id: 2, title: "【現貨】VEJA CAMPO NATURAL 氤氳蘭斯 CP0502429A" },
    { id: 3, title: "【現貨】VEJA CAMPO NATURAL 氤氳蘭斯 CP0502429A" },
    { id: 4, title: "【現貨】VEJA CAMPO NATURAL 氤氳蘭斯 CP0502429A" },
  ];
  const setMouseEnter = (id: number) => {
    const a = document.getElementById(`a${id}${componentId}`);
    const b = document.getElementById(`b${id}${componentId}`);
    if (a) a.style.opacity = "1";
    if (b) b.style.opacity = "0";
  };

  const setMouseLeave = (id: number) => {
    const a = document.getElementById(`a${id}${componentId}`);
    const b = document.getElementById(`b${id}${componentId}`);
    if (a) a.style.opacity = "0";
    if (b) b.style.opacity = "1";
  };
  return (
    <div className="w-full h-full flex flex-col px-10">
      {/* <div className="py-4 flex items-center justify-center">
        <div className="text-custom-gray-100 font-bold text-xs">C=8選品</div>
      </div> */}
      <div className="flex justify-between w-full items-center h-full">
        <div className="max-w-[55%] h-ful">
          <img className="w-full h-full object-contain " src={p1} alt="" />
        </div>

        <div className="max-w-[45%] h-full flex flex-wrap gap-y-8">
          {data.map((item) => (
            <div
              key={item.id}
              className="max-w-[50%] h-[13rem] flex flex-col items-center justify-center px-1"
            >
              <div
                className="w-full h-full relative"
                onMouseEnter={() => setMouseEnter(item.id)}
                onMouseLeave={() => setMouseLeave(item.id)}
              >
                <div
                  id={`a${item.id}${componentId}`}
                  className="w-full h-full relative  cursor-pointer"
                  style={{
                    background: `url(${p1}) no-repeat center center / cover`,
                    opacity: 0, // 默认不显示
                    transition:
                      "transform 0.3s ease-in-out, opacity 0.3s ease-in-out",
                  }}
                >
                  <div className="absolute bottom-1 right-1 flex items-center justify-center gap-2 text-xl text-custom-gray-200">
                    <Icon
                      className="z-[1] p-1 bg-white rounded-full shadow-[0_0_5px_0_rgba(0,0,0,0.2)] cursor-pointer"
                      icon="solar:heart-linear"
                    />
                    <Icon
                      className="z-[1] p-1 bg-white rounded-full shadow-[0_0_5px_0_rgba(0,0,0,0.2)] cursor-pointer"
                      icon="bi:cart"
                    />
                  </div>
                </div>
                <div
                  id={`b${item.id}${componentId}`}
                  className="w-full h-full absolute top-0 left-0  cursor-pointer"
                  style={{
                    background: `url(${p6}) no-repeat center center / cover`,
                    transition:
                      "transform 0.3s ease-in-out, opacity 0.3s ease-in-out",
                  }}
                ></div>
              </div>
              <div className="text-center mt-2">
                <div className="text-[0.52rem] limit_row_2">{item.title}</div>
                <div className="text-custom-gray-100 text-[0.5rem] font-bold">
                  NT$4280
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Item;
