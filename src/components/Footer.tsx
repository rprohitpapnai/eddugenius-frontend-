
import { BookOpen } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <BookOpen className="h-8 w-8 text-blue-400" />
              <span className="text-2xl font-bold">EduExcel</span>
            </div>
            <p className="text-gray-400 mb-6 max-w-md">
              Empowering students worldwide with quality education across CBSE, IGCSE, and Cambridge curricula. 
              Your success is our mission.
            </p>
            <div className="text-gray-400">
              <p>Email: info@eduexcel.com</p>
              <p>Phone: +1 (555) 123-4567</p>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-400">
              <li><Link to="/" className="hover:text-white transition-colors">Home</Link></li>
              <li><Link to="/services" className="hover:text-white transition-colors">Services</Link></li>
              <li><Link to="/testimonials" className="hover:text-white transition-colors">Testimonials</Link></li>
              <li><Link to="/payment" className="hover:text-white transition-colors">Pricing</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Curricula</h4>
            <ul className="space-y-2 text-gray-400">
              <li><Link to="/services" className="hover:text-white transition-colors">CBSE</Link></li>
              <li><Link to="/services" className="hover:text-white transition-colors">IGCSE</Link></li>
              <li><Link to="/services" className="hover:text-white transition-colors">Cambridge</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; 2024 EduExcel. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
