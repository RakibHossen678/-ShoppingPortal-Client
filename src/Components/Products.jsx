import { useEffect, useState } from "react";
import ProductsCard from "./ProductsCard";
import { FaArrowLeftLong } from "react-icons/fa6";
import { FaArrowRightLong } from "react-icons/fa6";

const Products = () => {
  const [Products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(9);
  const [count, setCount] = useState(0);
  const [brandName, setBrandName] = useState("");
  const [categoryName, setCategoryName] = useState("");
  const [price, setPrice] = useState(0);
  const [date, setDate] = useState("");
  const [searchValue, setSearchValue] = useState("");
  const [min, setMin] = useState(0);
  const [max, setMax] = useState(0);
  useEffect(() => {
    fetch(
      `http://localhost:5000/products?page=${currentPage}&size=${itemsPerPage}&brand=${brandName}&category=${categoryName}&price=${price}`
    ).then((res) =>
      res.json().then((data) => {
        setProducts(data);
      })
    );
  }, [currentPage, itemsPerPage, brandName, categoryName, price]);
  useEffect(() => {
    fetch(
      `http://localhost:5000/products-count?brand=${brandName}&category=${categoryName}&price=${price}`
    ).then((res) =>
      res.json().then((data) => {
        setCount(data.count);
      })
    );
  }, [brandName, categoryName, price]);
  const numOfPage = Math.ceil(count / itemsPerPage);
  const pages = [...Array(numOfPage).keys()].map((element) => element + 1);
  const handlePagination = (page) => {
    setCurrentPage(page);
  };
  const handleSearch = (e) => {
    e.preventDefault();
    const data = e.target.search.value;
    setSearchValue(data);
  };
  console.log(categoryName);
  return (
    <div className="w-10/12 mx-auto mt-40 mb-20">
      <h1 className="text-center font-pt text-5xl font-bold">
        Explore Our Products
      </h1>
      <div className="my-10">
        <form
          onSubmit={handleSearch}
          className="flex items-center gap-2 justify-center "
        >
          <input
            type="search"
            name="search"
            placeholder="Enter your product name"
            className="w-60  p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
          />
          <button
            type="submit"
            className="px-4 py-2 bg-yellow-500 text-white font-semibold rounded-lg hover:bg-yellow-600 transition duration-300"
          >
            Search
          </button>
        </form>
        <div className="flex flex-wrap items-center gap-2 mt-10">
          <select
            onChange={(e) => {
              setBrandName(e.target.value);
              setCurrentPage(1);
            }}
            value={brandName}
            className="w-48 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
          >
            <option value="" selected>
              Sort by Brand
            </option>
            <option value="UrbanWear">UrbanWear</option>
            <option value="StyleCo">StyleCo</option>
            <option value="ComfyCloth">ComfyCloth</option>
            <option value="RunFast">RunFast</option>
          </select>
          <select
            value={categoryName}
            onChange={(e) => {
              setCategoryName(e.target.value);
              setCurrentPage(1);
            }}
            className="w-48 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
          >
            <option value="" selected>
              Sort by Category
            </option>
            <option value="Men">Men</option>
            <option value="Women">Women</option>
            <option value="Kids">Kids</option>
          </select>
          <select
            value={price}
            onChange={(e) => {
              setPrice(e.target.value);
              setCurrentPage(1);
            }}
            className="w-48 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
          >
            <option value="" selected>
              Sort by Price
            </option>
            <option value="lowToHigh">Low to High</option>
            <option value="highToLow">High to Low</option>
          </select>
          <select
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="w-48 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
          >
            <option value="" selected>
              Sort by Date
            </option>
            <option value="new">Newest First</option>
          </select>
          <input
            onChange={(e) => setMin(e.target.value)}
            className="p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 placeholder-black"
            type="text"
            placeholder="min price"
          />
          <input
            onChange={(e) => setMax(e.target.value)}
            className="p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 placeholder-black"
            type="text"
            placeholder="Max price"
          />
        </div>
      </div>
      <div className="my-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-8">
        {Products.map((product, idx) => (
          <ProductsCard product={product} key={idx} />
        ))}
      </div>
      <div className="flex items-center justify-center mx-auto ">
        <button
          disabled={currentPage === 1}
          onClick={() => handlePagination(currentPage - 1)}
          className="px-4 py-2 mx-1  capitalize btext-gray-700 transition-colors duration-300 transform bg-gray-200 hover:bg-gray-300 rounded-md   "
        >
          <div className="flex items-center -mx-1">
            <FaArrowLeftLong size={22} />

            <span className="mx-1">previous</span>
          </div>
        </button>
        {pages.map((item, idx) => (
          <button
            onClick={() => handlePagination(item)}
            key={idx}
            className={`hidden ${
              currentPage === item ? "bg-yellow-300" : "bg-gray-200"
            } px-4 py-2 mx-1 text-gray-700 transition-colors duration-300 transform   rounded-md sm:inline`}
          >
            {item}
          </button>
        ))}

        <button
          disabled={currentPage === numOfPage}
          onClick={() => handlePagination(currentPage + 1)}
          className="px-4 py-2 mx-1  transform  text-gray-700 transition-colors duration-300  bg-gray-200 hover:bg-gray-300 rounded-md    "
        >
          <div className="flex items-center -mx-1">
            <span className="mx-1">Next</span>

            <FaArrowRightLong size={22} />
          </div>
        </button>
      </div>
    </div>
  );
};

export default Products;
