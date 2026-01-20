import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Do I need a permit for an RV outlet in Plano?",
    answer: "Yes. Installing a new 30-amp or 50-amp circuit is permitted work. We handle the entire permitting and inspection process with the City of Plano for you."
  },
  {
    question: "Can I just adapt my dryer outlet?",
    answer: "No! Older dryer outlets (3-prong) lack a ground, and newer ones (4-prong) are often far from where you park. Plus, extension cords for 30A+ loads are dangerous long-term."
  },
  {
    question: "What's the difference between 30 amp and 50 amp?",
    answer: "30-amp service (120V) is for smaller trailers with one AC. 50-amp service (240V/120V) provides MUCH more power for large motorhomes with two or three AC units."
  },
  {
    question: "How much does installation cost?",
    answer: "Price depends on the distance from your main breaker panel to the parking spot and the difficulty of trenching. We provide free, firm quotes."
  },
  {
    question: "Can you install it on the side of my house?",
    answer: "Yes, we can mount an RV box on an exterior wall, or install a freestanding pedestal in the yard if you park further away."
  },
  {
    question: "Will this charge my lithium batteries?",
    answer: "Yes. Plugging your RV into a proper 30/50 amp pedestal allows your converter/charger to properly maintain your battery bank, whether lead-acid or lithium."
  }
];

const FAQ = () => {
  return (
    <section id="faq" className="py-20 bg-cream">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-navy mb-4">
            RV Power FAQ – Plano, TX
          </h2>
          <p className="text-steel text-lg max-w-2xl mx-auto">
            Answers to common questions about home RV hookups.
            We help Plano RV owners protect their investment with safe, reliable power.
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
