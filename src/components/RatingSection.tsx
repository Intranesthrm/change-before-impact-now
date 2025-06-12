
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface RatingSectionProps {
  onRatingSelect: (rating: number) => void;
}

const RatingSection = ({ onRatingSelect }: RatingSectionProps) => {
  const [selectedRating, setSelectedRating] = useState<number | null>(null);
  const [hoveredRating, setHoveredRating] = useState<number | null>(null);

  const emojis = ['😠', '😞', '😕', '😐', '😶', '🙃', '🙂', '😊', '😄', '🤝'];
  const descriptions = [
    "Not at all connected",
    "Very disconnected", 
    "Somewhat disconnected",
    "Slightly disconnected",
    "Neutral",
    "Slightly interested",
    "Moderately connected",
    "Very connected",
    "Highly committed",
    "Deeply committed to the cause"
  ];

  const handleRatingClick = (rating: number) => {
    setSelectedRating(rating);
    onRatingSelect(rating);
  };

  return (
    <section className="py-20 bg-gradient-to-b from-blue-50 to-green-50">
      <div className="container mx-auto px-6">
        <Card className="max-w-4xl mx-auto climate-card animate-fade-in-up">
          <CardHeader className="text-center">
            <CardTitle className="text-3xl md:text-4xl font-bold text-green-800 mb-4">
              Rate Your Relatability with the Mission
            </CardTitle>
            <p className="text-xl text-green-700 font-medium">
              "Change Before Climate Change"
            </p>
            <p className="text-lg text-gray-600 mt-4">
              On a scale of 1 to 10, how strongly do you feel connected with our mission?
            </p>
          </CardHeader>
          
          <CardContent className="pb-8">
            <div className="grid grid-cols-5 md:grid-cols-10 gap-4 mt-8">
              {emojis.map((emoji, index) => {
                const rating = index + 1;
                const isSelected = selectedRating === rating;
                const isHovered = hoveredRating === rating;
                
                return (
                  <div key={rating} className="text-center">
                    <div
                      className={`emoji-rating text-4xl md:text-5xl p-3 rounded-xl ${
                        isSelected 
                          ? 'bg-green-500 shadow-xl scale-125' 
                          : isHovered 
                            ? 'bg-green-200 shadow-lg' 
                            : 'hover:bg-green-100'
                      }`}
                      onClick={() => handleRatingClick(rating)}
                      onMouseEnter={() => setHoveredRating(rating)}
                      onMouseLeave={() => setHoveredRating(null)}
                      title={descriptions[index]}
                    >
                      {emoji}
                    </div>
                    <div className="text-sm font-bold text-green-800 mt-2">
                      {rating}
                    </div>
                  </div>
                );
              })}
            </div>
            
            {(hoveredRating || selectedRating) && (
              <div className="text-center mt-6 animate-fade-in-up">
                <p className="text-lg text-gray-700">
                  {descriptions[(hoveredRating || selectedRating)! - 1]}
                </p>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default RatingSection;
