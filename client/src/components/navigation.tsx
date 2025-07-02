import { useState } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <nav className="bg-cream/95 backdrop-blur-sm sticky top-0 z-50 border-b border-rose-accent/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <motion.div 
            className="flex items-center"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="w-12 h-12 bg-rose-primary/10 rounded-lg flex items-center justify-center">
              <span className="text-rose-primary font-heading font-bold text-xl">BW</span>
            </div>
            <span className="ml-3 text-xl font-heading font-semibold text-rose-primary">BeyondWords</span>
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
              Testimonials
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
