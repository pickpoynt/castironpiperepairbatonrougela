import { Shield, ShieldAlert, Zap, Waves, ThumbsUp, Wrench } from "lucide-react";

const reasons = [
  {
    icon: Shield,
    title: "Double the Protection",
    description: "A battery backup adds a vital second layer of defense, ensuring your basement stays dry even if your primary pump fails.",
  },
  {
    icon: Zap,
    title: "Power Outage Ready",
    description: "Most basement flooding occurs during storms when the power goes out. Our backup systems function without AC power.",
  },
  {
    icon: Waves,
    title: "High-Water Alarm",
    description: "Our modern backup systems include built-in audible alarms that notify you the moment your primary pump is struggling.",
  },
  {
    icon: ShieldAlert,
    title: "Prevent Costly Repairs",
    description: "Basement flood cleanup can cost tens of thousands. A backup system is a small investment that prevents massive losses.",
  },
  {
    icon: ThumbsUp,
    title: "Licensed Malvern Plumbers",
    description: "Our team lives and works in Chesco, providing rapid response times and expert knowledge of local drainage challenges.",
  },
  {
    icon: Wrench,
    title: "Premium Equipment",
    description: "We only install professional-grade systems with AGM maintenance-free batteries designed for long-term reliability.",
  },
];

const WhyUs = () => {
  return (
    <section id="about" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="inline-block px-4 py-2 bg-copper/10 rounded-full text-copper text-sm font-semibold mb-4">
              Emergency Preparedness
            </span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-6">
              Malvern's Choice for
              <span className="text-gradient-copper block">Basement Flood Defense</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              In Malvern and the surrounding Main Line areas, heavy rains and aging
              infrastructure can put your basement at risk. We specialize in rugged
              sump pump solutions that work when they're needed most.
            </p>

            <div className="flex items-center gap-8">
              <div className="text-center">
                <span className="text-4xl font-heading font-bold text-copper block">1k+</span>
                <span className="text-sm text-muted-foreground">Pump Installations</span>
              </div>
              <div className="w-px h-16 bg-border" />
              <div className="text-center">
                <span className="text-4xl font-heading font-bold text-copper block">15+</span>
                <span className="text-sm text-muted-foreground">Years Experience</span>
              </div>
              <div className="w-px h-16 bg-border" />
              <div className="text-center">
                <span className="text-4xl font-heading font-bold text-copper block">24/7</span>
                <span className="text-sm text-muted-foreground">Emergency Support</span>
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
