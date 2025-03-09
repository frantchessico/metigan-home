import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export function FaqSection() {
  return (
    <section className="container py-12 md:py-24 lg:py-32">
      <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
        <h3 className="text-center text-sm font-semibold text-gray-500 pb-2">FAQ</h3>
        <h2 className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-5xl">Frequently Asked Questions</h2>
        <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
          Everything you need to know about our email platform
        </p>
      </div>

      <div className="mx-auto max-w-3xl mt-12">
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="border-b border-muted hover:border-primary/30 transition-colors duration-300"
            >
              <AccordionTrigger className="text-left hover:text-primary transition-colors duration-300">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-foreground">{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}

const faqs = [
  {
    question: "How does email scheduling work?",
    answer:
      "Our email scheduling feature allows you to compose emails and set them to be sent at a specific date and time. This is perfect for reaching recipients in different time zones or planning marketing campaigns in advance.",
  },
  {
    question: "Can I track when my emails are opened?",
    answer:
      "Yes! Our platform provides detailed tracking that shows you when your emails are opened, links are clicked, and attachments are downloaded. You'll get real-time notifications and comprehensive analytics.",
  },
  {
    question: "How customizable are the email templates?",
    answer:
      "Our templates are fully customizable. You can modify colors, fonts, layouts, and add your own branding elements. You can also create templates from scratch using our intuitive drag-and-drop editor.",
  },
  {
    question: "Is there a limit to how many emails I can send?",
    answer:
      "Email limits depend on your plan. Basic users can send up to 1,000 emails per month, Standard users up to 10,000, and Premium users have unlimited sending capabilities.",
  },
  {
    question: "How secure is your platform?",
    answer:
      "Security is our top priority. We use end-to-end encryption, two-factor authentication, and regular security audits to ensure your data and communications remain private and protected.",
  },
]

