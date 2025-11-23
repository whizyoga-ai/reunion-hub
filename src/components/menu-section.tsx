
'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Utensils } from "lucide-react";
import Image from 'next/image';
import { content } from '@/lib/content';

interface MenuSectionProps {
  lang: 'en' | 'bn';
}

const MenuCategory = ({ title, items }: { title: string, items: string[] }) => (
    <div>
      <h3 className="text-xl font-semibold font-headline text-primary mb-3 mt-4 text-center tracking-wider border-b-2 border-primary/20 pb-2">
        {title}
      </h3>
      <ul className="space-y-1 font-body text-muted-foreground list-disc list-inside text-center">
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
);


export function MenuSection({ lang }: MenuSectionProps) {
  const c = content[lang].menuSection;

  return (
    <section id="menu" className="py-16 sm:py-24 bg-muted/50 relative">
      <div className="absolute inset-0 opacity-15">
        <Image 
          src="/reunion-hub/images/pradip-dey.jpg" 
          alt="Menu Scientist" 
          fill
          className="object-cover grayscale sepia-[0.3]"
          unoptimized
        />
      </div>
      <div className="container mx-auto max-w-2xl px-4 sm:px-6 lg:px-8 relative z-10">
        <Card className="shadow-xl rounded-lg bg-white/90 backdrop-blur-md">
          <CardHeader className="text-center p-8">
            <div className="mx-auto w-fit mb-4 text-primary">
              <Utensils size={40} strokeWidth={1.5} />
            </div>
            <CardTitle className="text-3xl font-headline sm:text-4xl">{c.title}</CardTitle>
            <CardDescription className="mt-2 text-muted-foreground font-body">
              {c.description}
            </CardDescription>
          </CardHeader>
          <CardContent className="p-8 pt-0">
             <div className="space-y-6">
                <MenuCategory title={c.breakfast.title} items={c.breakfast.items} />
                <MenuCategory title={c.lunch.title} items={c.lunch.items} />
                <MenuCategory title={c.evening.title} items={c.evening.items} />
                <MenuCategory title={c.dinner.title} items={c.dinner.items} />
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
