import { Zap, Construction, Workflow, Shield, CheckCircle2, Ruler } from "lucide-react";

const infoData = [
  {
    icon: Zap,
    title: "Epoxy Lining Tech",
    description: "We use high-grade epoxy resins that saturate a felt liner, which is then cured inside your pipe to create a smooth, durable, and jointless new sewer line.",
  },
  {
    icon: Construction,
    title: "Zero Landscape Damage",
    description: "Our process requires only small access points, meaning your expensive landscaping, paved driveways, and mature trees remain completely undisturbed.",
  },
  {
    icon: Workflow,
    title: "Structural Restoration",
    description: "Trenchless relining isn't just a patch; it's a structural repair that reinforces the host pipe and can even bridge small gaps and cracks effortlessly.",
  },
];

const benefitsData = [
  "Virtually eliminates future root intrusions",
  "Smoother interior increases flow capacity",
  "Prevents soil erosion around leaking pipes",
  "Significant cost savings over full excavation",
  "Eco-friendly materials and low-impact process",
  "Certified technicians with decades of experience",
];

const TrenchlessInfo = () => {
  return (
    <section id="trenchless-info" className="py-24 bg-gradient-hero">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-2 bg-copper/20 border border-copper/30 rounded-full text-copper-light text-sm font-semibold mb-4">
            Advanced Infrastructure
          </span>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary-foreground mb-4">
            Why Huntsville Relies on Our Trenchless Technology
          </h2>
          <p className="text-primary-foreground/80 text-lg">
            Traditional sewer replacement is a thing of the past. Our trenchless
            solutions provide a smarter, faster, and more economical way to
            restore your underground pipes without digging up your life.
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
              <Ruler className="w-8 h-8 text-copper" />
              <h3 className="text-2xl font-heading font-bold text-foreground">
                The CIPP Relining Process
              </h3>
            </div>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Our Huntsville experts utilize Cured-In-Place Pipe (CIPP) technology.
              We insert an epoxy-saturated tube into the damaged pipe, inflate it
              to match the pipe's diameter, and cure it until it's hard as stone.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Serving the entire Huntsville metro area, from Madison and Harvest
              to Owens Cross Roads, we bring world-class no-dig technology to your doorstep.
            </p>
          </div>

          <div className="bg-gradient-to-br from-primary to-primary/80 rounded-2xl p-8 lg:p-10 shadow-xl">
            <h3 className="text-2xl font-heading font-bold text-primary-foreground mb-6">
              Trenchless Advantages
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
              Save your yard and your sanity. Call (877) 792-1410 for a free trenchless pipe estimate.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrenchlessInfo;
