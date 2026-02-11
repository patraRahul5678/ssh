import { motion, useScroll, useTransform } from "framer-motion";
import { FaHardHat } from "react-icons/fa";

function Hero() {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 150]);
  const y2 = useTransform(scrollY, [0, 500], [0, -150]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <section className="relative h-screen overflow-hidden">
      {/* Parallax Background Layers */}
      <motion.div 
        style={{ y: y1 }}
        className="absolute inset-0 bg-cover bg-center scale-110"
      >
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=1920&q=80')] bg-cover bg-center"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent"></div>
      </motion.div>

      {/* Animated Grid Overlay */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: 'linear-gradient(#FFA500 1px, transparent 1px), linear-gradient(90deg, #FFA500 1px, transparent 1px)',
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      {/* Floating Geometric Shapes */}
      <div className="absolute inset-0">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute"
            initial={{ 
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
              scale: Math.random() * 0.5 + 0.5,
              rotate: Math.random() * 360
            }}
            animate={{ 
              y: [null, Math.random() * -200 - 100],
              rotate: [null, Math.random() * 360],
              opacity: [0, 0.6, 0]
            }}
            transition={{ 
              duration: Math.random() * 5 + 5,
              repeat: Infinity,
              delay: Math.random() * 3
            }}
          >
            {i % 3 === 0 ? (
              <div className="w-8 h-8 border-2 border-primary/40"></div>
            ) : i % 3 === 1 ? (
              <div className="w-8 h-8 border-2 border-primary/40 rotate-45"></div>
            ) : (
              <div className="w-8 h-8 border-2 border-primary/40 rounded-full"></div>
            )}
          </motion.div>
        ))}
      </div>

      {/* Content */}
      <motion.div style={{ opacity }} className="relative h-full flex items-center px-4 z-10 pt-20">
        <div className="max-w-7xl mx-auto w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div>
              <motion.div
                initial={{ x: -100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.8 }}
              >
                <motion.div
                  animate={{ rotate: [0, 5, 0] }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="inline-flex items-center gap-3 bg-gradient-orange px-6 py-3 rounded-full mb-6 shadow-lg"
                >
                  <FaHardHat className="text-white text-xl" />
                  <span className="text-white font-bold">Premium Construction Services</span>
                </motion.div>
              </motion.div>

              <motion.h1
                initial={{ x: -100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-6xl md:text-8xl font-black mb-6 leading-none"
              >
                <span className="text-white">Building</span>
                <br />
                <span className="gradient-text text-shadow-glow">Tomorrow</span>
                <br />
                <span className="text-white">Today</span>
              </motion.h1>

              <motion.p
                initial={{ x: -100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-xl text-gray-300 mb-8 max-w-xl leading-relaxed"
              >
                Odisha's most trusted civil & RCC contractor delivering world-class excavation, reinforcement, and construction solutions.
              </motion.p>

              <motion.div
                initial={{ x: -100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="flex flex-wrap gap-4"
              >
                <motion.button
                  whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(255, 165, 0, 0.6)" }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gradient-orange text-white px-10 py-5 font-bold rounded-full shadow-2xl relative overflow-hidden group"
                >
                  <span className="relative z-10">Get Free Quote</span>
                  <div className="absolute inset-0 shimmer"></div>
                </motion.button>
                
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="glass-effect text-white px-10 py-5 font-bold rounded-full backdrop-blur-md"
                >
                  View Projects →
                </motion.button>
              </motion.div>

              {/* Quick Stats */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
                className="flex gap-8 mt-12"
              >
                {[{ num: "150+", label: "Projects" }, { num: "10+", label: "Years" }, { num: "100%", label: "Safety" }].map((stat, i) => (
                  <div key={i} className="text-center">
                    <div className="text-3xl font-bold text-primary">{stat.num}</div>
                    <div className="text-gray-400 text-sm">{stat.label}</div>
                  </div>
                ))}
              </motion.div>
            </div>

            {/* Right: 3D Card Effect */}
            <motion.div
              initial={{ x: 100, opacity: 0 }}
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
                  src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&q=80"
                  alt="Construction"
                  className="relative rounded-3xl shadow-2xl border-4 border-primary/30"
                />
                
                {/* Floating Badge */}
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
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        style={{ opacity }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20"
      >
        <motion.div
          animate={{ y: [0, 15, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center gap-2 cursor-pointer"
        >
          <span className="text-white text-sm font-semibold">Scroll Down</span>
          <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center pt-2">
            <motion.div
              animate={{ y: [0, 12, 0], opacity: [1, 0, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-1.5 h-3 bg-primary rounded-full"
            ></motion.div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}

export default Hero;
