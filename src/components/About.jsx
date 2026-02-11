import { FaAward, FaUsers, FaShieldAlt, FaClock, FaCheckCircle } from "react-icons/fa";

function About() {
  const features = [
    { icon: FaAward, title: "Quality Assured", desc: "ISO certified processes", color: "from-yellow-400 to-orange-500" },
    { icon: FaUsers, title: "Expert Team", desc: "Skilled professionals", color: "from-blue-400 to-cyan-500" },
    { icon: FaShieldAlt, title: "100% Safety", desc: "Zero compromise", color: "from-green-400 to-emerald-500" },
    { icon: FaClock, title: "On-Time Delivery", desc: "Deadline focused", color: "from-purple-400 to-pink-500" }
  ];

  return (
    <section id="about" className="py-24 bg-gradient-to-b from-white via-gray-50 to-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Images */}
          <div className="relative">
            <div className="relative">
              {/* Main Image Grid */}
              <div className="grid grid-cols-2 gap-6">
                <div className="relative overflow-hidden rounded-2xl shadow-2xl hover:scale-105 hover:-rotate-2 transition-transform">
                  <img 
                    src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=400&q=80" 
                    alt="Construction site"
                    className="w-full h-72 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                </div>
                
                <div className="relative overflow-hidden rounded-2xl shadow-2xl mt-12 hover:scale-105 hover:rotate-2 transition-transform">
                  <img 
                    src="https://images.unsplash.com/photo-1581094271901-8022df4466f9?w=400&q=80" 
                    alt="Heavy machinery"
                    className="w-full h-72 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                </div>
              </div>
              
              {/* Floating Badges */}
              <div className="absolute -bottom-8 -left-8 bg-gradient-orange text-white p-8 rounded-2xl shadow-2xl z-10">
                <div className="text-5xl font-black">10+</div>
                <div className="text-sm font-semibold">Years Experience</div>
              </div>

              <div className="absolute -top-6 -right-6 bg-white p-6 rounded-2xl shadow-2xl border-4 border-primary z-10">
                <FaCheckCircle className="text-5xl text-primary" />
                <div className="text-xs font-bold text-dark mt-2">ISO Certified</div>
              </div>
            </div>
          </div>

          {/* Right: Content */}
          <div>
            <span className="inline-block bg-gradient-orange text-white font-bold px-6 py-2 rounded-full mb-4 shadow-lg">
              ABOUT US
            </span>
            
            <h2 className="text-5xl md:text-6xl font-black text-dark mb-6 leading-tight">
              Building <span className="gradient-text">Odisha's</span> Future
            </h2>
            
            <p className="text-grayish text-lg mb-6 leading-relaxed">
              Sahoo Engineering is a trusted civil and mechanical construction contractor 
              in Odisha, delivering world-class excavation, RCC, PCC, and reinforcement 
              services with unwavering commitment to quality and safety standards.
            </p>
            
            <p className="text-grayish mb-8 leading-relaxed">
              With over a decade of experience, we've successfully completed 150+ projects, 
              earning the trust of clients across industrial, commercial, and infrastructure sectors.
            </p>

            {/* Features Grid */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div
                    key={index}
                    className="relative group cursor-pointer hover:-translate-y-2 hover:scale-105 transition-transform"
                  >
                    {/* Gradient Border */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} rounded-xl opacity-0 group-hover:opacity-100 transition-opacity`}></div>
                    <div className="relative bg-white rounded-xl p-5 border-2 border-gray-100 group-hover:border-transparent transition-all">
                      <div className={`bg-gradient-to-br ${feature.color} w-12 h-12 rounded-lg flex items-center justify-center mb-3 shadow-lg`}>
                        <Icon className="text-white text-xl" />
                      </div>
                      <h4 className="font-bold text-dark mb-1">{feature.title}</h4>
                      <p className="text-sm text-grayish">{feature.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* CTA Button */}
            <button className="bg-gradient-orange text-white px-10 py-5 rounded-full font-bold shadow-xl hover:shadow-primary/50 transition-shadow">
              <span className="flex items-center gap-2">
                Learn More About Us
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
