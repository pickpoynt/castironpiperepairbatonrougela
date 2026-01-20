import { Zap, Truck, BatteryCharging, Home, Settings, Plug } from "lucide-react";

const infoData = [
  {
    icon: BatteryCharging,
    title: "Keep Batteries Healthy",
    description: "Plugging in at home keeps your house batteries fully charged, preventing sulfation and extending their lifespan significantly.",
  },
  {
    icon: Truck,
    title: "Guest House Ready",
    description: "Turn your RV into a comfortable, private guest suite for visiting family and friends, complete with AC, lights, and entertainment.",
  },
  {
    icon: Zap,
    title: "Pre-Trip Cooling",
    description: "Start your fridge and ACs the night before you leave. Load up a cold refrigerator and step into a cool rig on departure day.",
  },
];

const benefitsData = [
  "No more loud generators in the driveway",
  "Run both AC units with 50-amp service",
  "Professional grade, weatherproof pedestals",
  "Safe charging for lithium & AGM batteries",
  "Clean, buried conduit installation",
  "Adds function and value to your home",
];

const RVPedestalInfo = () => {
  return (
    <section id="rv-info" className="py-24 bg-gradient-hero">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-2 bg-copper/20 border border-copper/30 rounded-full text-copper-light text-sm font-semibold mb-4">
            30 Amp & 50 Amp Service
          </span>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary-foreground mb-4">
            Why Install a dedicated RV Hookup?
          </h2>
          <p className="text-primary-foreground/80 text-lg">
            Using a 15-amp dogbone adapter can melt your outlet and ruin your AC compressor.
            Get the dedicated power your modern RV needs to function properly while parked at home.
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
              <Settings className="w-8 h-8 text-copper" />
              <h3 className="text-2xl font-heading font-bold text-foreground">
                Our Installation Package
              </h3>
            </div>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              We start by calculating your load and trenching from your main service panel.
              We install schedule 40/80 PVC conduit, pull THHN copper wire, and set a dedicated breaker.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              The pedestal itself is a high-quality, NEMA 3R weatherproof unit, often with
              extra 120V GFCI outlets for convenience. We verify proper voltage and polarity before we leave.
            </p>
          </div>

          <div className="bg-gradient-to-br from-primary to-primary/80 rounded-2xl p-8 lg:p-10 shadow-xl">
            <h3 className="text-2xl font-heading font-bold text-primary-foreground mb-6">
              The Home Base Advantage
            </h3>
            <ul className="space-y-4">
              {benefitsData.map((benefit, index) => (
                <li key={index} className="flex items-start gap-3">
                  <Home className="w-6 h-6 text-copper flex-shrink-0 mt-0.5" />
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
            <Plug className="w-6 h-6 text-copper" />
            <span className="text-primary-foreground font-medium text-lg">
              Get hookup pricing today. Call (844) 901-2684.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RVPedestalInfo;
