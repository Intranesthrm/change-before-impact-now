
import { Card, CardContent } from "@/components/ui/card";

const ImpactSection = () => {
  const impacts = [
    {
      icon: "🌳",
      title: "Plant 1 Million Trees",
      description: "In the next 3 years across communities"
    },
    {
      icon: "🎓",
      title: "Climate Education",
      description: "Drives across schools and colleges"
    },
    {
      icon: "👥",
      title: "Youth Leadership",
      description: "Empowering local change makers"
    },
    {
      icon: "💧",
      title: "Clean Water Bodies",
      description: "Reduce pollution in our communities"
    }
  ];

  return (
    <section className="py-20 bg-earth-gradient">
      <div className="container mx-auto px-6 text-center text-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in-up">
            Why Your Voice Matters
          </h2>
          
          <p className="text-xl mb-12 leading-relaxed animate-fade-in-up">
            The climate crisis isn't just an environmental issue — it's a human issue. 
            It affects the food we eat, the air we breathe, the water we drink, and the lives we live. 
            At the Tathaagat Foundation, we believe that awareness is the first step toward action.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {impacts.map((impact, index) => (
              <Card key={index} className="climate-card text-center animate-scale-in" style={{animationDelay: `${index * 200}ms`}}>
                <CardContent className="p-6">
                  <div className="text-4xl mb-4">{impact.icon}</div>
                  <h3 className="text-lg font-bold text-green-800 mb-2">{impact.title}</h3>
                  <p className="text-gray-600">{impact.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <p className="text-2xl font-bold animate-fade-in-up">
            This is your movement. Let's make it count.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ImpactSection;
