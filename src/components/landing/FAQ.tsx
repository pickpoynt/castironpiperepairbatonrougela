import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What is a smart water shutoff valve?",
    answer: "It's an automated valve installed on your main water line that uses sensors and algorithms to detect unusual water flow. If a leak is detected, it can automatically shut off your water supply and alert you via a smartphone app."
  },
  {
    question: "Do I need a plumber to install it?",
    answer: "Yes. Installation involves cutting into your main water line, which requires a licensed professional to ensure a leak-proof connection and proper calibration of the digital sensors."
  },
  {
    question: "Does it work if the power goes out?",
    answer: "Most high-end smart shutoff valves, like Flo by Moen or Phyn, come with battery backup options or are designed to fail-safe, ensuring your home remains protected even during power outages."
  },
  {
    question: "Can it detect small leaks?",
    answer: "Absolutely. These systems are highly sensitive and can detect 'pinhole' leaks (as small as a drop per minute) that traditional leak detectors might miss, helping you prevent long-term mold and structural damage."
  },
  {
    question: "Will it lower my home insurance?",
    answer: "Many major insurance companies in Round Rock offer discounts or rebates for homeowners who have professionally installed smart water shutoff systems, as they significantly reduce the risk of water damage claims."
  },
  {
    question: "Is it compatible with my smart home?",
    answer: "Most modern smart valves integrate seamlessly with popular platforms like Amazon Alexa, Google Home, and Apple HomeKit, allowing you to monitor your water system alongside your other smart devices."
  }
];

const FAQ = () => {
  return (
    <section id="faq" className="py-20 bg-cream">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-navy mb-4">
            Smart Water Shutoff FAQ – Round Rock, TX
          </h2>
          <p className="text-steel text-lg max-w-2xl mx-auto">
            Find answers to common questions about automated leak detection, smart valve installation, and home water security in Central Texas.
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
