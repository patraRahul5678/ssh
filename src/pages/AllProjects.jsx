import { motion } from "framer-motion";
import { FaCheckCircle, FaBuilding, FaTrain, FaLandmark, FaArrowLeft } from "react-icons/fa";

function AllProjects({ navigate }) {

  const projects = [
    {
      name: "OSIL – Pintu Babu Project",
      client: "OSIL",
      category: "Major Civil Construction",
      description: "Successfully executed major civil construction project with comprehensive infrastructure development including foundation work, structural concrete, and finishing.",
      image: "/osil.webp",
      location: "Odisha",
      duration: "18 months",
      value: "₹5.2 Crore"
    },
    {
      name: "Royal Tower, Damana",
      client: "Private Sector",
      category: "Infrastructure Building",
      description: "Completed high-rise infrastructure building project with modern construction techniques, including deep foundation and RCC framework.",
      image: "/RoyalTower.png",
      location: "Damana, Odisha",
      duration: "24 months",
      value: "₹8.5 Crore"
    },
    {
      name: "East Coast Railway Bridge - Phase 1",
      client: "East Coast Railway",
      category: "Bridge Construction",
      description: "Major bridge construction project ensuring railway infrastructure excellence with structural steel and concrete components.",
      image: "/Railway.png",
      location: "Odisha",
      duration: "20 months",
      value: "₹12 Crore"
    },
    {
      name: "Track Linking Project - Sector 4",
      client: "East Coast Railway",
      category: "Track Linking",
      description: "Railway track support works and civil infrastructure for seamless connectivity across multiple stations.",
      image: "/trackLining.png",
      location: "Odisha",
      duration: "15 months",
      value: "₹6.8 Crore"
    },
    {
      name: "State Highway Development",
      client: "Government of Odisha",
      category: "Civil Infrastructure",
      description: "State government civil contract for highway development including excavation, piling, and road construction.",
      image: "/stateHighway.png",
      location: "Odisha",
      duration: "22 months",
      value: "₹15 Crore"
    },
    {
      name: "Industrial Complex Foundation",
      client: "Private Industrial Group",
      category: "Foundation Works",
      description: "Deep piling and foundation works for heavy industrial complex with infrastructure-grade stability solutions.",
      image: "/industrilaComplex.png",
      location: "Jagatsinghpur, Odisha",
      duration: "12 months",
      value: "₹4.5 Crore"
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
              All <span className="gradient-text text-shadow-glow">Projects</span>
            </h1>
            <p className="text-gray-300 text-base sm:text-lg max-w-3xl">
              Explore our portfolio of successfully completed infrastructure and construction projects across Odisha
            </p>
          </motion.div>
        </div>
      </div>

      {/* Projects Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16 md:py-20">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group bg-white rounded-2xl overflow-hidden shadow-xl border-2 border-gray-100 hover:border-primary/30 transition-all"
            >
              <div className="relative h-48 sm:h-56 overflow-hidden">
                <img src={project.image} alt={project.name} loading="lazy" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                <FaCheckCircle className="absolute top-4 right-4 text-green-500 text-2xl sm:text-3xl" />
                <div className="absolute bottom-4 left-4 right-4">
                  <span className="inline-block px-3 py-1 bg-gradient-orange text-white text-xs font-semibold rounded-full">
                    {project.category}
                  </span>
                </div>
              </div>

              <div className="p-5 sm:p-6">
                <h3 className="text-lg sm:text-xl font-black text-dark mb-2">{project.name}</h3>
                <p className="text-grayish text-sm mb-4">{project.description}</p>
                
                <div className="space-y-2 mb-4 text-xs sm:text-sm">
                  <div className="flex justify-between">
                    <span className="text-grayish">Client:</span>
                    <span className="text-dark font-semibold">{project.client}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-grayish">Location:</span>
                    <span className="text-dark font-semibold">{project.location}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-grayish">Duration:</span>
                    <span className="text-dark font-semibold">{project.duration}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-grayish">Value:</span>
                    <span className="text-primary font-bold">{project.value}</span>
                  </div>
                </div>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => navigate('contact')}
                  className="w-full bg-gradient-orange text-white px-4 py-3 rounded-xl font-bold text-sm shadow-lg cursor-pointer"
                >
                  Get Similar Quote
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default AllProjects;
