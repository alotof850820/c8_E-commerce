const DropDown = ({
  id,
  position,
  className,
}: {
  id: string;
  position: any;
  className?: string;
}) => {
  return (
    <div
      id={id}
      style={{
        position: "fixed",
        top: position.top,
        left: position.left,
      }}
      className={`z-[99999999] mt-2 bg-custom-gray-100 shadow-lg ${className} `}
    >
      <ul>
        <li className="px-4 hover:bg-gray-100 cursor-pointer">NIKE DUNK</li>
        <li className="px-4 hover:bg-gray-100 cursor-pointer">AIR FORCE</li>
        <li className="px-4 hover:bg-gray-100 cursor-pointer">AIR JORDAN</li>
      </ul>
    </div>
  );
};

export default DropDown;
