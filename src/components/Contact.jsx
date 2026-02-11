import { motion, useScroll, useTransform } from "framer-motion";
import { useState } from "react";
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaWhatsapp } from "react-icons/fa";

function Contact() {
  const [formData, setFormData] = useState({ name: '', phone: '', email: '', message: '' });
  const { scrollYProgress } = useScroll();
  const scale = useTransform(scrollYProgress, [0.8, 1], [0.8, 1]);

  return (
    <section id="contact" className="relative py-24 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-dark via-gray-900 to-black"></div>
      
      {/* Animated Mesh Gradient */}
      <div className="absolute inset-0 opacity-30">
        <motion.div
          animate={{ 
            backgroundPosition: ['0% 0%', '100% 100%'],
          }}
          transition={{ duration: 20, repeat: Infinity, repeatType: 'reverse' }}
          className="w-full h-full"
          style={{
            backgroundImage: 'radial-gradient(circle at 20% 50%, rgba(255, 165, 0, 0.3) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(255, 140, 0, 0.3) 0%, transparent 50%)'
          }}
        ></motion.div>
      </div>

      {/* Floating Shapes */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-primary/10"
          style={{
            width: Math.random() * 300 + 100,
            height: Math.random() * 300 + 100,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            x: [0, Math.random() * 100 - 50],
            y: [0, Math.random() * 100 - 50],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: Math.random() * 10 + 10,
            repeat: Infinity,
            repeatType: 'reverse',
          }}
        />
      ))}

      <div className="relative max-w-7xl mx-auto px-6 z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.span 
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            className="inline-block bg-gradient-orange text-white font-bold px-6 py-2 rounded-full mb-4 shadow-lg"
          >
            GET IN TOUCH
          </motion.span>
          <h2 className="text-5xl md:text-6xl font-black text-white mb-4">
            Let's Build <span className="gradient-text text-shadow-glow">Together</span>
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Ready to start your construction project? Contact Odisha's leading contractor today!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            style={{ scale }}
            className="relative"
          >
            <div className="glass-effect p-8 rounded-3xl border-2 border-primary/20 shadow-2xl">
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <motion.div whileFocus={{ scale: 1.02 }}>
                    <label className="block text-white mb-2 font-semibold text-sm">Full Name *</label>
                    <input
                      type="text"
                      placeholder="Rajesh Kumar"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      className="w-full p-4 bg-white/10 border-2 border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-primary focus:bg-white/15 transition-all"
                    />
                  </motion.div>
                  
                  <motion.div whileFocus={{ scale: 1.02 }}>
                    <label className="block text-white mb-2 font-semibold text-sm">Phone Number *</label>
                    <input
                      type="tel"
                      placeholder="+91 9876543210"
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      className="w-full p-4 bg-white/10 border-2 border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-primary focus:bg-white/15 transition-all"
                    />
                  </motion.div>
                </div>
                
                <motion.div whileFocus={{ scale: 1.02 }}>
                  <label className="block text-white mb-2 font-semibold text-sm">Email Address</label>
                  <input
                    type="email"
                    placeholder="your@email.com"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="w-full p-4 bg-white/10 border-2 border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-primary focus:bg-white/15 transition-all"
                  />
                </motion.div>
                
                <motion.div whileFocus={{ scale: 1.02 }}>
                  <label className="block text-white mb-2 font-semibold text-sm">Project Details *</label>
                  <textarea
                    rows="5"
                    placeholder="Tell us about your construction project requirements..."
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    className="w-full p-4 bg-white/10 border-2 border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-primary focus:bg-white/15 transition-all resize-none"
                  ></textarea>
                </motion.div>

                <motion.button
                  whileHover={{ scale: 1.02, boxShadow: "0 0 40px rgba(255, 165, 0, 0.6)" }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-gradient-orange text-white px-8 py-5 font-bold rounded-xl transition-all shadow-2xl relative overflow-hidden group"
                >
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    Send Inquiry
                    <motion.svg 
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                      className="w-5 h-5" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </motion.svg>
                  </span>
                  <div className="absolute inset-0 shimmer"></div>
                </motion.button>
              </form>
            </div>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {/* Contact Cards */}
            <div className="grid gap-6">
              {[
                { icon: FaPhone, title: "Call Us", info: ["+91 9876549910", "+91 9876543440"], color: "from-green-500 to-emerald-600" },
                { icon: FaWhatsapp, title: "WhatsApp", info: ["+91 9876547810"], color: "from-green-400 to-green-600" },
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
                    whileHover={{ x: 10, scale: 1.02 }}
                    className="glass-effect p-6 rounded-2xl border border-white/10 cursor-pointer group"
                  >
                    <div className="flex items-center gap-4">
                      <motion.div 
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.6 }}
                        className={`bg-gradient-to-br ${contact.color} p-4 rounded-xl shadow-lg flex-shrink-0`}
                      >
                        <Icon className="text-white text-2xl" />
                      </motion.div>
                      <div className="flex-1">
                        <h4 className="text-white font-bold text-lg mb-1">{contact.title}</h4>
                        {contact.info.map((line, j) => (
                          <p key={j} className="text-gray-300 text-sm">{line}</p>
                        ))}
                      </div>
                      <motion.svg
                        animate={{ x: [0, 5, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                        className="w-6 h-6 text-primary opacity-0 group-hover:opacity-100 transition-opacity"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </motion.svg>
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
              className="glass-effect p-8 rounded-2xl border-2 border-primary/30 shadow-2xl"
            >
              <h3 className="text-2xl font-black text-white mb-6 flex items-center gap-3">
                <span className="text-3xl">⭐</span>
                Why Choose Us?
              </h3>
              <ul className="space-y-4">
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
                    className="flex items-center gap-3 text-gray-300"
                  >
                    <motion.span 
                      whileHover={{ scale: 1.3, rotate: 360 }}
                      className="text-primary text-2xl font-bold flex-shrink-0"
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
