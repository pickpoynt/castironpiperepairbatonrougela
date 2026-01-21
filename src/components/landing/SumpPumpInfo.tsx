import { ZapOff, Battery, Waves, CheckCircle, VolumeX, Smartphone } from "lucide-react";

const infoData = [
    {
        icon: ZapOff,
        title: "Power Failures",
        description: "The most common cause of basement flooding is a power outage during a storm. Sump pumps stop working instantly without backup.",
    },
    {
        icon: Battery,
        title: "Battery Maintenance",
        description: "Batteries don't last forever. We install maintenance-free AGM batteries and set up replacement schedules so you're never caught off guard.",
    },
    {
        icon: Waves,
        title: "Volume Management",
        description: "In heavy rains, a single pump might not keep up. A battery backup system often acts as a turbocharger, doubling your pumping capacity.",
    },
];

const benefitsData = [
    "Protects finished basements",
    "Works when power is out",
    "Acts as secondary pump",
    "WiFi alerts and monitoring",
    "Quiet operation",
    "Increases home resale value",
];

const SumpPumpInfo = () => {
    return (
        <section id="sump-pump-info" className="py-24 bg-gradient-hero">
            <div className="container mx-auto px-4">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <span className="inline-block px-4 py-2 bg-copper/20 border border-copper/30 rounded-full text-copper-light text-sm font-semibold mb-4">
                        System Intelligence
                    </span>
                    <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary-foreground mb-4">
                        More Than Just a Battery
                    </h2>
                    <p className="text-primary-foreground/80 text-lg">
                        Modern backup systems are smart. They self-test, monitor battery health, and communicate
                        their status to you. It's sophisticated flood prevention technology.
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
                            <Smartphone className="w-8 h-8 text-copper" />
                            <h3 className="text-2xl font-heading font-bold text-foreground">
                                Smart Home Integration
                            </h3>
                        </div>
                        <p className="text-muted-foreground mb-6 leading-relaxed">
                            Gone are the days of wondering if your pump is working while you're on vacation.
                            Our systems integrate with mobile apps to give you real-time updates on water levels,
                            pump activity, and battery life.
                        </p>
                        <p className="text-muted-foreground leading-relaxed">
                            You'll get a notification the instant the backup system takes over, giving you
                            peace of mind no matter where you are.
                        </p>
                    </div>

                    <div className="bg-gradient-to-br from-primary to-primary/80 rounded-2xl p-8 lg:p-10 shadow-xl">
                        <h3 className="text-2xl font-heading font-bold text-primary-foreground mb-6">
                            Why Homeowners Upgrade
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
                        <VolumeX className="w-6 h-6 text-copper" />
                        <span className="text-primary-foreground font-medium text-lg">
                            Don't wait for the next storm. Call (877) 792-1410 today.
                        </span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SumpPumpInfo;
