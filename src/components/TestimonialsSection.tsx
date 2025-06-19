
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "IGCSE Student",
      grade: "Grade 11",
      content: "The tutoring here helped me improve my Mathematics grade from B to A*. The teachers are incredibly patient and explain concepts clearly.",
      avatar: "/placeholder.svg",
      curriculum: "IGCSE"
    },
    {
      name: "Arjun Patel",
      role: "CBSE Student",
      grade: "Class 12",
      content: "Thanks to the excellent guidance, I scored 95% in my CBSE board exams. The study materials and mock tests were extremely helpful.",
      avatar: "/placeholder.svg",
      curriculum: "CBSE"
    },
    {
      name: "Emily Chen",
      role: "Cambridge Student",
      grade: "Year 10",
      content: "The Cambridge curriculum support is outstanding. My confidence in Science subjects has increased tremendously.",
      avatar: "/placeholder.svg",
      curriculum: "Cambridge"
    }
  ];

  return (
    <section className="py-20 bg-gray-50 relative overflow-hidden">
      {/* Decorative floating elements without Spline */}
      <div className="absolute top-10 left-1/4 w-40 h-40 opacity-10 z-0">
        <div className="w-full h-full bg-gradient-to-br from-blue-400 to-purple-400 rounded-full animate-pulse"></div>
      </div>
      <div className="absolute bottom-10 right-1/4 w-32 h-32 opacity-10 z-0">
        <div className="w-full h-full bg-gradient-to-br from-green-400 to-blue-400 rounded-full animate-pulse delay-500"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
            What Our Students Say
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Real success stories from students who have excelled with our educational services
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-white/80 backdrop-blur-sm hover:shadow-lg transition-all duration-500 transform hover:-translate-y-2 hover:bg-white/90">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Avatar className="h-12 w-12 mr-4 ring-2 ring-blue-100">
                    <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                    <AvatarFallback className="bg-gradient-to-br from-blue-500 to-purple-500 text-white">
                      {testimonial.name.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                    <p className="text-gray-600 text-sm">{testimonial.grade}</p>
                  </div>
                </div>
                <Badge className="mb-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white" variant="secondary">
                  {testimonial.curriculum}
                </Badge>
                <p className="text-gray-700 italic">"{testimonial.content}"</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
