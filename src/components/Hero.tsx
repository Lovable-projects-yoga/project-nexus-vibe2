import { Button } from "@/components/ui/button";
import heroImage from "@/assets/yoga-hero.jpg";

const Hero = () => {
  const scrollToClasses = () => {
    document.getElementById("classes")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-primary/30 via-accent/20 to-secondary/30" />
      </div>
      
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 text-foreground drop-shadow-lg">
          Transform Your Practice
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-foreground/90 max-w-2xl mx-auto drop-shadow-md">
          Join our online yoga classes and discover inner peace, strength, and flexibility from the comfort of your home
        </p>
        <Button 
          variant="hero" 
          size="lg"
          onClick={scrollToClasses}
          className="text-lg px-8 py-6 h-auto"
        >
          Explore Classes
        </Button>
      </div>
    </section>
  );
};

export default Hero;
