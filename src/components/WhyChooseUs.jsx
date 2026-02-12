import { motion } from "framer-motion";
import { FaAward, FaShieldAlt, FaClock, FaHandshake, FaCogs, FaHeart } from "react-icons/fa";

function WhyChooseUs() {
  const reasons = [
    { icon: FaAward, title: "25+ Years Experience", desc: "Extensive expertise in civil engineering", color: "from-blue-500 to-cyan-600" },
    { icon: FaShieldAlt, title: "Quality & Safety Excellence", desc: "Highest standards maintained", color: "from-green-500 to-emerald-600" },
    { icon: FaClock, title: "Timely Delivery", desc: "On-time project completion", color: "from-orange-500 to-red-600" },
    { icon: FaHandshake, title: "Strong Partnerships", desc: "Government & corporate trust", color: "from-purple-500 to-pink-600" },
    { icon: FaCogs, title: "Engineering Precision", desc: "Complex project expertise", color: "from-yellow-500 to-orange-600" },
    { icon: FaHeart, title: "Client-Centric Approach", desc: "Project lifecycle excellence", color: "from-red-500 to-pink-600" }
  ];

  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-gradient-to-br from-dark via-gray-900 to-black relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
          <motion.span
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            className="inline-block bg-gradient-orange text-white font-bold px-4 sm:px-6 py-2 rounded-full mb-4 shadow-lg text-sm sm:text-base"
          >
            WHY CHOOSE US
          </motion.span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white mb-4">
            Why Clients Choose <span className="gradient-text text-shadow-glow">Sahoo Engineering</span>
          </h2>
          <p className="text-gray-300 text-base sm:text-lg max-w-2xl mx-auto">
            Trusted excellence in infrastructure construction across India
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.05 }}
                className="group relative glass-effect p-6 sm:p-8 rounded-2xl border-2 border-white/10 hover:border-primary/50 transition-all"
              >
                <div className="absolute inset-0 bg-gradient-orange opacity-0 group-hover:opacity-10 transition-opacity rounded-2xl"></div>
                
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className={`bg-gradient-to-br ${reason.color} w-16 h-16 sm:w-20 sm:h-20 rounded-2xl flex items-center justify-center mb-4 sm:mb-6 shadow-lg mx-auto`}
                >
                  <Icon className="text-white text-2xl sm:text-3xl" />
                </motion.div>

                <h3 className="text-white font-black text-lg sm:text-xl mb-2 text-center">{reason.title}</h3>
                <p className="text-gray-300 text-sm sm:text-base text-center">{reason.desc}</p>

                <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${reason.color} rounded-b-2xl`}></div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default WhyChooseUs;
