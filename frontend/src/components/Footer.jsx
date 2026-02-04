import { Mail, Phone, MapPin, Linkedin, Facebook, Youtube } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold text-white mb-4">
              Greenfield Oil and{" "}
              <span className="text-green-500">
                Trading Services Pvt. Ltd
              </span>
            </h3>

            <p className="text-gray-400 mb-4 leading-relaxed">
              Leading provider of innovative engineering consultancy and software
              solutions for the oil and gas industry. Committed to sustainable and
              efficient energy management.
            </p>

            {/* Social Links */}
            <div className="flex space-x-4">
              <a
                href="https://www.linkedin.com/company/greenfield-oil-and-trading-services/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-green-500 transition-colors"
              >
                <Linkedin className="w-6 h-6" />
              </a>

              <a
                href="https://www.youtube.com/@gotspvtltd160"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-green-500 transition-colors"
              >
                <Youtube className="w-6 h-6" />
              </a>

              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-green-500 transition-colors"
              >
                <Facebook className="w-6 h-6" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">
              Quick Links
            </h4>

            <ul className="space-y-2">
              <li>
                <Link to="/" className="hover:text-green-500 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="hover:text-green-500 transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="hover:text-green-500 transition-colors"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  to="/products"
                  className="hover:text-green-500 transition-colors"
                >
                  Products
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="hover:text-green-500 transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">
              Contact Info
            </h4>

            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <Mail className="w-5 h-5 text-green-500 mt-0.5" />
                <span className="text-sm">
                  Support@greenfield.energy
                </span>
              </li>

              <li className="flex items-start space-x-3">
                <Phone className="w-5 h-5 text-green-500 mt-0.5" />
                <span className="text-sm">
                  +91 90798 81880
                </span>
              </li>

              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-green-500 mt-0.5" />
                <span className="text-sm">
                  Global Operations
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-500 text-sm">
          © {new Date().getFullYear()} Greenfield Oil and Trading Services Pvt. Ltd.
          All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
