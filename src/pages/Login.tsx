import { useState } from 'react';
import { Mail, Lock, Eye, EyeOff } from 'lucide-react';
import { Link } from 'react-router-dom';

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="min-h-[90vh] flex items-center justify-center p-4 bg-gray-50">
      <div className="max-w-6xl w-full bg-white rounded-[2.5rem] shadow-2xl shadow-blue-100/50 flex overflow-hidden border border-gray-100">
        
        {/* Left Side - Visual */}
        <div className="hidden lg:flex w-1/2 relative bg-blue-600 p-16 flex-col justify-between overflow-hidden">
          <div className="absolute top-0 right-0 p-8 opacity-20">
            <div className="w-64 h-64 border-[40px] border-white rounded-full -mr-32 -mt-32" />
          </div>
          
          <div className="relative z-10">
            <div className="flex items-center gap-2 mb-12">
              <div className="p-2 bg-white rounded-xl">
                <Mail className="w-6 h-6 text-blue-600" />
              </div>
              <span className="text-2xl font-bold text-white">ReUseHub</span>
            </div>
            <h2 className="text-5xl font-bold text-white leading-tight mb-6">
              Give every item a second story.
            </h2>
            <p className="text-blue-100 text-lg leading-relaxed max-w-md">
              Join thousands of users on ReUseHub making the world more sustainable through community-based trading.
            </p>
          </div>

          <div className="relative z-10 flex gap-12 text-blue-100">
            <div>
              <p className="text-3xl font-bold text-white mb-1">10k+</p>
              <p className="text-sm">Active Users</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-white mb-1">50k+</p>
              <p className="text-sm">Items Listed</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-white mb-1">98%</p>
              <p className="text-sm">Safe Trades</p>
            </div>
          </div>

          {/* Decorative couch image or graphic */}
          <div className="absolute bottom-0 right-0 p-12 translate-y-12 translate-x-12">
             <div className="w-80 h-80 bg-blue-500/30 rounded-full blur-3xl" />
          </div>
        </div>

        {/* Right Side - Form */}
        <div className="w-full lg:w-1/2 p-8 md:p-16">
          <div className="max-w-md mx-auto">
            <div className="mb-10 text-center lg:text-left">
              <h1 className="text-3xl font-bold text-gray-900 mb-2">Welcome back</h1>
              <p className="text-gray-500">Please enter your details to sign in to your account.</p>
            </div>

            <form className="space-y-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Email Address</label>
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input 
                    type="email" 
                    placeholder="example@reusehub.com"
                    className="w-full pl-12 pr-4 py-4 rounded-2xl bg-gray-50 border border-transparent focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 outline-none transition-all"
                  />
                </div>
              </div>

              <div>
                <div className="flex justify-between mb-2">
                  <label className="block text-sm font-semibold text-gray-700">Password</label>
                  <a href="#" className="text-sm font-bold text-blue-600 hover:text-blue-700 transition-colors">Forgot Password?</a>
                </div>
                <div className="relative">
                  <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input 
                    type={showPassword ? "text" : "password"} 
                    placeholder="••••••••"
                    className="w-full pl-12 pr-12 py-4 rounded-2xl bg-gray-50 border border-transparent focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 outline-none transition-all"
                  />
                  <button 
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                  >
                    {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                  </button>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <input type="checkbox" id="remember" className="w-5 h-5 rounded border-gray-300 text-blue-600 focus:ring-blue-500" />
                <label htmlFor="remember" className="text-sm text-gray-600 font-medium">Remember me for 30 days</label>
              </div>

              <button className="w-full py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-2xl transition-all hover:scale-[1.02] active:scale-[0.98] shadow-lg shadow-blue-500/20">
                Login
              </button>

              <div className="relative flex items-center justify-center py-4">
                <div className="w-full border-t border-gray-100" />
                <span className="absolute bg-white px-4 text-sm text-gray-400 font-medium">Or continue with</span>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <button type="button" className="flex items-center justify-center gap-2 py-4 rounded-2xl border border-gray-100 hover:bg-gray-50 font-bold text-gray-700 transition-all">
                   <img src="https://www.google.com/favicon.ico" alt="Google" className="w-5 h-5" />
                   Google
                </button>
                <button type="button" className="flex items-center justify-center gap-2 py-4 rounded-2xl border border-gray-100 hover:bg-gray-50 font-bold text-gray-700 transition-all">
                   <img src="https://www.facebook.com/favicon.ico" alt="Facebook" className="w-5 h-5" />
                   Facebook
                </button>
              </div>
            </form>

            <p className="mt-10 text-center text-gray-500">
              Don't have an account? <Link to="/register" className="font-bold text-blue-600 hover:text-blue-700 transition-colors">Sign up for free</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
