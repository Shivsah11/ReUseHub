import { Rocket, Mail, ShieldCheck, CheckCircle2 } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-50 border-t border-gray-100 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <div className="p-1.5 bg-blue-600 rounded-lg">
                <Rocket className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold tracking-tight text-gray-900">ReUseHub</span>
            </div>
            <p className="text-gray-500 leading-relaxed mb-6">
              Empowering sustainable living through circular economy. Buy, sell, and trade items with community trust.
            </p>
            <div className="flex gap-4">
              <a href="#" className="p-2 bg-white rounded-full border border-gray-100 text-gray-400 hover:text-blue-600 hover:border-blue-100 transition-all">
                <Mail className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 bg-white rounded-full border border-gray-100 text-gray-400 hover:text-blue-600 hover:border-blue-100 transition-all">
                <ShieldCheck className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 bg-white rounded-full border border-gray-100 text-gray-400 hover:text-blue-600 hover:border-blue-100 transition-all">
                <CheckCircle2 className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-gray-900 mb-6">Platform</h4>
            <ul className="space-y-4 text-gray-500">
              <li><a href="#" className="hover:text-blue-600 transition-colors">How it works</a></li>
              <li><a href="#" className="hover:text-blue-600 transition-colors">Browse Categories</a></li>
              <li><a href="#" className="hover:text-blue-600 transition-colors">Popular Listings</a></li>
              <li><a href="#" className="hover:text-blue-600 transition-colors">Success Stories</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-gray-900 mb-6">Community</h4>
            <ul className="space-y-4 text-gray-500">
              <li><a href="#" className="hover:text-blue-600 transition-colors">Trust & Safety</a></li>
              <li><a href="#" className="hover:text-blue-600 transition-colors">Community Guidelines</a></li>
              <li><a href="#" className="hover:text-blue-600 transition-colors">Help Center</a></li>
              <li><a href="#" className="hover:text-blue-600 transition-colors">Contact Support</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-gray-900 mb-6">Company</h4>
            <ul className="space-y-4 text-gray-500">
              <li><a href="#" className="hover:text-blue-600 transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-blue-600 transition-colors">Our Mission</a></li>
              <li><a href="#" className="hover:text-blue-600 transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-blue-600 transition-colors">Privacy Policy</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-100 pt-8 flex flex-col md:row items-center justify-between gap-4 text-sm text-gray-400 text-center">
          <p>© 2026 ReUseHub Inc. All rights reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-gray-600 transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-gray-600 transition-colors">Cookie Settings</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
