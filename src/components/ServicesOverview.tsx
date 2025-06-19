
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { BookOpen, Users, Calendar, ArrowUp } from "lucide-react";
import { Link } from "react-router-dom";

const ServicesOverview = () => {
  const curricula = [
    {
      name: "CBSE",
      description: "Central Board of Secondary Education - India's most popular curriculum",
      classes: "Class 1 - 12",
      subjects: ["Mathematics", "Science", "English", "Social Studies", "Hindi"],
      color: "bg-blue-100 text-blue-800",
      gradient: "from-blue-400/20 to-blue-600/20"
    },
    {
      name: "IGCSE",
      description: "International General Certificate of Secondary Education",
      classes: "Class 1 - 12",
      subjects: ["Mathematics", "Physics", "Chemistry", "Biology", "English"],
      color: "bg-purple-100 text-purple-800",
      gradient: "from-purple-400/20 to-purple-600/20"
    },
    {
      name: "Cambridge",
      description: "Cambridge International Curriculum",
      classes: "Class 1 - 12",
      subjects: ["Mathematics", "Sciences", "Languages", "Humanities", "Arts"],
      color: "bg-green-100 text-green-800",
      gradient: "from-green-400/20 to-green-600/20"
    }
  ];

  return (
    <section className="py-20 bg-white relative overflow-hidden" id="services">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
            Our Educational Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive tutoring and educational support across multiple international curricula, 
            designed to help students excel in their academic journey.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {curricula.map((curriculum, index) => (
            <Card key={index} className="hover:shadow-xl transition-all duration-500 transform hover:-translate-y-3 hover:scale-105 relative overflow-hidden group">
              {/* Gradient background for each card */}
              <div className={`absolute inset-0 bg-gradient-to-br ${curriculum.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
              
              <CardHeader className="relative z-10">
                <div className="flex items-center justify-between mb-4">
                  <Badge className={curriculum.color}>
                    {curriculum.name}
                  </Badge>
                  <BookOpen className="h-6 w-6 text-gray-600" />
                </div>
                <CardTitle className="text-2xl">{curriculum.name} Program</CardTitle>
                <CardDescription className="text-gray-600">
                  {curriculum.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="relative z-10">
                <div className="space-y-4">
                  <div>
                    <p className="font-semibold text-gray-700 mb-2">Classes Covered:</p>
                    <Badge variant="outline">{curriculum.classes}</Badge>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-700 mb-2">Key Subjects:</p>
                    <div className="flex flex-wrap gap-2">
                      {curriculum.subjects.map((subject, idx) => (
                        <Badge key={idx} variant="secondary" className="text-xs">
                          {subject}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Link to="/services">
            <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              View Detailed Services
              <ArrowUp className="ml-2 h-5 w-5 rotate-45" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesOverview;
