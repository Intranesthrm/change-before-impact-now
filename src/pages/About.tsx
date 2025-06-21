
const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-green-50">
      <div className="container mx-auto px-6 py-16">
        <h1 className="text-4xl md:text-5xl font-bold text-green-800 mb-12 text-center">
          About Us
        </h1>

        {/* About Tathaagat Foundation */}
        <section className="mb-16">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold text-green-800 mb-6">About Tathaagat Foundation</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              Tathaagat Foundation is a non-profit organization dedicated to creating sustainable alternative 
              ecosystems in rural India. Founded with the vision of transforming villages through innovative, 
              community-driven solutions, we focus on climate resilience, livelihood generation, and 
              environmental conservation.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Our work began with the Bakri Chaap initiative, which started as a small project to support 
              local artisans and has grown into a comprehensive approach to rural development that integrates 
              tourism, agriculture, and sustainable practices.
            </p>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="mb-16">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-green-50 rounded-lg p-8">
              <h2 className="text-2xl font-bold text-green-800 mb-4">Our Mission</h2>
              <p className="text-gray-700 leading-relaxed">
                To empower rural communities by creating sustainable livelihood opportunities, 
                promoting environmental conservation, and building climate-resilient ecosystems 
                through innovative, replicable interventions at the village level.
              </p>
            </div>
            <div className="bg-blue-50 rounded-lg p-8">
              <h2 className="text-2xl font-bold text-green-800 mb-4">Our Vision</h2>
              <p className="text-gray-700 leading-relaxed">
                A world where every rural community thrives in harmony with nature, equipped 
                with sustainable solutions that preserve traditional knowledge while embracing 
                innovative practices for a climate-resilient future.
              </p>
            </div>
          </div>
        </section>

        {/* Team Members */}
        <section className="mb-16">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold text-green-800 mb-8 text-center">Our Team</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-24 h-24 bg-green-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl">👨‍💼</span>
                </div>
                <h3 className="font-semibold text-green-800 mb-2">Founder</h3>
                <p className="text-gray-600">Leading the vision and strategic direction</p>
              </div>
              <div className="text-center">
                <div className="w-24 h-24 bg-blue-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl">👩‍💼</span>
                </div>
                <h3 className="font-semibold text-green-800 mb-2">President</h3>
                <p className="text-gray-600">Overseeing operations and community outreach</p>
              </div>
              <div className="text-center">
                <div className="w-24 h-24 bg-orange-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl">👥</span>
                </div>
                <h3 className="font-semibold text-green-800 mb-2">Core Team</h3>
                <p className="text-gray-600">Dedicated professionals driving change</p>
              </div>
            </div>
          </div>
        </section>

        {/* Messages */}
        <section>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-green-100 to-green-200 rounded-lg p-8">
              <h2 className="text-2xl font-bold text-green-800 mb-4">Founder's Message</h2>
              <p className="text-gray-700 leading-relaxed italic">
                "Every village holds the potential to become a beacon of sustainability. Our role is to 
                unlock that potential through collaborative efforts, innovative solutions, and unwavering 
                commitment to environmental stewardship. Together, we can create a future where progress 
                and nature coexist harmoniously."
              </p>
            </div>
            <div className="bg-gradient-to-br from-blue-100 to-blue-200 rounded-lg p-8">
              <h2 className="text-2xl font-bold text-green-800 mb-4">President's Message</h2>
              <p className="text-gray-700 leading-relaxed italic">
                "The urgency of climate action cannot be overstated. Through the Tathaagat Foundation, 
                we are not just implementing solutions—we are nurturing a movement that empowers 
                communities to be architects of their own sustainable future. Every village transformed 
                is a step closer to our collective goal."
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
