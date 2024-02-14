"use client";
import { Button } from "@mui/material";
import React from "react";
import { IoSearchOutline } from "react-icons/io5";
import { IoAddCircleOutline } from "react-icons/io5";

const SearchProduct = () => {
  return (
    <div className="w-[993px] h-10 flex justify-between">
      <div className="w-[600px]  h-full border rounded-full border-blue-400 flex items-center px-3 gap-1">
        <IoSearchOutline className="text-xl" />
        <input
          type="text"
          placeholder="Search Banners"
          className="h-full w-full bg-transparent focus:outline-none"
        />
      </div>
      <div className="h-full">
        <Button
          variant="contained"
          className="bg-[#196FE1] rounded-full capitalize text-lg">
          Search Product
        </Button>
      </div>
      <div className="h-full">
        <Button
          variant="contained"
          startIcon={<IoAddCircleOutline className="text-xl" />}
          className="bg-[#196FE1] rounded-full capitalize text-lg font-medium">
          Add Product
        </Button>
      </div>
    </div>
  );
};

export default SearchProduct;
