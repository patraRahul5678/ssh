import { motion } from "framer-motion";
import { FaArrowLeft } from "react-icons/fa";
import About from "../components/About";
import MissionVision from "../components/MissionVision";
import WhyChooseUs from "../components/WhyChooseUs";
import Leadership from "../components/Leadership";
import ManagingDirector from "../components/ManagingDirector";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function AboutPage({ navigate }) {
  return (
    <>
      <Navbar navigate={navigate} />
      <div className="pt-20">
        {/* Header */}
        <div className="bg-gradient-to-br from-dark via-gray-900 to-black text-white py-16 sm:py-20 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <motion.button
              onClick={() => navigate('home')}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 text-primary font-semibold mb-6 sm:mb-8 hover:gap-3 transition-all cursor-pointer"
            >
              <FaArrowLeft /> Back to Home
            </motion.button>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-4">
                About <span className="gradient-text text-shadow-glow">Sahoo Engineering</span>
              </h1>
              <p className="text-gray-300 text-base sm:text-lg max-w-3xl">
                25+ years of excellence in civil engineering and infrastructure construction across Odisha
              </p>
            </motion.div>
          </div>
        </div>

        <About navigate={navigate} />
        <MissionVision />
        <WhyChooseUs />
        <div id="managingdirector">
          <ManagingDirector />
        </div>
        <Leadership />
      </div>
      <Footer />
    </>
  );
}

export default AboutPage;
