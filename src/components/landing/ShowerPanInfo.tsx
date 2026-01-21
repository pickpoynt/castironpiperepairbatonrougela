import { Droplets, AlertTriangle, Wrench, CheckCircle, Home, Shield } from "lucide-react";

const infoData = [
    {
        icon: AlertTriangle,
        title: "Signs of a Leak",
        description: "Water stains on ceiling below, soft/spongy shower floor, musty odors, or visible mold around the shower base are all warning signs.",
    },
    {
        icon: Droplets,
        title: "Common Causes",
        description: "Cracked shower pans, failed caulk joints, improper slope, damaged drain assemblies, and missing waterproofing membranes.",
    },
    {
        icon: Wrench,
        title: "Repair vs Replace",
        description: "Minor cracks can sometimes be patched, but most shower pan leaks require complete replacement to ensure long-term waterproofing.",
    },
];

const benefitsData = [
    "Stop ongoing water damage",
    "Prevent mold and mildew growth",
    "Protect structural integrity",
    "Increase home value",
    "Eliminate musty odors",
    "Peace of mind with warranty",
];

const ShowerPanInfo = () => {
    return (
        <section id="shower-pan-info" className="py-24 bg-gradient-hero">
            <div className="container mx-auto px-4">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <span className="inline-block px-4 py-2 bg-copper/20 border border-copper/30 rounded-full text-copper-light text-sm font-semibold mb-4">
                        Critical Home Repair
                    </span>
                    <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary-foreground mb-4">
                        Understanding Shower Pan Leaks
                    </h2>
                    <p className="text-primary-foreground/80 text-lg">
                        A shower pan (or shower base) is the waterproof barrier beneath your shower floor.
                        When it fails, water leaks into the subfloor, causing rot, mold, and expensive structural damage.
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
                                Professional Installation
                            </h3>
                        </div>
                        <p className="text-muted-foreground mb-6 leading-relaxed">
                            Proper shower pan installation requires expertise. We ensure correct slope (1/4" per foot),
                            proper drain assembly, and complete waterproofing membrane coverage.
                        </p>
                        <p className="text-muted-foreground leading-relaxed">
                            We use modern systems like Schluter-Kerdi, Wedi, or traditional hot-mop applications,
                            depending on your shower design and budget.
                        </p>
                    </div>

                    <div className="bg-gradient-to-br from-primary to-primary/80 rounded-2xl p-8 lg:p-10 shadow-xl">
                        <h3 className="text-2xl font-heading font-bold text-primary-foreground mb-6">
                            Why Repair Now
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
                            Stop the leak. Call (877) 792-1410 for expert repair.
                        </span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ShowerPanInfo;
