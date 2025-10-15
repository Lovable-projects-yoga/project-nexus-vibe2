import Hero from "@/components/Hero";
import ClassCard from "@/components/ClassCard";
import Footer from "@/components/Footer";

const Index = () => {
  const yogaClasses = [
    {
      title: "Pilates",
      description: "Strengthen your core and improve posture with pilates classical mat and breathing exercises",
      price: "€10",
      features: [
        "Drop-in class",
        "30-minute live session",
        "Every Wednesday at 8 AM or 6 PM CET",
        "Core strength and flexibility",
        "Moderate to intense workout, different options will be given so that you can adapt your practice to your body that day"
      ],
      link: "/pilates"
    },
    {
      title: "Yin Yoga",
      description: "Slow-paced practice with deep stretches to release tension and restore balance",
      price: "€10",
      features: [
        "Drop-in class",
        "30-minute live session",
        "Every Wednesday at 8:30 PM CET",
        "Deep tissue stretching",
        "Calming and meditative",
        "Well-suited for evening wind-down"
      ]
    },
    {
      title: "Soundbath",
      description: "Immerse yourself in healing vibrations for deep relaxation and meditation",
      price: "€10",
      features: [
        "Drop-in class",
        "30-minute live session",
        "Every Wednesday at 9 PM CET",
        "Crystal bowls and healing sounds",
        "Deep relaxation and stress relief",
        "Ideal before bedtime"
      ]
    },
    {
      title: "Yin Yoga + Soundbath",
      description: "Experience the ultimate relaxation combining deep stretches with healing sound vibrations",
      price: "€15",
      features: [
        "Drop-in class",
        "60-minute live session",
        "Every Wednesday at 8:30 PM CET",
        "Deep tissue stretching",
        "Crystal bowls and healing sounds",
        "Perfect evening ritual"
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
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
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
