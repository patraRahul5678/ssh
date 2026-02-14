import { motion } from "framer-motion";
import { FaHardHat } from "react-icons/fa";

function Hero({ navigate }) {
  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-cover bg-center">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url(/hero.png)" }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative min-h-screen flex items-center px-4 sm:px-6 z-10 pt-24 pb-12">
        <div className="max-w-7xl mx-auto w-full">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left Content */}
            <div>
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-2 sm:gap-3 bg-gradient-orange px-4 sm:px-6 py-2 sm:py-3 rounded-full mb-4 sm:mb-6 shadow-lg"
              >
                <FaHardHat className="text-white text-lg sm:text-xl" />
                <span className="text-white font-bold text-sm sm:text-base">Premium Construction Services</span>
              </motion.div>

              <motion.h1
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black mb-4 sm:mb-6 leading-tight"
              >
                <span className="text-white">Building</span>
                <br />
                <span className="gradient-text text-shadow-glow">Tomorrow</span>
                <br />
                <span className="text-white">Today</span>
              </motion.h1>

              <motion.p
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-base sm:text-lg md:text-xl text-gray-300 mb-6 sm:mb-8 max-w-xl leading-relaxed"
              >
                Odisha's most trusted civil & RCC contractor delivering world-class excavation, reinforcement, and construction solutions.
              </motion.p>

              <motion.div
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4"
              >
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => navigate('contact')}
                  className="bg-gradient-orange text-white px-6 sm:px-8 md:px-10 py-3 sm:py-4 md:py-5 font-bold rounded-full shadow-2xl hover:shadow-primary/50 transition-shadow text-sm sm:text-base cursor-pointer"
                >
                  Get Free Quote
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => navigate('projects')}
                  className="glass-effect text-white px-6 sm:px-8 md:px-10 py-3 sm:py-4 md:py-5 font-bold rounded-full backdrop-blur-md hover:bg-white/20 transition-colors text-sm sm:text-base cursor-pointer"
                >
                  View Projects →
                </motion.button>
              </motion.div>

              {/* Quick Stats */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
                className="flex gap-4 sm:gap-6 md:gap-8 mt-8 sm:mt-12"
              >
                {[{ num: "150+", label: "Projects" }, { num: "25+", label: "Years" }, { num: "100%", label: "Safety" }].map((stat, i) => (
                  <motion.div
                    key={i}
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.9 + i * 0.1 }}
                    className="text-center"
                  >
                    <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary">{stat.num}</div>
                    <div className="text-gray-400 text-xs sm:text-sm">{stat.label}</div>
                  </motion.div>
                ))}
              </motion.div>
            </div>

            {/* Right: Image */}
            <motion.div
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="hidden lg:block relative"
            >
              <motion.div
                animate={{ y: [0, -20, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="relative"
              >
                <div className="absolute inset-0 bg-gradient-orange blur-3xl opacity-30 rounded-3xl"></div>
                <img
                  src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=600&q=80"
                  alt="Construction"
                  loading="lazy"
                  className="relative rounded-3xl shadow-2xl border-4 border-primary/30"
                />

                {/* Badge */}
                <motion.div
                  animate={{ rotate: [0, 5, -5, 0] }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-2xl"
                >
                  <div className="text-4xl font-black gradient-text">ISO</div>
                  <div className="text-sm text-gray-600 font-semibold">Certified</div>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
