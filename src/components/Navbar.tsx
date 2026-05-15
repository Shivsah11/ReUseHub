import { Link, useNavigate } from 'react-router-dom';
import { Rocket } from 'lucide-react';

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => navigate('/')}>
            <div className="p-2 bg-blue-600 rounded-lg">
              <Rocket className="w-6 h-6 text-white" />
            </div>
            <span className="text-2xl font-bold tracking-tight text-gray-900">ReUseHub</span>
          </div>
          
          <div className="hidden md:flex items-center gap-8">
            <Link to="/explore" className="text-gray-600 hover:text-blue-600 font-medium transition-colors">Explore</Link>
            <Link to="/community" className="text-gray-600 hover:text-blue-600 font-medium transition-colors">Community</Link>
            <Link to="/why-us" className="text-gray-600 hover:text-blue-600 font-medium transition-colors">Why ReUseHub</Link>
          </div>

          <div className="flex items-center gap-4">
            <button 
              onClick={() => navigate('/login')}
              className="px-6 py-2 text-gray-700 font-semibold hover:text-blue-600 transition-colors"
            >
              Login
            </button>
            <button 
              onClick={() => navigate('/register')}
              className="px-6 py-2.5 bg-blue-600 text-white rounded-full font-semibold hover:bg-blue-700 transition-all hover:scale-105 active:scale-95 shadow-lg shadow-blue-200"
            >
              Register
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
