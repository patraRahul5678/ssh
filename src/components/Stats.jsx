function Stats() {
  const stats = [
    { value: "150+", label: "Projects Completed", icon: "🏗️" },
    { value: "12m", label: "Max Excavation Depth", icon: "⛏️" },
    { value: "100%", label: "Safety Record", icon: "🛡️" },
    { value: "10+", label: "Years Experience", icon: "🎯" }
  ];

  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-fixed"
          style={{ 
            backgroundImage: "url('https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=1920&q=80')" 
          }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-br from-dark/95 via-black/90 to-dark/95"></div>
      </div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-6 z-10">
        <div className="text-center mb-16">
          <span className="inline-block bg-gradient-orange text-white font-bold px-6 py-2 rounded-full mb-4 shadow-lg">
            OUR ACHIEVEMENTS
          </span>
          <h2 className="text-5xl md:text-6xl font-black text-white mb-4">
            Success in <span className="gradient-text text-shadow-glow">Numbers</span>
          </h2>
          <p className="text-gray-300 text-lg">Delivering excellence across Odisha with proven results</p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="relative group">
              {/* Card */}
              <div className="relative glass-effect p-8 rounded-2xl border-2 border-primary/20 hover:border-primary/50 transition-all overflow-hidden">
                {/* Glow Effect */}
                <div className="absolute inset-0 bg-gradient-orange opacity-0 group-hover:opacity-20 transition-opacity"></div>

                {/* Icon */}
                <div className="text-5xl mb-4">
                  {stat.icon}
                </div>

                {/* Value */}
                <div className="relative">
                  <span className="text-6xl md:text-7xl font-black gradient-text block mb-2">
                    {stat.value}
                  </span>
                </div>
                
                {/* Label */}
                <p className="text-gray-300 mt-3 text-lg font-semibold">{stat.label}</p>

                {/* Decorative Corner */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-orange opacity-10 rounded-bl-full"></div>
              </div>

              {/* Badge */}
              <div className="absolute -top-3 -right-3 bg-gradient-orange text-white w-12 h-12 rounded-full flex items-center justify-center font-bold shadow-lg">
                #{index + 1}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-gray-300 text-lg mb-6">Ready to be part of our success story?</p>
          <button className="bg-gradient-orange text-white px-12 py-5 rounded-full font-bold text-lg shadow-2xl hover:shadow-primary/50 transition-shadow">
            Start Your Project Today
          </button>
        </div>
      </div>
    </section>
  );
}

export default Stats;
