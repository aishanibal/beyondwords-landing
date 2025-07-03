import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.png";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAtTop, setIsAtTop] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setIsAtTop(window.scrollY < 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <nav
      className={`bg-cream/95 backdrop-blur-lg bg-border-rose-accent sticky top-0 z-50 border-b border-rose-accent/20 transition-all duration-300 ${isAtTop ? "h-24" : "h-16"}`}
      style={{ minHeight: isAtTop ? '6rem' : '4rem' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`flex justify-between items-center transition-all duration-300 ${isAtTop ? "h-24" : "h-16"}`}>
          <motion.div
            className="flex items-center"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className={`transition-all duration-300  rounded-lg flex items-center justify-center ${isAtTop ? "w-20 h-20" : "w-14 h-14"}`}>
              <img
                src={logo}
                alt="BeyondWords Logo"
                className="object-contain transition-all duration-300"
                style={{
                  width: isAtTop ? '8.5rem' : '4.5rem',
                  height: isAtTop ? '8.5rem' : '4.5rem',
                }}
              />
            </div>
            <span className={`ml-3 font-heading font-semibold text-rose-primary transition-all duration-300 ${isAtTop ? "text-3xl" : "text-xl"}`}>BeyondWords</span>
          </motion.div>
          
          <div className="hidden md:flex items-center space-x-8">
            <motion.a 
              href="#features" 
              onClick={(e) => { e.preventDefault(); scrollToSection('features'); }}
              className="text-text-dark hover:text-rose-primary transition-colors cursor-pointer"
              whileHover={{ scale: 1.05 }}
            >
              Features
            </motion.a>
            <motion.a 
              href="#testimonials" 
              onClick={(e) => { e.preventDefault(); scrollToSection('testimonials'); }}
              className="text-text-dark hover:text-rose-primary transition-colors cursor-pointer"
              whileHover={{ scale: 1.05 }}
            >
              Community
            </motion.a>
            <motion.a 
              href="#contact" 
              onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }}
              className="text-text-dark hover:text-rose-primary transition-colors cursor-pointer"
              whileHover={{ scale: 1.05 }}
            >
              Contact
            </motion.a>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button 
                onClick={() => scrollToSection('waitlist')}
                className="bg-rose-primary text-white hover:bg-rose-primary/90"
              >
                Join Waitlist
              </Button>
            </motion.div>
          </div>
          
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-text-dark hover:text-rose-primary"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden bg-cream border-t border-rose-accent/20"
        >
          <div className="px-4 py-4 space-y-4">
            <a 
              href="#features" 
              onClick={(e) => { e.preventDefault(); scrollToSection('features'); }}
              className="block text-text-dark hover:text-rose-primary transition-colors cursor-pointer"
            >
              Features
            </a>
            <a 
              href="#testimonials" 
              onClick={(e) => { e.preventDefault(); scrollToSection('testimonials'); }}
              className="block text-text-dark hover:text-rose-primary transition-colors cursor-pointer"
            >
              Testimonials
            </a>
            <a 
              href="#contact" 
              onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }}
              className="block text-text-dark hover:text-rose-primary transition-colors cursor-pointer"
            >
              Contact
            </a>
            <Button 
              onClick={() => scrollToSection('waitlist')}
              className="w-full bg-rose-primary text-white hover:bg-rose-primary/90"
            >
              Join Waitlist
            </Button>
          </div>
        </motion.div>
      )}
    </nav>
  );
}
