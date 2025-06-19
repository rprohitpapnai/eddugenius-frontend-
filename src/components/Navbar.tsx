
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { BookOpen } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white/95 backdrop-blur-sm shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-2">
            <BookOpen className="h-8 w-8 text-blue-600" />
            <span className="text-2xl font-bold text-gray-900">EduGenius</span>
          </Link>
          
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-700 hover:text-blue-600 transition-colors">Home</Link>
            <Link to="/services" className="text-gray-700 hover:text-blue-600 transition-colors">Services</Link>
            <Link to="/testimonials" className="text-gray-700 hover:text-blue-600 transition-colors">Testimonials</Link>
            <Link to="/payment" className="text-gray-700 hover:text-blue-600 transition-colors">Pricing</Link>
            <Button asChild>
              <Link to="/payment">Get Started</Link>
            </Button>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-blue-600"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        {isOpen && (
          <div className="md:hidden py-4 space-y-2">
            <Link to="/" className="block text-gray-700 hover:text-blue-600 py-2">Home</Link>
            <Link to="/services" className="block text-gray-700 hover:text-blue-600 py-2">Services</Link>
            <Link to="/testimonials" className="block text-gray-700 hover:text-blue-600 py-2">Testimonials</Link>
            <Link to="/payment" className="block text-gray-700 hover:text-blue-600 py-2">Pricing</Link>
            <Button asChild className="w-full mt-4">
              <Link to="/payment">Get Started</Link>
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
