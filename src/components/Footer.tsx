import { Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border py-8 mt-20">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <a 
          href="https://instagram.com" 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-4"
        >
          <Instagram size={20} />
          <span>Follow us on Instagram</span>
        </a>
        <p className="text-muted-foreground">
          © 2024 Online Yoga Classes. All rights reserved.
        </p>
        <p className="text-sm text-muted-foreground mt-2">
          Transform your practice, transform your life
        </p>
      </div>
    </footer>
  );
};

export default Footer;
