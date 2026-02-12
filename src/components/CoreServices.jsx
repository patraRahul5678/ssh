import { motion } from "framer-motion";
import { FaBuilding, FaTrain, FaHammer, FaRoad } from "react-icons/fa";

function CoreServices() {
  const services = [
    {
      title: "Building Construction",
      icon: FaBuilding,
      description: "Comprehensive construction solutions for residential, commercial, and institutional buildings with full project lifecycle execution from planning to completion.",
      features: ["Residential Buildings", "Commercial Complexes", "Institutional Projects", "Full Lifecycle Management"],
      color: "from-blue-500 to-cyan-600"
    },
    {
      title: "Railway & Bridge Construction",
      icon: FaTrain,
      description: "Specialized expertise in minor and major bridge works, structural concrete and steel components, with extensive railway infrastructure development capabilities.",
      features: ["Minor & Major Bridges", "Structural Concrete Works", "Steel Components", "Railway Infrastructure"],
      color: "from-orange-500 to-red-600"
    },
    {
      title: "Piling & Foundation Works",
      icon: FaHammer,
      description: "Advanced deep foundation solutions designed for heavy load-bearing structures with infrastructure-grade piling systems ensuring long-term stability.",
      features: ["Deep Foundation Solutions", "Heavy Load Structures", "Infrastructure Piling", "Soil Stabilization"],
      color: "from-green-500 to-emerald-600"
    },
    {
      title: "Track Linking & Civil Infrastructure",
      icon: FaRoad,
      description: "Comprehensive railway track support works and supporting civil engineering infrastructure for seamless connectivity and operational excellence.",
      features: ["Railway Track Support", "Civil Infrastructure", "Connectivity Solutions", "Maintenance Support"],
      color: "from-purple-500 to-pink-600"
    }
  ];

  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-white relative overflow-hidden">
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
            CORE SERVICES
          </motion.span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-dark mb-4">
            Civil Engineering <span className="gradient-text">Excellence</span>
          </h2>
          <p className="text-grayish text-base sm:text-lg max-w-3xl mx-auto">
            Delivering comprehensive infrastructure solutions across building construction, railway projects, and foundation works
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                whileHover={{ y: -10 }}
                className="group relative bg-gradient-to-br from-gray-50 to-white rounded-3xl overflow-hidden shadow-xl border-2 border-gray-100 hover:border-primary/30 transition-all"
              >
                <div className="p-6 sm:p-8">
                  <div className="flex items-start gap-4 sm:gap-6 mb-6">
                    <motion.div
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                      className={`bg-gradient-to-br ${service.color} p-4 sm:p-5 rounded-2xl shadow-lg flex-shrink-0`}
                    >
                      <Icon className="text-white text-3xl sm:text-4xl" />
                    </motion.div>
                    <div>
                      <h3 className="text-xl sm:text-2xl font-black text-dark mb-2">{service.title}</h3>
                      <div className={`h-1 w-20 bg-gradient-to-r ${service.color} rounded-full`}></div>
                    </div>
                  </div>

                  <p className="text-grayish text-sm sm:text-base mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  <div className="mb-6">
                    <h4 className="text-dark font-bold mb-3 text-sm sm:text-base">Key Features:</h4>
                    <div className="grid grid-cols-2 gap-2 sm:gap-3">
                      {service.features.map((feature, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.3 + i * 0.1 }}
                          className="flex items-center gap-2 text-grayish text-xs sm:text-sm"
                        >
                          <span className="text-primary font-bold">•</span>
                          <span>{feature}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`w-full bg-gradient-to-r ${service.color} text-white px-6 py-3 sm:py-4 rounded-xl font-bold shadow-lg text-sm sm:text-base`}
                  >
                    Learn More →
                  </motion.button>
                </div>

                <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${service.color} opacity-5 rounded-bl-full`}></div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default CoreServices;
