import { Button } from "@/components/ui/button";
import { Phone, Shield, Clock, Award } from "lucide-react";
import heroImage from "@/assets/hero-wiring.png";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Electrician inspecting aluminum wiring in a Naperville home"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-overlay" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl">
          <div className="animate-fade-in">
            <span className="inline-block px-4 py-2 bg-copper/20 border border-copper/30 rounded-full text-copper-light text-sm font-medium mb-6">
              Protect Your Home from Hidden Fire Hazards
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-primary-foreground mb-6 animate-fade-in-up leading-tight">
            Aluminum Wiring Replacement in Naperville, IL
            <span className="block text-gradient-copper mt-2">Safe. Reliable. Code-Compliant.</span>
          </h1>

          <p className="text-lg md:text-xl text-primary-foreground/80 mb-8 max-w-2xl animate-fade-in-delay-1">
            Was your home built between 1965 and 1973? You may have dangerous aluminum wiring.
            We provide expert detailed inspections, COPALUM remediation, and full rewiring
            services to ensure your family's safety.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-12 animate-fade-in-delay-2">
            <Button size="lg" className="bg-copper hover:bg-copper-light text-white border-none h-14 px-8 text-lg" asChild>
              <a href="tel:+18449012684" className="flex items-center gap-2">
                <Phone className="w-5 h-5" />
                Call (844) 901-2684
              </a>
            </Button>
          </div>

          {/* Trust Badges */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 animate-fade-in-delay-3">
            <div className="flex items-center gap-3 text-primary-foreground/90">
              <div className="w-12 h-12 rounded-full bg-copper/20 flex items-center justify-center">
                <Shield className="w-6 h-6 text-copper-light" />
              </div>
              <div>
                <span className="font-heading font-semibold block">Licensed & Insured</span>
                <span className="text-sm text-primary-foreground/70">Full coverage</span>
              </div>
            </div>
            <div className="flex items-center gap-3 text-primary-foreground/90">
              <div className="w-12 h-12 rounded-full bg-copper/20 flex items-center justify-center">
                <Clock className="w-6 h-6 text-copper-light" />
              </div>
              <div>
                <span className="font-heading font-semibold block">Same-Day Service</span>
                <span className="text-sm text-primary-foreground/70">Emergency available</span>
              </div>
            </div>
            <div className="flex items-center gap-3 text-primary-foreground/90">
              <div className="w-12 h-12 rounded-full bg-copper/20 flex items-center justify-center">
                <Award className="w-6 h-6 text-copper-light" />
              </div>
              <div>
                <span className="font-heading font-semibold block">25+ Years</span>
                <span className="text-sm text-primary-foreground/70">Local expertise</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
