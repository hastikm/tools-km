import React from "react";
import { Link } from "react-router-dom";
import * as WiIcons from "react-icons/wi";
import * as FaIcons from "react-icons/fa";
import * as HiIcons from "react-icons/hi2";
import * as TiIcons from "react-icons/ti";
import * as SiIcons from "react-icons/si";
import * as LuIcons from "react-icons/lu";
import * as IoIcons from "react-icons/io5";
import * as MdIcons from "react-icons/md";
import * as BiIcons from "react-icons/bi";

const Card = ({ title, icon, color, shadow, routes }) => {
  const IconComponent =
    WiIcons[icon] ||
    FaIcons[icon] ||
    HiIcons[icon] ||
    TiIcons[icon] ||
    SiIcons[icon] ||
    LuIcons[icon] ||
    IoIcons[icon] ||
    MdIcons[icon] ||
    BiIcons[icon];

  const [hover, setHover] = React.useState(false);

  return (
    <Link to={routes}>
      <div
        className="lalezar w-52 borderm text-center flex flex-col items-center justify-center px-11 py-9
               transition-all duration-500 ease-in-out transform hover:scale-105 cursor-pointer"
        style={{
          boxShadow: hover
            ? shadow
            : "rgba(0,0,0,0.2) 0px 5px 15px",
          transition: "all 0.2s ease-in-out",
        }}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        <div
          className="icon text-[100px] text-center transition-colors duration-500"
          style={{ color: hover ? color : "white" }}
        >
          {IconComponent && <IconComponent />}
        </div>
        <p
          className="text-[45px] transition-colors duration-500"
          style={{ color: hover ? color : "white" }}
        >
          {title}
        </p>
      </div>
    </Link>
  );
};

export default Card;
