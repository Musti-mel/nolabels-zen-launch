import tshirt from "@/assets/tshirt.png";
import hoodie from "@/assets/hoodie.png";
import cap from "@/assets/cap.png";

const FloatingMerch = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-10">
      <img
        src={tshirt}
        alt=""
        className="absolute top-[10%] left-[15%] w-48 md:w-64 animate-float"
        style={{ animationDelay: '0s' }}
      />
      <img
        src={hoodie}
        alt=""
        className="absolute top-[50%] right-[10%] w-56 md:w-72 animate-float-delayed"
        style={{ animationDelay: '1s' }}
      />
      <img
        src={cap}
        alt=""
        className="absolute bottom-[15%] left-[20%] w-40 md:w-56 animate-float"
        style={{ animationDelay: '2s' }}
      />
      <img
        src={tshirt}
        alt=""
        className="absolute top-[30%] right-[25%] w-44 md:w-60 animate-float-delayed"
        style={{ animationDelay: '3s' }}
      />
    </div>
  );
};

export default FloatingMerch;
