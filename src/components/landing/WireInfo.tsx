import { AlertTriangle, Home, FileText, CheckCircle, Flame, Search } from "lucide-react";

const infoData = [
  {
    icon: Flame,
    title: "The Fire Risk",
    description: "Aluminum wiring expands when heated and contracts when cooled. Over time, this loosens connections, causing arcing, sparking, and potentially house fires.",
  },
  {
    icon: Search,
    title: "Signs of Trouble",
    description: "Flickering lights, warm switch plates, buzzing sounds from outlets, or the smell of burning plastic are all immediate warning signs.",
  },
  {
    icon: CheckCircle,
    title: "The Solution",
    description: "You don't always need a full rewire. Our CPSC-approved pigtailing method permanently bonds copper to aluminum, eliminating the fire hazard.",
  },
];

const benefitsData = [
  "Restores home safety & peace of mind",
  "Meets all insurance company requirements",
  "Fully permitted and inspected work",
  "Increases property value for resale",
  "Preventative maintenance saves thousands",
  "Lifetime warranty on all crimp connections",
];

const WireInfo = () => {
  return (
    <section id="wire-info" className="py-24 bg-gradient-hero">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-2 bg-copper/20 border border-copper/30 rounded-full text-copper-light text-sm font-semibold mb-4">
            Mid-Century Home Specialists
          </span>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary-foreground mb-4">
            Understanding the Aluminum Wiring Issue
          </h2>
          <p className="text-primary-foreground/80 text-lg">
            Built between 1965 and 1973? Your Naperville home likely has aluminum branch wiring.
            While the wire itself isn't the problem, the connection points are.
            We fix the connections so you can keep the wire.
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
              <FileText className="w-8 h-8 text-copper" />
              <h3 className="text-2xl font-heading font-bold text-foreground">
                Our Remediation Process
              </h3>
            </div>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              We start with a comprehensive audit of every electrical point in your house.
              Using the specialized AlumiConn or COPALUM crimping tools, we refurbish each connection.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Serving Naperville, Lisle, Downers Grove, and Wheaton, we have successfully
              mitigated hundreds of homes, satisfying both homeowner concerns and insurance demands.
            </p>
          </div>

          <div className="bg-gradient-to-br from-primary to-primary/80 rounded-2xl p-8 lg:p-10 shadow-xl">
            <h3 className="text-2xl font-heading font-bold text-primary-foreground mb-6">
              Why You Should Act Now
            </h3>
            <ul className="space-y-4">
              {benefitsData.map((benefit, index) => (
                <li key={index} className="flex items-start gap-3">
                  <AlertTriangle className="w-6 h-6 text-copper flex-shrink-0 mt-0.5" />
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
            <Home className="w-6 h-6 text-copper" />
            <span className="text-primary-foreground font-medium text-lg">
              Schedule your safety inspection today at (844) 901-2684.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WireInfo;
