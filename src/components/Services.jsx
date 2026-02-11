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
    <section id="services" className="py-24 bg-white relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
          className="absolute -top-1/2 -right-1/2 w-full h-full border-[100px] border-primary/5 rounded-full"
        ></motion.div>
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          className="absolute -bottom-1/2 -left-1/2 w-full h-full border-[100px] border-primary/5 rounded-full"
        ></motion.div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.span 
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            className="inline-block bg-gradient-orange text-white font-bold px-6 py-2 rounded-full mb-4 shadow-lg"
          >
            WHAT WE DO
          </motion.span>
          <h2 className="text-5xl md:text-6xl font-black text-dark mb-4">
            Our <span className="gradient-text">Construction</span> Services
          </h2>
          <p className="text-grayish text-lg max-w-2xl mx-auto">
            Comprehensive civil engineering solutions with cutting-edge technology
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -15 }}
                className="group relative bg-white rounded-2xl overflow-hidden shadow-xl cursor-pointer"
              >
                {/* Gradient Border Effect */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                <div className="absolute inset-[2px] bg-white rounded-2xl"></div>

                {/* Content */}
                <div className="relative">
                  {/* Image with Overlay */}
                  <div className="relative h-56 overflow-hidden rounded-t-2xl">
                    <motion.img 
                      whileHover={{ scale: 1.15 }}
                      transition={{ duration: 0.6 }}
                      src={service.image} 
                      alt={service.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                    
                    {/* Animated Icon */}
                    <motion.div
                      whileHover={{ rotate: 360, scale: 1.2 }}
                      transition={{ duration: 0.6 }}
                      className={`absolute top-4 right-4 bg-gradient-to-br ${service.color} p-4 rounded-xl shadow-2xl`}
                    >
                      <Icon className="text-white text-2xl" />
                    </motion.div>

                    {/* Hover Overlay */}
                    <motion.div
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                      className="absolute inset-0 bg-gradient-to-br from-primary/90 to-secondary/90 flex items-center justify-center"
                    >
                      <span className="text-white font-bold text-lg">View Details →</span>
                    </motion.div>
                  </div>

                  {/* Text Content */}
                  <div className="p-6">
                    <h3 className="font-bold text-xl text-dark mb-2 group-hover:text-primary transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-grayish mb-4">{service.description}</p>
                    
                    <div className="flex items-center justify-between">
                      <motion.div 
                        className="flex items-center text-primary font-semibold group-hover:gap-3 gap-2 transition-all"
                      >
                        <span>Learn More</span>
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
                      </motion.div>
                      
                      <motion.div
                        whileHover={{ scale: 1.1 }}
                        className={`w-10 h-10 bg-gradient-to-br ${service.color} rounded-full flex items-center justify-center text-white font-bold shadow-lg`}
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
          className="text-center mt-16"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-orange text-white px-12 py-5 rounded-full font-bold text-lg shadow-2xl hover:shadow-primary/50 transition-all"
          >
            View All Services →
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}

export default Services;
