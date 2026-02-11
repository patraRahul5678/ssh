import { motion } from "framer-motion";
import { useState } from "react";
import { FaBars, FaTimes, FaHardHat } from "react-icons/fa";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll effect
  if (typeof window !== 'undefined') {
    window.addEventListener('scroll', () => {
      setScrolled(window.scrollY > 50);
    });
  }

  const menuItems = [
    { name: "Services", href: "#services" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" }
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed w-full z-[9999] transition-all duration-300 ${
        scrolled ? 'bg-dark/98 backdrop-blur-lg shadow-2xl' : 'bg-dark/80 backdrop-blur-md'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <img src="../public/image.png" alt="Company Logo" className="h-12 w-auto" />

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {menuItems.map((item, index) => (
              <motion.a
                key={index}
                href={item.href}
                whileHover={{ scale: 1.1, color: "#FFA500" }}
                className="text-white font-semibold hover:text-primary transition-colors relative group drop-shadow-md"
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
              className="bg-gradient-orange text-white px-6 py-3 rounded-full font-bold shadow-lg"
            >
              Get Quote
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white text-2xl z-50 drop-shadow-lg"
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
          className="md:hidden overflow-hidden"
        >
          <div className="py-4 space-y-4">
            {menuItems.map((item, index) => (
              <motion.a
                key={index}
                href={item.href}
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: isOpen ? 0 : -50, opacity: isOpen ? 1 : 0 }}
                transition={{ delay: index * 0.1 }}
                onClick={() => setIsOpen(false)}
                className="block text-white font-semibold hover:text-primary transition-colors py-2 drop-shadow-md"
              >
                {item.name}
              </motion.a>
            ))}
            <motion.button
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: isOpen ? 0 : -50, opacity: isOpen ? 1 : 0 }}
              transition={{ delay: 0.3 }}
              className="w-full bg-gradient-orange text-white px-6 py-3 rounded-full font-bold shadow-lg"
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
