import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="  bg-gray-800">
      <div className="w-10/12 mx-auto text-white py-10">
        <div className="container mx-auto px-4 md:px-8 flex flex-wrap justify-between">
          <div className="flex flex-wrap gap-8 justify-between w-full">
            <div className="flex-1 min-w-[250px] mb-6">
              <h1 className="text-3xl font-bold mb-4">
                Shopping<span className="text-yellow-400">Portal</span>
              </h1>
              <h4 className="text-xl font-semibold mb-3">About Us</h4>
              <p className="text-base leading-relaxed">
                Our mission is to provide high-quality, stylish, and affordable
                clothing for everyone. We believe in making fashion accessible
                to all, while ensuring our products are sustainably sourced and
                ethically made.
              </p>
            </div>
            <div className="flex-1 min-w-[250px] mb-6">
              <h4 className="text-xl font-semibold mb-3">Quick Links</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-yellow-400 hover:underline">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#" className="text-yellow-400 hover:underline">
                    Men
                  </a>
                </li>
                <li>
                  <a href="#" className="text-yellow-400 hover:underline">
                    Women
                  </a>
                </li>
                <li>
                  <a href="#" className="text-yellow-400 hover:underline">
                    Kids
                  </a>
                </li>
                <li>
                  <a href="#" className="text-yellow-400 hover:underline">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="text-yellow-400 hover:underline">
                    Terms of Service
                  </a>
                </li>
              </ul>
            </div>
            <div className="flex-1 min-w-[250px] mb-6">
              <h4 className="text-xl font-semibold mb-3">Contact Us</h4>
              <p className="text-base">
                Email:{" "}
                <a
                  href="mailto:rh491464@gmail.com"
                  className="text-yellow-400 hover:underline"
                >
                  rh491464@gmail.com
                </a>
              </p>
              <p className="text-base">
                Phone:{" "}
                <a
                  href="tel:01933796400"
                  className="text-yellow-400 hover:underline"
                >
                  01933796400
                </a>
              </p>
              <p className="text-base">Address: Chattogram, Bangladesh</p>
            </div>

            <div className="flex-1 min-w-[250px] mb-6">
              <h4 className="text-xl font-semibold mb-3">
                Subscribe to Our Newsletter
              </h4>
              <form action="#" method="post" className="flex flex-col">
                <input
                  type="email"
                  placeholder="Enter your email"
                  required
                  aria-label="Email address for newsletter subscription"
                  className="p-3 mb-3 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 placeholder-gray-400"
                />
                <button
                  type="submit"
                  className="py-2 bg-yellow-400 text-gray-800 rounded-lg hover:bg-yellow-300 transition duration-300"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>

          <div className="w-full text-center mt-8">
            <div className="flex justify-center gap-4">
              <a
                href="#"
                className="text-white text-3xl hover:text-yellow-400 transition-colors"
                aria-label="Facebook"
              >
                <FaFacebookF />
              </a>
              <a
                href="#"
                className="text-white text-3xl hover:text-yellow-400 transition-colors"
                aria-label="Twitter"
              >
                <FaTwitter />
              </a>
              <a
                href="#"
                className="text-white text-3xl hover:text-yellow-400 transition-colors"
                aria-label="Instagram"
              >
                <FaInstagram />
              </a>
              <a
                href="#"
                className="text-white text-3xl hover:text-yellow-400 transition-colors"
                aria-label="LinkedIn"
              >
                <FaLinkedinIn />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
