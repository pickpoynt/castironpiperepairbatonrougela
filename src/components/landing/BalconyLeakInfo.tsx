import { AlertTriangle, Droplets, Clock, Shield, CheckCircle2 } from "lucide-react";

const warningSignsData = [
  {
    icon: Droplets,
    title: "Ceiling Stains Below",
    description: "Water spots or peeling paint on the ceiling directly beneath your balcony is a sure sign of a failed drain or membrane.",
  },
  {
    icon: AlertTriangle,
    title: "Cracked Balcony Tiles",
    description: "Hairline cracks in grout or tiles can allow water to seep into the structural subfloor, leading to invisible rot.",
  },
  {
    icon: Clock,
    title: "Musty Odors Indoors",
    description: "If you smell mold near your balcony doors, water may be trapped behind the threshold or inside the wall cavity.",
  },
];

const benefitsData = [
  "Prevents expensive structural wood rot",
  "Identifies leaks without surface demolition",
  "Extends the lifespan of balcony waterproofing",
  "Protects your home from toxic mold growth",
  "Increases property value with certified audits",
  "Peace of mind during Austin's storm season",
];

const BalconyLeakInfo = () => {
  return (
    <section id="leak-info" className="py-24 bg-gradient-hero">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-2 bg-copper/20 border border-copper/30 rounded-full text-copper-light text-sm font-semibold mb-4">
            Structural Protection
          </span>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary-foreground mb-4">
            Protect Your Austin Property from Hidden Water Damage
          </h2>
          <p className="text-primary-foreground/80 text-lg">
            A leaking balcony isn't just a nuisance; it's a structural threat. Our Austin-based
            specialists use high-tech sensors to find leaks before they compromise your safety.
          </p>
        </div>

        {/* Warning Signs */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {warningSignsData.map((sign, index) => (
            <div
              key={index}
              className="bg-card rounded-xl p-8 shadow-lg border border-border hover:border-copper/30 transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-xl bg-gradient-hero flex items-center justify-center mb-6">
                <sign.icon className="w-7 h-7 text-copper" />
              </div>
              <h3 className="text-xl font-heading font-bold text-foreground mb-3">
                {sign.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {sign.description}
              </p>
            </div>
          ))}
        </div>

        {/* Two Column Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="bg-card rounded-2xl p-8 lg:p-10 shadow-xl border border-border">
            <div className="flex items-center gap-3 mb-6">
              <Shield className="w-8 h-8 text-copper" />
              <h3 className="text-2xl font-heading font-bold text-foreground">
                Advanced Infrared Inspection
              </h3>
            </div>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Water has a different thermal signature than dry building materials. Our thermal
              cameras expose exactly where moisture is traveling behind your balcony's
              facade, allowing for targeted repairs instead of full replacements.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              In the Austin area, we serve everything from downtown high-rises to residential
              terraces in West Lake Hills, Tarrytown, and Barton Creek. We understand the
              unique challenges Austin's heat and flash floods pose to waterproofing.
            </p>
          </div>

          <div className="bg-gradient-to-br from-primary to-primary/80 rounded-2xl p-8 lg:p-10 shadow-xl">
            <h3 className="text-2xl font-heading font-bold text-primary-foreground mb-6">
              Benefits of Early Detection
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
            <AlertTriangle className="w-6 h-6 text-copper" />
            <span className="text-primary-foreground font-medium text-lg">
              Notice wood rot or water stains on your patio? Call us for a subsidized diagnostic inspection today.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BalconyLeakInfo;
