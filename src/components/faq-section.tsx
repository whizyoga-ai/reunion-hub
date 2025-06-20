'use client';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { HelpCircle } from "lucide-react";
import type { FaqItem } from "@/lib/definitions";

const faqData: FaqItem[] = [
  {
    id: "faq-1",
    question: "What is the dress code for the reunion?",
    answer: "The dress code is smart casual. Feel free to dress comfortably yet stylishly for a day of fun and reconnection!",
  },
  {
    id: "faq-2",
    question: "Can I bring a guest to the reunion?",
    answer: "Due to venue capacity and planning, registrations are primarily for alumni. If you wish to bring a guest, please contact the organizers in advance to check for availability.",
  },
  {
    id: "faq-3",
    question: "Is parking available at the venue?",
    answer: "Limited parking is available at 'Alo Ghar'. We encourage carpooling or using public transport where possible to ease congestion.",
  },
  {
    id: "faq-4",
    question: "What are the COVID-19 safety protocols?",
    answer: "We will be adhering to all local health guidelines and advisories current at the time of the event. We kindly ask that if you are feeling unwell, please stay home to ensure everyone's safety. Hand sanitizers will be available.",
  },
  {
    id: "faq-5",
    question: "Will food and drinks be provided?",
    answer: "Yes! A variety of delicious food and refreshing beverages will be provided throughout the event, from 10 AM to 9 PM. We'll have options to cater to different tastes.",
  },
];

export function FaqSection() {
  return (
    <section id="faq" className="py-16 sm:py-24">
      <div className="container mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <Card className="shadow-xl rounded-lg">
          <CardHeader className="text-center p-8">
            <div className="mx-auto w-fit mb-4 text-primary">
                <HelpCircle size={40} strokeWidth={1.5} />
            </div>
            <CardTitle className="text-3xl font-headline sm:text-4xl">Frequently Asked Questions</CardTitle>
            <CardDescription className="mt-2 text-muted-foreground font-body">
              Find answers to common queries about the reunion.
            </CardDescription>
          </CardHeader>
          <CardContent className="p-8 pt-0">
            <Accordion type="single" collapsible className="w-full">
              {faqData.map((item) => (
                <AccordionItem value={item.id} key={item.id}>
                  <AccordionTrigger className="text-left font-semibold font-body text-lg hover:text-primary transition-colors">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground font-body text-base">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
