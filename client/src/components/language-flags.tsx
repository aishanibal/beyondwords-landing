import { motion } from "framer-motion";

const languages = [
  { flag: "🇨🇳", name: "Chinese" },
  { flag: "🇪🇸", name: "Spanish" },
  { flag: "🇫🇷", name: "French" },
  { flag: "🇩🇪", name: "German" },
  { flag: "🇮🇹", name: "Italian" },
  { flag: "🇯🇵", name: "Japanese" },
  { flag: "🇰🇷", name: "Korean" },
  { flag: "🇷🇺", name: "Russian" },
  { flag: "🇵🇹", name: "Portuguese" },
  { flag: "🇮🇳", name: "Hindi" },
  { flag: "🇸🇦", name: "Arabic" },
  { flag: "🇹🇷", name: "Turkish" },
];

export default function LanguageFlags() {
  return (
    <section className="py-12 bg-white/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-4xl font-heading font-semibold text-rose-primary mb-2">
            Supporting Heritage Languages Worldwide
          </h3>
          
        </motion.div>
        
        <motion.div 
          className="flex flex-wrap justify-center items-center gap-8 box "
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          whileHover={{ y: -12, boxShadow: '0 8px 40px 0 rgba(80,80,120,0.18)' }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          style={{
            boxShadow: '0 0 10px 0 rgb(206, 204, 204)',
            borderRadius: '2rem',
            padding: '1rem',
          }}
        >
          {languages.map((language, index) => (
            <motion.div
              key={language.name}
              className="text-5xl cursor-pointer"
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{ scale: 1.25, rotate: 8, boxShadow: '0 4px 24px 0 rgba(80,80,120,0.18)' }}
              transition={{ 
                duration: 0.3,
                delay: index * 0.1,
                type: "spring",
                stiffness: 200,
                damping: 10
              }}
              viewport={{ once: true }}
              title={language.name}
            >
              {language.flag}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
