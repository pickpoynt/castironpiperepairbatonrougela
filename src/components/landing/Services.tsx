import { Search, PlugZap, Repeat, CheckCircle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: Search,
    title: "Safety Inspection",
    description: "Thorough visual inspection and voltage drop testing of all receptacles, switches, and panels to identify overheating aluminum connections.",
    features: ["Thermal imaging", "Device check", "Detailed report"],
  },
  {
    icon: PlugZap,
    title: "COPALUM Remediation",
    description: "The gold standard for aluminum wiring repair. We use special high-pressure crimps to permanently bond copper pigtails to your existing aluminum wires.",
    features: ["CPSC recommended", "Permanent fix", "Less invasive"],
  },
  {
    icon: Repeat,
    title: "Complete Rewiring",
    description: "For ultimate peace of mind, we can remove old aluminum cabling and replace it with modern, code-compliant copper NM-B wiring throughout your home.",
    features: ["New copper wire", "Modern grounding", "Resale value"],
  },
];

const Services = () => {
  return (
    <section id="services" className="py-24 bg-cream">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block px-4 py-2 bg-copper/10 rounded-full text-copper text-sm font-semibold mb-4">
            Electrical Safety Experts
          </span>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
            Naperville's Restoration Pros
          </h2>
          <p className="text-muted-foreground text-lg">
            Aluminum wiring expands and contracts differently than copper, leading to
            loose connections and fire risks. We have the specialized tools and training
            to fix it right.
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
                {service.title}
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
