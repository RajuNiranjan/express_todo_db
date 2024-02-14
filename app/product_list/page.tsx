import ProductTable from "@/components/product_list/product_table";
import SearchProduct from "@/components/product_list/search_product";
import React from "react";

const ProductList = () => {
  return (
    <div className="my-10 mx-14">
      <h1 className="font-semibold text-[44px] my-5">Product List</h1>
      <div className="my-5">
        <SearchProduct />
      </div>
      <div className="my-5">
        <ProductTable />
      </div>
    </div>
  );
};

export default ProductList;
