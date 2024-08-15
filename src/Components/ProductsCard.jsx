const ProductsCard = ({ product }) => {
  const {
    createdAt,
    ratings,
    brand,
    category,
    price,
    description,
    productImage,
    productName,
  } = product;
  const date = new Date(createdAt);
  const formattedDate = date.toLocaleDateString();

  return (
    <div>
      <div className="card bg-base-100 w-96 shadow-xl">
        <figure className="h-[350px] w-full">
          <img
            className="h-full w-full bg-cover bg-center   object-cover object-top"
            src={productImage}
            alt="Men's Casual T-Shirt"
          />
        </figure>
        <div className="p-5">
          <h2 className="card-title">{productName}</h2>
          <div className="flex pt-3 justify-between items-center">
            <p className="pb-3 font-medium">{category}</p>
            <p className="pb-3  font-medium">{brand}</p>
          </div>
          <div className="pb-4 flex pt-3 justify-between items-center">
            <div>
              <span className="font-semibold">Price: </span>{" "}
              <span>{price}</span>
            </div>
            <div>
              <span className="font-semibold">Time: </span>
              <span>{formattedDate}</span>
            </div>
          </div>
          <p>{description}</p>
          <p className="py-2">
            <span className="font-semibold">Rating: </span>{" "}
            <span>{ratings}⭐</span>
          </p>
          <div className="card-actions justify-end mt-4">
            <button className="rounded-xl py-3 font-pt text-lg font-medium w-full bg-yellow-300">
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsCard;
