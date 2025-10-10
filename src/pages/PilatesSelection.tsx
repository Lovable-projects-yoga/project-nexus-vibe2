import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

const PilatesSelection = () => {
  const navigate = useNavigate();

  const handlePurchase = (time: string) => {
    toast.info("Payment processing will be available soon!", {
      description: `You selected the ${time} Pilates class. Check back shortly!`
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-4xl mx-auto px-6 py-12">
        <Button
          variant="ghost"
          onClick={() => navigate("/")}
          className="mb-8 text-muted-foreground hover:text-foreground"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Classes
        </Button>

        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Choose Your Pilates Time
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Select your preferred class time - every Wednesday
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
          {/* Morning Class */}
          <Card className="group h-full flex flex-col bg-card/80 backdrop-blur-sm shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-medium)] transition-all duration-700 hover:scale-[1.03] hover:-translate-y-2 border border-border/30 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            
            <CardHeader className="space-y-4 pb-6 relative z-10">
              <CardTitle className="text-3xl font-light tracking-wide text-foreground">
                Morning Class
              </CardTitle>
              <CardDescription className="text-base leading-relaxed font-light">
                Start your day with energy and focus
              </CardDescription>
            </CardHeader>
            
            <CardContent className="flex-grow relative z-10">
              <div className="mb-8 pb-6 border-b border-border/20">
                <div className="flex items-baseline">
                  <span className="text-5xl font-light text-foreground tracking-tight">
                    €10
                  </span>
                  <span className="text-muted-foreground/60 ml-3 text-sm font-light">per session</span>
                </div>
              </div>
              
              <ul className="space-y-4 mb-8">
                <li className="flex items-start group/item">
                  <div className="mt-1 mr-3 flex-shrink-0">
                    <div className="w-5 h-5 rounded-full border border-primary/30 flex items-center justify-center group-hover/item:bg-primary/10 transition-colors duration-300">
                      <span className="text-primary text-xs">✓</span>
                    </div>
                  </div>
                  <span className="text-muted-foreground leading-relaxed font-light text-sm">Every Wednesday at 8 AM</span>
                </li>
                <li className="flex items-start group/item">
                  <div className="mt-1 mr-3 flex-shrink-0">
                    <div className="w-5 h-5 rounded-full border border-primary/30 flex items-center justify-center group-hover/item:bg-primary/10 transition-colors duration-300">
                      <span className="text-primary text-xs">✓</span>
                    </div>
                  </div>
                  <span className="text-muted-foreground leading-relaxed font-light text-sm">30-minute live session</span>
                </li>
                <li className="flex items-start group/item">
                  <div className="mt-1 mr-3 flex-shrink-0">
                    <div className="w-5 h-5 rounded-full border border-primary/30 flex items-center justify-center group-hover/item:bg-primary/10 transition-colors duration-300">
                      <span className="text-primary text-xs">✓</span>
                    </div>
                  </div>
                  <span className="text-muted-foreground leading-relaxed font-light text-sm">Perfect way to start your day</span>
                </li>
              </ul>

              <Button 
                className="w-full shadow-[var(--shadow-soft)] hover:shadow-[var(--shadow-medium)] font-light tracking-wide transition-all duration-300" 
                size="lg"
                onClick={() => handlePurchase("8 AM")}
              >
                Book now
              </Button>
            </CardContent>
          </Card>

          {/* Evening Class */}
          <Card className="group h-full flex flex-col bg-card/80 backdrop-blur-sm shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-medium)] transition-all duration-700 hover:scale-[1.03] hover:-translate-y-2 border border-border/30 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            
            <CardHeader className="space-y-4 pb-6 relative z-10">
              <CardTitle className="text-3xl font-light tracking-wide text-foreground">
                Evening Class
              </CardTitle>
              <CardDescription className="text-base leading-relaxed font-light">
                Unwind after work and release tension
              </CardDescription>
            </CardHeader>
            
            <CardContent className="flex-grow relative z-10">
              <div className="mb-8 pb-6 border-b border-border/20">
                <div className="flex items-baseline">
                  <span className="text-5xl font-light text-foreground tracking-tight">
                    €10
                  </span>
                  <span className="text-muted-foreground/60 ml-3 text-sm font-light">per session</span>
                </div>
              </div>
              
              <ul className="space-y-4 mb-8">
                <li className="flex items-start group/item">
                  <div className="mt-1 mr-3 flex-shrink-0">
                    <div className="w-5 h-5 rounded-full border border-primary/30 flex items-center justify-center group-hover/item:bg-primary/10 transition-colors duration-300">
                      <span className="text-primary text-xs">✓</span>
                    </div>
                  </div>
                  <span className="text-muted-foreground leading-relaxed font-light text-sm">Every Wednesday at 6 PM</span>
                </li>
                <li className="flex items-start group/item">
                  <div className="mt-1 mr-3 flex-shrink-0">
                    <div className="w-5 h-5 rounded-full border border-primary/30 flex items-center justify-center group-hover/item:bg-primary/10 transition-colors duration-300">
                      <span className="text-primary text-xs">✓</span>
                    </div>
                  </div>
                  <span className="text-muted-foreground leading-relaxed font-light text-sm">30-minute live session</span>
                </li>
                <li className="flex items-start group/item">
                  <div className="mt-1 mr-3 flex-shrink-0">
                    <div className="w-5 h-5 rounded-full border border-primary/30 flex items-center justify-center group-hover/item:bg-primary/10 transition-colors duration-300">
                      <span className="text-primary text-xs">✓</span>
                    </div>
                  </div>
                  <span className="text-muted-foreground leading-relaxed font-light text-sm">Ideal after-work session</span>
                </li>
              </ul>

              <Button 
                className="w-full shadow-[var(--shadow-soft)] hover:shadow-[var(--shadow-medium)] font-light tracking-wide transition-all duration-300" 
                size="lg"
                onClick={() => handlePurchase("6 PM")}
              >
                Book now
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default PilatesSelection;
