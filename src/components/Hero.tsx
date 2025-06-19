
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowDown, Users, BookOpen, Calendar } from "lucide-react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="pt-32 pb-20 text-center">
      <div className="container mx-auto px-6">
        <Badge variant="secondary" className="mb-6 text-blue-600 bg-blue-100">
          Excellence in Education Since 2020
        </Badge>
        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          Master Your Academic Journey
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-4xl mx-auto">
          Comprehensive educational services for Class 1-12 students following CBSE, IGCSE, and Cambridge curricula. 
          Expert tutoring, personalized learning paths, and proven results.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Link to="/services">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg">
              Explore Courses
            </Button>
          </Link>
          <Link to="/payment">
            <Button size="lg" variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-4 text-lg">
              View Pricing
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="flex items-center justify-center space-x-3 text-gray-600">
            <Users className="h-6 w-6 text-blue-600" />
            <span className="text-lg">5000+ Students</span>
          </div>
          <div className="flex items-center justify-center space-x-3 text-gray-600">
            <BookOpen className="h-6 w-6 text-purple-600" />
            <span className="text-lg">3 Curricula</span>
          </div>
          <div className="flex items-center justify-center space-x-3 text-gray-600">
            <Calendar className="h-6 w-6 text-green-600" />
            <span className="text-lg">Flexible Schedule</span>
          </div>
        </div>

        <div className="mt-16 animate-bounce">
          <ArrowDown className="h-8 w-8 text-blue-600 mx-auto" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
