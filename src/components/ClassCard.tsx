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
    <Card className="h-full flex flex-col hover:shadow-[var(--shadow-medium)] transition-all duration-300 hover:scale-105">
      <CardHeader>
        <CardTitle className="text-2xl text-primary">{title}</CardTitle>
        <CardDescription className="text-base">{description}</CardDescription>
      </CardHeader>
      <CardContent className="flex-grow">
        <div className="mb-4">
          <span className="text-4xl font-bold text-primary">{price}</span>
        </div>
        <ul className="space-y-2">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <span className="text-secondary mr-2">✓</span>
              <span className="text-muted-foreground">{feature}</span>
            </li>
          ))}
        </ul>
      </CardContent>
      <CardFooter>
        <Button 
          className="w-full" 
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
