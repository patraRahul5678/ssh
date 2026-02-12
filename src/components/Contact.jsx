import { motion } from "framer-motion";
import { useState } from "react";
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaWhatsapp } from "react-icons/fa";

function Contact() {
  const [formData, setFormData] = useState({ name: '', phone: '', email: '', message: '' });

  return (
    <section id="contact" className="relative py-12 sm:py-16 md:py-20 lg:py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-dark via-gray-900 to-black"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 z-10">
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
            GET IN TOUCH
          </motion.span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white mb-4">
            Let's Build <span className="gradient-text text-shadow-glow">Together</span>
          </h2>
          <p className="text-gray-300 text-base sm:text-lg max-w-2xl mx-auto px-4">
            Ready to start your construction project? Contact Odisha's leading contractor today!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="glass-effect p-6 sm:p-8 rounded-3xl border-2 border-primary/20 shadow-2xl">
              <form className="space-y-4 sm:space-y-6">
                <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
                  <div>
                    <label className="block text-white mb-2 font-semibold text-xs sm:text-sm">Full Name *</label>
                    <input
                      type="text"
                      placeholder="Rajesh Kumar"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      className="w-full p-3 sm:p-4 bg-white/10 border-2 border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-primary focus:bg-white/15 transition-all text-sm sm:text-base"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-white mb-2 font-semibold text-xs sm:text-sm">Phone Number *</label>
                    <input
                      type="tel"
                      placeholder="+91 9876543210"
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      className="w-full p-3 sm:p-4 bg-white/10 border-2 border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-primary focus:bg-white/15 transition-all text-sm sm:text-base"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-white mb-2 font-semibold text-xs sm:text-sm">Email Address</label>
                  <input
                    type="email"
                    placeholder="your@email.com"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="w-full p-3 sm:p-4 bg-white/10 border-2 border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-primary focus:bg-white/15 transition-all text-sm sm:text-base"
                  />
                </div>
                
                <div>
                  <label className="block text-white mb-2 font-semibold text-xs sm:text-sm">Project Details *</label>
                  <textarea
                    rows="4"
                    placeholder="Tell us about your construction project requirements..."
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    className="w-full p-3 sm:p-4 bg-white/10 border-2 border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-primary focus:bg-white/15 transition-all resize-none text-sm sm:text-base"
                  ></textarea>
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-gradient-orange text-white px-6 sm:px-8 py-4 sm:py-5 font-bold rounded-xl transition-all shadow-2xl text-sm sm:text-base"
                >
                  <span className="flex items-center justify-center gap-2">
                    Send Inquiry
                    <motion.svg 
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                      className="w-4 h-4 sm:w-5 sm:h-5" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </motion.svg>
                  </span>
                </motion.button>
              </form>
            </div>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-4 sm:space-y-6"
          >
            {/* Contact Cards */}
            <div className="grid gap-4 sm:gap-6">
              {[
                { icon: FaPhone, title: "Call Us", info: ["+91 9876549910", "+91 9876543440"], color: "from-green-500 to-emerald-600" },
                { icon: FaWhatsapp, title: "WhatsApp", info: ["+91 9876549910"], color: "from-green-400 to-green-600" },
                { icon: FaEnvelope, title: "Email Us", info: ["info@sahooengineering.com"], color: "from-blue-500 to-cyan-600" },
                { icon: FaMapMarkerAlt, title: "Visit Us", info: ["Jagatsinghpur,Odisha, India"], color: "from-red-500 to-pink-600" },
              ].map((contact, i) => {
                const Icon = contact.icon;
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    whileHover={{ x: 5, scale: 1.02 }}
                    className="glass-effect p-4 sm:p-6 rounded-2xl border border-white/10 cursor-pointer group"
                  >
                    <div className="flex items-center gap-3 sm:gap-4">
                      <motion.div 
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.6 }}
                        className={`bg-gradient-to-br ${contact.color} p-3 sm:p-4 rounded-xl shadow-lg flex-shrink-0`}
                      >
                        <Icon className="text-white text-xl sm:text-2xl" />
                      </motion.div>
                      <div className="flex-1 min-w-0">
                        <h4 className="text-white font-bold text-base sm:text-lg mb-1">{contact.title}</h4>
                        {contact.info.map((line, j) => (
                          <p key={j} className="text-gray-300 text-xs sm:text-sm truncate">{line}</p>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Why Choose Us */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass-effect p-6 sm:p-8 rounded-2xl border-2 border-primary/30 shadow-2xl"
            >
              <h3 className="text-xl sm:text-2xl font-black text-white mb-4 sm:mb-6 flex items-center gap-2 sm:gap-3">
                <span className="text-2xl sm:text-3xl">⭐</span>
                Why Choose Us?
              </h3>
              <ul className="space-y-3 sm:space-y-4">
                {[
                  "ISO Certified Quality Standards",
                  "Experienced Engineering Team",
                  "Advanced Construction Equipment",
                  "On-Time Project Delivery",
                  "Competitive Pricing",
                  "24/7 Customer Support"
                ].map((item, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-center gap-2 sm:gap-3 text-gray-300 text-sm sm:text-base"
                  >
                    <motion.span 
                      whileHover={{ scale: 1.3, rotate: 360 }}
                      className="text-primary text-xl sm:text-2xl font-bold flex-shrink-0"
                    >
                      ✓
                    </motion.span>
                    <span>{item}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
