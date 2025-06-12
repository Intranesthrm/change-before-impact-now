
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const SocialShareSection = () => {
  const shareUrl = encodeURIComponent(window.location.href);
  const shareText = encodeURIComponent("Join me in rating your connection to climate action! How deeply do you relate to the mission: Change Before Climate Change? 🌍");

  const handleWhatsAppShare = () => {
    window.open(`https://wa.me/?text=${shareText}%20${shareUrl}`, "_blank");
  };

  const handleInstagramShare = () => {
    // Instagram doesn't support direct URL sharing, so we'll copy to clipboard
    navigator.clipboard.writeText(`${decodeURIComponent(shareText)} ${window.location.href}`);
    alert("Link copied to clipboard! Share it on Instagram.");
  };

  const handleFacebookShare = () => {
    window.open(`https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`, "_blank");
  };

  return (
    <section className="py-20 bg-gradient-to-b from-blue-50 to-purple-50">
      <div className="container mx-auto px-6">
        <Card className="max-w-3xl mx-auto climate-card text-center animate-fade-in-up">
          <CardHeader>
            <CardTitle className="text-3xl md:text-4xl font-bold text-blue-800 mb-4">
              One Voice Can Spark a Wave of Change
            </CardTitle>
            <p className="text-xl text-blue-700">
              Invite your friends and community to rate their relatability and join us in this movement.
            </p>
          </CardHeader>
          
          <CardContent className="pb-8">
            <p className="text-lg text-gray-600 mb-8">
              Every supporter counts. Every response shapes our next action.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                onClick={handleWhatsAppShare}
                className="bg-green-500 hover:bg-green-600 text-white px-6 py-3"
              >
                📱 Share on WhatsApp
              </Button>
              
              <Button 
                onClick={handleInstagramShare}
                className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-6 py-3"
              >
                📸 Share on Instagram
              </Button>
              
              <Button 
                onClick={handleFacebookShare}
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3"
              >
                👥 Share on Facebook
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default SocialShareSection;
