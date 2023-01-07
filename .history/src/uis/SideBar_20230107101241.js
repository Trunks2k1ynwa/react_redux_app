import React from "react";
const links = ["Dashboard", "Ecommerce", "Super market", "Long vision"];
const SideBar = () => {
  return (
    <div className="w-[300px] bg-white shadow fixed top-5 left-5 bottom-5">
      {links.map((item) => (
        <div className="p-4 -translate-x-full cursor-pointer hover:bg-gray-50" key={item}>{item}</div>
      ))}
    </div>
  );
};

export default SideBar;
