import { FaHardHat } from "react-icons/fa";

function Hero() {
  return (
    <section className="relative h-screen overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-cover bg-center">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=1920&q=80')] bg-cover bg-center"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative h-full flex items-center px-4 z-10 pt-20">
        <div className="max-w-7xl mx-auto w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div>
              <div className="inline-flex items-center gap-3 bg-gradient-orange px-6 py-3 rounded-full mb-6 shadow-lg">
                <FaHardHat className="text-white text-xl" />
                <span className="text-white font-bold">Premium Construction Services</span>
              </div>

              <h1 className="text-6xl md:text-8xl font-black mb-6 leading-none">
                <span className="text-white">Building</span>
                <br />
                <span className="gradient-text text-shadow-glow">Tomorrow</span>
                <br />
                <span className="text-white">Today</span>
              </h1>

              <p className="text-xl text-gray-300 mb-8 max-w-xl leading-relaxed">
                Odisha's most trusted civil & RCC contractor delivering world-class excavation, reinforcement, and construction solutions.
              </p>

              <div className="flex flex-wrap gap-4">
                <button className="bg-gradient-orange text-white px-10 py-5 font-bold rounded-full shadow-2xl hover:shadow-primary/50 transition-shadow">
                  Get Free Quote
                </button>
                
                <button className="glass-effect text-white px-10 py-5 font-bold rounded-full backdrop-blur-md hover:bg-white/20 transition-colors">
                  View Projects →
                </button>
              </div>

              {/* Quick Stats */}
              <div className="flex gap-8 mt-12">
                {[{ num: "150+", label: "Projects" }, { num: "10+", label: "Years" }, { num: "100%", label: "Safety" }].map((stat, i) => (
                  <div key={i} className="text-center">
                    <div className="text-3xl font-bold text-primary">{stat.num}</div>
                    <div className="text-gray-400 text-sm">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Image */}
            <div className="hidden lg:block relative">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-orange blur-3xl opacity-30 rounded-3xl"></div>
                <img 
                  src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&q=80"
                  alt="Construction"
                  className="relative rounded-3xl shadow-2xl border-4 border-primary/30"
                />
                
                {/* Badge */}
                <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-2xl">
                  <div className="text-4xl font-black gradient-text">ISO</div>
                  <div className="text-sm text-gray-600 font-semibold">Certified</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
