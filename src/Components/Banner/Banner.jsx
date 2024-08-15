import bannerImg from "../../assets/banner.png";
import { BsArrowRight } from "react-icons/bs";
const Banner = () => {
  return (
    <header className="">
      <section className="w-10/12 mx-auto">
        <div className="flex items-center justify-center">
          <div className="flex-1">
            <h1 className="text-[#353535] font-pt font-bold mb-5 text-7xl">
              Welcome to Our Store
            </h1>
            <p className="text-[16px] mb-3">
              Discover unbeatable deals on the latest products and elevate your
              shopping with exclusive offers. Explore our handpicked collection
              of top-notch gadgets and stylish fashion. Don’t miss out on
              limited-time promotions and seasonal discounts—shop now for
              exceptional value and quality!
            </p>
            <button className="hero-cta flex  items-center justify-center space-x-3 bg-[#ffd233] py-3 px-5 rounded-lg hover:bg-yellow-200 hover:shadow-md">
              <span>Shop Now</span>
              <span>
                <BsArrowRight />
              </span>
            </button>
          </div>

          {/* Banner image */}
          <div className="mt-5 flex-1">
            <img src={bannerImg} alt="" />
          </div>
        </div>
      </section>
    </header>
  );
};

export default Banner;
