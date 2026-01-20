import { Battery, Wrench, Clock, Shield, CheckCircle2, Waves } from "lucide-react";

const infoData = [
  {
    icon: Battery,
    title: "High-Capacity Backup",
    description: "Our systems feature heavy-duty batteries capable of pumping thousands of gallons on a single charge during extended outages.",
  },
  {
    icon: Shield,
    title: "Dual Pump Redundancy",
    description: "By installing a secondary pump alongside your primary, you ensure your basement is protected even if the main pump mechanically fails.",
  },
  {
    icon: Waves,
    title: "Smart Monitoring",
    description: "Upgrade options include smart controllers that perform weekly self-tests and send alerts to your phone if issues are detected.",
  },
];

const benefitsData = [
  "Protects finished basements from water damage",
  "Works during severe storms and power outages",
  "Secondary pump handles excess volume during floods",
  "Low maintenance AGM battery technology",
  "Audible alarms for system status updates",
  "Increases home resale value and peace of mind",
];

const SumpPumpInfo = () => {
  return (
    <section id="sump-pump-info" className="py-24 bg-gradient-hero">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-2 bg-copper/20 border border-copper/30 rounded-full text-copper-light text-sm font-semibold mb-4">
            Total Basement Defense
          </span>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary-foreground mb-4">
            Why Malvern Homeowners Trust Our Backup Systems
          </h2>
          <p className="text-primary-foreground/80 text-lg">
            A standard sump pump is only as good as the electricity powering it.
            In Pennsylvania, storm-related outages are common—don't leave your
            basement's safety to chance.
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
              <Wrench className="w-8 h-8 text-copper" />
              <h3 className="text-2xl font-heading font-bold text-foreground">
                Professional Installation Matters
              </h3>
            </div>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Our Malvern plumbing team ensures your backup system is properly piped
              and valved. We don't just 'drop it in'—we optimize the switch levels
              and discharge lines for maximum efficiency.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Serving the entire Malvern area, from Paoli to Frazer and Charlestown,
              we provide the rugged flood protection your home deserves.
            </p>
          </div>

          <div className="bg-gradient-to-br from-primary to-primary/80 rounded-2xl p-8 lg:p-10 shadow-xl">
            <h3 className="text-2xl font-heading font-bold text-primary-foreground mb-6">
              Backup System Benefits
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
            <Shield className="w-6 h-6 text-copper" />
            <span className="text-primary-foreground font-medium text-lg">
              Is your basement ready for the next big storm? Call (877) 792-1410 for a sump pump audit.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SumpPumpInfo;
