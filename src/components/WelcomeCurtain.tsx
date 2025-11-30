import { useState } from "react";
import { Button } from "@/components/ui/button";
import bclogo from "@/assets/bclogo.png";
import bctext from "@/assets/bctext.png";

const WelcomeCurtain = () => {
  const [visible, setVisible] = useState(true);
  const [closing, setClosing] = useState(false);

  const handleGetStarted = () => {
    setClosing(true);
    window.setTimeout(() => setVisible(false), 420);
  };

  if (!visible) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#0c2637]">
      <div
        className={`text-center px-6 transform transition-all duration-500 ease-out ${
          closing ? "opacity-0 -translate-y-6 scale-95" : "opacity-100 translate-y-0 scale-100"
        }`}
      >
        <img src={bclogo} alt="Company logo" className="mx-auto mb-4 w-32 h-auto object-contain" />
        <img src={bctext} alt="Company wordmark" className="mx-auto mb-6 w-48 md:w-64 object-contain" />
        <Button
          size="lg"
          onClick={handleGetStarted}
          className="text-lg px-8 bg-[#ff7a00] text-white hover:bg-[#ff8f1a]"
          aria-label="Get started"
        >
          Get Started
        </Button>
      </div>
    </div>
  );
};

export default WelcomeCurtain;
