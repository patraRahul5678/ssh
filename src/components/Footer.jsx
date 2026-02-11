import { motion } from "framer-motion";
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram, FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

function Footer() {
  const socialLinks = [
    { icon: FaFacebook, href: "#", color: "hover:text-blue-500" },
    { icon: FaTwitter, href: "#", color: "hover:text-sky-400" },
    { icon: FaLinkedin, href: "#", color: "hover:text-blue-600" },
    { icon: FaInstagram, href: "#", color: "hover:text-pink-500" }
  ];

  const quickLinks = [
    { name: "Services", href: "#services" },
    { name: "About Us", href: "#about" },
    { name: "Contact", href: "#contact" },
    { name: "Projects", href: "#" }
  ];

  return (
    <footer className="relative bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-5">
        <motion.div
          animate={{ backgroundPosition: ['0% 0%', '100% 100%'] }}
          transition={{ duration: 20, repeat: Infinity, repeatType: 'reverse' }}
          className="w-full h-full"
          style={{
            backgroundImage: 'radial-gradient(circle, #FFA500 1px, transparent 1px)',
            backgroundSize: '50px 50px'
          }}
        ></motion.div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 py-16 z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-black mb-4 drop-shadow-lg">
              <span className="text-primary">SAHOO</span> <span className="text-white">ENGINEERING</span>
            </h3>
            <p className="text-gray-300 mb-6 leading-relaxed drop-shadow-md">
              Leading civil & RCC contractor in Odisha, delivering excellence in construction since 2014.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={index}
                    href={social.href}
                    whileHover={{ scale: 1.2, rotate: 360 }}
                    whileTap={{ scale: 0.9 }}
                    className={`bg-white/10 backdrop-blur-sm p-3 rounded-full ${social.color} transition-colors shadow-lg`}
                  >
                    <Icon className="text-xl" />
                  </motion.a>
                );
              })}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h4 className="text-xl font-bold mb-6 text-primary drop-shadow-lg">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <motion.li key={index} whileHover={{ x: 5 }}>
                  <a href={link.href} className="text-gray-300 hover:text-primary transition-colors flex items-center gap-2 drop-shadow-md">
                    <span className="text-primary font-bold">›</span>
                    {link.name}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h4 className="text-xl font-bold mb-6 text-primary drop-shadow-lg">Our Services</h4>
            <ul className="space-y-3 text-gray-300">
              {["Excavation", "RCC Work", "PCC Work", "Reinforcement", "Rock Blasting", "Formwork"].map((service, index) => (
                <motion.li key={index} whileHover={{ x: 5 }} className="flex items-center gap-2 drop-shadow-md">
                  <span className="text-primary font-bold">•</span>
                  {service}
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <h4 className="text-xl font-bold mb-6 text-primary drop-shadow-lg">Contact Us</h4>
            <div className="space-y-4">
              <motion.div whileHover={{ x: 5 }} className="flex items-start gap-3 text-gray-300 drop-shadow-md">
                <FaPhone className="text-primary mt-1 flex-shrink-0" />
                <div>
                  <p>+91 XXXXX XXXXX</p>
                  <p>+91 XXXXX XXXXX</p>
                </div>
              </motion.div>
              <motion.div whileHover={{ x: 5 }} className="flex items-start gap-3 text-gray-300 drop-shadow-md">
                <FaEnvelope className="text-primary mt-1 flex-shrink-0" />
                <p>info@sahooengineering.com</p>
              </motion.div>
              <motion.div whileHover={{ x: 5 }} className="flex items-start gap-3 text-gray-300 drop-shadow-md">
                <FaMapMarkerAlt className="text-primary mt-1 flex-shrink-0" />
                <p>Odisha, India</p>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="border-t border-white/20 pt-8 mt-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-300 text-sm text-center md:text-left drop-shadow-md">
              © {new Date().getFullYear()} Sahoo Engineering. All rights reserved. | Civil Construction Company in Odisha
            </p>
            <div className="flex gap-6 text-sm text-gray-300">
              <motion.a whileHover={{ color: "#FFA500" }} href="#" className="hover:text-primary transition-colors drop-shadow-md">
                Privacy Policy
              </motion.a>
              <motion.a whileHover={{ color: "#FFA500" }} href="#" className="hover:text-primary transition-colors drop-shadow-md">
                Terms of Service
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Decorative Bottom Line */}
      <motion.div
        animate={{ scaleX: [0, 1, 0] }}
        transition={{ duration: 3, repeat: Infinity }}
        className="h-1 bg-gradient-orange"
      ></motion.div>
    </footer>
  );
}

export default Footer;
