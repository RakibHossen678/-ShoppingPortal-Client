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
    <div className="max-w-sm mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
      <figure className="relative w-full h-96 overflow-hidden">
        <img
          className="w-full h-auto object-contain"
          src={productImage}
          alt={productName}
        />
      </figure>

      <div className="p-5">
        <h2 className="text-2xl font-bold mb-2">{productName}</h2>
        <div className="flex justify-between items-center mb-4">
          <p className="text-lg font-medium text-gray-600">{category}</p>
          <p className="text-lg font-medium text-gray-600">{brand}</p>
        </div>
        <div className="flex justify-between items-center mb-4">
          <div>
            <span className="text-lg font-semibold text-gray-800">Price:</span>
            <span className="text-lg font-medium text-gray-800 ml-1">
              ${price}
            </span>
          </div>
          <div>
            <span className="text-lg font-semibold text-gray-800">Date:</span>
            <span className="text-lg font-medium text-gray-800 ml-1">
              {formattedDate}
            </span>
          </div>
        </div>
        <p className="text-gray-700 mb-4">{description}</p>
        <p className="text-lg font-semibold text-gray-800 mb-4">
          Rating: <span className="text-yellow-500">{ratings}⭐</span>
        </p>
        <div className="flex justify-end">
          <button className="bg-yellow-400 text-white font-semibold py-2 px-4 rounded-lg shadow-md hover:bg-yellow-500 transition duration-300">
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductsCard;
