"use client";
import React, { useState } from "react";
import NotificationsIcon from "@mui/icons-material/Notifications";
import LightModeIcon from "@mui/icons-material/LightMode";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import NightlightRoundIcon from "@mui/icons-material/NightlightRound";
import user from "@/asserts/profile.jpg";
import { Avatar } from "@mui/material";
import Image from "next/image";

const NavBar = () => {
  const [defaultMode, setDefaultMode] = useState(false);

  const handleToggleDefalultMode = () => {
    setDefaultMode(!defaultMode);
  };

  return (
    <nav className="h-20 shadow-sm bg-white flex justify-between items-center px-14">
      <div>
        <h1 className="text-[40px]">Logs</h1>
      </div>
      <div className="flex justify-between items-center gap-8">
        <div className="flex justify-center items-center gap-5 text-[#B3B3B3] ">
          <div className="relative">
            <NotificationsIcon className="text-3xl" />
            <span className="absolute h-5 bg-red-500 w-5 text-sm -top-3  left-4 rounded-full flex justify-center items-center text-white font-normal">
              6{" "}
            </span>
          </div>
          <div onClick={handleToggleDefalultMode} className="cursor-pointer">
            {defaultMode ? (
              <NightlightRoundIcon className="text-3xl" />
            ) : (
              <LightModeIcon className="text-3xl" />
            )}
          </div>
        </div>
        <div className="flex justify-center items-center gap-5">
          <div className="relative">
            <Avatar
              alt="Remy Sharp"
              src={user.src}
              className=" border-blue-500 border-2"
            />

            <p className="absolute h-3 w-3 bg-green-500 bottom-0 left-7 rounded-full border-2 border-white "></p>
          </div>
          <div className="flex justify-center items-center">
            <h1 className="font-semibold text-xl">Admin</h1>
            <KeyboardArrowDownIcon className="text-2xl" />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
