import { motion } from "framer-motion";
import { FaAward, FaUsers, FaShieldAlt, FaClock, FaCheckCircle } from "react-icons/fa";

function About({ navigate }) {
  const features = [
    { icon: FaAward, title: "Quality Assured", desc: "ISO certified processes", color: "from-yellow-400 to-orange-500" },
    { icon: FaUsers, title: "Expert Team", desc: "Skilled professionals", color: "from-blue-400 to-cyan-500" },
    { icon: FaShieldAlt, title: "100% Safety", desc: "Zero compromise", color: "from-green-400 to-emerald-500" },
    { icon: FaClock, title: "On-Time Delivery", desc: "Deadline focused", color: "from-purple-400 to-pink-500" }
  ];

  return (
    <section id="about" className="py-12 sm:py-16 md:py-20 lg:py-24 bg-gradient-to-b from-white via-gray-50 to-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Images */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative order-2 lg:order-1"
          >
            <div className="relative">
              {/* Main Image Grid */}
              <div className="grid grid-cols-2 gap-4 sm:gap-6">
                <motion.div
                  whileHover={{ scale: 1.05, rotate: -2 }}
                  className="relative overflow-hidden rounded-2xl shadow-2xl"
                >
                  <img 
                    src="../buiding.png" 
                    alt="Construction site"
                    className="w-full h-56 sm:h-72 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                </motion.div>
                
                <motion.div
                  whileHover={{ scale: 1.05, rotate: 2 }}
                  className="relative overflow-hidden rounded-2xl shadow-2xl mt-8 sm:mt-12"
                >
                  <img 
                    src="../building1.png" 
                    alt="Heavy machinery"
                    className="w-full h-56 sm:h-72 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                </motion.div>
              </div>
              
              {/* Floating Badges */}
              <motion.div
                animate={{ y: [0, -15, 0], rotate: [0, 5, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute -bottom-6 sm:-bottom-8 -left-4 sm:-left-8 bg-gradient-orange text-white p-6 sm:p-8 rounded-2xl shadow-2xl z-10"
              >
                <div className="text-4xl sm:text-5xl font-black">25+</div>
                <div className="text-xs sm:text-sm font-semibold">Years Experience</div>
              </motion.div>

              <motion.div
                animate={{ y: [0, -10, 0], rotate: [0, -5, 0] }}
                transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
                className="absolute -top-4 sm:-top-6 -right-4 sm:-right-6 bg-white p-4 sm:p-6 rounded-2xl shadow-2xl border-4 border-primary z-10"
              >
                <FaCheckCircle className="text-4xl sm:text-5xl text-primary" />
                <div className="text-xs font-bold text-dark mt-2">ISO Certified</div>
              </motion.div>
            </div>
          </motion.div>

          {/* Right: Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="order-1 lg:order-2"
          >
            <motion.span 
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              className="inline-block bg-gradient-orange text-white font-bold px-4 sm:px-6 py-2 rounded-full mb-4 shadow-lg text-sm sm:text-base"
            >
              ABOUT US
            </motion.span>
            
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-dark mb-6 leading-tight">
              Building <span className="gradient-text">Odisha's</span> Future
            </h2>
            
            <p className="text-grayish text-base sm:text-lg mb-4 sm:mb-6 leading-relaxed">
              Sahoo Engineering Construction is a premier civil and infrastructure construction company based in Odisha, India. With more than 25 years of experience, the company specializes in building construction, railway bridge works, infrastructure development, deep piling & foundation works, and track linking projects.
            </p>
            
            <p className="text-grayish text-sm sm:text-base mb-6 sm:mb-8 leading-relaxed">
              The firm is known for its commitment to quality, safety, engineering precision, and on-time delivery. We've successfully completed 150+ projects, earning the trust of clients across industrial, commercial, and infrastructure sectors.
            </p>

            {/* Features Grid */}
            <div className="grid grid-cols-2 gap-3 sm:gap-4 mb-6 sm:mb-8">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ y: -5, scale: 1.05 }}
                    className="relative group cursor-pointer"
                  >
                    {/* Gradient Border */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} rounded-xl opacity-0 group-hover:opacity-100 transition-opacity`}></div>
                    <div className="relative bg-white rounded-xl p-4 sm:p-5 border-2 border-gray-100 group-hover:border-transparent transition-all">
                      <motion.div
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.6 }}
                        className={`bg-gradient-to-br ${feature.color} w-10 h-10 sm:w-12 sm:h-12 rounded-lg flex items-center justify-center mb-2 sm:mb-3 shadow-lg`}
                      >
                        <Icon className="text-white text-lg sm:text-xl" />
                      </motion.div>
                      <h4 className="font-bold text-dark mb-1 text-sm sm:text-base">{feature.title}</h4>
                      <p className="text-xs sm:text-sm text-grayish">{feature.desc}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* CTA Button */}
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(255, 165, 0, 0.5)" }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate('contact')}
              className="bg-gradient-orange text-white px-8 sm:px-10 py-4 sm:py-5 rounded-full font-bold shadow-xl text-sm sm:text-base cursor-pointer"
            >
              <span className="flex items-center gap-2">
                Learn More About Us
                <motion.svg
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                  className="w-4 h-4 sm:w-5 sm:h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </motion.svg>
              </span>
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default About;
