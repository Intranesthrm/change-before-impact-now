
const CBCC = () => {
  const stats = [
    { icon: "🌍", label: "Population", value: "Growing rapidly" },
    { icon: "💧", label: "Fresh Water", value: "Declining fast" },
    { icon: "🏭", label: "Pollution", value: "Increasing daily" },
    { icon: "🐾", label: "Animals", value: "Species extinct" },
    { icon: "🗑️", label: "Non Bio-Degradable", value: "Waste crisis" },
    { icon: "🌊", label: "Sea Level", value: "Rising dangerously" },
    { icon: "⛈️", label: "Climate Disasters", value: "More frequent" },
    { icon: "👨‍🌾", label: "Farmer Suicides", value: "Crisis deepening" },
    { icon: "❌", label: "Climate (in-)Action", value: "Time running out" },
  ];

  const initiatives = [
    {
      title: "Themed Villages",
      description: "Creating specialized village ecosystems focused on specific sustainable practices and tourism themes."
    },
    {
      title: "Bakri Chhap Products",
      description: "Promoting traditional crafts and local products to generate sustainable livelihoods."
    },
    {
      title: "Mad-house to Mud-house",
      description: "Transforming urban stress into rural peace through sustainable living experiences."
    },
    {
      title: "Bakri Swayamvar",
      description: "Community-driven initiatives that celebrate local culture while promoting environmental awareness."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-red-50 to-orange-50">
      <div className="container mx-auto px-6 py-16">
        <h1 className="text-4xl md:text-6xl font-bold text-red-700 mb-8 text-center">
          CHANGE BEFORE CLIMATE CHANGE
        </h1>

        {/* Intro Section */}
        <section className="mb-16">
          <div className="bg-white rounded-lg shadow-lg p-8 text-center">
            <p className="text-xl text-gray-700 leading-relaxed">
              A nationwide movement to inspire individuals, communities, and organizations to take 
              immediate action against climate change. We believe that proactive change today can 
              prevent catastrophic climate impacts tomorrow.
            </p>
          </div>
        </section>

        {/* Key Stats */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-red-700 mb-8 text-center">The Reality We Face</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {stats.map((stat, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6 text-center border-l-4 border-red-500">
                <div className="text-4xl mb-3">{stat.icon}</div>
                <h3 className="font-bold text-red-700 mb-2">{stat.label}</h3>
                <p className="text-gray-600">{stat.value}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Code Red Section */}
        <section className="mb-16">
          <div className="bg-gradient-to-r from-red-600 to-orange-600 rounded-lg p-8 text-white text-center">
            <h2 className="text-3xl font-bold mb-4">We are now at 'Code Red'</h2>
            <p className="text-xl leading-relaxed">
              The window for preventing the worst impacts of climate change is rapidly closing. 
              Every day of delay makes the challenge more difficult and the solutions more expensive. 
              The time for half-measures and future promises has passed—we need action now.
            </p>
          </div>
        </section>

        {/* Act Now Section */}
        <section className="mb-16">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-3xl font-bold text-green-700 mb-6 text-center">Act Now - The Movement Continues</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              The Change Before Climate Change movement is not just about awareness—it's about action. 
              We're building a network of changemakers who are implementing real solutions in their 
              communities, one village at a time.
            </p>
            <div className="text-center">
              <h3 className="text-2xl font-bold text-green-700 mb-4">
                Championing Environmental Cause and Driving Action
              </h3>
              <p className="text-gray-700">
                Join thousands of individuals and organizations who are already making a difference. 
                Together, we can create the change our planet desperately needs.
              </p>
            </div>
          </div>
        </section>

        {/* Sub-initiatives */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-green-700 mb-8 text-center">Our Initiatives</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {initiatives.map((initiative, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-green-500">
                <h3 className="text-xl font-bold text-green-700 mb-3">{initiative.title}</h3>
                <p className="text-gray-700">{initiative.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Closing Call */}
        <section>
          <div className="bg-climate-gradient rounded-lg p-8 text-white text-center">
            <h2 className="text-4xl font-bold mb-4">
              CREATING ALTERNATIVE ECOSYSTEMS
            </h2>
            <p className="text-2xl">
              Village by Village, One Village at a time!
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default CBCC;
