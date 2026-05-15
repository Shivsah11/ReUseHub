import { useState } from 'react';
import { User, Mail, Phone, Lock, MapPin, CheckCircle2, ShoppingBag, Store } from 'lucide-react';
import { Link } from 'react-router-dom';

const Register = () => {
  const [role, setRole] = useState<'customer' | 'seller'>('customer');

  return (
    <div className="min-h-[90vh] flex items-center justify-center p-4 bg-gray-50">
      <div className="max-w-6xl w-full bg-white rounded-[2.5rem] shadow-2xl shadow-blue-100/50 flex flex-col md:flex-row overflow-hidden border border-gray-100">
        
        {/* Left Side - Message */}
        <div className="w-full md:w-2/5 bg-blue-600 p-10 md:p-16 text-white flex flex-col justify-between">
          <div>
            <h2 className="text-4xl font-bold leading-tight mb-6">Join the Circular Economy.</h2>
            <p className="text-blue-100 text-lg mb-10">Start your journey with ReUseHub today and contribute to a greener planet.</p>
            
            <ul className="space-y-6">
              {[
                "Access to Trusted Marketplace",
                "Eco-Friendly Waste Management",
                "Safe & Secure Payments",
                "Community Verified Profiles"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3">
                  <CheckCircle2 className="w-6 h-6 text-blue-300" />
                  <span className="font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-12 p-6 bg-white/10 rounded-3xl border border-white/10 backdrop-blur-sm">
            <p className="italic text-blue-50">"ReUseHub has completely changed how I think about my pre-loved items. It's so easy to use!"</p>
            <div className="mt-4 flex items-center gap-3">
              <div className="w-10 h-10 bg-blue-400 rounded-full" />
              <div>
                <p className="font-bold">Sarah Jenkins</p>
                <p className="text-xs text-blue-200">Active Seller since 2024</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side - Form */}
        <div className="w-full md:w-3/5 p-8 md:p-16">
          <div className="max-w-xl mx-auto">
            <div className="mb-10 text-center md:text-left">
              <h1 className="text-3xl font-bold text-gray-900 mb-2">Create Account</h1>
              <p className="text-gray-500">Enter your details to set up your profile.</p>
            </div>

            <form className="space-y-6">
              {/* Role Selection */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-4 text-center md:text-left">I want to join as a:</label>
                <div className="grid grid-cols-2 gap-4">
                  <button 
                    type="button"
                    onClick={() => setRole('customer')}
                    className={`flex items-center justify-center gap-3 py-4 rounded-2xl border-2 transition-all ${role === 'customer' ? 'border-blue-600 bg-blue-50 text-blue-600' : 'border-gray-100 text-gray-500 hover:border-gray-200'}`}
                  >
                    <ShoppingBag className="w-5 h-5" />
                    <span className="font-bold">Customer</span>
                  </button>
                  <button 
                    type="button"
                    onClick={() => setRole('seller')}
                    className={`flex items-center justify-center gap-3 py-4 rounded-2xl border-2 transition-all ${role === 'seller' ? 'border-blue-600 bg-blue-50 text-blue-600' : 'border-gray-100 text-gray-500 hover:border-gray-200'}`}
                  >
                    <Store className="w-5 h-5" />
                    <span className="font-bold">Seller</span>
                  </button>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Full Name</label>
                  <div className="relative">
                    <User className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input type="text" placeholder="John Doe" className="w-full pl-12 pr-4 py-4 rounded-2xl bg-gray-50 border border-transparent focus:bg-white focus:border-blue-500 outline-none transition-all" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Email Address</label>
                  <div className="relative">
                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input type="email" placeholder="john@example.com" className="w-full pl-12 pr-4 py-4 rounded-2xl bg-gray-50 border border-transparent focus:bg-white focus:border-blue-500 outline-none transition-all" />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Phone Number</label>
                  <div className="relative">
                    <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input type="tel" placeholder="+1 (555) 000-0000" className="w-full pl-12 pr-4 py-4 rounded-2xl bg-gray-50 border border-transparent focus:bg-white focus:border-blue-500 outline-none transition-all" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Password</label>
                  <div className="relative">
                    <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input type="password" placeholder="••••••••" className="w-full pl-12 pr-4 py-4 rounded-2xl bg-gray-50 border border-transparent focus:bg-white focus:border-blue-500 outline-none transition-all" />
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Full Address</label>
                <div className="relative">
                  <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input type="text" placeholder="123 Sustainability Ave, Green City" className="w-full pl-12 pr-4 py-4 rounded-2xl bg-gray-50 border border-transparent focus:bg-white focus:border-blue-500 outline-none transition-all" />
                </div>
              </div>

              <p className="text-xs text-gray-500 leading-relaxed">
                By clicking Register, you agree to our <a href="#" className="text-blue-600 font-bold underline">Terms of Service</a> and <a href="#" className="text-blue-600 font-bold underline">Privacy Policy</a>. We'll send you occasional product updates.
              </p>

              <button className="w-full py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-2xl transition-all hover:scale-[1.02] active:scale-[0.98] shadow-lg shadow-blue-500/20">
                Complete Registration
              </button>

              <p className="text-center text-gray-500">
                Already have an account? <Link to="/login" className="font-bold text-blue-600 hover:text-blue-700 transition-colors">Login here</Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
