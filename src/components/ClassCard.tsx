import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

interface ClassCardProps {
  title: string;
  description: string;
  price: string;
  features: string[];
}

const ClassCard = ({ title, description, price, features }: ClassCardProps) => {
  const handlePurchase = () => {
    toast.info("Payment processing will be available soon!", {
      description: "We're setting up secure payment. Check back shortly!"
    });
  };

  return (
    <Card className="group h-full flex flex-col bg-card/80 backdrop-blur-sm shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-medium)] transition-all duration-700 hover:scale-[1.03] hover:-translate-y-2 border border-border/30 relative overflow-hidden min-w-[320px]">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
      
      <CardHeader className="space-y-4 pb-6 relative z-10">
        <CardTitle className="text-3xl font-light tracking-wide text-foreground">
          {title}
        </CardTitle>
        <CardDescription className="text-base leading-relaxed font-light">{description}</CardDescription>
      </CardHeader>
      
      <CardContent className="flex-grow relative z-10">
        <div className="mb-8 pb-6 border-b border-border/20">
          <div className="flex items-baseline">
            <span className="text-5xl font-light text-foreground tracking-tight">
              {price}
            </span>
            <span className="text-muted-foreground/60 ml-3 text-sm font-light">per session</span>
          </div>
        </div>
        
        <ul className="space-y-4">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start group/item">
              <div className="mt-1 mr-3 flex-shrink-0">
                <div className="w-5 h-5 rounded-full border border-primary/30 flex items-center justify-center group-hover/item:bg-primary/10 transition-colors duration-300">
                  <span className="text-primary text-xs">✓</span>
                </div>
              </div>
              <span className="text-muted-foreground leading-relaxed font-light text-sm">{feature}</span>
            </li>
          ))}
        </ul>
      </CardContent>
      
      <CardFooter className="pt-8 relative z-10">
        <Button 
          className="w-full shadow-[var(--shadow-soft)] hover:shadow-[var(--shadow-medium)] font-light tracking-wide transition-all duration-300" 
          size="lg"
          onClick={handlePurchase}
        >
          Purchase Now
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ClassCard;
