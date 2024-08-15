import { useEffect, useState } from "react";
import ProductsCard from "./ProductsCard";
import { FaArrowLeftLong } from "react-icons/fa6";
import { FaArrowRightLong } from "react-icons/fa6";

const Products = () => {
  const [Products, setProducts] = useState([]);
  const [itemsPerPage, setItemsPerPage] = useState(9);
  const [count, setCount] = useState(0);
  useEffect(() => {
    fetch("http://localhost:5000/products").then((res) =>
      res.json().then((data) => {
        setProducts(data);
      })
    );
  }, []);
  useEffect(() => {
    fetch("http://localhost:5000/products-count").then((res) =>
      res.json().then((data) => {
        setCount(data.count);
      })
    );
  }, []);
  const numOfPage = Math.ceil(count / itemsPerPage);
  const pages = [...Array(numOfPage).keys()].map((element) => element + 1);
  return (
    <div className="w-10/12 mx-auto mt-40 mb-20">
      <h1 className="text-center font-pt text-5xl font-bold">
        Explore Our Products
      </h1>
      <div className="my-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-8">
        {Products.slice(0, 9).map((product, idx) => (
          <ProductsCard product={product} key={idx} />
        ))}
      </div>
      <div className="flex items-center justify-center mx-auto ">
        <a className="px-4 py-2 mx-1  capitalize btext-gray-700 transition-colors duration-300 transform bg-gray-200 hover:bg-gray-300 rounded-md   ">
          <div className="flex items-center -mx-1">
            <FaArrowLeftLong size={22} />

            <span className="mx-1">previous</span>
          </div>
        </a>
        {pages.map((page, idx) => (
          <button
            key={idx}
            className="hidden px-4 py-2 mx-1 text-gray-700 transition-colors duration-300 transform bg-gray-200 hover:bg-gray-300 rounded-md sm:inline   "
          >
            {page}
          </button>
        ))}

        <a className="px-4 py-2 mx-1  transform  text-gray-700 transition-colors duration-300  bg-gray-200 hover:bg-gray-300 rounded-md    ">
          <div className="flex items-center -mx-1">
            <span className="mx-1">Next</span>

            <FaArrowRightLong size={22} />
          </div>
        </a>
      </div>
    </div>
  );
};

export default Products;
