import { motion } from "framer-motion";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

function Navbar({ navigate }) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll effect
  if (typeof window !== 'undefined') {
    window.addEventListener('scroll', () => {
      setScrolled(window.scrollY > 50);
    });
  }

  const menuItems = [
    { name: "Services", href: "services" },
    { name: "Leadership", href: "about", id: "managingdirector" },
    { name: "Projects", href: "projects" },
    { name: "About", href: "about" },
    { name: "Contact", href: "contact" }
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed w-full z-[9999] transition-all duration-300 ${
        scrolled ? 'bg-dark/98 backdrop-blur-lg shadow-2xl' : 'bg-dark/80 backdrop-blur-md'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 sm:py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <img 
            src="/logo.png" 
            alt="Company Logo" 
            className="h-8 sm:h-10 w-auto drop-shadow-[0_0_8px_rgba(255,255,255,0.9)] brightness-150 contrast-125 cursor-pointer" 
            onClick={() => navigate('home')}
          />

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-4 xl:gap-6">
            {menuItems.map((item, index) => (
              <motion.a
                key={index}
                onClick={() => item.id ? navigate(item.href, item.id) : navigate(item.href)}
                whileHover={{ scale: 1.1, color: "#FFA500" }}
                className="text-white font-semibold hover:text-primary transition-colors relative group drop-shadow-md text-sm lg:text-base cursor-pointer"
              >
                {item.name}
                <motion.span
                  className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-orange group-hover:w-full transition-all duration-300"
                ></motion.span>
              </motion.a>
            ))}
            
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(255, 165, 0, 0.5)" }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate('contact')}
              className="bg-gradient-orange text-white px-4 lg:px-6 py-2 lg:py-3 rounded-full font-bold shadow-lg text-sm lg:text-base cursor-pointer"
            >
              Get Quote
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-white text-2xl z-50 drop-shadow-lg"
          >
            {isOpen ? <FaTimes /> : <FaBars />}
          </motion.button>
        </div>

        {/* Mobile Menu */}
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{
            height: isOpen ? 'auto' : 0,
            opacity: isOpen ? 1 : 0
          }}
          className="lg:hidden overflow-hidden"
        >
          <div className="py-4 space-y-3 sm:space-y-4">
            {menuItems.map((item, index) => (
              <motion.a
                key={index}
                onClick={() => { setIsOpen(false); item.id ? navigate(item.href, item.id) : navigate(item.href); }}
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: isOpen ? 0 : -50, opacity: isOpen ? 1 : 0 }}
                transition={{ delay: index * 0.1 }}
                className="block text-white font-semibold hover:text-primary transition-colors py-2 drop-shadow-md text-base cursor-pointer"
              >
                {item.name}
              </motion.a>
            ))}
            <motion.button
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: isOpen ? 0 : -50, opacity: isOpen ? 1 : 0 }}
              transition={{ delay: 0.3 }}
              onClick={() => { setIsOpen(false); navigate('contact'); }}
              className="w-full bg-gradient-orange text-white px-6 py-3 rounded-full font-bold shadow-lg text-base cursor-pointer"
            >
              Get Quote
            </motion.button>
          </div>
        </motion.div>
      </div>
    </motion.nav>
  );
}

export default Navbar;
