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
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-accent/15 to-secondary/20" />
      </div>
      
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center animate-fade-in">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white drop-shadow-[0_4px_12px_rgba(0,0,0,0.4)] leading-tight">
          Yoga with Andrea
        </h1>
        <p className="text-xl md:text-2xl mb-10 text-white/95 max-w-2xl mx-auto drop-shadow-[0_2px_8px_rgba(0,0,0,0.3)] leading-relaxed">
          Join our online yoga classes and discover inner peace, strength, and flexibility from the comfort of your home
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
