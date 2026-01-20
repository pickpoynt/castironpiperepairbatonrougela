import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Is aluminum wiring illegal in Naperville?",
    answer: "No, it's not illegal to have it, but it is no longer used for new branch circuits. However, insurance companies may require remediation or inspection to renew your policy."
  },
  {
    question: "Why is aluminum wiring dangerous?",
    answer: "Aluminum expands more than copper when heated. This movement loosens connections over time, leading to gaps, arcing, and extreme heat that can melt fixtures or start fires."
  },
  {
    question: "Do I have to rip out all my walls?",
    answer: "Rarely. Our remediation process fixes the connections at the outlets, switches, and junction boxes. A full rewire is an option but often not necessary for safety."
  },
  {
    question: "What is COPALUM crimping?",
    answer: "It's a specialized, high-pressure cold-weld method approved by the CPSC. It permanently bonds copper to aluminum, making the connection as safe as pure copper."
  },
  {
    question: "Can't I just use regular wire nuts?",
    answer: "No! Standard wire nuts are unsafe for aluminum-to-copper connections. Even 'purple' nuts can fail. You need specialized AlumiConn lugs or COPALUM crimps."
  },
  {
    question: "How much does aluminum remediation cost?",
    answer: "It costs significantly less than a full home rewire. We provide per-device pricing after a thorough audit of your home's electrical system."
  }
];

const FAQ = () => {
  return (
    <section id="faq" className="py-20 bg-cream">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-navy mb-4">
            Aluminum Wiring FAQ – Naperville, IL
          </h2>
          <p className="text-steel text-lg max-w-2xl mx-auto">
            Honest answers about your home's electrical safety.
            We help Naperville homeowners satisfy insurance requirements and sleep soundly.
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
