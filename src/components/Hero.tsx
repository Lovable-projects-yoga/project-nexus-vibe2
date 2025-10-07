import { Button } from "@/components/ui/button";
import heroImage from "@/assets/yoga-hero.jpg";

const Hero = () => {
  const scrollToClasses = () => {
    document.getElementById("classes")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-[92vh] flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-primary/15 via-accent/10 to-secondary/15" />
      </div>
      
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center animate-fade-in">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white drop-shadow-[0_4px_16px_rgba(0,0,0,0.5)] leading-tight tracking-tight">
          Yoga with Andrea
        </h1>
        <p className="text-lg md:text-xl mb-10 text-white/95 max-w-2xl mx-auto drop-shadow-[0_2px_10px_rgba(0,0,0,0.4)] leading-relaxed font-light">
          Join online to discover more calm, strength, and flexibility from home
        </p>
        <Button 
          variant="hero" 
          size="lg"
          onClick={scrollToClasses}
          className="text-lg px-10 py-7 h-auto font-semibold"
        >
          Explore Classes
        </Button>
      </div>
    </section>
  );
};

export default Hero;
