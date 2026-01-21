import { AlertTriangle, Shield, Home, Clock, BadgeCheck, Wrench } from "lucide-react";

const reasons = [
  {
    icon: AlertTriangle,
    title: "Prevent Major Damage",
    description: "Shower pan leaks rot subfloors, damage joists, and cause mold. Early repair saves you from $10,000+ structural repairs.",
  },
  {
    icon: Shield,
    title: "Proper Waterproofing",
    description: "We don't just patch—we install professional waterproofing membranes that meet building codes and prevent future leaks.",
  },
  {
    icon: Home,
    title: "Subfloor Expertise",
    description: "We assess and repair water-damaged subfloors before installing new pans, ensuring a solid, level foundation for your shower.",
  },
  {
    icon: Clock,
    title: "Fast Turnaround",
    description: "Most shower pan replacements are completed in 2-3 days, minimizing disruption to your daily routine.",
  },
  {
    icon: BadgeCheck,
    title: "Licensed & Insured",
    description: "All work performed by Texas-licensed plumbers. We pull permits and schedule inspections when required.",
  },
  {
    icon: Wrench,
    title: "Quality Materials",
    description: "We use commercial-grade shower pans from Schluter, Wedi, and other trusted manufacturers with long-term warranties.",
  },
];

const WhyUs = () => {
  return (
    <section id="about" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="inline-block px-4 py-2 bg-copper/10 rounded-full text-copper text-sm font-semibold mb-4">
              Why Act Fast?
            </span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-6">
              Lubbock's Trusted
              <span className="text-gradient-copper block">Shower Leak Experts</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              Shower pan leaks are one of the most damaging plumbing issues. Water seeps through
              the floor, rotting wood and creating mold. The longer you wait, the more expensive
              the repair becomes.
            </p>

            <div className="flex items-center gap-8">
              <div className="text-center">
                <span className="text-4xl font-heading font-bold text-copper block">200+</span>
                <span className="text-sm text-muted-foreground">Pans Replaced</span>
              </div>
              <div className="w-px h-16 bg-border" />
              <div className="text-center">
                <span className="text-4xl font-heading font-bold text-copper block">15+</span>
                <span className="text-sm text-muted-foreground">Years Exp</span>
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
