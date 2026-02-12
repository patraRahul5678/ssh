import { motion } from "framer-motion";
import { FaEye, FaBullseye } from "react-icons/fa";

function MissionVision() {
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
            OUR PURPOSE
          </motion.span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-dark mb-4">
            Mission & <span className="gradient-text">Vision</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Vision */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -10 }}
            className="group relative bg-gradient-to-br from-blue-50 to-cyan-50 p-8 sm:p-10 rounded-3xl shadow-xl border-2 border-blue-100 hover:border-blue-300 transition-all"
          >
            <motion.div
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.6 }}
              className="bg-gradient-to-br from-blue-500 to-cyan-600 w-16 h-16 sm:w-20 sm:h-20 rounded-2xl flex items-center justify-center mb-6 shadow-lg"
            >
              <FaEye className="text-white text-3xl sm:text-4xl" />
            </motion.div>

            <h3 className="text-2xl sm:text-3xl font-black text-dark mb-4">Vision</h3>
            <p className="text-grayish text-base sm:text-lg leading-relaxed">
              To be a leading infrastructure construction firm recognized for engineering expertise and trusted delivery across India.
            </p>

            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-500/10 to-cyan-600/10 rounded-bl-full"></div>
          </motion.div>

          {/* Mission */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -10 }}
            className="group relative bg-gradient-to-br from-orange-50 to-red-50 p-8 sm:p-10 rounded-3xl shadow-xl border-2 border-orange-100 hover:border-orange-300 transition-all"
          >
            <motion.div
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.6 }}
              className="bg-gradient-to-br from-orange-500 to-red-600 w-16 h-16 sm:w-20 sm:h-20 rounded-2xl flex items-center justify-center mb-6 shadow-lg"
            >
              <FaBullseye className="text-white text-3xl sm:text-4xl" />
            </motion.div>

            <h3 className="text-2xl sm:text-3xl font-black text-dark mb-4">Mission</h3>
            <ul className="space-y-3">
              {[
                "Deliver exceptional construction quality",
                "Maintain highest safety and compliance standards",
                "Build long-term client-centric relationships",
                "Contribute to nation-building through superior infrastructure"
              ].map((item, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + i * 0.1 }}
                  className="flex items-start gap-3 text-grayish text-sm sm:text-base"
                >
                  <span className="text-primary font-bold text-xl mt-0.5">✓</span>
                  <span>{item}</span>
                </motion.li>
              ))}
            </ul>

            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-orange-500/10 to-red-600/10 rounded-bl-full"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default MissionVision;
