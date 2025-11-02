
'use client';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { HelpCircle } from "lucide-react";
import { content } from '@/lib/content';

interface FaqSectionProps {
  lang: 'en' | 'bn';
}

export function FaqSection({ lang }: FaqSectionProps) {
  const c = content[lang].faq;
  
  return (
    <section id="faq" className="py-16 sm:py-24">
      <div className="container mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <Card className="shadow-xl rounded-lg">
          <CardHeader className="text-center p-8">
            <div className="mx-auto w-fit mb-4 text-primary">
                <HelpCircle size={40} strokeWidth={1.5} />
            </div>
            <CardTitle className="text-3xl font-headline sm:text-4xl">{c.title}</CardTitle>
            <CardDescription className="mt-2 text-muted-foreground font-body">
              {c.description}
            </CardDescription>
          </CardHeader>
          <CardContent className="p-8 pt-0">
            <Accordion type="single" collapsible className="w-full">
              {c.faqs.map((item) => (
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
