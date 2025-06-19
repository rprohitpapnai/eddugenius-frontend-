import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { CheckCircle, Star, Globe, CreditCard } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Payment = () => {
  const [selectedCurrency, setSelectedCurrency] = useState("USD");
  const { toast } = useToast();

  const currencies = {
    USD: { symbol: "$", rate: 1, name: "US Dollar" },
    EUR: { symbol: "€", rate: 0.85, name: "Euro" },
    GBP: { symbol: "£", rate: 0.73, name: "British Pound" },
    INR: { symbol: "₹", rate: 83, name: "Indian Rupee" },
    AUD: { symbol: "A$", rate: 1.35, name: "Australian Dollar" },
    CAD: { symbol: "C$", rate: 1.25, name: "Canadian Dollar" },
    AED: { symbol: "د.إ", rate: 3.67, name: "Arab Dinar" }
  };

  const plans = [
    {
      name: "Individual Subject",
      description: "Perfect for focused learning in specific subjects",
      basePrice: 79,
      duration: "per month",
      features: [
        "1 Subject of your choice",
        "4 sessions per month",
        "1-on-1 tutoring",
        "Study materials included",
        "Progress tracking",
        "Email support"
      ],
      popular: false,
      curriculum: "All Curricula"
    },
    {
      name: "Standard Package",
      description: "Ideal for comprehensive subject coverage",
      basePrice: 199,
      duration: "per month",
      features: [
        "Up to 3 subjects",
        "12 sessions per month",
        "1-on-1 or small group",
        "Premium study materials",
        "Regular assessments",
        "Priority support",
        "Mock exams",
        "Parent progress reports"
      ],
      popular: true,
      curriculum: "All Curricula"
    },
    {
      name: "Premium Package",
      description: "Complete academic support with exam preparation",
      basePrice: 349,
      duration: "per month",
      features: [
        "All subjects available",
        "20 sessions per month",
        "1-on-1 premium tutoring",
        "Complete study materials",
        "Weekly assessments",
        "24/7 support",
        "Exam preparation",
        "University counseling",
        "Career guidance",
        "Flexible scheduling"
      ],
      popular: false,
      curriculum: "All Curricula"
    }
  ];

  const convertPrice = (basePrice: number) => {
    const converted = basePrice * currencies[selectedCurrency].rate;
    return Math.round(converted);
  };

  const handlePayment = (planName: string, price: number) => {
    toast({
      title: "Payment Integration Required",
      description: `To complete payment for ${planName} (${currencies[selectedCurrency].symbol}${convertPrice(price)}), please connect your Stripe account in the payment gateway settings.`,
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <Navbar />
      
      <div className="pt-24 pb-16">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Choose Your Learning Plan
            </h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-8">
              Flexible pricing options for quality education across CBSE, IGCSE, and Cambridge curricula. 
              All plans include expert tutoring and comprehensive support.
            </p>
            
            {/* Currency Selector */}
            <div className="flex items-center justify-center space-x-4 mb-8">
              <Globe className="h-5 w-5 text-gray-600" />
              <span className="text-gray-700">Select Currency:</span>
              <Select value={selectedCurrency} onValueChange={setSelectedCurrency}>
                <SelectTrigger className="w-48">
                  <SelectValue placeholder="Select currency" />
                </SelectTrigger>
                <SelectContent>
                  {Object.entries(currencies).map(([code, currency]) => (
                    <SelectItem key={code} value={code}>
                      {currency.symbol} {currency.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Pricing Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {plans.map((plan, index) => (
              <Card key={index} className={`relative transition-all duration-300 hover:shadow-xl ${
                plan.popular ? 'border-2 border-blue-500 transform scale-105' : 'border hover:border-blue-300'
              }`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-blue-600 text-white px-4 py-1 flex items-center space-x-1">
                      <Star className="h-4 w-4" />
                      <span>Most Popular</span>
                    </Badge>
                  </div>
                )}
                
                <CardHeader className="text-center pb-2">
                  <Badge variant="outline" className="w-fit mx-auto mb-2">
                    {plan.curriculum}
                  </Badge>
                  <CardTitle className="text-2xl">{plan.name}</CardTitle>
                  <CardDescription className="text-gray-600">
                    {plan.description}
                  </CardDescription>
                  <div className="mt-4">
                    <span className="text-4xl font-bold text-gray-900">
                      {currencies[selectedCurrency].symbol}{convertPrice(plan.basePrice)}
                    </span>
                    <span className="text-gray-600">/{plan.duration}</span>
                  </div>
                </CardHeader>
                
                <CardContent>
                  <ul className="space-y-3 mb-6">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-3">
                        <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Button 
                    className={`w-full ${
                      plan.popular 
                        ? 'bg-blue-600 hover:bg-blue-700 text-white' 
                        : 'bg-gray-900 hover:bg-gray-800 text-white'
                    }`}
                    onClick={() => handlePayment(plan.name, plan.basePrice)}
                  >
                    <CreditCard className="mr-2 h-4 w-4" />
                    Get Started
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Payment Info */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <Card className="bg-blue-50 border-blue-200">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <CreditCard className="h-6 w-6 text-blue-600" />
                  <span>Secure Payment</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-700">
                  <li>✓ SSL encrypted transactions</li>
                  <li>✓ Multiple payment methods accepted</li>
                  <li>✓ Instant enrollment confirmation</li>
                  <li>✓ 7-day money-back guarantee</li>
                </ul>
              </CardContent>
            </Card>
            
            <Card className="bg-green-50 border-green-200">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Globe className="h-6 w-6 text-green-600" />
                  <span>Global Support</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-700">
                  <li>✓ Multi-currency pricing</li>
                  <li>✓ Worldwide student support</li>
                  <li>✓ Timezone-flexible scheduling</li>
                  <li>✓ International curriculum expertise</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* FAQ Section */}
          <Card>
            <CardHeader>
              <CardTitle className="text-center text-2xl">Frequently Asked Questions</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-semibold mb-2">Can I switch between curricula?</h4>
                  <p className="text-gray-600 mb-4">Yes, you can switch between CBSE, IGCSE, and Cambridge curricula based on your needs.</p>
                  
                  <h4 className="font-semibold mb-2">What if I need to cancel?</h4>
                  <p className="text-gray-600 mb-4">You can cancel anytime with 30 days notice. No long-term contracts required.</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Are materials included?</h4>
                  <p className="text-gray-600 mb-4">Yes, all study materials, worksheets, and practice tests are included in your plan.</p>
                  
                  <h4 className="font-semibold mb-2">Do you offer group discounts?</h4>
                  <p className="text-gray-600 mb-4">Yes, we offer special rates for siblings and group enrollments. Contact us for details.</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Payment;
