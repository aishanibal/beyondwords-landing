import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, User, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const testimonials = [
  {
    name: "Maria Rodriguez",
    role: "Heritage Spanish Speaker",
    content: "BeyondWords helped me reconnect with my abuela's stories. The AI understands the cultural context that makes our family narratives so special.",
    color: "rose-primary",
    bgColor: "bg-rose-primary/20",
    textColor: "text-rose-primary",
  },
  {
    name: "James Chen",
    role: "Second-Generation Chinese American",
    content: "Finally, a platform that gets it. Creating content about my heritage used to feel overwhelming, but BeyondWords makes it natural and authentic.",
    color: "blue-secondary",
    bgColor: "bg-blue-secondary/20",
    textColor: "text-blue-secondary",
  },
  {
    name: "Amara Okafor",
    role: "Nigerian Heritage Content Creator",
    content: "The community aspect is incredible. I've connected with other heritage speakers and learned so much about preserving our cultural narratives.",
    color: "rose-accent",
    bgColor: "bg-rose-accent/20",
    textColor: "text-rose-accent",
  },
];

export default function TestimonialsSection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="py-20 bg-translucent-rose">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-rose-primary mb-4">
            What Our Community Says
          </h2>
          <p className="text-xl font-body text-text-dark max-w-3xl mx-auto">
            Real stories from heritage speakers who've transformed their content creation journey
          </p>
        </motion.div>
        
        <div className="max-w-4xl mx-auto relative">
          <div className="overflow-hidden rounded-2xl">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 mx-4 shadow-xl border border-rose-accent/20"
              >
                <div className="flex items-center mb-6">
                  <motion.div 
                    className={`w-16 h-16 ${testimonials[currentSlide].bgColor} rounded-full flex items-center justify-center`}
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <User className={`${testimonials[currentSlide].textColor} h-8 w-8`} />
                  </motion.div>
                  <div className="ml-4">
                    <h4 className={`font-heading font-semibold ${testimonials[currentSlide].textColor} text-lg`}>
                      {testimonials[currentSlide].name}
                    </h4>
                    <p className="text-text-dark font-body">
                      {testimonials[currentSlide].role}
                    </p>
                  </div>
                </div>
                
                <motion.p 
                  className="text-lg font-body text-text-dark italic mb-6 leading-relaxed"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                  "{testimonials[currentSlide].content}"
                </motion.p>
                
                <motion.div 
                  className="flex text-rose-accent"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                >
                  {[1, 2, 3, 4, 5].map((star) => (
                    <motion.div
                      key={star}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: 0.4 + star * 0.1 }}
                    >
                      <Star className="h-5 w-5 fill-current" />
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>
            </AnimatePresence>
          </div>
          
          {/* Navigation Buttons */}
          <div className="absolute top-1/2 -translate-y-1/2 left-0 -ml-4">
            <Button
              variant="outline"
              size="icon"
              onClick={prevSlide}
              className="bg-white/80 backdrop-blur-sm hover:bg-white shadow-lg border-rose-accent/20"
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
          </div>
          
          <div className="absolute top-1/2 -translate-y-1/2 right-0 -mr-4">
            <Button
              variant="outline"
              size="icon"
              onClick={nextSlide}
              className="bg-white/80 backdrop-blur-sm hover:bg-white shadow-lg border-rose-accent/20"
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
          
          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <motion.button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide 
                    ? 'bg-rose-primary scale-125' 
                    : 'bg-rose-primary/30 hover:bg-rose-primary/50'
                }`}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
