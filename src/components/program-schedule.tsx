
'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Clock, ListChecks } from "lucide-react";
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
          </CardHeader>
          <CardContent className="p-8 pt-0">
            <div className="relative pl-6 before:absolute before:left-6 before:top-0 before:h-full before:w-px before:bg-border">
              {c.schedule.map((item, index) => (
                <div key={index} className="relative flex items-start space-x-6 pb-8">
                   <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                    <Clock className="h-6 w-6 text-primary" />
                  </div>
                  <div className="flex-grow pt-1">
                    <p className="font-semibold text-primary">{item.time}</p>
                    <h3 className="text-xl font-semibold font-headline text-foreground mt-1">{item.title}</h3>
                    <p className="mt-2 text-muted-foreground font-body">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
