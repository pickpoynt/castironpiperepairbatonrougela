import { Wrench, Zap, Workflow, CheckCircle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: Workflow,
    title: "Sewer Pipe Relining",
    description: "Our CIPP (Cured-In-Place Pipe) lining creates a brand new, seamless pipe inside your old one, sealing cracks and preventing root intrusion.",
    features: ["50-year life span", "Zero excavation", "Seamless finish"],
  },
  {
    icon: Zap,
    title: "Hydro Jetting Service",
    description: "High-pressure water cleaning to clear out years of scale, debris, and roots, preparing your pipes for a perfect relining bond.",
    features: ["Total line clearing", "Industrial pressure", "Eco-friendly"],
  },
  {
    icon: Wrench,
    title: "Video Pipe Inspection",
    description: "HD camera diagnostics to pinpoint the exact location and nature of your pipe issues before we begin the precision relining process.",
    features: ["Real-time footage", "Precise locating", "Before & after proof"],
  },
];

const Services = () => {
  return (
    <section id="services" className="py-24 bg-cream">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block px-4 py-2 bg-copper/10 rounded-full text-copper text-sm font-semibold mb-4">
            Modern Solutions
          </span>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
            Huntsville's Trenchless Repair Specialists
          </h2>
          <p className="text-muted-foreground text-lg">
            Say goodbye to trenches and hello to the future of plumbing. We provide
            non-invasive pipe restoration for residential and commercial Huntsville properties.
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
                {service.title} in Huntsville
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
