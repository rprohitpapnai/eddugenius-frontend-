
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Star, Quote } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "IGCSE Student",
      grade: "Grade 11",
      content: "The tutoring here helped me improve my Mathematics grade from B to A*. The teachers are incredibly patient and explain concepts clearly. I couldn't have achieved this without their support.",
      avatar: "/placeholder.svg",
      curriculum: "IGCSE",
      rating: 5,
      achievement: "Mathematics: B → A*"
    },
    {
      name: "Arjun Patel",
      role: "CBSE Student",
      grade: "Class 12",
      content: "Thanks to the excellent guidance, I scored 95% in my CBSE board exams. The study materials and mock tests were extremely helpful. The teachers understood my weak points and helped me overcome them.",
      avatar: "/placeholder.svg",
      curriculum: "CBSE",
      rating: 5,
      achievement: "Board Exams: 95%"
    },
    {
      name: "Emily Chen",
      role: "Cambridge Student",
      grade: "Year 10",
      content: "The Cambridge curriculum support is outstanding. My confidence in Science subjects has increased tremendously. The practical sessions and interactive learning methods are amazing.",
      avatar: "/placeholder.svg",
      curriculum: "Cambridge",
      rating: 5,
      achievement: "Science Confidence Boost"
    },
    {
      name: "Mohammed Al-Rashid",
      role: "IGCSE Student",
      grade: "Year 11",
      content: "I was struggling with Physics concepts, but the one-on-one tutoring sessions made everything crystal clear. Now I'm among the top students in my class.",
      avatar: "/placeholder.svg",
      curriculum: "IGCSE",
      rating: 5,
      achievement: "Physics: D → A"
    },
    {
      name: "Priya Sharma",
      role: "CBSE Student",
      grade: "Class 10",
      content: "The teachers here don't just teach subjects, they mentor you for life. I developed better study habits and time management skills that will help me forever.",
      avatar: "/placeholder.svg",
      curriculum: "CBSE",
      rating: 5,
      achievement: "Overall Performance: 85%+"
    },
    {
      name: "James Wilson",
      role: "Cambridge Student",
      grade: "Year 12",
      content: "The university preparation guidance was invaluable. I got accepted into my dream university thanks to the comprehensive support I received here.",
      avatar: "/placeholder.svg",
      curriculum: "Cambridge",
      rating: 5,
      achievement: "University Acceptance"
    },
    {
      name: "Aisha Khan",
      role: "IGCSE Student",
      grade: "Year 10",
      content: "Learning English Literature seemed impossible until I joined here. The teachers made classic texts come alive and helped me develop analytical skills.",
      avatar: "/placeholder.svg",
      curriculum: "IGCSE",
      rating: 5,
      achievement: "English Literature: C → A"
    },
    {
      name: "Rajesh Kumar",
      role: "CBSE Student",
      grade: "Class 11",
      content: "The Chemistry practical sessions are excellent. I understand concepts better through hands-on experiments and real-world applications.",
      avatar: "/placeholder.svg",
      curriculum: "CBSE",
      rating: 5,
      achievement: "Chemistry Excellence"
    },
    {
      name: "Sophie Brown",
      role: "Cambridge Student",
      grade: "Year 9",
      content: "The Global Perspectives course opened my mind to different cultures and viewpoints. It's not just academic learning, it's personal growth.",
      avatar: "/placeholder.svg",
      curriculum: "Cambridge",
      rating: 5,
      achievement: "Global Perspectives A*"
    }
  ];

  const stats = [
    { number: "5000+", label: "Students Taught" },
    { number: "98%", label: "Success Rate" },
    { number: "4.9/5", label: "Average Rating" },
    { number: "50+", label: "Expert Teachers" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <Navbar />
      
      <div className="pt-24 pb-16">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Student Success Stories
            </h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Real testimonials from students who have transformed their academic journey with our expert guidance 
              across CBSE, IGCSE, and Cambridge curricula.
            </p>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Testimonials Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-white hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <Avatar className="h-12 w-12 mr-4">
                      <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                      <AvatarFallback>{testimonial.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                    </Avatar>
                    <div>
                      <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                      <p className="text-gray-600 text-sm">{testimonial.grade}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between mb-4">
                    <Badge className="bg-blue-100 text-blue-800" variant="secondary">
                      {testimonial.curriculum}
                    </Badge>
                    <div className="flex items-center space-x-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                  </div>
                  
                  <div className="relative mb-4">
                    <Quote className="h-6 w-6 text-blue-200 absolute -top-2 -left-2" />
                    <p className="text-gray-700 italic pl-6">{testimonial.content}</p>
                  </div>
                  
                  <div className="bg-green-50 p-3 rounded-lg">
                    <p className="text-sm font-semibold text-green-800">Achievement:</p>
                    <p className="text-sm text-green-700">{testimonial.achievement}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* CTA Section */}
          <div className="text-center">
            <Card className="bg-gradient-to-r from-blue-600 to-purple-600 border-none text-white">
              <CardContent className="p-8">
                <h3 className="text-3xl font-bold mb-4">Ready to Write Your Success Story?</h3>
                <p className="text-xl mb-6 opacity-90">
                  Join thousands of students who have achieved academic excellence with our proven methods
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link to="/services">
                    <Button size="lg" variant="secondary" className="text-blue-600 hover:text-blue-700">
                      Explore Our Programs
                    </Button>
                  </Link>
                  <Link to="/payment">
                    <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600">
                      Start Your Journey
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Testimonials;
