import { useEffect } from "react";
import Navigation from "@/components/navigation";
import HeroSection from "@/components/hero-section";
import LanguageFlags from "@/components/language-flags";
import FeaturesSection from "@/components/features-section";
import TestimonialsSection from "@/components/testimonials-section";
import WaitlistSection from "@/components/waitlist-section";
import Footer from "@/components/footer";
import FloatingContact from "@/components/floating-contact";

export default function LandingPage() {
  useEffect(() => {
    document.title = "BeyondWords - AI-Powered Content Platform for Heritage Speakers";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Transform your ideas into compelling, human-like content with BeyondWords AI platform. Designed for heritage speakers and diaspora communities worldwide.');
    } else {
      const meta = document.createElement('meta');
      meta.name = "description";
      meta.content = "Transform your ideas into compelling, human-like content with BeyondWords AI platform. Designed for heritage speakers and diaspora communities worldwide.";
      document.head.appendChild(meta);
    }
  }, []);

  return (
    <div className="min-h-screen bg-cream">
      <Navigation />
      <HeroSection />
      <LanguageFlags />
      <FeaturesSection />
      <TestimonialsSection />
      <WaitlistSection />
      <Footer />
      <FloatingContact />
    </div>
  );
}
