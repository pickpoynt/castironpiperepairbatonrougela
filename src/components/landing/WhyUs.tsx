import { Shield, Droplets, DollarSign, Smartphone, ThumbsUp, Wrench } from "lucide-react";

const reasons = [
  {
    icon: Shield,
    title: "Prevent Water Damage",
    description: "Avoid the devastating costs of water damage with a system that shuts off the water before a minor leak becomes a catastrophe.",
  },
  {
    icon: DollarSign,
    title: "Insurance Discounts",
    description: "Many insurance providers offer premium discounts for homes equipped with professionally installed smart water shutoff valves.",
  },
  {
    icon: Smartphone,
    title: "Total Remote Control",
    description: "Turn your water on or off from anywhere in the world using your smartphone, perfect for when you're traveling or away.",
  },
  {
    icon: Droplets,
    title: "Water Usage Insights",
    description: "Monitor your home's water consumption in real-time, identifying high-usage fixtures and helping you save on your monthly bill.",
  },
  {
    icon: ThumbsUp,
    title: "Licensed Master Plumbers",
    description: "Our Round Rock plumbing team is factory-trained to install and configure all major smart plumbing brands correctly.",
  },
  {
    icon: Wrench,
    title: "Whole-Home Protection",
    description: "One single valve protects your entire house, including pipes behind walls, appliances, and fixtures in every room.",
  },
];

const WhyUs = () => {
  return (
    <section id="about" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="inline-block px-4 py-2 bg-copper/10 rounded-full text-copper text-sm font-semibold mb-4">
              Advanced Protection
            </span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-6">
              Round Rock's Leader in
              <span className="text-gradient-copper block">Smart Water Security</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              In a modern home, plumbing should be as smart as your thermostat. We specialize
              in bringing cutting-edge leak detection and automated shutoff technology to
              homes across the Round Rock area, providing unparalleled peace of mind.
            </p>

            <div className="flex items-center gap-8">
              <div className="text-center">
                <span className="text-4xl font-heading font-bold text-copper block">500+</span>
                <span className="text-sm text-muted-foreground">Systems Installed</span>
              </div>
              <div className="w-px h-16 bg-border" />
              <div className="text-center">
                <span className="text-4xl font-heading font-bold text-copper block">12+</span>
                <span className="text-sm text-muted-foreground">Years Experience</span>
              </div>
              <div className="w-px h-16 bg-border" />
              <div className="text-center">
                <span className="text-4xl font-heading font-bold text-copper block">100%</span>
                <span className="text-sm text-muted-foreground">Damage Prevented</span>
              </div>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            {reasons.map((reason, index) => (
              <div
                key={index}
                className="p-6 rounded-xl bg-card border border-border hover:border-copper/30 hover:shadow-md transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-lg bg-copper/10 flex items-center justify-center mb-4">
                  <reason.icon className="w-6 h-6 text-copper" />
                </div>
                <h3 className="font-heading font-semibold text-foreground mb-2">
                  {reason.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {reason.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
