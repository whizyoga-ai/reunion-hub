
'use client';

import * as React from 'react';
import { ReunionDetails } from "@/components/reunion-details";
import { ConfirmedAttendees } from "@/components/confirmed-attendees";
import { IcebreakerTool } from "@/components/icebreaker-tool";
import { FaqSection } from "@/components/faq-section";
import { MenuSection } from "@/components/menu-section";
import { ProgramSchedule } from "@/components/program-schedule";
import { Separator } from "@/components/ui/separator";
import Image from 'next/image';
import { content } from '@/lib/content';
import { Button } from '@/components/ui/button';

export default function HomePage() {
  const [lang, setLang] = React.useState<'en' | 'bn'>('bn');

  const toggleLanguage = () => {
    setLang(prevLang => (prevLang === 'en' ? 'bn' : 'en'));
  };

  const c = content[lang];

  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 max-w-screen-2xl items-center justify-between mx-auto px-4 sm:px-6 lg:px-8">
          <a href="#" className="text-2xl font-bold font-headline text-primary">
            {c.nav.title}
          </a>
          <nav className="flex items-center space-x-2 sm:space-x-4">
            <a href="#details" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">{c.nav.details}</a>
            <a href="#program" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">{c.nav.program}</a>
            <a href="#menu" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">{c.nav.menu}</a>
            <a href="#attendees" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">{c.nav.attendees}</a>
            <a href="#icebreaker" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">{c.nav.icebreaker}</a>
            <a href="#faq" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">{c.nav.faq}</a>
            <Button onClick={toggleLanguage} variant="outline" size="sm" className="w-20">
              {c.nav.translate}
            </Button>
          </nav>
        </div>
      </header>

      <main className="flex-grow">
        <section className="relative py-20 md:py-32 bg-gradient-to-br from-primary/10 via-background to-accent/10">
          <div className="absolute inset-0 opacity-50">
             {/* You can add a subtle background pattern or image here if desired */}
          </div>
          <div className="container mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <h1 className="text-5xl font-extrabold font-headline tracking-tight text-primary sm:text-6xl md:text-7xl">
              {c.hero.title}
            </h1>
            <p className="mt-6 max-w-3xl mx-auto text-xl text-foreground font-body">
              {c.hero.subtitle}
            </p>
            <div className="mt-10">
              <Image
                src="/amarendra1.jpg"
                alt={c.hero.imageAlt}
                width={851}
                height={351}
                className="rounded-lg shadow-2xl mx-auto"
                data-ai-hint="school building"
                priority
              />
            </div>
          </div>
        </section>

        <ReunionDetails lang={lang} />
        <Separator className="my-0" />
        <ProgramSchedule lang={lang} />
        <Separator className="my-0" />
        <MenuSection lang={lang} />
        <Separator className="my-0" />
        <ConfirmedAttendees lang={lang} />
        <Separator className="my-0" />
        <IcebreakerTool lang={lang} />
        <Separator className="my-0" />
        <FaqSection lang={lang} />
      </main>

      <footer className="py-8 bg-muted text-muted-foreground">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm font-body">
            {c.footer.copyright}
          </p>
          <p className="text-xs mt-1 font-body">
            {c.footer.closing}
          </p>
        </div>
      </footer>
    </div>
  );
}
