import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "How do I know if my shower pan is leaking?",
    answer: "Signs include water stains on the ceiling below the shower, soft or spongy shower floor, musty odors, visible mold around the base, or water pooling outside the shower after use."
  },
  {
    question: "Can a shower pan leak be repaired without replacement?",
    answer: "Small cracks can sometimes be patched with epoxy or sealant, but most leaks require full pan replacement to ensure proper waterproofing and prevent future damage."
  },
  {
    question: "How long does shower pan replacement take?",
    answer: "Most replacements take 2-3 days, including removal of old materials, subfloor repair if needed, new pan installation, waterproofing, and tile work."
  },
  {
    question: "Will you repair water damage to my subfloor?",
    answer: "Yes! We assess subfloor damage and make necessary repairs before installing the new shower pan. This ensures a solid, level foundation."
  },
  {
    question: "What type of shower pan is best?",
    answer: "It depends on your shower design. We recommend Schluter-Kerdi systems for tile showers, or quality acrylic/fiberglass pans for prefab units. We'll help you choose."
  },
  {
    question: "Do you offer a warranty on shower pan installation?",
    answer: "Yes, we provide a workmanship warranty on all installations. Manufacturer warranties on materials vary by product but typically range from 5-10 years."
  }
];

const FAQ = () => {
  return (
    <section id="faq" className="py-20 bg-cream">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-navy mb-4">
            Shower Pan FAQ – Lubbock, TX
          </h2>
          <p className="text-steel text-lg max-w-2xl mx-auto">
            Common questions about shower pan leak repair and replacement.
            We help Lubbock homeowners stop water damage before it gets worse.
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
