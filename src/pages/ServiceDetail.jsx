import { motion } from "framer-motion";
import { FaArrowLeft, FaCheckCircle } from "react-icons/fa";

function ServiceDetail({ navigate, serviceId }) {

  const serviceData = {
    "building-construction": {
      title: "Building Construction",
      tagline: "Building Dreams, Creating Landmarks",
      image: "../public/BuildingConstruction.png",
      description: "Sahoo Engineering specializes in comprehensive building construction services across residential, commercial, and institutional sectors. With 25+ years of experience, we deliver world-class infrastructure with precision engineering and quality assurance.",
      services: [
        { name: "Residential Construction", desc: "Villas, apartments, and housing complexes" },
        { name: "Commercial Buildings", desc: "Offices, malls, and business centers" },
        { name: "Institutional Projects", desc: "Schools, hospitals, and government buildings" },
        { name: "Industrial Structures", desc: "Warehouses and manufacturing facilities" }
      ],
      process: ["Site Survey & Planning", "Foundation & Excavation", "Structural Framework", "MEP Installation", "Finishing & Handover"],
      benefits: ["ISO Certified Quality", "On-Time Delivery", "Cost-Effective Solutions", "Expert Engineering Team", "Safety Compliance", "Post-Construction Support"]
    },
    "railway-bridge": {
      title: "Railway & Bridge Construction",
      tagline: "Connecting Infrastructure, Building Futures",
      image: "../public/Railway&BridgeConstruction.png",
      description: "Specialized in railway infrastructure and bridge construction with proven expertise in structural engineering. We have successfully completed multiple projects for East Coast Railway and state government departments.",
      services: [
        { name: "Minor Bridges", desc: "Up to 60m span bridges" },
        { name: "Major Bridges", desc: "Complex structural bridge works" },
        { name: "Railway Platforms", desc: "Station infrastructure development" },
        { name: "Track Support Systems", desc: "Foundation and support structures" }
      ],
      process: ["Structural Design", "Foundation Work", "Pier & Abutment Construction", "Girder Installation", "Track Laying", "Testing & Commissioning"],
      benefits: ["Railway Approved Contractor", "Structural Engineering Expertise", "Heavy Equipment Fleet", "Safety Record 100%", "Government Projects Experience", "Quality Certifications"]
    },
    "piling-foundation": {
      title: "Piling & Foundation Works",
      tagline: "Strong Foundations for Lasting Structures",
      image: "../public/Pilling&FoundationWorks.png",
      description: "Advanced deep foundation and piling solutions for heavy load-bearing structures. Our infrastructure-grade piling systems ensure long-term stability and safety for all types of construction projects.",
      services: [
        { name: "Bored Piling", desc: "Up to 12m depth with advanced machinery" },
        { name: "Driven Piling", desc: "Pre-cast concrete and steel piles" },
        { name: "Foundation Design", desc: "Structural engineering and soil analysis" },
        { name: "Load Testing", desc: "Quality assurance and verification" }
      ],
      process: ["Soil Investigation", "Foundation Design", "Piling Execution", "Load Testing", "Quality Verification", "Documentation"],
      benefits: ["Deep Excavation Capability", "Modern Equipment", "Soil Analysis Expertise", "Load Testing Facility", "Experienced Engineers", "Safety Standards"]
    },
    "track-linking": {
      title: "Track Linking & Civil Infrastructure",
      tagline: "Seamless Connectivity Solutions",
      image: "../public/TrackLining&Infrastructure.png",
      description: "Comprehensive railway track support works and civil infrastructure development ensuring seamless connectivity and operational excellence across railway networks.",
      services: [
        { name: "Track Laying", desc: "Railway track installation and alignment" },
        { name: "Ballast Work", desc: "Track bed preparation and maintenance" },
        { name: "Drainage Systems", desc: "Water management infrastructure" },
        { name: "Platform Construction", desc: "Station platform development" }
      ],
      process: ["Site Preparation", "Track Bed Construction", "Rail Installation", "Ballast Laying", "Track Alignment", "Final Testing"],
      benefits: ["Railway Experience", "Precision Engineering", "Quality Materials", "Timely Execution", "Safety Compliance", "Maintenance Support"]
    }
  };

  const service = serviceData[serviceId] || serviceData["building-construction"];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative h-[50vh] sm:h-[60vh] md:h-[70vh] overflow-hidden">
        <img src={service.image} alt={service.title} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
        
        <div className="absolute inset-0 flex items-end">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 pb-12 sm:pb-16 md:pb-20 w-full">
            <motion.button
              onClick={() => navigate('services')}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 text-white font-semibold mb-6 hover:gap-3 transition-all cursor-pointer"
            >
              <FaArrowLeft /> Back to Services
            </motion.button>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white mb-4">
                {service.title}
              </h1>
              <p className="text-primary text-lg sm:text-xl md:text-2xl font-bold">{service.tagline}</p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16 md:py-20">
        {/* Description */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 sm:mb-16"
        >
          <p className="text-grayish text-base sm:text-lg leading-relaxed max-w-4xl">{service.description}</p>
        </motion.div>

        {/* Services Offered */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 sm:mb-16"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-dark mb-6 sm:mb-8">Services Offered</h2>
          <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
            {service.services.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ x: 10 }}
                className="bg-gradient-to-br from-gray-50 to-white p-4 sm:p-6 rounded-xl border-2 border-gray-100 hover:border-primary/30 transition-all"
              >
                <h3 className="text-lg sm:text-xl font-bold text-dark mb-2">{item.name}</h3>
                <p className="text-grayish text-sm sm:text-base">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Process */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 sm:mb-16"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-dark mb-6 sm:mb-8">Our Process</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3 sm:gap-4">
            {service.process.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center"
              >
                <div className="bg-gradient-orange text-white w-12 h-12 sm:w-16 sm:h-16 rounded-full flex items-center justify-center font-black text-lg sm:text-2xl mx-auto mb-3 shadow-lg">
                  {i + 1}
                </div>
                <p className="text-dark font-semibold text-xs sm:text-sm">{step}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Benefits */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 sm:mb-16"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-dark mb-6 sm:mb-8">Why Choose Us</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
            {service.benefits.map((benefit, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex items-center gap-3 bg-green-50 p-4 rounded-xl border-2 border-green-100"
              >
                <FaCheckCircle className="text-green-500 text-xl sm:text-2xl flex-shrink-0" />
                <span className="text-dark font-semibold text-sm sm:text-base">{benefit}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center bg-gradient-to-br from-primary/10 to-secondary/10 p-8 sm:p-12 rounded-3xl"
        >
          <h3 className="text-2xl sm:text-3xl font-black text-dark mb-4">Ready to Start Your Project?</h3>
          <p className="text-grayish mb-6 sm:mb-8 text-sm sm:text-base">Get a free consultation and quote for your construction needs</p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate('contact')}
            className="bg-gradient-orange text-white px-8 sm:px-12 py-4 sm:py-5 rounded-full font-bold text-sm sm:text-base shadow-2xl cursor-pointer"
          >
            Get Free Quote
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
}

export default ServiceDetail;
