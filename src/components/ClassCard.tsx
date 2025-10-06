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
    <Card className="h-full flex flex-col bg-[image:var(--gradient-card)] shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-medium)] transition-all duration-500 hover:scale-[1.02] hover:-translate-y-1 border-border/50">
      <CardHeader className="space-y-3 pb-4">
        <CardTitle className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
          {title}
        </CardTitle>
        <CardDescription className="text-base leading-relaxed">{description}</CardDescription>
      </CardHeader>
      <CardContent className="flex-grow">
        <div className="mb-6 pb-6 border-b border-border/40">
          <span className="text-5xl font-bold bg-gradient-to-br from-primary via-accent to-secondary bg-clip-text text-transparent">
            {price}
          </span>
          <span className="text-muted-foreground ml-2 text-sm">per session</span>
        </div>
        <ul className="space-y-3">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start group">
              <span className="text-secondary mr-3 text-xl font-semibold group-hover:scale-110 transition-transform">✓</span>
              <span className="text-muted-foreground leading-relaxed">{feature}</span>
            </li>
          ))}
        </ul>
      </CardContent>
      <CardFooter className="pt-6">
        <Button 
          className="w-full shadow-[var(--shadow-soft)] hover:shadow-[var(--shadow-medium)]" 
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
