import { motion } from "framer-motion";
import { 
  Languages, 
  Users, 
  Edit, 
  Globe, 
  TrendingUp, 
  Shield 
} from "lucide-react";

const features = [
  {
    icon: Languages,
    title: "Cultural Context AI",
    description: "AI that understands cultural nuances and heritage language patterns to create authentic, meaningful content.",
    color: "rose-primary",
    bgColor: "bg-rose-primary/20",
    textColor: "text-rose-primary",
  },
  {
    icon: Users,
    title: "Community Connection",
    description: "Connect with fellow heritage speakers and share your cultural stories within a supportive community.",
    color: "blue-secondary",
    bgColor: "bg-blue-secondary/20",
    textColor: "text-blue-secondary",
  },
  {
    icon: Edit,
    title: "Smart Content Editor",
    description: "Advanced editing tools that help you refine and perfect your content while maintaining authenticity.",
    color: "rose-accent",
    bgColor: "bg-rose-accent/20",
    textColor: "text-rose-accent",
  },
  {
    icon: Globe,
    title: "Multi-Language Support",
    description: "Create content in multiple languages while preserving cultural authenticity and linguistic accuracy.",
    color: "rose-primary",
    bgColor: "bg-rose-primary/20",
    textColor: "text-rose-primary",
  },
  {
    icon: TrendingUp,
    title: "Analytics & Insights",
    description: "Track your content performance and gain insights into how your cultural stories resonate with audiences.",
    color: "blue-secondary",
    bgColor: "bg-blue-secondary/20",
    textColor: "text-blue-secondary",
  },
  {
    icon: Shield,
    title: "Privacy & Security",
    description: "Your cultural stories are precious. We ensure they're protected with enterprise-grade security measures.",
    color: "rose-accent",
    bgColor: "bg-rose-accent/20",
    textColor: "text-rose-accent",
  },
];

export default function FeaturesSection() {
  return (
    <section id="features" className="py-20 bg-translucent-blue">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-rose-primary mb-4">
            Powerful Features for Every Creator
          </h2>
          <p className="text-xl font-body text-text-dark max-w-3xl mx-auto">
            Discover how BeyondWords empowers heritage speakers and diaspora communities to create meaningful content
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <motion.div
                key={feature.title}
                className="hover-lift bg-white/80 backdrop-blur-sm rounded-xl p-8 border border-rose-accent/20 cursor-pointer"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ 
                  duration: 0.6, 
                  delay: index * 0.1,
                  ease: "easeOut"
                }}
                whileHover={{ 
                  y: -10,
                  transition: { duration: 0.3 }
                }}
                viewport={{ once: true }}
              >
                <motion.div 
                  className={`w-16 h-16 ${feature.bgColor} rounded-xl flex items-center justify-center mb-6`}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.3 }}
                >
                  <IconComponent className={`${feature.textColor} h-8 w-8`} />
                </motion.div>
                
                <h3 className={`text-xl font-heading font-semibold ${feature.textColor} mb-4`}>
                  {feature.title}
                </h3>
                
                <p className="text-text-dark font-body leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
