import { Battery, ShieldCheck, Activity, CheckCircle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: Battery,
    title: "Battery Backup Install",
    description: "Installation of high-capacity DC-powered backup pumps that take over automatically when your primary pump fails or the power goes out.",
    features: ["Reliable power source", "Automatic activation", "Dual pump systems"],
  },
  {
    icon: ShieldCheck,
    title: "Primary Pump Upgrade",
    description: "Replacing aging or underpowered main sump pumps with modern, high-efficiency models from industry leaders like Zoeller and Liberty.",
    features: ["Cast-iron construction", "High-flow capacity", "Quiet operation"],
  },
  {
    icon: Activity,
    title: "Sump Health Inspection",
    description: "Detailed diagnostic check of your basin, discharge lines, and check valves to ensure your entire system is ready for heavy rain.",
    features: ["Float switch testing", "Line cleaning", "Check valve audit"],
  },
];

const Services = () => {
  return (
    <section id="services" className="py-24 bg-cream">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block px-4 py-2 bg-copper/10 rounded-full text-copper text-sm font-semibold mb-4">
            Basement Security
          </span>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
            Malvern's Sump Pump & Flood Protection Pros
          </h2>
          <p className="text-muted-foreground text-lg">
            A dry basement starts with a reliable sump pump system. Our experts provide
            heavy-duty backup solutions tailored for Malvern's unique landscape.
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
                {service.title} in Malvern
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
