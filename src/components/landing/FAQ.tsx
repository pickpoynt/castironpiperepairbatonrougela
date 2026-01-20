import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "How long does a sump pump battery last?",
    answer: "A fully charged high-quality battery can typically run a backup pump for 5-7 hours of continuous pumping, or up to several days if the pump only cycles occasionally during a power outage."
  },
  {
    question: "Do I need a battery backup if I have a generator?",
    answer: "Yes. Generators can take time to start or fail to engage. A battery backup provides instant protection the moment power is lost, acting as a critical bridge until your generator takes over."
  },
  {
    question: "Can I install a battery backup on my existing pump?",
    answer: "In most cases, yes. We can install a secondary backup pump in the same basin as your current primary pump, provided there is enough physical space for the secondary unit and float switch."
  },
  {
    question: "How often should I test my backup system?",
    answer: "We recommend testing your backup system every 3-4 months by pouring water into the basin to ensure the backup pump engages and discharge lines are clear."
  },
  {
    question: "What is an AGM battery?",
    answer: "Absorbent Glass Mat (AGM) batteries are maintenance-free, leak-proof, and designed to sit for long periods while maintaining a charge, making them ideal for emergency sump pump applications."
  },
  {
    question: "Do you offer emergency sump pump service in Malvern?",
    answer: "Yes! Malvern Basement Protection provides priority emergency service for sump pump failures throughout Malvern, Paoli, and the surrounding Main Line communities."
  }
];

const FAQ = () => {
  return (
    <section id="faq" className="py-20 bg-cream">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-navy mb-4">
            Sump Pump & Backup FAQ – Malvern, PA
          </h2>
          <p className="text-steel text-lg max-w-2xl mx-auto">
            Get professional answers to common questions about basement flood protection, battery backup systems, and emergency plumbing in Chester County.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-white rounded-lg border border-steel/20 px-6 shadow-sm"
              >
                <AccordionTrigger className="text-left text-navy font-semibold hover:text-copper hover:no-underline py-5">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-steel leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        <div className="text-center mt-12">
          <p className="text-steel mb-4">Still have questions?</p>
          <a
            href="tel:+18777921410"
            className="text-copper font-semibold hover:text-copper-dark transition-colors text-lg"
          >
            Call us at (877) 792-1410
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
