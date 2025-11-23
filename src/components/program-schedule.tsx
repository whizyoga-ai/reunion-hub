
'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Clock, ListChecks } from "lucide-react";
import Image from 'next/image';
import { content } from '@/lib/content';

interface ProgramScheduleProps {
  lang: 'en' | 'bn';
}

export function ProgramSchedule({ lang }: ProgramScheduleProps) {
  const c = content[lang].programSchedule;

  return (
    <section id="program" className="py-16 sm:py-24">
      <div className="container mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <Card className="shadow-xl rounded-lg">
          <CardHeader className="text-center p-8">
            <div className="mx-auto w-fit mb-4 text-primary">
              <ListChecks size={40} strokeWidth={1.5} />
            </div>
            <CardTitle className="text-3xl font-headline sm:text-4xl">{c.title}</CardTitle>
            <CardDescription className="mt-2 text-muted-foreground font-body">
              {c.description}
            </CardDescription>
            <div className="mt-6 p-4 bg-red-50 border-2 border-red-300 rounded-lg">
              <div className="flex items-center justify-center space-x-2 mb-2">
                <span className="text-xl">🍷</span>
                <h4 className="text-base font-bold text-red-800">
                  {lang === 'en' ? 'IMPORTANT POLICY' : 'গুরুত্বপূর্ণ নীতি'}
                </h4>
                <span className="text-xl">🍷</span>
              </div>
              <p className="text-red-800 font-bold text-center">
                {lang === 'en' ? '**Alcohol will not be opened before 6PM**' : '**সন্ধ্যা ৬টার আগে মদ পরিবেশন করা হবে না**'}
              </p>
            </div>
          </CardHeader>
          <CardContent className="p-8 pt-0">
            <div className="relative pl-6 before:absolute before:left-6 before:top-0 before:h-full before:w-px before:bg-border">
              {c.schedule.map((item, index) => {
                const isFood = item.title.toLowerCase().includes('lunch') || 
                              item.title.toLowerCase().includes('breakfast') || 
                              item.title.toLowerCase().includes('dinner') ||
                              item.title.toLowerCase().includes('মধ্যাহ্নভোজ') ||
                              item.title.toLowerCase().includes('প্রাতঃরাশ') ||
                              item.title.toLowerCase().includes('রাতের খাবার');
                
                return (
                <div key={index} className="relative flex items-start space-x-6 pb-8">
                   <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                    {isFood ? (
                      <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-orange-300">
                        <Image 
                          src="/reunion-hub/images/pradip-dey.jpg" 
                          alt="Menu by Pradip" 
                          width={48}
                          height={48}
                          className="object-cover w-full h-full"
                          unoptimized
                        />
                      </div>
                    ) : (
                      <Clock className="h-6 w-6 text-primary" />
                    )}
                  </div>
                  <div className="flex-grow pt-1">
                    <p className="font-semibold text-primary">{item.time}</p>
                    <h3 className="text-xl font-semibold font-headline text-foreground mt-1">{item.title}</h3>
                    <p className="mt-2 text-muted-foreground font-body">{item.description}</p>
                  </div>
                </div>
                );
              })}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
