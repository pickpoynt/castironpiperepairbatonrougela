import { Shield, Hammer, Droplets, Target, ThumbsUp, Wrench } from "lucide-react";

const reasons = [
  {
    icon: Shield,
    title: "Lifetime Durability",
    description: "Our epoxy-based pipe liners are designed to last 50+ years, resisting corrosion, root intrusion, and chemical damage.",
  },
  {
    icon: Hammer,
    title: "No Digging Required",
    description: "Forget the backhoe. We access your sewer lines through existing cleanouts, keeping your yard, driveway, and floors intact.",
  },
  {
    icon: Droplets,
    title: "Sewer Leak Experts",
    description: "We focus specifically on restoring sewer and drain lines using the latest in trenchless technology and leak detection.",
  },
  {
    icon: Wrench,
    title: "Fast Turnaround",
    description: "Traditional sewer repairs can take weeks. Trenchless relining is often completed in a single day, minimizing disruption.",
  },
  {
    icon: ThumbsUp,
    title: "Huntsville Local Pros",
    description: "Our team serves the Rocket City with pride, bringing unmatched expertise in Alabama's unique soil and drainage conditions.",
  },
  {
    icon: Target,
    title: "Precision Execution",
    description: "Using robotic cutters and precision lining tools, we ensure a perfect fit that restores full flow capacity to your pipes.",
  },
];

const WhyUs = () => {
  return (
    <section id="about" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="inline-block px-4 py-2 bg-copper/10 rounded-full text-copper text-sm font-semibold mb-4">
              Advanced Tech
            </span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-6">
              Huntsville's Choice for
              <span className="text-gradient-copper block">Seamless Pipe Restoration</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              In Huntsville and Madison County, traditional digging can be a nightmare
              for homeowners. We offer a cleaner, faster, and more durable alternative
              that keeps your Rocket City property looking its best.
            </p>

            <div className="flex items-center gap-8">
              <div className="text-center">
                <span className="text-4xl font-heading font-bold text-copper block">5k+</span>
                <span className="text-sm text-muted-foreground">Feet Relined</span>
              </div>
              <div className="w-px h-16 bg-border" />
              <div className="text-center">
                <span className="text-4xl font-heading font-bold text-copper block">10+</span>
                <span className="text-sm text-muted-foreground">Years Experience</span>
              </div>
              <div className="w-px h-16 bg-border" />
              <div className="text-center">
                <span className="text-4xl font-heading font-bold text-copper block">24hr</span>
                <span className="text-sm text-muted-foreground">Typical Finish</span>
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
