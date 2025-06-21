
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-blue-50">
      {/* Hero Section */}
      <section className="py-20 bg-climate-gradient text-white">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Creating Alternative Ecosystems
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            Village by Village, One Village at a time!
          </p>
          <Link to="/get-involved">
            <Button size="lg" className="bg-white text-green-800 hover:bg-white/90 text-xl px-8 py-6">
              Join Our Mission
            </Button>
          </Link>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-green-800 mb-8 text-center">
              What We Do
            </h2>
            <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
              <p className="text-lg text-gray-700 leading-relaxed">
                TF focuses on high-quality, low-cost and replicable interventions to strengthen rural livelihoods 
                and build climate resilience at the village level. Our approach integrates sustainable tourism, 
                agricultural innovation, and waste management to create comprehensive solutions that empower 
                communities while protecting the environment.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Key Focus Areas Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-green-800 mb-12 text-center">
            The Key Focus Areas
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6 bg-green-50 rounded-lg">
              <div className="text-4xl mb-4">🌱</div>
              <h3 className="text-xl font-semibold text-green-800 mb-3">
                Climate & Ecological Change Intervention
              </h3>
              <p className="text-gray-600">
                Implementing sustainable practices to combat climate change and restore ecological balance.
              </p>
            </div>
            <div className="text-center p-6 bg-blue-50 rounded-lg">
              <div className="text-4xl mb-4">🏔️</div>
              <h3 className="text-xl font-semibold text-green-800 mb-3">
                Livelihood through Tourism
              </h3>
              <p className="text-gray-600">
                Creating sustainable tourism opportunities that benefit local communities.
              </p>
            </div>
            <div className="text-center p-6 bg-orange-50 rounded-lg">
              <div className="text-4xl mb-4">🚜</div>
              <h3 className="text-xl font-semibold text-green-800 mb-3">
                Farm Products & Management
              </h3>
              <p className="text-gray-600">
                Supporting farmers with sustainable practices and market access for their products.
              </p>
            </div>
            <div className="text-center p-6 bg-purple-50 rounded-lg">
              <div className="text-4xl mb-4">♻️</div>
              <h3 className="text-xl font-semibold text-green-800 mb-3">
                Waste Management & Upcycling
              </h3>
              <p className="text-gray-600">
                Innovative solutions for waste reduction, recycling, and creative upcycling initiatives.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Support Us Section */}
      <section className="py-16 bg-gradient-to-r from-green-100 to-blue-100">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-green-800 mb-8">
              Why Support Us
            </h2>
            <div className="bg-white rounded-lg shadow-lg p-8">
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Through interventions in community-based tourism and farm produce management, we create 
                sustainable economic opportunities while preserving traditional knowledge and environmental heritage. 
                Our holistic approach ensures that development benefits reach the grassroots level, empowering 
                rural communities to become self-reliant and environmentally conscious.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Every village we transform becomes a model for others, creating a ripple effect of positive 
                change across rural India. Your support helps us scale these proven solutions to reach more 
                communities and create lasting impact.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
