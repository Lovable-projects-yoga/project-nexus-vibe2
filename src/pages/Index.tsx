import Hero from "@/components/Hero";
import ClassCard from "@/components/ClassCard";
import Footer from "@/components/Footer";

const Index = () => {
  const yogaClasses = [
    {
      title: "Beginner Flow",
      description: "Perfect for those new to yoga. Learn the fundamentals in a supportive environment.",
      price: "$29",
      features: [
        "8 weeks of guided sessions",
        "Basic poses and breathing techniques",
        "Flexibility and stress reduction focus",
        "Lifetime access to recordings",
        "Beginner-friendly community"
      ]
    },
    {
      title: "Intermediate Practice",
      description: "Take your practice deeper with more challenging poses and sequences.",
      price: "$49",
      features: [
        "10 weeks of progressive training",
        "Advanced asanas and transitions",
        "Core strength and balance focus",
        "Lifetime access to recordings",
        "Weekly live Q&A sessions"
      ]
    },
    {
      title: "Advanced Mastery",
      description: "Master complex poses and deepen your spiritual practice.",
      price: "$79",
      features: [
        "12 weeks of intensive practice",
        "Inversions and arm balances",
        "Meditation and pranayama deep dive",
        "Lifetime access to recordings",
        "Personal progress reviews",
        "Private community forum"
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
              Choose Your Journey
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Select the class that matches your experience level and start your transformation today
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
