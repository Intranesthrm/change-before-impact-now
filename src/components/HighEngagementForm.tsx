
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";

interface HighEngagementFormProps {
  rating: number;
}

const HighEngagementForm = ({ rating }: HighEngagementFormProps) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    location: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));

    toast({
      title: "Welcome to the movement! 🌍",
      description: "You'll receive a WhatsApp group invitation soon. Together, we can make a real difference!",
    });

    console.log("High engagement submission:", { rating, ...formData });
    setIsSubmitting(false);

    // Show success modal with WhatsApp link
    showSuccessModal();
  };

  const showSuccessModal = () => {
    // In a real app, this would open a modal or redirect
    window.open("https://chat.whatsapp.com/example-group-link", "_blank");
  };

  return (
    <section className="py-20 bg-gradient-to-b from-green-50 to-blue-50">
      <div className="container mx-auto px-6">
        <Card className="max-w-2xl mx-auto climate-card animate-fade-in-up">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl md:text-3xl font-bold text-green-800 mb-4">
              Amazing! You're Ready to Make a Difference 🌱
            </CardTitle>
            <p className="text-lg text-green-700">
              Join our community of climate action champions and be part of real change.
            </p>
          </CardHeader>
          
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Your Name *
                  </label>
                  <Input
                    type="text"
                    value={formData.name}
                    onChange={(e) => handleInputChange("name", e.target.value)}
                    placeholder="John Doe"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Location (City, State) *
                  </label>
                  <Input
                    type="text"
                    value={formData.location}
                    onChange={(e) => handleInputChange("location", e.target.value)}
                    placeholder="San Francisco, CA"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Your Email *
                </label>
                <Input
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleInputChange("email", e.target.value)}
                  placeholder="john@example.com"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Your Phone Number *
                </label>
                <Input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => handleInputChange("phone", e.target.value)}
                  placeholder="+1 (555) 123-4567"
                  required
                />
              </div>

              <Button 
                type="submit" 
                className="w-full bg-green-600 hover:bg-green-700 text-white py-3 text-lg"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Joining..." : "Join the Mission & WhatsApp Group"}
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default HighEngagementForm;
