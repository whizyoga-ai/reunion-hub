
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, CalendarDays, Clock, PartyPopper } from "lucide-react";

export function ReunionDetails() {
  const reunion = {
    name: "উত্তরপাড়া অমরেন্দ্র বিদ্যাপীঠ - মহা পুনর্মিলন (১৯৮৮ মাধ্যমিক ও ১৯৯০ উচ্চ মাধ্যমিক)",
    date: "শনিবার, ৬ই ডিসেম্বর, ২০২৫",
    time: "সকাল ১০:০০ - রাত ৯:০০",
    venue: "'আলো ঘর', উত্তরপাড়া, পশ্চিমবঙ্গ, ভারত",
  };

  return (
    <section id="details" className="py-16 sm:py-24 bg-muted/50">
      <div className="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <Card className="shadow-xl overflow-hidden rounded-lg">
          <CardHeader className="bg-primary text-primary-foreground p-8 text-center">
            <div className="mx-auto w-fit mb-4 text-accent">
              <PartyPopper size={48} strokeWidth={1.5} />
            </div>
            <CardTitle className="text-4xl font-headline tracking-tight sm:text-5xl">
              আসলে কেউ বড় হয় না
            </CardTitle>
            <CardDescription className="mt-4 text-lg leading-6 text-primary-foreground/90 font-body">
              {reunion.name}
            </CardDescription>
          </CardHeader>
          <CardContent className="p-8 space-y-6">
            <div className="flex items-start space-x-4">
              <CalendarDays className="h-8 w-8 text-primary mt-1 flex-shrink-0" aria-hidden="true" />
              <div>
                <h3 className="text-xl font-semibold font-headline text-foreground">তারিখ</h3>
                <p className="text-muted-foreground font-body">{reunion.date}</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <Clock className="h-8 w-8 text-primary mt-1 flex-shrink-0" aria-hidden="true" />
              <div>
                <h3 className="text-xl font-semibold font-headline text-foreground">সময়</h3>
                <p className="text-muted-foreground font-body">{reunion.time}</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <MapPin className="h-8 w-8 text-primary mt-1 flex-shrink-0" aria-hidden="true" />
              <div>
                <h3 className="text-xl font-semibold font-headline text-foreground">স্থান</h3>
                <p className="text-muted-foreground font-body">{reunion.venue}</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
