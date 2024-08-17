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
      `http://localhost:5000/products?page=${currentPage}&size=${itemsPerPage}&brand=${brandName}&category=${categoryName}&price=${price}&date=${date}&search=${searchValue}&min=${min}&max=${max}`
    ).then((res) =>
      res.json().then((data) => {
        setProducts(data);
      })
    );
  }, [
    currentPage,
    itemsPerPage,
    brandName,
    categoryName,
    price,
    date,
    searchValue,
    min,
    max,
  ]);
  useEffect(() => {
    fetch(
      `http://localhost:5000/products-count?brand=${brandName}&category=${categoryName}&price=${price}&search=${searchValue}&min=${min}&max=${max}`
    ).then((res) =>
      res.json().then((data) => {
        setCount(data.count);
      })
    );
  }, [brandName, categoryName, price, searchValue, max, min]);
  const numOfPage = Math.ceil(count / itemsPerPage);
  const pages = [...Array(numOfPage).keys()].map((element) => element + 1);
  const handlePagination = (page) => {
    setCurrentPage(page);
  };
  const handleSearch = (e) => {
    e.preventDefault();
    const data = e.target.search.value;
    setSearchValue(data);
    setCurrentPage(1);
  };
  return (
    <div className="w-full max-w-7xl mx-auto mt-10 mb-20 px-4 sm:px-6 lg:px-8">
      <h1 className="text-center text-3xl sm:text-4xl md:text-5xl font-bold mb-10">
        Explore Our Products
      </h1>
      <div className="my-10">
        <form
          onSubmit={handleSearch}
          className="flex flex-col sm:flex-row items-center gap-4 justify-center"
        >
          <input
            type="search"
            name="search"
            placeholder="Enter your product name"
            className="w-full sm:w-60 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
          />
          <button
            type="submit"
            className="px-4 py-2 mt-4 sm:mt-0 bg-yellow-500 text-white font-semibold rounded-lg hover:bg-yellow-600 transition duration-300"
          >
            Search
          </button>
        </form>
        <div className="flex flex-wrap gap-4 mt-10">
          <select
            onChange={(e) => {
              setBrandName(e.target.value);
              setCurrentPage(1);
            }}
            value={brandName}
            className="w-full sm:w-48 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
          >
            <option value="">Sort by Brand</option>
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
            className="w-full sm:w-48 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
          >
            <option value="">Sort by Category</option>
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
            className="w-full sm:w-48 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
          >
            <option value="">Sort by Price</option>
            <option value="lowToHigh">Low to High</option>
            <option value="highToLow">High to Low</option>
          </select>
          <select
            value={date}
            onChange={(e) => {
              setDate(e.target.value);
              setCurrentPage(1);
            }}
            className="w-full sm:w-48 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
          >
            <option value="">Sort by Date</option>
            <option value="new">Newest First</option>
            <option value="old">Oldest First</option>
          </select>
          <input
            onChange={(e) => {
              setMin(e.target.value);
              setCurrentPage(1);
            }}
            className="w-full sm:w-48 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 placeholder-gray-500"
            type="text"
            placeholder="Min price"
          />
          <input
            onChange={(e) => setMax(e.target.value)}
            className="w-full sm:w-48 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 placeholder-gray-500"
            type="text"
            placeholder="Max price"
          />
        </div>
      </div>
      <div className="my-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {Products.map((product, idx) => (
          <ProductsCard product={product} key={idx} />
        ))}
      </div>
      <div className="flex flex-wrap items-center justify-center mt-10 space-x-2">
        <button
          disabled={currentPage === 1}
          onClick={() => handlePagination(currentPage - 1)}
          className="px-4 py-2 text-gray-700 bg-gray-200 rounded-md hover:bg-gray-300 transition-colors duration-300 disabled:opacity-50 flex items-center"
        >
          <FaArrowLeftLong size={20} />
          <span className="ml-2 text-sm sm:text-base">Previous</span>
        </button>
        {pages.map((item, idx) => (
          <button
            onClick={() => handlePagination(item)}
            key={idx}
            className={`px-3 py-1 text-gray-700 rounded-md ${
              currentPage === item ? "bg-yellow-300" : "bg-gray-200"
            } hover:bg-gray-300 transition-colors duration-300 text-sm sm:text-base`}
          >
            {item}
          </button>
        ))}
        <button
          disabled={currentPage === numOfPage}
          onClick={() => handlePagination(currentPage + 1)}
          className="px-4 py-2 text-gray-700 bg-gray-200 rounded-md hover:bg-gray-300 transition-colors duration-300 disabled:opacity-50 flex items-center"
        >
          <span className="mr-2 text-sm sm:text-base">Next</span>
          <FaArrowRightLong size={20} />
        </button>
      </div>
    </div>
  );
};

export default Products;
