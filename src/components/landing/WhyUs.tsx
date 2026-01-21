import { Umbrella, Wifi, ShieldAlert, BadgeCheck, Timer, PlugZap } from "lucide-react";

const reasons = [
  {
    icon: Umbrella,
    title: "Dry During Storms",
    description: "Fort Wayne storms can be severe. Our systems keep working even when trees take down power lines, preventing thousands in water damage.",
  },
  {
    icon: Wifi,
    title: "Remote Monitoring",
    description: "Many of our systems come with WiFi capabilities, sending alerts to your phone if the backup pump activates or the battery is low.",
  },
  {
    icon: ShieldAlert,
    title: "Double Protection",
    description: "A backup isn't just for power outages. It also kicks in if your primary pump suffers a mechanical failure or gets overwhelmed by volume.",
  },
  {
    icon: Timer,
    title: "Long-Run Times",
    description: "We use high-capacity batteries rated for days of intermittent pumping, not just hours. You're covered for extended outages.",
  },
  {
    icon: BadgeCheck,
    title: "Licensed Installation",
    description: "Improper wiring can start fires or damage equipment. Our technicians are licensed and follow all local electrical codes.",
  },
  {
    icon: PlugZap,
    title: "Automatic Testing",
    description: "Our premium systems run weekly self-tests to ensure pumps move freely and batteries are holding a proper charge.",
  },
];

const WhyUs = () => {
  return (
    <section id="about" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="inline-block px-4 py-2 bg-copper/10 rounded-full text-copper text-sm font-semibold mb-4">
              It Happens Fast
            </span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-6">
              Why Install a
              <span className="text-gradient-copper block">Battery Backup?</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              A flooded basement isn't just a mess—it destroys furnaces, water heaters,
              storage, and finished living spaces. Relying on a single, AC-powered pump
              is a gamble you shouldn't take in Indiana.
            </p>

            <div className="flex items-center gap-8">
              <div className="text-center">
                <span className="text-4xl font-heading font-bold text-copper block">0</span>
                <span className="text-sm text-muted-foreground">Wet Basements</span>
              </div>
              <div className="w-px h-16 bg-border" />
              <div className="text-center">
                <span className="text-4xl font-heading font-bold text-copper block">24/7</span>
                <span className="text-sm text-muted-foreground">Peace of Mind</span>
              </div>
              <div className="w-px h-16 bg-border" />
              <div className="text-center">
                <span className="text-4xl font-heading font-bold text-copper block">5yr</span>
                <span className="text-sm text-muted-foreground">Warranty</span>
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
