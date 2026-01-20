import { ShieldCheck, Flame, Zap, ClipboardCheck, Home, HandMetal } from "lucide-react";

const reasons = [
  {
    icon: ShieldCheck,
    title: "Licensed & Insured",
    description: "We are fully licensed Illinois electricians with specific certifications in aluminum wiring remediation methods.",
  },
  {
    icon: Flame,
    title: "Fire Prevention",
    description: "Our COPALUM and AlumiConn methods directly address the oxidation and thermal expansion issues that cause electrical fires.",
  },
  {
    icon: Zap,
    title: "CPSC Approved",
    description: "We strictly follow Consumer Product Safety Commission guidelines. We don't verify 'purple wire nuts' as a permanent solution.",
  },
  {
    icon: ClipboardCheck,
    title: "Detailed Audits",
    description: "We don't guess. We inspect every outlet, switch, and junction box in your home to ensure 100% coverage.",
  },
  {
    icon: Home,
    title: "Minimal Drywall Cut",
    description: "Our remediation techniques often allow us to fix connections at the device boxes, avoiding the need to tear open your walls.",
  },
  {
    icon: HandMetal,
    title: "Copper Pigtailing",
    description: "We give you the safety of copper connections at every device without the massive expense of a full whole-home rewire.",
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
              Naperville's Choice for
              <span className="text-gradient-copper block">Aluminum Remediation</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              Don't let the fear of electrical fire keep you up at night. We provide
              Naperville homeowners with proven, code-compliant solutions to make
              their vintage homes safe and insurable.
            </p>

            <div className="flex items-center gap-8">
              <div className="text-center">
                <span className="text-4xl font-heading font-bold text-copper block">500+</span>
                <span className="text-sm text-muted-foreground">Homes Made Safe</span>
              </div>
              <div className="w-px h-16 bg-border" />
              <div className="text-center">
                <span className="text-4xl font-heading font-bold text-copper block">100%</span>
                <span className="text-sm text-muted-foreground">Pass Inspection</span>
              </div>
              <div className="w-px h-16 bg-border" />
              <div className="text-center">
                <span className="text-4xl font-heading font-bold text-copper block">A+</span>
                <span className="text-sm text-muted-foreground">BBB Rating</span>
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
