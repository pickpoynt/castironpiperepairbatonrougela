import { Clock, Shield, Droplets, Wrench, BadgeCheck, DollarSign } from "lucide-react";

const reasons = [
  {
    icon: Clock,
    title: "24/7 Availability",
    description: "Ejector pump failures don't wait for business hours. We offer round-the-clock emergency service to prevent basement flooding.",
  },
  {
    icon: Shield,
    title: "Licensed & Insured",
    description: "All our plumbers are fully licensed in Illinois and carry comprehensive insurance for your protection and peace of mind.",
  },
  {
    icon: Droplets,
    title: "Sewage Expertise",
    description: "We specialize in sewage ejector systems and understand the health risks. We follow strict safety protocols during every repair.",
  },
  {
    icon: Wrench,
    title: "Quality Parts",
    description: "We only install commercial-grade pumps from trusted brands like Zoeller and Liberty, backed by manufacturer warranties.",
  },
  {
    icon: BadgeCheck,
    title: "Code Compliant",
    description: "Every installation meets or exceeds Illinois plumbing codes. We pull permits and schedule inspections when required.",
  },
  {
    icon: DollarSign,
    title: "Upfront Pricing",
    description: "No surprises. We provide clear, written estimates before starting work. You'll know exactly what you're paying.",
  },
];

const WhyUs = () => {
  return (
    <section id="about" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="inline-block px-4 py-2 bg-copper/10 rounded-full text-copper text-sm font-semibold mb-4">
              Why Choose Us?
            </span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-6">
              Schaumburg's Trusted
              <span className="text-gradient-copper block">Pump Repair Pros</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              Basement ejector pumps are critical for homes with below-grade bathrooms, laundry
              rooms, or wet bars. When they fail, you need a plumber who responds fast and fixes it right.
            </p>

            <div className="flex items-center gap-8">
              <div className="text-center">
                <span className="text-4xl font-heading font-bold text-copper block">500+</span>
                <span className="text-sm text-muted-foreground">Pumps Repaired</span>
              </div>
              <div className="w-px h-16 bg-border" />
              <div className="text-center">
                <span className="text-4xl font-heading font-bold text-copper block">24/7</span>
                <span className="text-sm text-muted-foreground">Emergency</span>
              </div>
              <div className="w-px h-16 bg-border" />
              <div className="text-center">
                <span className="text-4xl font-heading font-bold text-copper block">5★</span>
                <span className="text-sm text-muted-foreground">Local Rating</span>
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
