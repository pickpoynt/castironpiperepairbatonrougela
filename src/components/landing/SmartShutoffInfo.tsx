import { Droplets, Wrench, Clock, Shield, CheckCircle2, Smartphone } from "lucide-react";

const infoData = [
  {
    icon: Droplets,
    title: "Instant Leak Detection",
    description: "The system monitors water flow 24/7. If it detects an unusual flow pattern or a sudden burst, it identifies the leak in real-time.",
  },
  {
    icon: Shield,
    title: "Automated Main Shutoff",
    description: "In the event of a major leak, the valve automatically closes, stopping the water at the source and preventing flood damage.",
  },
  {
    icon: Smartphone,
    title: "Mobile App Integration",
    description: "Receive instant notifications on your phone, track your water usage, and even shut off your water remotely while away.",
  },
];

const benefitsData = [
  "Prevents catastrophic flood and water damage",
  "May lower home insurance premiums",
  "Monitors for small 'pinhole' leaks",
  "Provides real-time water usage data",
  "Easy remote control via smartphone app",
  "Peace of mind while traveling or away",
];

const SmartShutoffInfo = () => {
  return (
    <section id="smart-shutoff-info" className="py-24 bg-gradient-hero">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-2 bg-copper/20 border border-copper/30 rounded-full text-copper-light text-sm font-semibold mb-4">
            Advanced Home Protection
          </span>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary-foreground mb-4">
            Smart Water Protection for Your Round Rock Home
          </h2>
          <p className="text-primary-foreground/80 text-lg">
            Invest in the ultimate defense against one of the most common causes of home
            insurance claims. Our smart water shutoff systems offer proactive protection.
          </p>
        </div>

        {/* Info Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {infoData.map((info, index) => (
            <div
              key={index}
              className="bg-card rounded-xl p-8 shadow-lg border border-border hover:border-copper/30 transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-xl bg-gradient-hero flex items-center justify-center mb-6">
                <info.icon className="w-7 h-7 text-copper" />
              </div>
              <h3 className="text-xl font-heading font-bold text-foreground mb-3">
                {info.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {info.description}
              </p>
            </div>
          ))}
        </div>

        {/* Two Column Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="bg-card rounded-2xl p-8 lg:p-10 shadow-xl border border-border">
            <div className="flex items-center gap-3 mb-6">
              <Shield className="w-8 h-8 text-copper" />
              <h3 className="text-2xl font-heading font-bold text-foreground">
                Expert Installation & Setup
              </h3>
            </div>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Our Round Rock plumbers don't just 'install' the valve. We perform a
              complete system integration, ensuring your smart valve is perfectly
              calibrated to your home's unique plumbing fingerprints.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              From Teravista to Brushy Creek and Mayfield Ranch, we help Round Rock
              homeowners protect their most valuable assets with professional-grade technology.
            </p>
          </div>

          <div className="bg-gradient-to-br from-primary to-primary/80 rounded-2xl p-8 lg:p-10 shadow-xl">
            <h3 className="text-2xl font-heading font-bold text-primary-foreground mb-6">
              Why Upgrade to Smart Protection?
            </h3>
            <ul className="space-y-4">
              {benefitsData.map((benefit, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-copper flex-shrink-0 mt-0.5" />
                  <span className="text-primary-foreground/90 text-lg">
                    {benefit}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-4 bg-primary-foreground/10 backdrop-blur-sm rounded-full px-8 py-4">
            <Smartphone className="w-6 h-6 text-copper" />
            <span className="text-primary-foreground font-medium text-lg">
              Ready to automate your home's water security? Call (877) 792-1410 for a free consultation.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SmartShutoffInfo;
