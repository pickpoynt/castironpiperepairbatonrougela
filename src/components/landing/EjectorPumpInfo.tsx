import { Droplets, AlertTriangle, Wrench, CheckCircle, Home, Shield } from "lucide-react";

const infoData = [
    {
        icon: AlertTriangle,
        title: "Signs of Failure",
        description: "Strange noises, sewage odors, or slow drainage from basement fixtures are warning signs your ejector pump needs attention.",
    },
    {
        icon: Droplets,
        title: "How It Works",
        description: "Ejector pumps grind and pump sewage upward from basement drains to your main sewer line when gravity drainage isn't possible.",
    },
    {
        icon: Wrench,
        title: "Common Issues",
        description: "Float switches stick, impellers clog, motors burn out, and check valves fail. We diagnose and fix all pump problems.",
    },
];

const benefitsData = [
    "Prevent costly basement flooding",
    "Eliminate sewage backup health risks",
    "Restore full use of basement bathrooms",
    "Protect your home's foundation",
    "Maintain property value",
    "Peace of mind with warranty coverage",
];

const EjectorPumpInfo = () => {
    return (
        <section id="pump-info" className="py-24 bg-gradient-hero">
            <div className="container mx-auto px-4">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <span className="inline-block px-4 py-2 bg-copper/20 border border-copper/30 rounded-full text-copper-light text-sm font-semibold mb-4">
                        Basement Pump Systems
                    </span>
                    <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary-foreground mb-4">
                        Understanding Ejector Pumps
                    </h2>
                    <p className="text-primary-foreground/80 text-lg">
                        If you have a basement bathroom, laundry, or bar, you likely have a sewage ejector pump.
                        These critical systems require professional maintenance and repair.
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
                            <Shield className="w-8 h-8 text-copper" />
                            <h3 className="text-2xl font-heading font-bold text-foreground">
                                Professional Service
                            </h3>
                        </div>
                        <p className="text-muted-foreground mb-6 leading-relaxed">
                            Working with sewage requires proper safety equipment, training, and disposal procedures.
                            Our licensed plumbers follow strict protocols to protect your health and home.
                        </p>
                        <p className="text-muted-foreground leading-relaxed">
                            We test pumps under load, inspect discharge piping for clogs, verify check valve operation,
                            and ensure your system meets current plumbing codes.
                        </p>
                    </div>

                    <div className="bg-gradient-to-br from-primary to-primary/80 rounded-2xl p-8 lg:p-10 shadow-xl">
                        <h3 className="text-2xl font-heading font-bold text-primary-foreground mb-6">
                            Why Act Fast
                        </h3>
                        <ul className="space-y-4">
                            {benefitsData.map((benefit, index) => (
                                <li key={index} className="flex items-start gap-3">
                                    <CheckCircle className="w-6 h-6 text-copper flex-shrink-0 mt-0.5" />
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
                            Emergency pump repair. Call (877) 792-1410 now.
                        </span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default EjectorPumpInfo;
