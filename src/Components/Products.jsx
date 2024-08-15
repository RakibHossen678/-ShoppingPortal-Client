import { useEffect, useState } from "react";
import ProductsCard from "./ProductsCard";

const Products = () => {
  const [Products, setProducts] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/products").then((res) =>
      res.json().then((data) => setProducts(data))
    );
  }, []);
  console.log(Products);
  return (
    <div className="w-10/12 mx-auto mt-40 mb-20">
      <h1 className="text-center font-pt text-5xl font-bold">
        Explore Our Products
      </h1>
      <div className="my-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-8">
        {Products.map((product, idx) => (
          <ProductsCard product={product} key={idx} />
        ))}
      </div>
    </div>
  );
};

export default Products;
