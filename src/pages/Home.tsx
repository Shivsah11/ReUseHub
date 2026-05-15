import { motion } from 'framer-motion';
import { Search, ArrowRight, ShieldCheck, MessageCircle, CheckCircle2, Star } from 'lucide-react';

const Home = () => {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[85vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?auto=format&fit=crop&q=80&w=2000" 
            alt="Sustainable living" 
            className="w-full h-full object-cover brightness-[0.7]"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl text-white"
          >
            <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
              Sustainable shopping for the <span className="text-blue-400">modern world.</span>
            </h1>
            <p className="text-xl text-gray-200 mb-10 leading-relaxed">
              ReUseHub is a community framework of ReUseHub. You can list items, and find what you need with community trust & transparency.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="relative flex-grow max-w-md">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input 
                  type="text" 
                  placeholder="Search for items, categories..." 
                  className="w-full pl-12 pr-4 py-4 rounded-2xl bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-xl"
                />
              </div>
              <button className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-2xl transition-all hover:scale-105 active:scale-95 shadow-lg shadow-blue-500/30">
                Join Now
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Browse by Category */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-12">
            <div>
              <p className="text-blue-600 font-semibold mb-2">Our Market</p>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Browse by Category</h2>
            </div>
            <button className="flex items-center gap-2 text-blue-600 font-bold hover:gap-3 transition-all group">
              View All <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {[
              { name: 'Cars', icon: '🚗', bg: 'bg-blue-50' },
              { name: 'Bikes', icon: '🚲', bg: 'bg-green-50' },
              { name: 'Electronics', icon: '💻', bg: 'bg-purple-50' },
              { name: 'Fashion', icon: '👗', bg: 'bg-pink-50' },
              { name: 'Furniture', icon: '🪑', bg: 'bg-orange-50' },
              { name: 'More', icon: '✨', bg: 'bg-gray-50' }
            ].map((cat, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -5 }}
                className={`${cat.bg} p-8 rounded-3xl flex flex-col items-center justify-center gap-4 cursor-pointer hover:shadow-xl hover:shadow-gray-100 transition-all border border-transparent hover:border-gray-100`}
              >
                <span className="text-4xl">{cat.icon}</span>
                <span className="font-bold text-gray-900">{cat.name}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How it Works */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">How ReUseHub Works</h2>
          <p className="text-gray-500 mb-16 max-w-2xl mx-auto">Three simple steps to start your sustainable journey.</p>
          
          <div className="grid md:grid-cols-3 gap-12">
            {[
              { icon: <CheckCircle2 className="w-10 h-10" />, title: "1. List Your Item", desc: "Easily upload photos and set a price for your pre-loved items." },
              { icon: <MessageCircle className="w-10 h-10" />, title: "2. Connect & Chat", desc: "Chat securely with interested buyers through our platform." },
              { icon: <ShieldCheck className="w-10 h-10" />, title: "3. Close the Deal", desc: "Meet up safely or use our integrated payment for peace of mind." }
            ].map((step, i) => (
              <div key={i} className="flex flex-col items-center group">
                <div className="w-20 h-20 bg-blue-600 rounded-2xl flex items-center justify-center text-white mb-8 group-hover:scale-110 transition-transform shadow-lg shadow-blue-200">
                  {step.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{step.title}</h3>
                <p className="text-gray-500 leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Banner */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-blue-600 rounded-[3rem] overflow-hidden relative">
            <div className="absolute top-0 right-0 p-12 opacity-10">
              <Star className="w-64 h-64 text-white" />
            </div>
            <div className="grid md:grid-cols-2 gap-12 p-12 md:p-20 items-center">
              <div className="text-white">
                <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">Your Safety is Our Top Priority</h2>
                <ul className="space-y-6">
                  <li className="flex items-start gap-4">
                    <div className="p-1 bg-blue-500 rounded-full mt-1"><CheckCircle2 className="w-5 h-5" /></div>
                    <div>
                      <h4 className="font-bold text-xl">Verified Profiles</h4>
                      <p className="text-blue-100">Every user is verified to ensure a safe trading environment.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="p-1 bg-blue-500 rounded-full mt-1"><CheckCircle2 className="w-5 h-5" /></div>
                    <div>
                      <h4 className="font-bold text-xl">Secure Payments</h4>
                      <p className="text-blue-100">Your money is held securely until you confirm the item's condition.</p>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="bg-white/10 backdrop-blur-xl p-10 rounded-[2.5rem] border border-white/20">
                <h4 className="text-white font-bold text-2xl mb-6">Community Trust Score</h4>
                <div className="space-y-6">
                  <div className="h-4 bg-white/20 rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      whileInView={{ width: '85%' }}
                      transition={{ duration: 1.5, ease: "easeOut" }}
                      className="h-full bg-blue-400 rounded-full"
                    />
                  </div>
                  <div className="flex justify-between text-white font-medium">
                    <span>Active Users: 10k+</span>
                    <span>Satisfaction: 98%</span>
                  </div>
                  <button className="w-full py-4 bg-white text-blue-600 font-bold rounded-2xl hover:bg-gray-100 transition-colors">
                    Learn about Safety
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
