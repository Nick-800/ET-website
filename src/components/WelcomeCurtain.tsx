import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Building2 } from "lucide-react";

const WelcomeCurtain = () => {
  const [isOpen, setIsOpen] = useState(false);

  if (isOpen) return null;

  return (
    <div
      className={`fixed inset-0 z-50 bg-primary flex flex-col items-center justify-center transition-transform duration-700 ${
        isOpen ? "-translate-y-full" : "translate-y-0"
      }`}
    >
      <div className="text-center animate-fade-in">
        <div className="w-24 h-24 bg-primary-foreground/10 rounded-full flex items-center justify-center mx-auto mb-6">
          <Building2 className="w-12 h-12 text-primary-foreground" />
        </div>
        <h1 className="text-4xl md:text-6xl font-bold text-primary-foreground mb-4">
          MEP Solutions
        </h1>
        <p className="text-primary-foreground/80 text-lg mb-8">
          Engineering Excellence Since 1998
        </p>
        <Button
          size="lg"
          variant="secondary"
          onClick={() => setIsOpen(true)}
          className="text-lg px-8"
        >
          Get Started
        </Button>
      </div>
    </div>
  );
};

export default WelcomeCurtain;
