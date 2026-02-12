import { motion } from "framer-motion";
import { FaLinkedin, FaEnvelope } from "react-icons/fa";

function Leadership() {
  const leaders = [
    {
      name: "Amiya Kumar Sahoo",
      role: "Managing Partner",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&q=80",
      bio: [
        "Leads overall company operations and strategic decisions",
        "Oversees large-scale project execution",
        "Manages government and corporate relationships",
        "Responsible for quality control and financial direction"
      ]
    },
    {
      name: "Amitava Sahoo",
      role: "Partner",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&q=80",
      bio: [
        "Supports operational planning and business development",
        "Handles coordination between project teams and clients",
        "Ensures timely execution and resource optimization"
      ]
    }
  ];

  return (
    <section id="leadership" className="py-12 sm:py-16 md:py-20 lg:py-24 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
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
            LEADERSHIP
          </motion.span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-dark mb-4">
            Meet Our <span className="gradient-text">Valued Partners</span>
          </h2>
          <p className="text-grayish text-base sm:text-lg max-w-2xl mx-auto">
            Experienced leaders driving excellence in civil engineering and infrastructure
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto">
          {leaders.map((leader, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              whileHover={{ y: -10 }}
              className="group relative bg-white rounded-3xl overflow-hidden shadow-xl"
            >
              <div className="absolute inset-0 bg-gradient-orange opacity-0 group-hover:opacity-10 transition-opacity"></div>
              
              <div className="relative p-6 sm:p-8">
                <div className="relative mb-6">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="relative w-32 h-32 sm:w-40 sm:h-40 mx-auto"
                  >
                    <img
                      src={leader.image}
                      alt={leader.name}
                      className="w-full h-full object-cover rounded-2xl shadow-lg"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent rounded-2xl"></div>
                  </motion.div>
                </div>

                <div className="text-center mb-6">
                  <h3 className="text-xl sm:text-2xl font-black text-dark mb-2">{leader.name}</h3>
                  <span className="inline-block bg-gradient-orange text-white px-4 py-1 rounded-full text-sm font-semibold">
                    {leader.role}
                  </span>
                </div>

                <ul className="space-y-3 mb-6">
                  {leader.bio.map((item, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 + i * 0.1 }}
                      className="flex items-start gap-2 text-grayish text-sm"
                    >
                      <span className="text-primary font-bold mt-1">✓</span>
                      <span>{item}</span>
                    </motion.li>
                  ))}
                </ul>

                <div className="flex justify-center gap-4">
                  <motion.a
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    href="#"
                    className="bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-700 transition-colors"
                  >
                    <FaLinkedin className="text-xl" />
                  </motion.a>
                  <motion.a
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    href="#"
                    className="bg-gradient-orange text-white p-3 rounded-full shadow-lg"
                  >
                    <FaEnvelope className="text-xl" />
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Leadership;
