import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {toggleSideBar} from "../redux-toolkit/globalSlice.js"
const ButtonToggle = () => {
    const dispatch = useDispatch();
    const {showSideBar} = useSelector(state=>state.global)
    const handelToggleSidebar = ()=>{
        dispatch(toggleSideBar(!showSideBar));
    }
  return (
    <button onClick = {handelToggleSidebar} className="fixed flex items-center justify-center w-10 h-10 text-white rounded-full cursor-pointer right-5 top-5 bg-slate-600">
      <i className="fa-solid fa-bars"></i>
    </button>
  );
};

export default ButtonToggle;
