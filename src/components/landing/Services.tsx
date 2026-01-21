import { BatteryCharging, Activity, Zap, CheckCircle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: BatteryCharging,
    title: "Backup System Install",
    description: "Installation of specialized deep-cycle AGM or maintenance-free batteries paired with DC backup pumps. We size the system to handle your basement's specific water volume.",
    features: ["Smart charging controllers", "Dual-pump configuration", "Automatic switching"],
  },
  {
    icon: Activity,
    title: "Discharge & Check Valve",
    description: "Ensuring your backup pump has a dedicated or properly integrated discharge line with silent check valves to prevent backflow and cycling.",
    features: ["Separate discharge lines", "Silent check valves", "Freeze guard protection"],
  },
  {
    icon: Zap,
    title: "System Stress Testing",
    description: "We don't just plug it in. We simulate power outages and flood conditions to ensure your backup kicks on instantly and pumps effectively.",
    features: ["Load testing", "Alarm verification", "Cycle timing"],
  },
];

const Services = () => {
  return (
    <section id="services" className="py-24 bg-cream">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block px-4 py-2 bg-copper/10 rounded-full text-copper text-sm font-semibold mb-4">
            Total Basement Security
          </span>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
            Reliable Backup Solutions
          </h2>
          <p className="text-muted-foreground text-lg">
            A primary sump pump is only as good as its power source. Our backup
            systems provide the redundancy every Fort Wayne homeowner needs.
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
