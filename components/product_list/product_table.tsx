"use client";
import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { IoMdMore } from "react-icons/io";
import PhotoOutlinedIcon from "@mui/icons-material/PhotoOutlined";
import PaginationTable from "./pagination";
import { Button, TableFooter } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const TableHeadData = [
  "Product List",
  "Category",
  "Price",
  "Stock",
  "Sold",
  "Revenues",
  "Actions",
];

const ProductBodyData = [
  {
    id: 1,
    productName: "Navy Bluc smart LiVatch",
    category: "Men, Watch",
    Price: 231,
    stock: 500,
    sold: 32,
    revenues: " 14,231",
  },
  {
    id: 2,
    productName: "Navy Bluc smart LiVatch",
    category: "Men, Watch",
    Price: 231,
    stock: 500,
    sold: 32,
    revenues: "14,231",
  },
  {
    id: 3,
    productName: "Navy Bluc smart LiVatch",
    category: "Men, Watch",
    Price: 231,
    stock: 500,
    sold: 32,
    revenues: "14,231",
  },
];

const ProductTable = () => {
  return (
    <div className="bg-white max-h-max rounded-lg shadow-lg">
      <div className="flex gap-5 py-5 px-5">
        <Button
          variant="outlined"
          endIcon={<KeyboardArrowDownIcon />}
          className=" text-gray-500 w-[200px] flex justify-between">
          Category
        </Button>
        <Button
          variant="outlined"
          endIcon={<KeyboardArrowDownIcon />}
          className=" text-gray-500 w-[200px] flex justify-between">
          Status
        </Button>
        <Button
          variant="outlined"
          endIcon={<KeyboardArrowDownIcon />}
          className=" text-gray-500 w-[200px] flex justify-between">
          Price
        </Button>
        <Button
          variant="outlined"
          endIcon={<KeyboardArrowDownIcon />}
          className=" text-gray-500 w-[200px] flex justify-between">
          Months
        </Button>
      </div>
      <TableContainer>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              {TableHeadData?.map((headItam, index) => (
                <TableCell key={index} className="font-bold">
                  {headItam}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {ProductBodyData?.map((item, index) => (
              <TableRow key={index}>
                <TableCell className="flex gap-1 items-center">
                  <span className="bg-[#B3B3B3] py-[2px]">
                    <PhotoOutlinedIcon className="text-xl" />
                  </span>
                  {item?.productName}
                </TableCell>
                <TableCell>{item?.category}</TableCell>
                <TableCell>{item?.Price}</TableCell>
                <TableCell>{item?.stock}</TableCell>
                <TableCell>{item?.sold}</TableCell>
                <TableCell>{item?.revenues}</TableCell>
                <TableCell>
                  <IoMdMore className="text-[#B3B3B3] text-xl cursor-pointer" />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <TableFooter className="flex justify-between items-center w-full px-10">
          <Button
            variant="outlined"
            endIcon={<KeyboardArrowDownIcon />}
            className="border border-gray-500 text-gray-500">
            Sheet:01
          </Button>
          <div className="my-5">
            <PaginationTable />
          </div>
        </TableFooter>
      </TableContainer>
    </div>
  );
};

export default ProductTable;
