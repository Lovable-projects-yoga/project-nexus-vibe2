import Hero from "@/components/Hero";
import ClassCard from "@/components/ClassCard";
import Footer from "@/components/Footer";

const Index = () => {
  const yogaClasses = [
    {
      title: "Pilates",
      description: "strengthen your core and improve posture with pilates",
      price: "€10",
      features: [
        "Drop-in class - no commitment",
        "30-minute live sessions",
        "Every Wednesday at 8 AM or 6 PM",
        "Core strength and flexibility",
        "Low-impact, moderately intense workout"
      ],
      link: "/pilates"
    },
    {
      title: "Yin Yoga",
      description: "Slow-paced practice with deep stretches to release tension and restore balance.",
      price: "€10",
      features: [
        "Drop-in class - no commitment",
        "30-minute live sessions",
        "Every Wednesday at 8:30 PM",
        "Deep tissue stretching",
        "Calming and meditative",
        "Perfect for evening wind-down"
      ]
    },
    {
      title: "Soundbath",
      description: "Immerse yourself in healing vibrations for deep relaxation and meditation.",
      price: "€10",
      features: [
        "Drop-in class - no commitment",
        "30-minute live sessions",
        "Every Wednesday at 9 PM",
        "Crystal bowls and healing sounds",
        "Deep relaxation and stress relief",
        "Perfect before bedtime"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Hero />
      
      <section id="classes" className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
              Choose Your Practice
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Live classes every Wednesday
            </p>
          </div>
          
          <div className="flex flex-row gap-8 overflow-x-auto">
            {yogaClasses.map((yogaClass, index) => (
              <ClassCard key={index} {...yogaClass} />
            ))}
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Index;
