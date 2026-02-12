import { motion } from "framer-motion";
import { FaHardHat, FaTools, FaBuilding, FaCubes, FaHammer, FaWarehouse } from "react-icons/fa";

function Services() {
  const services = [
    {
      title: "Excavation up to 12m",
      icon: FaTools,
      image: "https://images.unsplash.com/photo-1581094271901-8022df4466f9?w=400&q=80",
      description: "Deep excavation with advanced machinery",
      color: "from-orange-500 to-red-500"
    },
    {
      title: "Hard Rock Blasting",
      icon: FaHammer,
      image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=400&q=80",
      description: "Controlled blasting for tough terrain",
      color: "from-yellow-500 to-orange-500"
    },
    {
      title: "RCC (M20, M25)",
      icon: FaBuilding,
      image: "https://images.unsplash.com/photo-1590856029826-c7a73142bbf1?w=400&q=80",
      description: "High-grade reinforced concrete work",
      color: "from-orange-600 to-yellow-500"
    },
    {
      title: "PCC (M15)",
      icon: FaCubes,
      image: "https://images.unsplash.com/photo-1597476329744-2c2c90f0e0e4?w=400&q=80",
      description: "Plain cement concrete foundations",
      color: "from-amber-500 to-orange-500"
    },
    {
      title: "Reinforcement Work",
      icon: FaHardHat,
      image: "https://images.unsplash.com/photo-1621905251918-48416bd8575a?w=400&q=80",
      description: "Steel reinforcement & bar bending",
      color: "from-orange-500 to-amber-600"
    },
    {
      title: "Formwork & Shuttering",
      icon: FaWarehouse,
      image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=400&q=80",
      description: "Precision formwork solutions",
      color: "from-yellow-600 to-orange-600"
    }
  ];

  return (
    <section id="services" className="py-12 sm:py-16 md:py-20 lg:py-24 bg-white relative overflow-hidden">
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
            WHAT WE DO
          </motion.span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-dark mb-4">
            Our <span className="gradient-text">Construction</span> Services
          </h2>
          <p className="text-grayish text-base sm:text-lg max-w-2xl mx-auto px-4">
            Comprehensive civil engineering solutions with cutting-edge technology
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="group relative bg-white rounded-2xl overflow-hidden shadow-xl cursor-pointer"
              >
                {/* Gradient Border Effect */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                <div className="absolute inset-[2px] bg-white rounded-2xl"></div>

                {/* Content */}
                <div className="relative">
                  {/* Image with Overlay */}
                  <div className="relative h-48 sm:h-56 overflow-hidden rounded-t-2xl">
                    <motion.img 
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.5 }}
                      src={service.image} 
                      alt={service.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                    
                    {/* Icon */}
                    <motion.div
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                      className={`absolute top-4 right-4 bg-gradient-to-br ${service.color} p-3 sm:p-4 rounded-xl shadow-2xl`}
                    >
                      <Icon className="text-white text-xl sm:text-2xl" />
                    </motion.div>

                    {/* Hover Overlay */}
                    <motion.div
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                      className="absolute inset-0 bg-gradient-to-br from-primary/90 to-secondary/90 flex items-center justify-center"
                    >
                      <span className="text-white font-bold text-base sm:text-lg">View Details →</span>
                    </motion.div>
                  </div>

                  {/* Text Content */}
                  <div className="p-5 sm:p-6">
                    <h3 className="font-bold text-lg sm:text-xl text-dark mb-2 group-hover:text-primary transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-grayish mb-4 text-sm sm:text-base">{service.description}</p>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center text-primary font-semibold gap-2 text-sm sm:text-base">
                        <span>Learn More</span>
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
                      </div>
                      
                      <motion.div
                        whileHover={{ scale: 1.1 }}
                        className={`w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br ${service.color} rounded-full flex items-center justify-center text-white font-bold shadow-lg text-sm sm:text-base`}
                      >
                        {index + 1}
                      </motion.div>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12 sm:mt-16"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-orange text-white px-8 sm:px-10 md:px-12 py-4 sm:py-5 rounded-full font-bold text-base sm:text-lg shadow-2xl hover:shadow-primary/50 transition-all"
          >
            View All Services →
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}

export default Services;
