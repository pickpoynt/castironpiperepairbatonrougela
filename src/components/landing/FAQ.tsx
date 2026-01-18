import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Do you have to break my balcony tiles to find the leak?",
    answer: "No. We specialize in non-destructive testing. Using infrared sensors and electronic moisture mapping, we can locate leaks behind or under your tiles without any demolition."
  },
  {
    question: "What is the most common cause of balcony leaks?",
    answer: "Most leaks stem from failed balcony drain flashings or degraded waterproofing membranes at the threshold of the balcony doors."
  },
  {
    question: "How long does a leak detection inspection take?",
    answer: "A standard balcony leak inspection typically takes 1 to 2 hours, depending on the size of the area and the complexity of the drainage system."
  },
  {
    question: "Why can't my regular plumber find the leak?",
    answer: "Standard plumbing leak detection tools are designed for pressurized pipes. Balcony leaks are usually gravity-fed 'structural' leaks that require specialized surface-scanning technology."
  },
  {
    question: "Do you provide a report for my HOA or Insurance?",
    answer: "Yes. Every inspection includes a detailed digital report with thermal images and annotated photos that can be used for insurance claims or contractor bids."
  },
  {
    question: "Is water on my ceiling always from the balcony?",
    answer: "Not always, but it's the most likely culprit if it appears after rain. We perform 'flood tests' on the balcony to confirm the source before you commit to repairs."
  }
];

const FAQ = () => {
  return (
    <section id="faq" className="py-20 bg-cream">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-navy mb-4">
            Balcony Leak FAQ – Austin, TX
          </h2>
          <p className="text-steel text-lg max-w-2xl mx-auto">
            Find answers to common questions about balcony drain leaks, infrared detection, and structural waterproofing in Central Texas.
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
