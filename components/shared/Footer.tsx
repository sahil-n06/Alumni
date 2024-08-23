import Image from "next/image";
import Link from "next/link";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-darkNavy text-white py-10">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
          <div className="text-center md:text-left">
            <p className="text-xl font-semibold">Stay Connected</p>
            <p className="text-sm mt-2">
              Follow us on social media to stay updated with the latest news and events.
            </p>
            <div className="flex justify-center md:justify-start space-x-4 mt-4">
              <Link href="https://www.facebook.com" aria-label="Facebook">
                <FaFacebookF className="text-white hover:text-blue-400 transition-colors duration-300 w-6 h-6" />
              </Link>
              <Link href="https://www.instagram.com" aria-label="Instagram">
                <FaInstagram className="text-white hover:text-pink-400 transition-colors duration-300 w-6 h-6" />
              </Link>
              <Link href="https://www.linkedin.com" aria-label="LinkedIn">
                <FaLinkedinIn className="text-white hover:text-blue-600 transition-colors duration-300 w-6 h-6" />
              </Link>
            </div>
          </div>

          <div className="text-center md:text-right">
            <p className="text-lg font-semibold">About Alumini</p>
            <p className="text-sm mt-2">
              Alumini is your go-to platform for connecting with fellow alumni, exploring career opportunities, and staying engaged with your community.
            </p>
            <p className="text-sm mt-4">&copy; 2024 Alumini. All rights reserved.</p>
            <p className="text-sm mt-2">Contact us: +1-234-567-890</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
