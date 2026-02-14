import { motion } from "framer-motion";
import { FaBuilding, FaTrain, FaHammer, FaRoad, FaArrowLeft } from "react-icons/fa";

function AllServices({ navigate }) {

  const services = [
    {
      id: "building-construction",
      title: "Building Construction",
      icon: FaBuilding,
      image: "../public/BuildingConstruction.png",
      description: "Comprehensive construction solutions for residential, commercial, and institutional buildings with full project lifecycle execution from planning to completion.",
      features: ["Residential Buildings", "Commercial Complexes", "Institutional Projects", "Full Lifecycle Management"],
      services: ["Site Planning & Design", "Foundation Work", "Structural Construction", "Finishing & Handover"],
      color: "from-blue-500 to-cyan-600"
    },
    {
      id: "railway-bridge",
      title: "Railway & Bridge Construction",
      icon: FaTrain,
      image: "../public/Railway&BridgeConstruction.png",
      description: "Specialized expertise in minor and major bridge works, structural concrete and steel components, with extensive railway infrastructure development capabilities.",
      features: ["Minor & Major Bridges", "Structural Concrete Works", "Steel Components", "Railway Infrastructure"],
      services: ["Bridge Design & Construction", "Railway Track Support", "Structural Steel Work", "Infrastructure Maintenance"],
      color: "from-orange-500 to-red-600"
    },
    {
      id: "piling-foundation",
      title: "Piling &Foundation Works",
      icon: FaHammer,
      image: "../public/Pilling&FoundationWorks.png",
      description: "Advanced deep foundation solutions designed for heavy load-bearing structures with infrastructure-grade piling systems ensuring long-term stability.",
      features: ["Deep Foundation Solutions", "Heavy Load Structures", "Infrastructure Piling", "Soil Stabilization"],
      services: ["Bored Piling", "Driven Piling", "Foundation Design", "Load Testing"],
      color: "from-green-500 to-emerald-600"
    },
    {
      id: "track-linking",
      title: "Track Linking & Civil Infrastructure",
      icon: FaRoad,
      image: "../public/TrackLining&Infrastructure.png",
      description: "Comprehensive railway track support works and supporting civil engineering infrastructure for seamless connectivity and operational excellence.",
      features: ["Railway Track Support", "Civil Infrastructure", "Connectivity Solutions", "Maintenance Support"],
      services: ["Track Laying", "Ballast Work", "Drainage Systems", "Platform Construction"],
      color: "from-purple-500 to-pink-600"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
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
              All <span className="gradient-text text-shadow-glow">Services</span>
            </h1>
            <p className="text-gray-300 text-base sm:text-lg max-w-3xl">
              Comprehensive civil engineering and infrastructure construction services across Odisha
            </p>
          </motion.div>
        </div>
      </div>

      {/* Services Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16 md:py-20">
        <div className="grid md:grid-cols-2 gap-8 sm:gap-10 md:gap-12">
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
                className="group bg-white rounded-3xl overflow-hidden shadow-xl border-2 border-gray-100 hover:border-primary/30 transition-all"
              >
                <div className="relative h-56 sm:h-64 overflow-hidden">
                  <img src={service.image} alt={service.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                  <div className={`absolute top-4 right-4 bg-gradient-to-br ${service.color} p-4 rounded-xl shadow-lg`}>
                    <Icon className="text-white text-2xl sm:text-3xl" />
                  </div>
                </div>

                <div className="p-6 sm:p-8">
                  <h3 className="text-2xl sm:text-3xl font-black text-dark mb-4">{service.title}</h3>
                  <p className="text-grayish text-sm sm:text-base mb-6 leading-relaxed">{service.description}</p>

                  <div className="mb-6">
                    <h4 className="text-dark font-bold mb-3 text-sm sm:text-base">Key Features:</h4>
                    <div className="grid grid-cols-2 gap-2 sm:gap-3">
                      {service.features.map((feature, i) => (
                        <div key={i} className="flex items-center gap-2 text-grayish text-xs sm:text-sm">
                          <span className="text-primary font-bold">•</span>
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-dark font-bold mb-3 text-sm sm:text-base">Services Offered:</h4>
                    <div className="space-y-2">
                      {service.services.map((item, i) => (
                        <div key={i} className="flex items-center gap-2 text-grayish text-xs sm:text-sm">
                          <span className="text-primary font-bold">✓</span>
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => navigate('service-detail', service.id)}
                    className={`w-full bg-gradient-to-r ${service.color} text-white px-6 py-4 rounded-xl font-bold shadow-lg text-sm sm:text-base cursor-pointer`}
                  >
                    Learn More →
                  </motion.button>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default AllServices;
