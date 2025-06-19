
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { BookOpen, Users, Calendar, Clock, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Services = () => {
  const services = [
    {
      curriculum: "CBSE",
      description: "Comprehensive tutoring for Central Board of Secondary Education curriculum",
      classes: ["Class 1-5 (Primary)", "Class 6-8 (Middle)", "Class 9-10 (Secondary)", "Class 11-12 (Senior Secondary)"],
      subjects: {
        "Class 1-5": ["Mathematics", "English", "Science", "Social Studies", "Hindi"],
        "Class 6-8": ["Mathematics", "Science", "English", "Social Science", "Hindi", "Sanskrit"],
        "Class 9-10": ["Mathematics", "Science", "English", "Social Science", "Hindi", "Computer Science"],
        "Class 11-12": ["Physics", "Chemistry", "Mathematics", "Biology", "Computer Science", "English", "Economics", "Business Studies"]
      },
      features: ["NCERT Curriculum", "Board Exam Preparation", "Regular Assessments", "Doubt Clearing Sessions"],
      color: "border-blue-500"
    },
    {
      curriculum: "IGCSE",
      description: "International General Certificate of Secondary Education program",
      classes: ["Year 9-10 (IGCSE)", "Year 11-12 (A-Levels)"],
      subjects: {
        "Year 9-10": ["Mathematics", "English Language", "English Literature", "Physics", "Chemistry", "Biology", "History", "Geography"],
        "Year 11-12": ["Mathematics", "Further Mathematics", "Physics", "Chemistry", "Biology", "English", "Economics", "Business Studies"]
      },
      features: ["Cambridge Assessment", "International Standards", "Practical Sessions", "University Preparation"],
      color: "border-purple-500"
    },
    {
      curriculum: "Cambridge",
      description: "Cambridge International curriculum for global students",
      classes: ["Primary (Stages 1-6)", "Lower Secondary (Stages 7-9)", "Upper Secondary (Stages 10-12)"],
      subjects: {
        "Primary": ["English", "Mathematics", "Science", "Global Perspectives", "Art & Design"],
        "Lower Secondary": ["English", "Mathematics", "Science", "Global Perspectives", "ICT", "History", "Geography"],
        "Upper Secondary": ["Mathematics", "Physics", "Chemistry", "Biology", "English", "Global Perspectives", "Economics"]
      },
      features: ["International Recognition", "Critical Thinking", "Research Skills", "Global Perspective"],
      color: "border-green-500"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <Navbar />
      
      <div className="pt-24 pb-16">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Our Educational Services
            </h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Comprehensive tutoring services across three major international curricula, designed to help students 
              excel from foundation to advanced levels.
            </p>
          </div>

          <div className="space-y-12">
            {services.map((service, index) => (
              <Card key={index} className={`border-2 ${service.color} hover:shadow-xl transition-all duration-300`}>
                <CardHeader>
                  <div className="flex items-center justify-between mb-4">
                    <Badge className="text-lg px-4 py-2" variant="secondary">
                      {service.curriculum}
                    </Badge>
                    <BookOpen className="h-8 w-8 text-gray-600" />
                  </div>
                  <CardTitle className="text-3xl">{service.curriculum} Program</CardTitle>
                  <CardDescription className="text-lg text-gray-600">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <div>
                      <h4 className="text-xl font-semibold mb-4 text-gray-800">Class Levels & Subjects</h4>
                      {service.classes.map((classLevel, classIndex) => (
                        <div key={classIndex} className="mb-4">
                          <h5 className="font-semibold text-gray-700 mb-2">{classLevel}</h5>
                          <div className="flex flex-wrap gap-2">
                            {service.subjects[classLevel.split(' (')[0]] && 
                             service.subjects[classLevel.split(' (')[0]].map((subject, subIndex) => (
                              <Badge key={subIndex} variant="outline" className="text-xs">
                                {subject}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                    
                    <div>
                      <h4 className="text-xl font-semibold mb-4 text-gray-800">Key Features</h4>
                      <ul className="space-y-3">
                        {service.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center space-x-3">
                            <CheckCircle className="h-5 w-5 text-green-600" />
                            <span className="text-gray-700">{feature}</span>
                          </li>
                        ))}
                      </ul>
                      
                      <div className="mt-6 space-y-2">
                        <div className="flex items-center space-x-3 text-gray-600">
                          <Users className="h-5 w-5" />
                          <span>Small batch sizes (Max 6 students)</span>
                        </div>
                        <div className="flex items-center space-x-3 text-gray-600">
                          <Clock className="h-5 w-5" />
                          <span>Flexible scheduling options</span>
                        </div>
                        <div className="flex items-center space-x-3 text-gray-600">
                          <Calendar className="h-5 w-5" />
                          <span>Regular progress tracking</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-8 text-center">
                    <Link to="/payment">
                      <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                        Enroll in {service.curriculum} Program
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-16 text-center">
            <Card className="bg-gradient-to-r from-blue-50 to-purple-50 border-none">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-4 text-gray-900">Need a Custom Program?</h3>
                <p className="text-lg text-gray-600 mb-6">
                  We also offer personalized tutoring plans tailored to your specific needs and learning goals.
                </p>
                <Button size="lg" variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50">
                  Contact Us for Custom Solutions
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Services;
