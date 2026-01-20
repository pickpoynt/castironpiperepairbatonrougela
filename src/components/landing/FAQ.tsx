import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "How do I know if my ejector pump is failing?",
    answer: "Warning signs include sewage odors, gurgling sounds from basement drains, slow drainage, visible sewage in the basin, or the pump running constantly without shutting off."
  },
  {
    question: "Can I use my basement bathroom while the pump is broken?",
    answer: "No! Using basement fixtures with a failed ejector pump will cause sewage to overflow the basin and flood your basement. Call us immediately for emergency service."
  },
  {
    question: "How long does an ejector pump last?",
    answer: "Quality pumps like Zoeller and Liberty typically last 7-10 years with proper maintenance. Cheaper pumps may fail in 3-5 years."
  },
  {
    question: "Do you offer emergency service?",
    answer: "Yes, we provide 24/7 emergency ejector pump repair in Schaumburg and surrounding areas. Sewage backups can't wait until Monday morning."
  },
  {
    question: "How much does ejector pump replacement cost?",
    answer: "Costs vary based on pump size, basin condition, and piping needs. We provide upfront estimates. Most replacements range from $800-$2,500 installed."
  },
  {
    question: "Is this covered by homeowners insurance?",
    answer: "Sudden failures may be covered, but gradual wear and lack of maintenance typically aren't. Check your policy and call us for documentation if needed."
  }
];

const FAQ = () => {
  return (
    <section id="faq" className="py-20 bg-cream">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-navy mb-4">
            Ejector Pump FAQ – Schaumburg, IL
          </h2>
          <p className="text-steel text-lg max-w-2xl mx-auto">
            Common questions about basement sewage pump repair and replacement.
            We help Schaumburg homeowners protect their basements from flooding.
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
