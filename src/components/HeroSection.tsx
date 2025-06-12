
import { Button } from "@/components/ui/button";

interface HeroSectionProps {
  onGetStarted: () => void;
}

const HeroSection = ({ onGetStarted }: HeroSectionProps) => {
  return (
    <section className="min-h-screen bg-climate-gradient flex items-center justify-center relative overflow-hidden">
      {/* Floating elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-white/10 rounded-full floating-element"></div>
      <div className="absolute top-40 right-20 w-16 h-16 bg-white/10 rounded-full floating-element animation-delay-1000"></div>
      <div className="absolute bottom-20 left-20 w-12 h-12 bg-white/10 rounded-full floating-element animation-delay-2000"></div>
      
      <div className="container mx-auto px-6 text-center text-white relative z-10">
        <div className="max-w-4xl mx-auto animate-fade-in-up">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            How Deeply Do You 
            <span className="text-yellow-300"> Relate</span> to Our Mission to 
            <span className="text-green-300"> Save the Planet</span>?
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-3xl mx-auto leading-relaxed">
            Climate change is no longer a distant threat — it's at our doorstep.
            Your connection with this mission can drive real transformation.
            Take 30 seconds. Tell us where you stand.
          </p>
          
          <Button 
            onClick={onGetStarted}
            size="lg"
            className="bg-white text-green-800 hover:bg-white/90 text-xl px-8 py-6 rounded-full shadow-2xl transform transition-all duration-300 hover:scale-105 animate-scale-in"
          >
            Rate & Join the Change 🌏
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
