import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock} from 'lucide-react';
import WhatsAppIcon from './WhatsAppIcon';
const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-br from-gray-900 to-gray-950 text-white relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>

      <div className="section-padding relative z-10">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16">
            {/* Company Info */}
            <div className="space-y-6">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-xl flex items-center justify-center">
                  <span className="text-white font-bold text-xl">PB</span>
                </div>
                <div>
                  <h2 className="text-2xl font-bold">Prime Build</h2>
                  <p className="text-cyan-300">Smart Home Solutions</p>
                </div>
              </div>
              <p className="text-gray-300 leading-relaxed">
                Transforming homes in Rawalpindi & Islamabad with professional construction and improvement services since 2018.
              </p>
             <div className="flex space-x-4">
  <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors">
    <svg className="w-5 h-5" fill="white" viewBox="0 0 24 24">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
    </svg>
  </a>
  
  <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-pink-600 transition-colors">
    <svg className="w-5 h-5" fill="white" viewBox="0 0 24 24">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
    </svg>
  </a>
  
  <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-red-600 transition-colors">
    <svg className="w-5 h-5" fill="white" viewBox="0 0 24 24">
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
    </svg>
  </a>
  
  {/* TikTok */}
  <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-black transition-colors">
    <svg className="w-5 h-5" fill="white" viewBox="0 0 24 24">
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64c.3.045.6.088.9.13v-3.32a6.7 6.7 0 0 0-1-.05A6.86 6.86 0 0 0 5 20.1a6.86 6.86 0 0 0 13.72-1.4v-6.03a8.16 8.16 0 0 0 4.28 1.26v-3.46a4.85 4.85 0 0 1-3.41-3.78z"/>
    </svg>
  </a>
  
 <a href="https://wa.me/923195707402" className="w-10 h-10 bg-green-600 rounded-lg flex items-center justify-center hover:bg-green-700 transition-colors">
  <WhatsAppIcon size={20} />
</a>
</div>
</div>

            {/* Quick Links */}
            <div>
              <h3 className="text-xl font-bold mb-6 pb-3 border-b border-gray-800">Quick Links</h3>
              <ul className="space-y-3">
                {['Home', 'Services', 'Projects', 'About', 'Contact'].map((item) => (
                  <li key={item}>
                    <Link
                      to={`/${item.toLowerCase() === 'home' ? '' : item.toLowerCase()}`}
                      className="text-gray-300 hover:text-cyan-300 transition-colors flex items-center space-x-2 group"
                    >
                      <span className="w-2 h-2 bg-cyan-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                      <span>{item}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h3 className="text-xl font-bold mb-6 pb-3 border-b border-gray-800">Our Services</h3>
              <ul className="space-y-3">
                {['Plumbing', 'Electrical', 'Tiles & Marble', 'Kitchen Setup', 'Carpentry', 'Painting'].map((service) => (
                  <li key={service} className="flex items-center space-x-2">
                    <span className="w-1.5 h-1.5 bg-cyan-500 rounded-full"></span>
                    <span className="text-gray-300">{service}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div className="space-y-6">
              <h3 className="text-xl font-bold mb-6 pb-3 border-b border-gray-800">Contact Info</h3>
              <div className="space-y-4">
                {[
                  { icon: Phone, label: 'Call Us', value: '+92 31 95707402' },
                  { icon: Mail, label: 'Email', value: 'qasimiqbal333444@gmail.com' },
                  { icon: MapPin, label: 'Location', value: 'Rawalpindi & Islamabad' },
                  { icon: Clock, label: 'Working Hours', value: 'Mon - Sat: 8:00 AM - 7:00 PM' },
                ].map((item) => (
                  <div key={item.label} className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center flex-shrink-0">
                      <item.icon size={18} className="text-cyan-400" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-200">{item.label}</p>
                      <p className="text-gray-300">{item.value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="border-t border-gray-800 mt-12 pt-8 text-center">
            <p className="text-gray-400">
              &copy; {currentYear} Prime Build – Smart Home Solutions. All rights reserved.
            </p>
            <p className="text-gray-500 text-sm mt-2">
              Professional home construction and improvement services in Rawalpindi & Islamabad
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;