import { motion } from "framer-motion";
import { FaPhone, FaWhatsapp, FaEnvelope, FaBriefcase, FaCheckCircle, FaClock } from "react-icons/fa";

function ManagingDirector() {
  const stats = [
    { icon: FaBriefcase, value: "8+", label: "Years Experience" },
    { icon: FaCheckCircle, value: "15", label: "Projects Completed" },
    { icon: FaClock, value: "7", label: "Ongoing Projects" }
  ];

  const contact = [
    { icon: FaPhone, label: "Phone", value: "+91 97778 16655", href: "tel:+919777816655" },
    { icon: FaWhatsapp, label: "WhatsApp", value: "+91 97778 16655", href: "https://wa.me/919777816655" },
    { icon: FaEnvelope, label: "Email", value: "www.sahooengineering@gmail.com", href: "mailto:www.sahooengineering@gmail.com" }
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
            LEADERSHIP
          </motion.span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white mb-4">
            Managing Director & <span className="gradient-text text-shadow-glow">Founder</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto"
        >
          <div className="glass-effect rounded-3xl overflow-hidden border-2 border-primary/30 shadow-2xl">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 sm:gap-8 p-4 sm:p-6 md:p-8 lg:p-10">
              {/* Photo Section */}
              <div className="lg:col-span-2 flex flex-col items-center">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="relative w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 lg:w-64 lg:h-64 mb-4 sm:mb-6"
                >
                  <div className="w-full h-full rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center border-4 border-primary/50 overflow-hidden">
                    <img src="/founder.png" alt="Founder" className="w-full h-full object-cover" />
                  </div>
                  <div className="absolute -bottom-3 -right-3 sm:-bottom-4 sm:-right-4 bg-gradient-orange text-white px-3 py-1 sm:px-4 sm:py-2 rounded-xl shadow-lg">
                    <span className="font-bold text-xs sm:text-sm">Founder</span>
                  </div>
                </motion.div>

                <h3 className="text-xl sm:text-2xl md:text-3xl font-black text-white mb-2 text-center">Siba Sahoo</h3>
                <p className="text-primary font-bold text-sm sm:text-base md:text-lg mb-4 sm:mb-6">Managing Director & Founder</p>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-2 sm:gap-3 md:gap-4 w-full max-w-sm mx-auto lg:max-w-none">
                  {stats.map((stat, i) => {
                    const Icon = stat.icon;
                    return (
                      <motion.div
                        key={i}
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 + i * 0.1 }}
                        className="text-center"
                      >
                        <Icon className="text-primary text-lg sm:text-xl md:text-2xl mx-auto mb-1 sm:mb-2" />
                        <div className="text-lg sm:text-xl md:text-2xl font-black text-white">{stat.value}</div>
                        <div className="text-gray-400 text-[10px] sm:text-xs leading-tight">{stat.label}</div>
                      </motion.div>
                    );
                  })}
                </div>
              </div>

              {/* Contact & Info Section */}
              <div className="lg:col-span-3 flex flex-col justify-center">
                <div className="space-y-3 sm:space-y-4 md:space-y-6">
                  {contact.map((item, i) => {
                    const Icon = item.icon;
                    return (
                      <motion.a
                        key={i}
                        href={item.href}
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 + i * 0.1 }}
                        whileHover={{ x: 10, scale: 1.02 }}
                        className="flex items-center gap-3 sm:gap-4 bg-white/5 p-3 sm:p-4 md:p-5 rounded-xl border border-white/10 hover:border-primary/50 transition-all group"
                      >
                        <div className={`${item.icon === FaWhatsapp ? 'bg-green-500' : 'bg-gradient-orange'} p-3 sm:p-4 rounded-xl shadow-lg flex-shrink-0`}>
                          <Icon className="text-white text-lg sm:text-xl md:text-2xl" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-gray-400 text-xs sm:text-sm mb-1">{item.label}</p>
                          <p className="text-white font-semibold text-sm sm:text-base truncate">{item.value}</p>
                        </div>
                        <motion.svg
                          animate={{ x: [0, 5, 0] }}
                          transition={{ duration: 1.5, repeat: Infinity }}
                          className="w-5 h-5 text-primary opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0 hidden sm:block"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </motion.svg>
                      </motion.a>
                    );
                  })}
                </div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 }}
                  className="mt-6 sm:mt-8 p-4 sm:p-6 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-xl border border-primary/30"
                >
                  <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                    Leading Sahoo Engineering with 8+ years of expertise in civil engineering and infrastructure development. Successfully delivered 15 major projects with 7 ongoing initiatives, driving excellence in construction quality and client satisfaction.
                  </p>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default ManagingDirector;
