import Link from "next/link";

import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";

import map from "../images/map.png";

const Footer = () => {
  return (
    <footer className="bg-[#212529] text-white py-12 ">
      <div className="font-bold text-4xl px-16 mb-10">LOGO</div>
      <div className="flex px-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Column 1: Get In touch */}
          <div className="grid mr-10">
            <h4 className="text-lg font-lg mr-10 mb-5">
              Got Question? Call us 24/7
            </h4>
            <span className="font-bold mb-5">+02 055 4156</span>

            <p>Register now & get you 10%</p>
            <p>offer from first order!</p>

            <span className="mt-5">Join US</span>

            {/* social icon */}
            <div className="flex text-xl mt-5 justify-start items-start  py-2 rounded-lg">
              <Link href="#" className="text-gray-200 hover:text-white mr-4">
                <FaFacebookF />
              </Link>
              <Link href="#" className="text-gray-200 hover:text-white mr-4">
                <FaTwitter />
              </Link>
              <Link href="#" className="text-gray-200 hover:text-white mr-4">
                <FaInstagram />
              </Link>
              <Link href="#" className="text-gray-200 hover:text-white">
                <FaLinkedin />
              </Link>
            </div>
          </div>

          {/* Column 2: COMPANY */}
          <div className="ml-10">
            <h4 className="text-lg font-bold mb-4">COMPANY</h4>
            <ul className="grid gap-5">
              <li>
                <Link href="/faq">About Us</Link>
              </li>
              <li>
                <Link href="/terms">Career</Link>
              </li>
              <li>
                <Link href="/privacy">Contact Us</Link>
              </li>
              <li>
                <Link href="/blog">Start Selling </Link>
              </li>
              <li>
                <Link href="/blog">Order History</Link>
              </li>
            </ul>
          </div>

          {/* Column 3: My Account */}
          <div className="ml-10">
            <h4 className="text-lg font-bold mb-4">My Account</h4>
            <ul className="grid gap-5">
              <li>
                <Link href="/about">Track My Order</Link>
              </li>
              <li>
                <Link href="/services">View Cart</Link>
              </li>
              <li>
                <Link href="/portfolio">Sign in</Link>
              </li>
              <li>
                <Link href="/contact">Help</Link>
              </li>
              <li>
                <Link href="/contact">Wishlist</Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Customer Services */}
          <div className="ml-20">
            <h4 className="text-lg font-bold mb-4">Customer Service</h4>

            <ul className="grid gap-5">
              <li>
                <Link href="/about">Payment Methods</Link>
              </li>
              <li>
                <Link href="/services">Money Return Policy</Link>
              </li>
              <li>
                <Link href="/portfolio">Product Return</Link>
              </li>
              <li>
                <Link href="/contact">Contact Seller</Link>
              </li>
              <li>
                <Link href="/contact">Terms & Conditions</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
