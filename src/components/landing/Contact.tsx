import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-cream">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16">
          <div>
            <span className="inline-block px-4 py-2 bg-copper/10 rounded-full text-copper text-sm font-semibold mb-4">
              Get In Touch
            </span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-6">
              Get Your Hookup Quote
              <span className="text-gradient-copper block">Start Installing Next Week</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              Ready to power up at home? Contact Plano's RV electrical specialists
              today to schedule your free site assessment and quote.
            </p>

            <div className="space-y-6">
              <a
                href="tel:+18449012684"
                className="flex items-center gap-4 p-4 rounded-xl bg-card border border-border hover:border-copper/30 hover:shadow-md transition-all duration-300 group"
              >
                <div className="w-14 h-14 rounded-xl bg-gradient-hero flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Phone className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <span className="text-sm text-muted-foreground block">Call Us Now</span>
                  <span className="font-heading font-bold text-xl text-foreground">(844) 901-2684</span>
                </div>
              </a>

              <a
                href="mailto:install@plano-rv-power.com"
                className="flex items-center gap-4 p-4 rounded-xl bg-card border border-border hover:border-copper/30 hover:shadow-md transition-all duration-300 group"
              >
                <div className="w-14 h-14 rounded-xl bg-gradient-hero flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Mail className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <span className="text-sm text-muted-foreground block">Email Us</span>
                  <span className="font-heading font-bold text-foreground">install@plano-rv-power.com</span>
                </div>
              </a>

              <div className="flex items-center gap-4 p-4 rounded-xl bg-card border border-border">
                <div className="w-14 h-14 rounded-xl bg-copper/10 flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-copper" />
                </div>
                <div>
                  <span className="text-sm text-muted-foreground block">Service Area</span>
                  <span className="font-heading font-semibold text-foreground">Plano, Frisco, Allen & Collin County</span>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 rounded-xl bg-card border border-border">
                <div className="w-14 h-14 rounded-xl bg-copper/10 flex items-center justify-center">
                  <Clock className="w-6 h-6 text-copper" />
                </div>
                <div>
                  <span className="text-sm text-muted-foreground block">Business Hours</span>
                  <span className="font-heading font-semibold text-foreground">Mon-Fri: 7:00 AM - 6:00 PM | Weekend Appts</span>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-card rounded-2xl p-8 shadow-lg border border-border">
            <h3 className="text-2xl font-heading font-bold text-foreground mb-6">
              Request Site Visit
            </h3>
            <form className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="firstName" className="text-sm font-medium text-foreground block mb-2">
                    First Name
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-copper/50 focus:border-copper transition-all"
                    placeholder="John"
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="text-sm font-medium text-foreground block mb-2">
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-copper/50 focus:border-copper transition-all"
                    placeholder="Doe"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="phone" className="text-sm font-medium text-foreground block mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-copper/50 focus:border-copper transition-all"
                  placeholder="(844) 901-2684"
                />
              </div>

              <div>
                <label htmlFor="email" className="text-sm font-medium text-foreground block mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-copper/50 focus:border-copper transition-all"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="text-sm font-medium text-foreground block mb-2">
                  RV Type (30 or 50 Amp?)
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-copper/50 focus:border-copper transition-all resize-none"
                  placeholder="I have a 40ft Diesel Pusher that needs 50 amps..."
                />
              </div>

              <Button variant="copper" size="xl" className="w-full">
                Request Callback
              </Button>

              <p className="text-xs text-muted-foreground text-center">
                By submitting, you agree to receive calls/texts about your project. No spam, ever.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
