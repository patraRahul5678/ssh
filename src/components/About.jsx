import { motion } from "framer-motion";
import { FaAward, FaUsers, FaShieldAlt, FaClock, FaCheckCircle } from "react-icons/fa";

function About() {
  const features = [
    { icon: FaAward, title: "Quality Assured", desc: "ISO certified processes", color: "from-yellow-400 to-orange-500" },
    { icon: FaUsers, title: "Expert Team", desc: "Skilled professionals", color: "from-blue-400 to-cyan-500" },
    { icon: FaShieldAlt, title: "100% Safety", desc: "Zero compromise", color: "from-green-400 to-emerald-500" },
    { icon: FaClock, title: "On-Time Delivery", desc: "Deadline focused", color: "from-purple-400 to-pink-500" }
  ];

  return (
    <section id="about" className="py-24 bg-gradient-to-b from-white via-gray-50 to-white relative overflow-hidden">
      {/* Animated Background Shapes */}
      <motion.div
        animate={{ 
          scale: [1, 1.2, 1],
          rotate: [0, 180, 360]
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"
      ></motion.div>
      <motion.div
        animate={{ 
          scale: [1.2, 1, 1.2],
          rotate: [360, 180, 0]
        }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl"
      ></motion.div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Images */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative">
              {/* Main Image Grid */}
              <div className="grid grid-cols-2 gap-6">
                <motion.div
                  whileHover={{ scale: 1.05, rotate: -2 }}
                  className="relative overflow-hidden rounded-2xl shadow-2xl"
                >
                  <img 
                    src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=400&q=80" 
                    alt="Construction site"
                    className="w-full h-72 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                </motion.div>
                
                <motion.div
                  whileHover={{ scale: 1.05, rotate: 2 }}
                  className="relative overflow-hidden rounded-2xl shadow-2xl mt-12"
                >
                  <img 
                    src="https://images.unsplash.com/photo-1581094271901-8022df4466f9?w=400&q=80" 
                    alt="Heavy machinery"
                    className="w-full h-72 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                </motion.div>
              </div>
              
              {/* Floating Badges */}
              <motion.div
                animate={{ y: [0, -15, 0], rotate: [0, 5, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute -bottom-8 -left-8 bg-gradient-orange text-white p-8 rounded-2xl shadow-2xl z-10"
              >
                <div className="text-5xl font-black">10+</div>
                <div className="text-sm font-semibold">Years Experience</div>
              </motion.div>

              <motion.div
                animate={{ y: [0, -10, 0], rotate: [0, -5, 0] }}
                transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
                className="absolute -top-6 -right-6 bg-white p-6 rounded-2xl shadow-2xl border-4 border-primary z-10"
              >
                <FaCheckCircle className="text-5xl text-primary" />
                <div className="text-xs font-bold text-dark mt-2">ISO Certified</div>
              </motion.div>

              {/* Decorative Elements */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full border-4 border-primary/10 rounded-full -z-10"
              ></motion.div>
            </div>
          </motion.div>

          {/* Right: Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <motion.span 
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              className="inline-block bg-gradient-orange text-white font-bold px-6 py-2 rounded-full mb-4 shadow-lg"
            >
              ABOUT US
            </motion.span>
            
            <h2 className="text-5xl md:text-6xl font-black text-dark mb-6 leading-tight">
              Building <span className="gradient-text">Odisha's</span> Future
            </h2>
            
            <p className="text-grayish text-lg mb-6 leading-relaxed">
              Sahoo Engineering is a trusted civil and mechanical construction contractor 
              in Odisha, delivering world-class excavation, RCC, PCC, and reinforcement 
              services with unwavering commitment to quality and safety standards.
            </p>
            
            <p className="text-grayish mb-8 leading-relaxed">
              With over a decade of experience, we've successfully completed 150+ projects, 
              earning the trust of clients across industrial, commercial, and infrastructure sectors.
            </p>

            {/* Features Grid */}
            <div className="grid grid-cols-2 gap-4 mb-8">
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
                    <div className="relative bg-white rounded-xl p-5 border-2 border-gray-100 group-hover:border-transparent transition-all">
                      <motion.div
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.6 }}
                        className={`bg-gradient-to-br ${feature.color} w-12 h-12 rounded-lg flex items-center justify-center mb-3 shadow-lg`}
                      >
                        <Icon className="text-white text-xl" />
                      </motion.div>
                      <h4 className="font-bold text-dark mb-1">{feature.title}</h4>
                      <p className="text-sm text-grayish">{feature.desc}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* CTA Button */}
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(255, 165, 0, 0.5)" }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-orange text-white px-10 py-5 rounded-full font-bold shadow-xl relative overflow-hidden group"
            >
              <span className="relative z-10 flex items-center gap-2">
                Learn More About Us
                <motion.svg
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </motion.svg>
              </span>
              <div className="absolute inset-0 shimmer"></div>
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default About;
