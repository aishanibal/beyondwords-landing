import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, User, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const surveyResponses = [
  {
    name: " Bengali Heritage Speaker",
    question: "What motivates you to speak your heritage language?",
    content: "To keep my heritage alive. To communicate with my parents in public and in their native language. I want to be fluent for my own sake of being bilingual but not feeling fully confident in the second language. ",
    color: "rose-primary",
    bgColor: "bg-rose-primary/20",
    textColor: "text-rose-primary",
  },
  {
    name: "Malayalam Heritage Speaker",
    question: "What do you find helpful in a language tool?",
    content: "Practicing conversations. With Malayalam, I just picked up the language and practiced by conversing. In Spanish class, we used to chat with people in Spanish Speaking countries and it forced me to think in the language which was good. ",
    color: "blue-secondary",
    bgColor: "bg-blue-secondary/20",
    textColor: "text-blue-secondary",
  },
  {
    name: "Tagalog Heritage Speaker",
    question: "What motivates you to speak your heritage language?",
    content: "Everytime I come to the Philippines, there's a clear disconnect due to the language barrier, so I try to really hold on to the current Filipino knowledge I have and build on it.",
    color: "rose-accent",
    bgColor: "bg-rose-accent/20",
    textColor: "text-rose-accent",
  },
  {
    name: "Thai Heritage Speaker",
    question: "What do you find helpful in a language tool?",
    content: "Being able to listen to my heritage language daily. Learning by someone who is proficient at the language. ",
    color: "rose-primary",
    bgColor: "bg-rose-primary/20",
    textColor: "text-rose-primary",
  },
  {
    name: "Bahamian Creole Heritage Speaker",
    question: "What motivates you to speak your heritage language?",
    content: "I am motivated by seeing my families' smiles when I understand how important their language is. It is very unique and impactful how it reaches people like a warm embrace. ",
    color: "blue-secondary",
    bgColor: "bg-blue-secondary/20",
    textColor: "text-blue-secondary",
  },
  {
    name: "Jamaican Patois Heritage Speaker",
    question: "What motivates you to speak your heritage language?",
    content: "I have mostly just absorbed from family and community since it is not very popular. There isn't really any other way to learn. ",
    color: "rose-accent",
    bgColor: "bg-rose-accent/20",
    textColor: "text-rose-accent",
  }
];

export default function SurveyResponsesSection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % surveyResponses.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % surveyResponses.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + surveyResponses.length) % surveyResponses.length);
  };

  return (
    <section id="survey-responses" className="py-20 bg-translucent-rose">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-rose-primary mb-4">
            What Heritage Speakers Tell Us
          </h2>

        </motion.div>
        
        <div className="max-w-6xl mx-auto relative">
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
                    className={`w-16 h-16 ${surveyResponses[currentSlide].bgColor} rounded-full flex items-center justify-center`}
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <User className={`${surveyResponses[currentSlide].textColor} h-8 w-8`} />
                  </motion.div>
                  <div className="ml-4">
                    <h4 className={`font-heading font-semibold ${surveyResponses[currentSlide].textColor} text-lg`}>
                      {surveyResponses[currentSlide].name}
                    </h4>
                    <p className="text-text-dark font-body">
                    </p>
                  </div>
                </div>
                
                <motion.p 
                  className="text-base font-heading text-rose-accent mb-2"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.1 }}
                >
                  {surveyResponses[currentSlide].question}
                </motion.p>
                
                <motion.p 
                  className="text-lg font-body text-text-dark italic mb-6 leading-relaxed"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                  "{surveyResponses[currentSlide].content}"
                </motion.p>
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
            {surveyResponses.map((_, index) => (
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
