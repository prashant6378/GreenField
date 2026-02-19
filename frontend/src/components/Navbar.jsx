import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { asset } from "../utils/asset";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Products', path: '/products', dropdown: true },
    { name: 'Services', path: '/services', dropdown: true },
    { name: 'Event', path: '/events' },
    { name: 'Blog', path: '/blog' },          // ✅ ADDED
    { name: 'Career', path: '/career' },
    { name: 'Contact', path: '/contact' },
  ];

  const productItems = [
    { name: "SandMaster", path: "/products/sandmaster" },
    { name: "RockMaster", path: "/products/rockmaster" },
    { name: "AutoWellz", path: "/products/autowellz" },
    { name: "AutoPro", path: "/products/autopro" },
    { name: "GREEN", path: "/products/green" },
  ];

  const serviceItems = [
    { name: "Energy Consultancy", path: "/services/oil-gas" },
    { name: "Software Engineering", path: "/services/software" },
    { name: "Training", path: "/services/training" },
    { name: "AI&ML", path: "/services/data-analysis" },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="fixed inset-x-0 top-0 z-50 bg-[#1B4D3E]/90 backdrop-blur-md border-b border-[#AFE1AF]/30 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">

          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group w-2/3 md:w-auto">
            <img
              src={asset("/images/Logo.png")}
              alt="Greenfield Oil and Trading Services Pvt. Ltd."
              className="w-10 h-10 sm:w-12 sm:h-12 object-contain rounded-md flex-shrink-0"
            />
            {/* Adjusted text sizing and line-clamp so it doesn't push the hamburger menu off-screen */}
            <span className="text-sm sm:text-base lg:text-xl font-semibold tracking-tight text-white leading-tight line-clamp-2">
              Greenfield Oil and Trading Services Pvt. Ltd.
            </span>
          </Link>

          {/* Desktop Nav - Reduced gap on smaller desktop screens to fit all links */}
          <div className="hidden lg:flex items-center space-x-4 xl:space-x-8">
            {navLinks.map((link) => (
              <div key={link.name} className="relative group">
                <Link
                  to={link.path}
                  className={`relative text-[13px] xl:text-sm font-medium transition-colors duration-200 ${
                    isActive(link.path)
                      ? "text-[#AFE1AF]"
                      : "text-white/80 hover:text-white"
                  }`}
                >
                  {link.name}
                </Link>

                {/* PRODUCTS DROPDOWN */}
                {link.name === "Products" && (
                  <div className="absolute left-0 mt-2 w-52 bg-white text-[#1B4D3E] rounded-lg shadow-lg opacity-0 invisible 
                                  group-hover:opacity-100 group-hover:visible transition-all duration-200">
                    {productItems.map((item) => (
                      <Link
                        key={item.name}
                        to={item.path}
                        className="block px-4 py-2 hover:bg-[#AFE1AF] hover:text-[#1B4D3E]"
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                )}

                {/* SERVICES DROPDOWN */}
                {link.name === "Services" && (
                  <div className="absolute left-0 mt-2 w-56 bg-white text-[#1B4D3E] rounded-lg shadow-lg opacity-0 invisible 
                                  group-hover:opacity-100 group-hover:visible transition-all duration-200">
                    {serviceItems.map((item) => (
                      <Link
                        key={item.name}
                        to={item.path}
                        className="block px-4 py-3 hover:bg-[#AFE1AF] hover:text-[#1B4D3E]"
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}

            {/* Schedule Demo */}
            <Link
              to="/schedule-demo"
              className="inline-flex items-center justify-center px-4 py-2 xl:px-5 xl:py-2.5 text-xs xl:text-sm font-semibold 
                         rounded-full bg-white text-[#1B4D3E] shadow-md shadow-[#AFE1AF]
                         hover:bg-[#AFE1AF] hover:text-[#1B4D3E] hover:shadow-lg hover:shadow-[#AFE1AF]
                         focus:outline-none focus:ring-2 focus:ring-[#AFE1AF] focus:ring-offset-2
                         transition-all duration-200 whitespace-nowrap"
            >
              Schedule Demo
            </Link>
          </div>

          {/* Mobile menu button - Switched from md:hidden to lg:hidden because of link count */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden inline-flex items-center justify-center p-2 rounded-md 
                       text-white hover:text-[#AFE1AF] hover:bg-[#153c30]
                       focus:outline-none focus:ring-2 focus:ring-[#AFE1AF] flex-shrink-0"
          >
            {isOpen ? <X className="w-6 h-6 sm:w-7 sm:h-7" /> : <Menu className="w-6 h-6 sm:w-7 sm:h-7" />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="lg:hidden bg-[#1B4D3E] border-b border-[#AFE1AF]/30 shadow-lg 
                        max-h-[calc(100vh-5rem)] overflow-y-auto"> {/* Added max height and vertical scrolling */}
          <div className="px-4 pt-3 pb-6 space-y-1">
            {navLinks.map((link) => (
              <div key={link.name}>
                <Link
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`block rounded-md px-3 py-2 text-base font-medium transition-colors ${
                    isActive(link.path)
                      ? 'bg-[#153c30] text-white'
                      : 'text-white/80 hover:bg-[#153c30] hover:text-white'
                  }`}
                >
                  {link.name}
                </Link>

                {link.name === "Products" && (
                  <div className="pl-6 mb-2">
                    {productItems.map((item) => (
                      <Link
                        key={item.name}
                        to={item.path}
                        onClick={() => setIsOpen(false)}
                        className="block px-3 py-2 text-white/70 hover:bg-[#153c30] hover:text-white rounded-md text-sm"
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                )}

                {link.name === "Services" && (
                  <div className="pl-6 mb-2">
                    {serviceItems.map((item) => (
                      <Link
                        key={item.name}
                        to={item.path}
                        onClick={() => setIsOpen(false)}
                        className="block px-3 py-2 text-white/70 hover:bg-[#153c30] hover:text-white rounded-md text-sm"
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}

            <Link
              to="/schedule-demo"
              onClick={() => setIsOpen(false)}
              className="mt-6 block w-full text-center rounded-full bg-white px-4 py-3 
                         text-sm font-semibold text-[#1B4D3E] shadow-md shadow-[#AFE1AF]
                         hover:bg-[#AFE1AF] hover:text-[#1B4D3E] hover:shadow-lg hover:shadow-[#AFE1AF]
                         focus:outline-none focus:ring-2 focus:ring-[#AFE1AF] focus:ring-offset-2
                         transition-all duration-200"
            >
              Schedule a Demo
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;