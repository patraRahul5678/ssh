import { motion } from "framer-motion";
import { useState, useEffect } from "react";

function Stats() {
  const stats = [
    { end: 150, suffix: "+", label: "Projects Completed", icon: "🏗️" },
    { end: 12, suffix: "m", label: "Max Excavation Depth", icon: "⛏️" },
    { end: 100, suffix: "%", label: "Safety Record", icon: "🛡️" },
    { end: 10, suffix: "+", label: "Years Experience", icon: "🎯" }
  ];

  const Counter = ({ end, suffix, index }) => {
    const [count, setCount] = useState(0);
    const [hasAnimated, setHasAnimated] = useState(false);

    useEffect(() => {
      if (!hasAnimated) return;
      
      const duration = 2000;
      const steps = 60;
      const increment = end / steps;
      let current = 0;

      const timer = setInterval(() => {
        current += increment;
        if (current >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(Math.floor(current));
        }
      }, duration / steps);

      return () => clearInterval(timer);
    }, [end, hasAnimated]);

    return (
      <motion.div
        initial={{ scale: 0, opacity: 0, rotateY: -180 }}
        whileInView={{ scale: 1, opacity: 1, rotateY: 0 }}
        viewport={{ once: true }}
        onViewportEnter={() => setHasAnimated(true)}
        transition={{ duration: 0.6, delay: index * 0.1, type: "spring" }}
        whileHover={{ scale: 1.1, rotateY: 10 }}
        className="relative"
      >
        <motion.span 
          className="text-6xl md:text-7xl font-black gradient-text block mb-2"
          animate={{ textShadow: ["0 0 20px rgba(255,165,0,0.5)", "0 0 40px rgba(255,165,0,0.8)", "0 0 20px rgba(255,165,0,0.5)"] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          {count}{suffix}
        </motion.span>
      </motion.div>
    );
  };

  return (
    <section className="relative py-24 overflow-hidden">
      {/* Parallax Background */}
      <div className="absolute inset-0">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-fixed"
          style={{ 
            backgroundImage: "url('https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=1920&q=80')" 
          }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-br from-dark/95 via-black/90 to-dark/95"></div>
      </div>

      {/* Animated Grid */}
      <div className="absolute inset-0 opacity-10">
        <motion.div 
          animate={{ backgroundPosition: ['0px 0px', '50px 50px'] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="w-full h-full"
          style={{
            backgroundImage: 'linear-gradient(#FFA500 2px, transparent 2px), linear-gradient(90deg, #FFA500 2px, transparent 2px)',
            backgroundSize: '50px 50px'
          }}
        ></motion.div>
      </div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-6 z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.span
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            className="inline-block bg-gradient-orange text-white font-bold px-6 py-2 rounded-full mb-4 shadow-lg"
          >
            OUR ACHIEVEMENTS
          </motion.span>
          <h2 className="text-5xl md:text-6xl font-black text-white mb-4">
            Success in <span className="gradient-text text-shadow-glow">Numbers</span>
          </h2>
          <p className="text-gray-300 text-lg">Delivering excellence across Odisha with proven results</p>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className="relative group"
            >
              {/* Card */}
              <div className="relative glass-effect p-8 rounded-2xl border-2 border-primary/20 hover:border-primary/50 transition-all overflow-hidden">
                {/* Glow Effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-orange opacity-0 group-hover:opacity-20 transition-opacity"
                  animate={{ 
                    scale: [1, 1.2, 1],
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                ></motion.div>

                {/* Icon */}
                <motion.div
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 3, repeat: Infinity, delay: index * 0.2 }}
                  className="text-5xl mb-4"
                >
                  {stat.icon}
                </motion.div>

                {/* Counter */}
                <Counter end={stat.end} suffix={stat.suffix} index={index} />
                
                {/* Label */}
                <p className="text-gray-300 mt-3 text-lg font-semibold">{stat.label}</p>

                {/* Decorative Corner */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-orange opacity-10 rounded-bl-full"></div>
              </div>

              {/* Floating Badge */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity, delay: index * 0.3 }}
                className="absolute -top-3 -right-3 bg-gradient-orange text-white w-12 h-12 rounded-full flex items-center justify-center font-bold shadow-lg"
              >
                #{index + 1}
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-gray-300 text-lg mb-6">Ready to be part of our success story?</p>
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: "0 0 40px rgba(255, 165, 0, 0.6)" }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-orange text-white px-12 py-5 rounded-full font-bold text-lg shadow-2xl relative overflow-hidden"
          >
            <span className="relative z-10">Start Your Project Today</span>
            <div className="absolute inset-0 shimmer"></div>
          </motion.button>
        </motion.div>
      </div>

      {/* Decorative Elements */}
      <motion.div 
        animate={{ rotate: 360 }}
        transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
        className="absolute top-20 left-20 w-32 h-32 border-4 border-primary/20 rounded-full"
      ></motion.div>
      <motion.div 
        animate={{ rotate: -360 }}
        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
        className="absolute bottom-20 right-20 w-40 h-40 border-4 border-primary/20 rounded-full"
      ></motion.div>
    </section>
  );
}

export default Stats;
