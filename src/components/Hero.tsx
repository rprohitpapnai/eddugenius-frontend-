
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowDown, Users, BookOpen, Calendar } from "lucide-react";
import { Link } from "react-router-dom";
import SplineScene from "./SplineScene";

const Hero = () => {
  return (
    <section className="pt-32 pb-20 text-center relative overflow-hidden">
      {/* 3D Background */}
      <div className="absolute inset-0 z-0 opacity-30">
        <SplineScene 
          scene="https://prod.spline.design/6Wq1Q7YGyM-iab9i/scene.splinecode"
          className="w-full h-full"
        />
      </div>
      
      {/* Gradient overlay for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/90 via-white/95 to-purple-50/90 z-10"></div>
      
      <div className="container mx-auto px-6 relative z-20">
        <Badge variant="secondary" className="mb-6 text-blue-600 bg-blue-100/80 backdrop-blur-sm">
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
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              Explore Courses
            </Button>
          </Link>
          <Link to="/payment">
            <Button size="lg" variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-4 text-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 backdrop-blur-sm">
              View Pricing
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="flex items-center justify-center space-x-3 text-gray-600 bg-white/30 backdrop-blur-sm rounded-lg p-4 shadow-lg">
            <Users className="h-6 w-6 text-blue-600" />
            <span className="text-lg font-medium">5000+ Students</span>
          </div>
          <div className="flex items-center justify-center space-x-3 text-gray-600 bg-white/30 backdrop-blur-sm rounded-lg p-4 shadow-lg">
            <BookOpen className="h-6 w-6 text-purple-600" />
            <span className="text-lg font-medium">3 Curricula</span>
          </div>
          <div className="flex items-center justify-center space-x-3 text-gray-600 bg-white/30 backdrop-blur-sm rounded-lg p-4 shadow-lg">
            <Calendar className="h-6 w-6 text-green-600" />
            <span className="text-lg font-medium">Flexible Schedule</span>
          </div>
        </div>

        <div className="mt-16 animate-bounce">
          <ArrowDown className="h-8 w-8 text-blue-600 mx-auto drop-shadow-lg" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
