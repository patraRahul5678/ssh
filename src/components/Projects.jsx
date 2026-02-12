import { motion } from "framer-motion";
import { FaCheckCircle, FaBuilding, FaTrain, FaLandmark } from "react-icons/fa";

function Projects() {
  const completedProjects = [
    {
      name: "OSIL – Pintu Babu Project",
      client: "OSIL",
      category: "Major Civil Construction",
      description: "Successfully executed major civil construction project with comprehensive infrastructure development.",
      icon: FaBuilding,
      color: "from-blue-500 to-cyan-600"
    },
    {
      name: "Royal Tower, Damana",
      client: "Private Sector",
      category: "Infrastructure Building",
      description: "Completed high-rise infrastructure building project with modern construction techniques.",
      icon: FaBuilding,
      color: "from-orange-500 to-red-600"
    },
    {
      name: "East Coast Railway Projects",
      client: "East Coast Railway",
      category: "Bridge & Track Linking",
      description: "Multiple bridge construction and track linking projects ensuring railway infrastructure excellence.",
      icon: FaTrain,
      color: "from-green-500 to-emerald-600"
    },
    {
      name: "State Government Contracts",
      client: "Government of Odisha",
      category: "Civil Infrastructure",
      description: "Various civil contracts for state government infrastructure development and maintenance.",
      icon: FaLandmark,
      color: "from-purple-500 to-pink-600"
    }
  ];

  const clients = [
    { name: "OSIL", logo: "🏢" },
    { name: "East Coast Railway", logo: "🚂" },
    { name: "Government of Odisha", logo: "🏛️" },
    { name: "Private Developers", logo: "🏗️" },
    { name: "Industrial Sector", logo: "🏭" },
    { name: "Commercial Clients", logo: "🏪" }
  ];

  return (
    <section id="projects" className="py-12 sm:py-16 md:py-20 lg:py-24 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Projects Section */}
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
            COMPLETED PROJECTS
          </motion.span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-dark mb-4">
            Our <span className="gradient-text">Success Stories</span>
          </h2>
          <p className="text-grayish text-base sm:text-lg max-w-2xl mx-auto">
            Delivering excellence across major infrastructure and construction projects
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-6 sm:gap-8 mb-16 sm:mb-20">
          {completedProjects.map((project, index) => {
            const Icon = project.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="group relative bg-white rounded-2xl overflow-hidden shadow-xl border-2 border-gray-100 hover:border-primary/30 transition-all"
              >
                <div className="p-6 sm:p-8">
                  <div className="flex items-start justify-between mb-4">
                    <motion.div
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                      className={`bg-gradient-to-br ${project.color} p-4 rounded-xl shadow-lg`}
                    >
                      <Icon className="text-white text-2xl sm:text-3xl" />
                    </motion.div>
                    <FaCheckCircle className="text-green-500 text-2xl" />
                  </div>

                  <h3 className="text-lg sm:text-xl font-black text-dark mb-2">{project.name}</h3>
                  <div className="flex items-center gap-2 mb-3">
                    <span className={`inline-block px-3 py-1 bg-gradient-to-r ${project.color} text-white text-xs font-semibold rounded-full`}>
                      {project.category}
                    </span>
                  </div>
                  <p className="text-grayish text-sm mb-4">{project.description}</p>
                  <div className="flex items-center gap-2 text-sm text-primary font-semibold">
                    <span>Client:</span>
                    <span className="text-dark">{project.client}</span>
                  </div>
                </div>
                <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${project.color}`}></div>
              </motion.div>
            );
          })}
        </div>

        {/* Clients Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-black text-dark mb-4">
            Our <span className="gradient-text">Valued Clients</span>
          </h3>
          <p className="text-grayish text-sm sm:text-base">Trusted by leading organizations across sectors</p>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6">
          {clients.map((client, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="bg-white p-6 rounded-xl shadow-lg border-2 border-gray-100 hover:border-primary/30 transition-all cursor-pointer"
            >
              <div className="text-center">
                <div className="text-4xl sm:text-5xl mb-3">{client.logo}</div>
                <p className="text-dark font-semibold text-xs sm:text-sm">{client.name}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12 sm:mt-16"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-orange text-white px-8 sm:px-12 py-4 sm:py-5 rounded-full font-bold text-sm sm:text-base shadow-2xl"
          >
            View All Projects →
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}

export default Projects;
