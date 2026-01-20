import { ShieldCheck, Ruler, Home, ThumbsUp, Drill, BadgeCheck } from "lucide-react";

const reasons = [
  {
    icon: ShieldCheck,
    title: "Permitted Work",
    description: "We handle all City of Plano permits and inspections, ensuring your new electrical run meets local codes and setbacks.",
  },
  {
    icon: Ruler,
    title: "Perfect Placement",
    description: "We work with you to site the pedestal exactly where your RV's power port is located, minimizing cord strain and trip hazards.",
  },
  {
    icon: Drill,
    title: "Trenching Included",
    description: "We provide complete turnkey service, including trenching and backfilling for the underground conduit run from your house.",
  },
  {
    icon: Home,
    title: "HOA Friendly",
    description: "We install low-profile, aesthetic pedestals and restore your landscaping to keep your HOA happy and your property looking great.",
  },
  {
    icon: ThumbsUp,
    title: "Voltage Drop Calc",
    description: "Long runs? No problem. We calculate the correct wire gauge to prevent power loss, ensuring your ACs run efficiently.",
  },
  {
    icon: BadgeCheck,
    title: "Licensed TECL",
    description: "Work performed by state-licensed master electricians. Don't trust your $200k motorhome to a handyman.",
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
              Plano's Choice for
              <span className="text-gradient-copper block">RV Home Power</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              We are RV owners ourselves. We understand the convenience of being able
              to plug in at home, whether it's for pre-trip cooling, guest stays, or
              just keeping your batteries topped off.
            </p>

            <div className="flex items-center gap-8">
              <div className="text-center">
                <span className="text-4xl font-heading font-bold text-copper block">200+</span>
                <span className="text-sm text-muted-foreground">Pedestals Set</span>
              </div>
              <div className="w-px h-16 bg-border" />
              <div className="text-center">
                <span className="text-4xl font-heading font-bold text-copper block">100%</span>
                <span className="text-sm text-muted-foreground">Code Safe</span>
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
