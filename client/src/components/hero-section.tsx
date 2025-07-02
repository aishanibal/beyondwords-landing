import { motion } from "framer-motion";
import { Rocket, Play, Brain, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

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
              className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-rose-primary mb-6 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Transform Ideas into{" "}
              <span className="text-blue-secondary">Compelling Content</span>
            </motion.h1>
            
            <motion.p 
              className="text-xl md:text-2xl font-body text-text-dark mb-8 opacity-90"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              BeyondWords is the AI-powered platform that transforms your ideas into compelling, human-like content. Unleash your creativity and let your words make an impact.
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
              
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button 
                  variant="outline"
                  size="lg"
                  className="border-2 border-blue-secondary text-blue-secondary hover:bg-blue-secondary hover:text-white px-8 py-4 text-lg"
                >
                  <Play className="mr-2 h-5 w-5" />
                  Watch Demo
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
                    className="flex items-center space-x-4"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.8 }}
                  >
                    <div className="w-12 h-12 bg-rose-primary/20 rounded-full flex items-center justify-center">
                      <Brain className="text-rose-primary h-6 w-6" />
                    </div>
                    <div className="flex-1">
                      <motion.div 
                        className="h-3 bg-rose-accent/30 rounded-full mb-2"
                        initial={{ width: 0 }}
                        animate={{ width: "100%" }}
                        transition={{ duration: 1, delay: 1 }}
                      />
                      <motion.div 
                        className="h-2 bg-rose-accent/20 rounded-full w-3/4"
                        initial={{ width: 0 }}
                        animate={{ width: "75%" }}
                        transition={{ duration: 1, delay: 1.2 }}
                      />
                    </div>
                  </motion.div>
                  
                  <motion.div 
                    className="space-y-3"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 1.4 }}
                  >
                    <motion.div 
                      className="h-4 bg-blue-secondary/20 rounded-full"
                      initial={{ width: 0 }}
                      animate={{ width: "100%" }}
                      transition={{ duration: 0.8, delay: 1.6 }}
                    />
                    <motion.div 
                      className="h-4 bg-blue-secondary/20 rounded-full w-5/6"
                      initial={{ width: 0 }}
                      animate={{ width: "83%" }}
                      transition={{ duration: 0.8, delay: 1.8 }}
                    />
                    <motion.div 
                      className="h-4 bg-blue-secondary/20 rounded-full w-4/6"
                      initial={{ width: 0 }}
                      animate={{ width: "67%" }}
                      transition={{ duration: 0.8, delay: 2 }}
                    />
                  </motion.div>
                  
                  <motion.div 
                    className="flex items-center justify-between"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 2.2 }}
                  >
                    <div className="flex space-x-2">
                      <motion.div 
                        className="w-8 h-8 bg-rose-accent/30 rounded-full"
                        animate={{ scale: [1, 1.1, 1] }}
                        transition={{ duration: 2, repeat: Infinity, delay: 2.5 }}
                      />
                      <motion.div 
                        className="w-8 h-8 bg-blue-secondary/30 rounded-full"
                        animate={{ scale: [1, 1.1, 1] }}
                        transition={{ duration: 2, repeat: Infinity, delay: 2.7 }}
                      />
                      <motion.div 
                        className="w-8 h-8 bg-rose-primary/30 rounded-full"
                        animate={{ scale: [1, 1.1, 1] }}
                        transition={{ duration: 2, repeat: Infinity, delay: 2.9 }}
                      />
                    </div>
                    <motion.div 
                      className="bg-rose-primary text-white px-4 py-2 rounded-full text-sm flex items-center"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, delay: 2.4 }}
                    >
                      <Sparkles className="mr-1 h-3 w-3" />
                      AI Generated
                    </motion.div>
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
