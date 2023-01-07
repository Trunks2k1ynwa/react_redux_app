import React from "react";
import { useSelector } from "react-redux";
const links = ["Dashboard", "Ecommerce", "Super market", "Long vision"];
const SideBar = () => {
  const globalOptions = useSelector((state) => state.global);
  const { showSidebar } = globalOptions;
  return (
    <div
      className={`${
        showSidebar? "-translate-x-[200%]" : ""
      } w-[300px] bg-white shadow fixed top-5 left-5 bottom-5`}
    >
      {links.map((item) => (
        <div className="p-4 cursor-pointer hover:bg-gray-50" key={item}>
          {item}
        </div>
      ))}
    </div>
  );
};

export default SideBar;
