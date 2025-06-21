
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { Slider } from "@/components/ui/slider";

const GetInvolved = () => {
  const [rating, setRating] = useState([5]);
  const [formData, setFormData] = useState({
    name: "",
    location: "",
    phone: "",
    email: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const currentRating = rating[0];
  const isLowEngagement = currentRating <= 5;

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));

    toast({
      title: isLowEngagement ? "Thank you for your feedback!" : "Welcome to the movement! 🌍",
      description: isLowEngagement 
        ? "Your honest response helps us improve our approach."
        : "You'll receive more information about how to get involved soon!",
    });

    console.log("Get Involved submission:", { rating: currentRating, ...formData });
    setIsSubmitting(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-blue-50">
      <div className="container mx-auto px-6 py-16">
        <h1 className="text-4xl md:text-5xl font-bold text-green-800 mb-12 text-center">
          Get Involved
        </h1>

        {/* Ways to Get Involved */}
        <section className="mb-16">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-8 text-center">
              <div className="text-4xl mb-4">🤝</div>
              <h3 className="text-xl font-bold text-green-800 mb-4">Volunteer</h3>
              <p className="text-gray-700 mb-6">
                Join our team of dedicated volunteers working on ground-level interventions 
                across rural communities.
              </p>
              <Button className="bg-green-600 hover:bg-green-700">
                Become a Volunteer
              </Button>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg p-8 text-center">
              <div className="text-4xl mb-4">🤝</div>
              <h3 className="text-xl font-bold text-green-800 mb-4">Partner</h3>
              <p className="text-gray-700 mb-6">
                Collaborate with us as an organization or institution to scale our impact 
                and create sustainable solutions.
              </p>
              <Button className="bg-blue-600 hover:bg-blue-700">
                Partner With Us
              </Button>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg p-8 text-center">
              <div className="text-4xl mb-4">💝</div>
              <h3 className="text-xl font-bold text-green-800 mb-4">Donate</h3>
              <p className="text-gray-700 mb-6">
                Support our mission financially to help us expand our reach and 
                create more sustainable village ecosystems.
              </p>
              <Button className="bg-orange-600 hover:bg-orange-700">
                Make a Donation
              </Button>
            </div>
          </div>
        </section>

        {/* CBCC Section */}
        <section className="mb-16">
          <div className="bg-gradient-to-r from-red-100 to-orange-100 rounded-lg p-8 text-center">
            <h2 className="text-3xl font-bold text-red-700 mb-4">
              Join the CBCC Movement
            </h2>
            <p className="text-lg text-gray-700 mb-6">
              Be part of the "Change Before Climate Change" initiative and help us create 
              a nationwide movement for environmental action.
            </p>
            <Button className="bg-red-600 hover:bg-red-700 text-white">
              Learn More About CBCC
            </Button>
          </div>
        </section>

        {/* Interactive Rating Form */}
        <section>
          <Card className="max-w-4xl mx-auto">
            <CardHeader className="text-center">
              <CardTitle className="text-3xl font-bold text-green-800 mb-4">
                Rate Your Relatability with the Mission
              </CardTitle>
              <p className="text-lg text-gray-600">
                On a scale of 1 to 10, how strongly do you feel connected with our mission?
              </p>
            </CardHeader>
            
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Rating Slider */}
                <div className="space-y-4">
                  <div className="text-center">
                    <span className="text-2xl font-bold text-green-800">
                      Rating: {currentRating}/10
                    </span>
                  </div>
                  <Slider
                    value={rating}
                    onValueChange={setRating}
                    max={10}
                    min={1}
                    step={1}
                    className="w-full"
                  />
                  <div className="flex justify-between text-sm text-gray-500">
                    <span>1 - Not connected</span>
                    <span>10 - Deeply committed</span>
                  </div>
                </div>

                {/* Form Fields with Conditional Styling */}
                <div className={`space-y-6 p-6 rounded-lg ${
                  isLowEngagement ? 'bg-red-50 border-2 border-red-200' : 'bg-green-50 border-2 border-green-200'
                }`}>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className={`block text-sm font-medium mb-2 ${
                        isLowEngagement ? 'text-red-700' : 'text-green-700'
                      }`}>
                        Your Name *
                      </label>
                      <Input
                        type="text"
                        value={formData.name}
                        onChange={(e) => handleInputChange("name", e.target.value)}
                        placeholder="Your full name"
                        className={isLowEngagement ? 'border-red-300 focus:border-red-500' : 'border-green-300 focus:border-green-500'}
                        required
                      />
                    </div>

                    <div>
                      <label className={`block text-sm font-medium mb-2 ${
                        isLowEngagement ? 'text-red-700' : 'text-green-700'
                      }`}>
                        Location *
                      </label>
                      <Input
                        type="text"
                        value={formData.location}
                        onChange={(e) => handleInputChange("location", e.target.value)}
                        placeholder="City, State"
                        className={isLowEngagement ? 'border-red-300 focus:border-red-500' : 'border-green-300 focus:border-green-500'}
                        required
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className={`block text-sm font-medium mb-2 ${
                        isLowEngagement ? 'text-red-700' : 'text-green-700'
                      }`}>
                        Phone Number *
                      </label>
                      <Input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => handleInputChange("phone", e.target.value)}
                        placeholder="+91-XXXXXXXXXX"
                        className={isLowEngagement ? 'border-red-300 focus:border-red-500' : 'border-green-300 focus:border-green-500'}
                        required
                      />
                    </div>

                    <div>
                      <label className={`block text-sm font-medium mb-2 ${
                        isLowEngagement ? 'text-red-700' : 'text-green-700'
                      }`}>
                        Email ID *
                      </label>
                      <Input
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange("email", e.target.value)}
                        placeholder="your.email@example.com"
                        className={isLowEngagement ? 'border-red-300 focus:border-red-500' : 'border-green-300 focus:border-green-500'}
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label className={`block text-sm font-medium mb-2 ${
                      isLowEngagement ? 'text-red-700' : 'text-green-700'
                    }`}>
                      {isLowEngagement 
                        ? "Can you share why you feel disconnected or less engaged with our mission?"
                        : "Can you share why you feel connected with our mission?"
                      }
                    </label>
                    <Textarea
                      value={formData.message}
                      onChange={(e) => handleInputChange("message", e.target.value)}
                      placeholder="Share your thoughts..."
                      className={`min-h-[120px] ${
                        isLowEngagement ? 'border-red-300 focus:border-red-500' : 'border-green-300 focus:border-green-500'
                      }`}
                      required
                    />
                  </div>

                  <Button 
                    type="submit" 
                    className={`w-full py-3 text-lg ${
                      isLowEngagement 
                        ? 'bg-red-600 hover:bg-red-700' 
                        : 'bg-green-600 hover:bg-green-700'
                    } text-white`}
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Submitting..." : "Submit Response"}
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  );
};

export default GetInvolved;
