
import { ReunionDetails } from "@/components/reunion-details";
import { RegistrationForm } from "@/components/registration-form";
import { IcebreakerTool } from "@/components/icebreaker-tool";
import { FaqSection } from "@/components/faq-section";
import { Separator } from "@/components/ui/separator";
import Image from 'next/image';

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 max-w-screen-2xl items-center justify-between mx-auto px-4 sm:px-6 lg:px-8">
          <a href="#" className="text-2xl font-bold font-headline text-primary">
            পুনর্মিলন কেন্দ্র
          </a>
          <nav className="flex items-center space-x-4 sm:space-x-6">
            <a href="#details" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">বিবরণ</a>
            <a href="#register" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">নিবন্ধন</a>
            <a href="#icebreaker" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">পরিচিতি পর্ব</a>
            <a href="#faq" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">প্রশ্নাবলী</a>
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
              স্বাগতম, উত্তরপাড়া অমরেন্দ্র বিদ্যাপীঠের প্রাক্তন ছাত্র-ছাত্রীরা!
            </h1>
            <p className="mt-6 max-w-3xl mx-auto text-xl text-foreground font-body">
              ১৯৮৮ মাধ্যমিক ও ১৯৯০ উচ্চ মাধ্যমিক ব্যাচের বন্ধুদের সাথে আবার আয়, আড্ডা দি। চল্, আমাদের এই স্কুল পুনর্মিলনীতে পুরনো স্মৃতিগুলো ঝালিয়ে নিই আর নতুন কিছু স্মৃতি তৈরি করি।
            </p>
            <div className="mt-10">
              <Image
                src="https://placehold.co/851x351.png"
                alt="উত্তরপাড়া অমরেন্দ্র বিদ্যাপীঠ স্কুল ভবন"
                width={851}
                height={351}
                className="rounded-lg shadow-2xl mx-auto"
                data-ai-hint="school building"
                priority
              />
            </div>
          </div>
        </section>

        <ReunionDetails />
        <Separator className="my-0" />
        <RegistrationForm />
        <Separator className="my-0" />
        <IcebreakerTool />
        <Separator className="my-0" />
        <FaqSection />
      </main>

      <footer className="py-8 bg-muted text-muted-foreground">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm font-body">
            &copy; {new Date().getFullYear()} পুনর্মিলন কেন্দ্র। সর্বস্বত্ব সংরক্ষিত।
          </p>
          <p className="text-xs mt-1 font-body">
            তোমাদের সাথে উদযাপন করার জন্য উন্মুখ!
          </p>
        </div>
      </footer>
    </div>
  );
}
