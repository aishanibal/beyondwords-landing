import { motion } from "framer-motion";
import { Rocket, Play, MessageSquare, ExternalLink, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.png";

export default function HeroSection() {
  const scrollToWaitlist = () => {
    const element = document.getElementById('waitlist');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative py-20 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 gradient-overlay"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.h1 
              className="text-5xl md:text-5xl lg:text-7xl font-heading font-bold text-rose-primary mb-6 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Reconnect with your{" "}
              <span className="text-blue-secondary">Heritage Language</span>
            </motion.h1>
            
            <motion.p 
              className="text-xl md:text-2xl font-body text-text-dark mb-8 opacity-90"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
An AI-powered tool designed for heritage speakers and diaspora communities to speak their native language with confidence, emotion, and pride.

</motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button 
                  onClick={scrollToWaitlist}
                  size="lg"
                  className="bg-rose-primary text-white hover:bg-rose-primary/90 px-8 py-4 text-lg"
                >
                  <Rocket className="mr-2 h-5 w-5" />
                  Join Waitlist
                </Button>
              </motion.div>
              
              
            </motion.div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="relative">
              <motion.div 
                className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-rose-accent/20"
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <div className="space-y-6">
                  <motion.div 
                    className="text-center"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.6, delay: 0.8 }}
                  >
                    <div className="w-48 h-48 flex items-center justify-center mx-auto">
                      <motion.img
                        src={logo}
                        alt="BeyondWords Logo"
                        className="h-48 w-48 object-contain"
                        animate={{ y: [0, -15, 0] }}
                        transition={{ duration: 1.6, repeat: Infinity, repeatType: 'loop' }}
                      />
                    </div>
                    <h3 className="text-3xl font-heading font-bold text-rose-primary mb-2">
                      Share Your Experience
                    </h3>
                    <p className="text-text-dark opacity-80 font-body">
                      Help us understand your heritage language journey
                    </p>
                  </motion.div>
                  
                  <div style={{alignItems: 'center', justifyContent: 'center', display: 'flex'}}>
                    <motion.div 
                      className="space-y-4"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.6, delay: 1.2 }}
                    >
                      <div className="flex items-center space-x-3">
                        <div className="w-3 h-3 bg-rose-primary rounded-full"></div>
                        <span className="text-sm text-text-dark">Share the language your community speaks</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="w-3 h-3 bg-blue-secondary rounded-full"></div>
                        <span className="text-sm text-text-dark">Tell us your cultural experiences with your heritage language</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="w-3 h-3 bg-rose-accent rounded-full"></div>
                        <span className="text-sm text-text-dark">Help develop our platform with your feedback</span>
                      </div>
                    </motion.div>
                  </div>
                  
                  <motion.div 
                    className="pt-4 border-t border-rose-accent/20"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 1.6 }}
                  >
                    <div className="flex items-center justify-center mb-4">
                      <Users className="text-blue-secondary h-5 w-5 mr-2" />
                      <span className="text-sm text-text-dark font-medium">Join our community research</span>
                    </div>
                    
                    <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                      <Button
                        onClick={() => window.open('https://forms.office.com/Pages/ResponsePage.aspx?id=RncIw6pRT0-Po3Vc1N8ikyownBfAaZ5Gk1xJwTt1Ik1UNVNGUllUMFJWNlBQRFVCQlJHSFZZUzZNWi4u', '_blank')}
                        className="w-full bg-blue-secondary text-white hover:bg-blue-secondary/90 px-6 py-3 text-base font-medium"
                      >
                        <ExternalLink className="mr-2 h-5 w-5" />
                        Take Our Survey
                      </Button>
                    </motion.div>
                    
                    <p className="text-xs text-text-dark/60 text-center mt-3">
                      5 minutes • Anonymous • Powered by Microsoft Forms
                    </p>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
