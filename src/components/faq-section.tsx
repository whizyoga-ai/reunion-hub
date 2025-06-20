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
    question: "পুনর্মিলনের জন্য পোশাক বিধি কী?",
    answer: "পোশাক বিধি হলো স্মার্ট ক্যাজুয়াল। আনন্দ এবং পুনর্মিলনের একটি দিনের জন্য আরামে এবং স্টাইলিশভাবে পোশাক পরতে পারেন!",
  },
  {
    id: "faq-2",
    question: "আমি কি পুনর্মিলনীতে অতিথি আনতে পারি?",
    answer: "স্থানের সীমাবদ্ধতা এবং পরিকল্পনার কারণে, নিবন্ধন প্রাথমিকভাবে প্রাক্তন ছাত্রদের জন্য। আপনি যদি অতিথি আনতে চান, অনুগ্রহ করে উপলব্ধতা জানতে আয়োজকদের সাথে আগে থেকে যোগাযোগ করুন।",
  },
  {
    id: "faq-3",
    question: "অনুষ্ঠানস্থলে কি পার্কিংয়ের ব্যবস্থা আছে?",
    answer: "'আলো ঘর'-এ সীমিত পার্কিং উপলব্ধ। যানজট কমাতে আমরা সম্ভব হলে কারপুলিং বা গণপরিবহন ব্যবহারের জন্য উৎসাহিত করি।",
  },
  {
    id: "faq-4",
    question: "কোভিড-১৯ নিরাপত্তা প্রোটোকলগুলি কী কী?",
    answer: "অনুষ্ঠানের সময়কার সমস্ত স্থানীয় স্বাস্থ্য নির্দেশিকা এবং পরামর্শ আমরা মেনে চলব। আমরা বিনীতভাবে অনুরোধ করছি যে আপনি যদি অসুস্থ বোধ করেন, অনুগ্রহ করে সকলের নিরাপত্তা নিশ্চিত করতে বাড়িতে থাকুন। হ্যান্ড স্যানিটাইজার উপলব্ধ থাকবে।",
  },
  {
    id: "faq-5",
    question: "খাবার ও পানীয় কি সরবরাহ করা হবে?",
    answer: "হ্যাঁ! সকাল ১০টা থেকে রাত ৯টা পর্যন্ত অনুষ্ঠান জুড়ে বিভিন্ন ধরনের সুস্বাদু খাবার এবং সতেজ পানীয় সরবরাহ করা হবে। আমাদের বিভিন্ন স্বাদের জন্য বিকল্প থাকবে।",
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
            <CardTitle className="text-3xl font-headline sm:text-4xl">সচরাচর জিজ্ঞাসিত প্রশ্ন</CardTitle>
            <CardDescription className="mt-2 text-muted-foreground font-body">
              পুনর্মিলন সম্পর্কিত সাধারণ প্রশ্নের উত্তর খুঁজুন।
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
