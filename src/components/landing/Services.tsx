import { ShieldCheck, Smartphone, Droplets, CheckCircle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: Droplets,
    title: "Whole-Home Leak Detection",
    description: "Installation of ultrasonic sensors that monitor your entire home's plumbing 24/7, detecting even micro-leaks before they cause damage.",
    features: ["24/7 Monitoring", "Micro-leak detection", "App alerts"],
  },
  {
    icon: ShieldCheck,
    title: "Automated Shutoff Valve",
    description: "Precision installation of smart valves that automatically shut off your main water supply the moment a leak is detected.",
    features: ["Instant response", "Remote control", "Battery backup"],
  },
  {
    icon: Smartphone,
    title: "Smart Home Integration",
    description: "Full setup and calibration of smart plumbing apps on your devices, ensuring seamless connectivity with your home automation system.",
    features: ["System calibration", "App walkthrough", "Connectivity test"],
  },
];

const Services = () => {
  return (
    <section id="services" className="py-24 bg-cream">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block px-4 py-2 bg-copper/10 rounded-full text-copper text-sm font-semibold mb-4">
            Smart Solutions
          </span>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
            Round Rock's Smart Plumbing Specialists
          </h2>
          <p className="text-muted-foreground text-lg">
            Don't let a hidden leak ruin your home. Our expert plumbers provide professional installation of the industry's leading smart water protection systems.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-card rounded-xl p-8 shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <div className="w-16 h-16 rounded-xl bg-gradient-hero flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <service.icon className="w-8 h-8 text-primary-foreground" />
              </div>

              <h3 className="text-xl font-heading font-bold text-foreground mb-3">
                {service.title} in Round Rock
              </h3>

              <p className="text-muted-foreground mb-6">
                {service.description}
              </p>

              <ul className="space-y-2 mb-6">
                {service.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm text-foreground">
                    <CheckCircle className="w-4 h-4 text-copper" />
                    {feature}
                  </li>
                ))}
              </ul>

              <Button variant="ghost" className="group/btn text-copper hover:text-copper p-0">
                Learn More
                <ArrowRight className="w-4 h-4 ml-1 group-hover/btn:translate-x-1 transition-transform" />
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
