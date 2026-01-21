import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "How long will the battery last during a power outage?",
    answer: "It depends on how often the pump cycles. Our high-capacity AGM batteries typically provide 2-3 days of protection during moderate to heavy usage."
  },
  {
    question: "Does the backup system replace my existing pump?",
    answer: "No, it works alongside it. The backup sits slightly higher in the pit and only activates if the primary pump fails or the power goes out. It's a redundant safety net."
  },
  {
    question: "Do I need a new sump pit?",
    answer: "Usually, no. Most standard sump pits have enough room for both a primary and a backup pump. If not, we can make adjustments to fit the system."
  },
  {
    question: "How do I know if the backup is working?",
    answer: "Our systems run weekly self-tests and will alert you via an alarm or phone notification if any issue is detected, such as a low battery or blocked discharge."
  },
  {
    question: "What maintenance does the system require?",
    answer: "Very little. We use maintenance-free batteries that don't need water. We recommend a professional inspection once a year to ensure peak performance."
  },
  {
    question: "Is it worth the investment?",
    answer: "Compared to the $20,000+ cost of repairing a finished basement after a flood, a backup system is a small price to pay for guaranteed peace of mind."
  }
];

const FAQ = () => {
  return (
    <section id="faq" className="py-20 bg-cream">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-navy mb-4">
            Backup System FAQ
          </h2>
          <p className="text-steel text-lg max-w-2xl mx-auto">
            Answers to common questions about keeping your Fort Wayne basement dry.
            We make flood protection simple and reliable.
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
