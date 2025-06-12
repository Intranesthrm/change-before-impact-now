
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";

interface LowEngagementFormProps {
  rating: number;
}

const LowEngagementForm = ({ rating }: LowEngagementFormProps) => {
  const [feedback, setFeedback] = useState("");
  const [contact, setContact] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));

    toast({
      title: "Thank you for your feedback!",
      description: "Your honest response helps us improve our approach and find better ways to engage people in climate action.",
    });

    console.log("Low engagement submission:", { rating, feedback, contact });
    setIsSubmitting(false);
  };

  return (
    <section className="py-20 bg-gradient-to-b from-orange-50 to-red-50">
      <div className="container mx-auto px-6">
        <Card className="max-w-2xl mx-auto climate-card animate-fade-in-up">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl md:text-3xl font-bold text-orange-800 mb-4">
              Thank You for Being Honest
            </CardTitle>
            <p className="text-lg text-orange-700">
              Your feedback helps us understand how to better connect with people about climate action.
            </p>
          </CardHeader>
          
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Can you share why you feel disconnected or less engaged with our mission?
                </label>
                <Textarea
                  value={feedback}
                  onChange={(e) => setFeedback(e.target.value)}
                  placeholder="Your thoughts help us improve our approach..."
                  className="min-h-[120px]"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email or Phone Number (for follow-up and awareness sharing) *
                </label>
                <Input
                  type="text"
                  value={contact}
                  onChange={(e) => setContact(e.target.value)}
                  placeholder="your.email@example.com or +1234567890"
                  required
                />
              </div>

              <Button 
                type="submit" 
                className="w-full bg-orange-600 hover:bg-orange-700 text-white py-3 text-lg"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Submitting..." : "Submit Feedback"}
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default LowEngagementForm;
