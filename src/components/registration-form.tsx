
'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { UserPlus } from "lucide-react";
import { content } from '@/lib/content';

interface RegistrationFormProps {
  lang: 'en' | 'bn';
}

export function RegistrationForm({ lang }: RegistrationFormProps) {
  const c = content[lang].registrationForm;

  return (
    <section id="register" className="py-16 sm:py-24 bg-muted/50">
      <div className="container mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <Card className="shadow-xl rounded-lg">
          <CardHeader className="text-center p-8">
            <div className="mx-auto w-fit mb-4 text-primary">
              <UserPlus size={40} strokeWidth={1.5} />
            </div>
            <CardTitle className="text-3xl font-headline sm:text-4xl">{c.title}</CardTitle>
            <CardDescription className="mt-2 text-muted-foreground font-body">
              {c.description}
            </CardDescription>
          </CardHeader>
          <CardContent className="p-8 pt-0">
            <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="name">{c.nameLabel}</Label>
                <Input id="name" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="mobile">{c.mobileLabel}</Label>
                <Input id="mobile" type="tel" />
              </div>
              <div className="space-y-2 md:col-span-2">
                <Label htmlFor="present-address">{c.presentAddressLabel}</Label>
                <Textarea id="present-address" />
              </div>
              <div className="space-y-2 md:col-span-2">
                <Label htmlFor="permanent-address">{c.permanentAddressLabel}</Label>
                <Textarea id="permanent-address" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">{c.emailLabel}</Label>
                <Input id="email" type="email" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="blood-group">{c.bloodGroupLabel}</Label>
                <Input id="blood-group" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="profession">{c.professionLabel}</Label>
                <Input id="profession" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="job-nature">{c.jobNatureLabel}</Label>
                <Input id="job-nature" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="organization">{c.organizationLabel}</Label>
                <Input id="organization" />
              </div>
               <div className="space-y-2">
                <Label htmlFor="marital-status">{c.maritalStatusLabel}</Label>
                <Input id="marital-status" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="girlfriends">{c.girlfriendsLabel}</Label>
                <Input id="girlfriends" type="number" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="wards-official">{c.wardsOfficialLabel}</Label>
                <Input id="wards-official" type="number" />
              </div>
               <div className="space-y-2">
                <Label htmlFor="wards-unofficial">{c.wardsUnofficialLabel}</Label>
                <Input id="wards-unofficial" type="number" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="testosterone">{c.testosteroneLabel}</Label>
                <Input id="testosterone" />
              </div>
              <div className="space-y-2 md:col-span-2">
                <Label htmlFor="remarks">{c.remarksLabel}</Label>
                <Textarea id="remarks" />
              </div>
              <div className="md:col-span-2 text-center">
                <Button type="submit" size="lg">{c.submitButton}</Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
