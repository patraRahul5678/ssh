import Navbar from "../components/Navbar";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import { motion } from "framer-motion";
import { FaArrowLeft } from "react-icons/fa";

function ContactPage({ navigate }) {
  return (
    <>
      <Navbar navigate={navigate} />
      <div className="pt-20">
        <div className="bg-gradient-to-br from-dark via-gray-900 to-black text-white py-12 sm:py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <motion.button
              onClick={() => navigate('home')}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 text-primary font-semibold mb-4 hover:gap-3 transition-all cursor-pointer"
            >
              <FaArrowLeft /> Back to Home
            </motion.button>
          </div>
        </div>
        <Contact />
      </div>
      <Footer />
    </>
  );
}

export default ContactPage;
