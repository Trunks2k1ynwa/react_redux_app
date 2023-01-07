import React from "react";
import { useSelector } from "react-redux";
const links = ["Dashboard", "Ecommerce", "Super market", "Long vision"];
const SideBar = () => {
    const globalOptions = useSelector(state=>state.global)
  return (
    <div className="w-[300px] bg-white shadow fixed top-5 left-5 bottom-5">
      {links.map((item) => (
        <div className="p-4 -translate-x-[200%] cursor-pointer hover:bg-gray-50" key={item}>{item}</div>
      ))}
    </div>
  );
};

export default SideBar;
