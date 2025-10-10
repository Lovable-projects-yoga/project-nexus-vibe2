import { Button } from "@/components/ui/button";
import heroImage from "@/assets/yoga-hero-original.jpg";

const Hero = () => {
  const scrollToClasses = () => {
    document.getElementById("classes")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-[92vh] flex items-end justify-center overflow-hidden">
      <div 
        className="absolute inset-0 z-0 overflow-hidden"
      >
        <div 
          className="absolute inset-0 bg-cover bg-no-repeat"
          style={{ 
            backgroundImage: `url(${heroImage})`,
            backgroundPosition: '45% 65%',
            transform: 'rotate(1.2deg)',
            transformOrigin: 'center'
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/5 via-transparent to-black/15" />
        </div>
      </div>
      
      <div className="relative z-10 w-full backdrop-blur-sm bg-black/10 border-t border-white/10 animate-fade-in">
        <div className="max-w-6xl mx-auto px-6 md:px-12 py-8 md:py-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-center md:text-left">
              <h1 className="text-3xl md:text-5xl font-bold mb-3 text-white leading-tight tracking-tight">
                Yoga with Andrea
              </h1>
              <p className="text-base md:text-lg text-white/90 leading-relaxed font-light">
                Join online to discover more calm, strength, and flexibility from home
              </p>
            </div>
            <Button 
              variant="hero" 
              size="lg"
              onClick={scrollToClasses}
              className="text-base md:text-lg px-8 py-6 h-auto font-semibold whitespace-nowrap"
            >
              Book now
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
