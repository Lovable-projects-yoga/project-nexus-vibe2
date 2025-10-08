import { Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border py-8 mt-20">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <a 
          href="https://instagram.com/andreabognar.yoga" 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-4"
        >
          <Instagram size={20} />
          <span>connect with me</span>
        </a>
        <p className="text-muted-foreground">
          © 2024 Online Yoga Classes. All rights reserved.
        </p>
        <p className="text-sm text-muted-foreground mt-2">
          Yoga with Andrea
        </p>
      </div>
    </footer>
  );
};

export default Footer;
