
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { useToast } from "@/hooks/use-toast";

const GetInvolved = () => {
  const [rating, setRating] = useState<number | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    location: "",
    phone: "",
    email: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showThankYou, setShowThankYou] = useState(false);
  const { toast } = useToast();

  const isLowEngagement = rating !== null && rating <= 5;
  const emojis = ['😠', '😞', '😕', '😐', '😶', '🙃', '🙂', '😊', '😄', '🤝'];

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));

    console.log("Get Involved submission:", { rating, ...formData });
    setIsSubmitting(false);
    setShowThankYou(true);
  };

  const handleJoinWhatsApp = () => {
    // Open WhatsApp group link
    window.open("https://chat.whatsapp.com/your-group-link", "_blank");
    setShowThankYou(false);
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
              <Button className="bg-green-600 hover:bg-green-700" onClick={() => toast({ title: "Volunteer interest noted!" })}>
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
              <Button className="bg-green-600 hover:bg-green-700" onClick={() => toast({ title: "Partnership interest noted!" })}>
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
              <Button className="bg-green-600 hover:bg-green-700" onClick={() => toast({ title: "Thank you for your donation interest!" })}>
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
            <Button className="bg-green-600 hover:bg-green-700 text-white" onClick={() => window.location.href = '/cbcc'}>
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
                {/* Emoji Rating Buttons */}
                <div className="space-y-4">
                  <div className="text-center">
                    <span className="text-2xl font-bold text-green-800">
                      {rating ? `Rating: ${rating}/10` : 'Select your rating'}
                    </span>
                  </div>
                  <div className="grid grid-cols-5 md:grid-cols-10 gap-4">
                    {emojis.map((emoji, index) => {
                      const ratingValue = index + 1;
                      const isSelected = rating === ratingValue;
                      
                      return (
                        <button
                          key={ratingValue}
                          type="button"
                          className={`text-4xl md:text-5xl p-3 rounded-xl transition-all transform hover:scale-110 ${
                            isSelected 
                              ? 'bg-green-500 shadow-xl scale-110' 
                              : 'hover:bg-green-100'
                          }`}
                          onClick={() => setRating(ratingValue)}
                        >
                          <div className="text-center">
                            <div>{emoji}</div>
                            <div className="text-sm font-bold text-green-800 mt-1">
                              {ratingValue}
                            </div>
                          </div>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Form Fields with Conditional Styling */}
                {rating && (
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
                )}
              </form>
            </CardContent>
          </Card>
        </section>

        {/* Thank You Dialog */}
        <Dialog open={showThankYou} onOpenChange={setShowThankYou}>
          <DialogContent className="max-w-md">
            <DialogHeader>
              <DialogTitle className="text-2xl font-bold text-green-800 text-center">
                Thank You! 🌍
              </DialogTitle>
            </DialogHeader>
            <div className="text-center space-y-4">
              <p className="text-lg text-gray-700">
                Your response has been recorded. Together, we can make a real difference!
              </p>
              <div className="space-y-3">
                <Button 
                  onClick={handleJoinWhatsApp}
                  className="w-full bg-green-600 hover:bg-green-700 text-white"
                >
                  Join Our WhatsApp Group 📱
                </Button>
                <Button 
                  variant="outline" 
                  onClick={() => setShowThankYou(false)}
                  className="w-full"
                >
                  Close
                </Button>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
};

export default GetInvolved;
