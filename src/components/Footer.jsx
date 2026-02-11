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

      <div className="relative max-w-7xl mx-auto px-6 py-16 z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div>
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
                  <a
                    key={index}
                    href={social.href}
                    className={`bg-white/10 backdrop-blur-sm p-3 rounded-full ${social.color} transition-colors shadow-lg`}
                  >
                    <Icon className="text-xl" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-bold mb-6 text-primary drop-shadow-lg">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="text-gray-300 hover:text-primary transition-colors flex items-center gap-2 drop-shadow-md">
                    <span className="text-primary font-bold">›</span>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-xl font-bold mb-6 text-primary drop-shadow-lg">Our Services</h4>
            <ul className="space-y-3 text-gray-300">
              {["Excavation", "RCC Work", "PCC Work", "Reinforcement", "Rock Blasting", "Formwork"].map((service, index) => (
                <li key={index} className="flex items-center gap-2 drop-shadow-md">
                  <span className="text-primary font-bold">•</span>
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-xl font-bold mb-6 text-primary drop-shadow-lg">Contact Us</h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3 text-gray-300 drop-shadow-md">
                <FaPhone className="text-primary mt-1 flex-shrink-0" />
                <div>
                  <p>+91 9876543210</p>
                  <p>+91 9875659459</p>
                </div>
              </div>
              <div className="flex items-start gap-3 text-gray-300 drop-shadow-md">
                <FaEnvelope className="text-primary mt-1 flex-shrink-0" />
                <p>info@sahooengineering.com</p>
              </div>
              <div className="flex items-start gap-3 text-gray-300 drop-shadow-md">
                <FaMapMarkerAlt className="text-primary mt-1 flex-shrink-0" />
                <p>Jagatsinghpur,Odisha, India</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-300 text-sm text-center md:text-left drop-shadow-md">
              © {new Date().getFullYear()} Sahoo Engineering. All rights reserved. | Civil Construction Company in Odisha
            </p>
            <div className="flex gap-6 text-sm text-gray-300">
              <a href="#" className="hover:text-primary transition-colors drop-shadow-md">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-primary transition-colors drop-shadow-md">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Bottom Line */}
      <div className="h-1 bg-gradient-orange"></div>
    </footer>
  );
}

export default Footer;
