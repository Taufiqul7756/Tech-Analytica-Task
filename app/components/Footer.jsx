import Link from "next/link";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";
import Logo from "../../public/logo.png";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-[#212529] text-white py-12">
      <div className="font-bold text-4xl mb-10 px-10">
        <Link href="/">
          <Image
            src={Logo}
            width={200}
            height={200}
            alt="Picture of the author"
          />
        </Link>
      </div>
      <div className="px-6 md:px-16">
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Column 1: Get In touch */}
          <div>
            <h4 className="text-lg font-lg mb-5">Got Question? Call us 24/7</h4>
            <span className="font-bold ">+02 055 4156</span>
            <p className="mt-5">Register now & get you 10%</p>
            <p className="mb-5">offer from first order!</p>
            <span className="">Join US</span>
            {/* social icon */}
            <div className="flex text-xl mt-5">
              <Link href="#" className="text-gray-200 hover:text-white mr-4">
                <FaFacebookF />
              </Link>
              <Link href="#" className="text-gray-200 hover:text-white mr-4">
                <FaTwitter />
              </Link>
              <Link href="#" className="text-gray-200 hover:text-white mr-4">
                <FaLinkedin />
              </Link>
              <Link href="#" className="text-gray-200 hover:text-white ">
                <FaInstagram />
              </Link>
            </div>
          </div>

          {/* Column 2: COMPANY */}
          <div>
            <h4 className="text-lg font-bold mb-4">Company</h4>
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
          <div>
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
          <div>
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
