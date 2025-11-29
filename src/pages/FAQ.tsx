import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Layout from "@/components/Layout";

const faqs = [
  {
    category: "General",
    questions: [
      {
        q: "What does MEP stand for?",
        a: "MEP stands for Mechanical, Electrical, and Plumbing. These are the three core building systems that our engineering firm specializes in designing. Mechanical typically includes HVAC (heating, ventilation, and air conditioning), electrical covers power distribution and lighting, and plumbing encompasses water supply and drainage systems.",
      },
      {
        q: "What types of projects do you work on?",
        a: "We work on a wide variety of projects including commercial office buildings, healthcare facilities, industrial plants, educational institutions, residential developments, data centers, and more. Our team has experience with both new construction and renovation projects of all sizes.",
      },
      {
        q: "Do you provide services nationwide?",
        a: "Yes, we provide engineering services throughout the United States. While our main office is located in Tech City, we have licensed engineers in multiple states and can provide services wherever your project is located.",
      },
    ],
  },
  {
    category: "Services",
    questions: [
      {
        q: "What is included in your HVAC design services?",
        a: "Our HVAC design services include load calculations, equipment selection, ductwork and piping layout, control system design, energy modeling, and construction administration. We also provide value engineering and sustainable design options to optimize efficiency and reduce operating costs.",
      },
      {
        q: "Do you offer BIM services?",
        a: "Yes, we utilize Building Information Modeling (BIM) for all our projects. This includes 3D modeling, clash detection, coordination with other trades, and the production of construction documents. BIM helps improve coordination, reduce errors, and streamline the construction process.",
      },
      {
        q: "Can you help with LEED certification?",
        a: "Absolutely. We have LEED-accredited professionals on staff who can help your project achieve various levels of LEED certification. Our services include energy modeling, documentation support, and design strategies to maximize LEED points related to MEP systems.",
      },
    ],
  },
  {
    category: "Process",
    questions: [
      {
        q: "How long does a typical project take?",
        a: "Project timelines vary significantly based on scope and complexity. A small renovation might take 4-6 weeks, while a large new construction project could take 6-12 months or more. During our initial consultation, we'll provide a detailed timeline based on your specific project requirements.",
      },
      {
        q: "What information do you need to get started?",
        a: "To begin, we typically need architectural drawings, project specifications, the building program, and any specific requirements or constraints. For existing buildings, we may also need as-built drawings and information about current systems.",
      },
      {
        q: "Do you provide construction support?",
        a: "Yes, we offer comprehensive construction administration services including submittal review, RFI responses, site visits, and commissioning support. We stay involved throughout construction to ensure our designs are implemented correctly.",
      },
    ],
  },
  {
    category: "Pricing",
    questions: [
      {
        q: "How do you structure your fees?",
        a: "We offer flexible fee structures including hourly rates, fixed fees, and percentage-based fees depending on the project type and client preference. We'll discuss options during our initial consultation and provide a detailed proposal tailored to your project.",
      },
      {
        q: "Do you provide free estimates?",
        a: "Yes, we provide free initial consultations and project estimates. Contact us with your project information, and we'll schedule a meeting to discuss your needs and provide a preliminary fee proposal.",
      },
    ],
  },
];

const FAQ = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <span className="text-primary font-medium">Support</span>
            <h1 className="text-4xl md:text-5xl font-bold mt-2 mb-6 text-card-foreground">
              Frequently Asked Questions
            </h1>
            <p className="text-lg text-muted-foreground">
              Find answers to common questions about our MEP engineering services, process, and what it's like to work with us.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Sections */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          {faqs.map((section) => (
            <div key={section.category} className="mb-12">
              <h2 className="text-2xl font-bold mb-6">{section.category}</h2>
              <Accordion type="single" collapsible className="space-y-4">
                {section.questions.map((faq, index) => (
                  <AccordionItem
                    key={index}
                    value={`${section.category}-${index}`}
                    className="border border-border rounded-lg px-6"
                  >
                    <AccordionTrigger className="text-left hover:no-underline">
                      {faq.q}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      {faq.a}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
            Still Have Questions?
          </h2>
          <p className="text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
            Can't find the answer you're looking for? Our team is here to help.
          </p>
          <Button size="lg" variant="secondary" asChild>
            <Link to="/contact">
              Contact Our Team
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default FAQ;
