
import { useState } from "react";
import HeroSection from "@/components/HeroSection";
import RatingSection from "@/components/RatingSection";
import LowEngagementForm from "@/components/LowEngagementForm";
import HighEngagementForm from "@/components/HighEngagementForm";
import ImpactSection from "@/components/ImpactSection";
import SocialShareSection from "@/components/SocialShareSection";
import Footer from "@/components/Footer";

const Index = () => {
  const [currentStep, setCurrentStep] = useState<'hero' | 'rating' | 'form'>('hero');
  const [userRating, setUserRating] = useState<number | null>(null);

  const handleGetStarted = () => {
    setCurrentStep('rating');
    // Smooth scroll to rating section
    setTimeout(() => {
      const ratingSection = document.querySelector('[data-section="rating"]');
      ratingSection?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  const handleRatingSelect = (rating: number) => {
    setUserRating(rating);
    setCurrentStep('form');
    // Smooth scroll to form section
    setTimeout(() => {
      const formSection = document.querySelector('[data-section="form"]');
      formSection?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  return (
    <div className="min-h-screen">
      <HeroSection onGetStarted={handleGetStarted} />
      
      {currentStep !== 'hero' && (
        <div data-section="rating">
          <RatingSection onRatingSelect={handleRatingSelect} />
        </div>
      )}
      
      {currentStep === 'form' && userRating && (
        <div data-section="form">
          {userRating <= 6 ? (
            <LowEngagementForm rating={userRating} />
          ) : (
            <HighEngagementForm rating={userRating} />
          )}
        </div>
      )}
      
      <ImpactSection />
      <SocialShareSection />
      <Footer />
    </div>
  );
};

export default Index;
