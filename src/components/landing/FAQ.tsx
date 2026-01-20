import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What exactly is trenchless pipe relining?",
    answer: "Trenchless pipe relining is a method of repairing damaged sewer or drain pipes without digging a trench. We pull an epoxy-saturated sleeve through the existing pipe and cure it in place, creating a new, structural pipe inside the old one."
  },
  {
    question: "How long does a relined pipe last?",
    answer: "Our trenchless pipe linings are engineered for longevity and typically have a life expectancy of 50 years or more. They are resistant to corrosion, root intrusion, and chemical wear."
  },
  {
    question: "Will the new liner reduce the capacity of my pipe?",
    answer: "While the liner slightly reduces the diameter of the pipe, its smooth, seamless surface actually improves flow capacity by reducing friction and eliminating joints where debris typically catches."
  },
  {
    question: "Can any pipe be relined?",
    answer: "Most types of pipes including PVC, cast iron, clay, and concrete can be relined. However, if the pipe has completely collapsed or is severely misaligned, traditional replacement might be necessary."
  },
  {
    question: "Is trenchless repair more expensive than traditional digging?",
    answer: "While the technology itself can be more expensive, the total cost is often lower because it eliminates the need for expensive landscape restoration, driveway repairs, and interior floor replacement."
  },
  {
    question: "How long does the process take?",
    answer: "Most residential trenchless relining projects in Huntsville can be completed in a single day, often within 4 to 8 hours, minimizing the time your water service is offline."
  }
];

const FAQ = () => {
  return (
    <section id="faq" className="py-20 bg-cream">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-navy mb-4">
            Trenchless Pipe Repair FAQ – Huntsville, AL
          </h2>
          <p className="text-steel text-lg max-w-2xl mx-auto">
            Get expert answers to common questions about no-dig sewer repair, CIPP lining, and modern plumbing technology in the Rocket City.
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
