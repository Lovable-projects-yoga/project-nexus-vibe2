import { Button } from "@/components/ui/button";
import heroImage from "@/assets/yoga-hero-new.jpg";

const Hero = () => {
  const scrollToClasses = () => {
    document.getElementById("classes")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-[92vh] flex items-start md:items-center justify-center md:justify-end overflow-hidden">
      <div 
        className="absolute inset-0 z-0 overflow-hidden"
      >
        <div 
          className="absolute inset-0 bg-cover"
          style={{ 
            backgroundImage: `url(${heroImage})`,
            backgroundPosition: '45% 65%',
            transform: 'rotate(1.2deg)',
            transformOrigin: 'center'
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/40" />
        </div>
      </div>
      
      <div className="relative z-10 w-full max-w-2xl md:max-w-xl ml-auto px-6 md:px-12 text-center md:text-right animate-fade-in pt-8 md:pt-0">
        <h1 className="text-3xl md:text-5xl font-bold mb-4 md:mb-6 text-white drop-shadow-[0_4px_16px_rgba(0,0,0,0.5)] leading-tight tracking-tight">
          Yoga with Andrea
        </h1>
        <p className="text-base md:text-lg mb-6 md:mb-8 text-white/95 max-w-2xl mx-auto md:ml-auto md:mr-0 drop-shadow-[0_2px_10px_rgba(0,0,0,0.4)] leading-relaxed font-light">
          Join online to discover more calm, strength, and flexibility from home
        </p>
        <Button 
          variant="hero" 
          size="lg"
          onClick={scrollToClasses}
          className="text-base md:text-lg px-7 md:px-9 py-5 md:py-6 h-auto font-semibold"
        >
          Explore Classes
        </Button>
      </div>
    </section>
  );
};

export default Hero;
