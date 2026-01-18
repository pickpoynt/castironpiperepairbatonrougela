import { Search, Shield, DollarSign, Clock, ThumbsUp, Hammer } from "lucide-react";

const reasons = [
  {
    icon: Search,
    title: "Non-Invasive Technology",
    description: "We use infrared and ultrasonic tools to find leaks without tearing up your balcony tiles or decking.",
  },
  {
    icon: Shield,
    title: "Prevent Structural Failure",
    description: "Balcony leaks often lead to wood rot and steel corrosion. We stop the damage before it's too late.",
  },
  {
    icon: DollarSign,
    title: "Precise Repair Mapping",
    description: "We don't just find the leak; we mark the exact area requiring repair, saving you thousands in unnecessary reconstruction.",
  },
  {
    icon: Clock,
    title: "Prompt Local Service",
    description: "Serving the entire Austin metro area with fast response times for multi-family and residential properties.",
  },
  {
    icon: ThumbsUp,
    title: "Expert Documentation",
    description: "We provide detailed photographic reports of our findings for insurance claims or structural engineers.",
  },
  {
    icon: Hammer,
    title: "Holistic Solutions",
    description: "We don't just patch; we identify the root cause, whether it's poor drainage, failed flashing, or membrane issues.",
  },
];

const WhyUs = () => {
  return (
    <section id="about" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="inline-block px-4 py-2 bg-copper/10 rounded-full text-copper text-sm font-semibold mb-4">
              Why Choose Us
            </span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-6">
              Austin's Premier
              <span className="text-gradient-copper block">Balcony Leak Specialists</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              We specialize exclusively in high-complexity leak detection. While general plumbers
              deal with pipes, we focus on the intersection of plumbing, waterproofing,
              and structural integrity to save your balcony or terrace from water damage.
            </p>

            <div className="flex items-center gap-8">
              <div className="text-center">
                <span className="text-4xl font-heading font-bold text-copper block">500+</span>
                <span className="text-sm text-muted-foreground">Balconies Inspected</span>
              </div>
              <div className="w-px h-16 bg-border" />
              <div className="text-center">
                <span className="text-4xl font-heading font-bold text-copper block">12+</span>
                <span className="text-sm text-muted-foreground">Years Experience</span>
              </div>
              <div className="w-px h-16 bg-border" />
              <div className="text-center">
                <span className="text-4xl font-heading font-bold text-copper block">99%</span>
                <span className="text-sm text-muted-foreground">Accuracy Rate</span>
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
