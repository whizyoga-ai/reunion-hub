
'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { UserPlus } from "lucide-react";
import { content } from '@/lib/content';
import { useToast } from "@/hooks/use-toast";

interface RegistrationFormProps {
  lang: 'en' | 'bn';
}

interface RegistrationData {
  id: string;
  name: string;
  mobile: string;
  presentAddress: string;
  permanentAddress: string;
  email: string;
  bloodGroup: string;
  profession: string;
  jobNature: string;
  organization: string;
  maritalStatus: string;
  girlfriends: number;
  wardsOfficial: number;
  wardsUnofficial: number;
  testosterone: string;
  remarks: string;
  submittedAt: string;
}

export function RegistrationForm({ lang }: RegistrationFormProps) {
  const c = content[lang].registrationForm;
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    const formData = new FormData(e.currentTarget);
    
    const registrationData: RegistrationData = {
      id: Date.now().toString(),
      name: formData.get('name') as string,
      mobile: formData.get('mobile') as string,
      presentAddress: formData.get('present-address') as string,
      permanentAddress: formData.get('permanent-address') as string,
      email: formData.get('email') as string,
      bloodGroup: formData.get('blood-group') as string,
      profession: formData.get('profession') as string,
      jobNature: formData.get('job-nature') as string,
      organization: formData.get('organization') as string,
      maritalStatus: formData.get('marital-status') as string,
      girlfriends: parseInt(formData.get('girlfriends') as string) || 0,
      wardsOfficial: parseInt(formData.get('wards-official') as string) || 0,
      wardsUnofficial: parseInt(formData.get('wards-unofficial') as string) || 0,
      testosterone: formData.get('testosterone') as string,
      remarks: formData.get('remarks') as string,
      submittedAt: new Date().toISOString(),
    };

    // Save to localStorage
    const existingRegistrations = JSON.parse(localStorage.getItem('reunionRegistrations') || '[]');
    existingRegistrations.push(registrationData);
    localStorage.setItem('reunionRegistrations', JSON.stringify(existingRegistrations));

    // Show success toast
    toast({
      title: lang === 'bn' ? "রেজিস্ট্রেশন সফল!" : "Registration Successful!",
      description: lang === 'bn' ? 
        "আপনার তথ্য সফলভাবে সংরক্ষিত হয়েছে।" : 
        "Your information has been saved successfully.",
    });

    // Reset form
    e.currentTarget.reset();
  };

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
            <form className="grid grid-cols-1 md:grid-cols-2 gap-6" onSubmit={handleSubmit}>
              <div className="space-y-2">
                <Label htmlFor="name">{c.nameLabel}</Label>
                <Input id="name" name="name" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="mobile">{c.mobileLabel}</Label>
                <Input id="mobile" name="mobile" type="tel" required />
              </div>
              <div className="space-y-2 md:col-span-2">
                <Label htmlFor="present-address">{c.presentAddressLabel}</Label>
                <Textarea id="present-address" name="present-address" />
              </div>
              <div className="space-y-2 md:col-span-2">
                <Label htmlFor="permanent-address">{c.permanentAddressLabel}</Label>
                <Textarea id="permanent-address" name="permanent-address" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">{c.emailLabel}</Label>
                <Input id="email" name="email" type="email" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="blood-group">{c.bloodGroupLabel}</Label>
                <Input id="blood-group" name="blood-group" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="profession">{c.professionLabel}</Label>
                <Input id="profession" name="profession" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="job-nature">{c.jobNatureLabel}</Label>
                <Input id="job-nature" name="job-nature" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="organization">{c.organizationLabel}</Label>
                <Input id="organization" name="organization" />
              </div>
               <div className="space-y-2">
                <Label htmlFor="marital-status">{c.maritalStatusLabel}</Label>
                <Input id="marital-status" name="marital-status" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="girlfriends">{c.girlfriendsLabel}</Label>
                <Input id="girlfriends" name="girlfriends" type="number" min="0" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="wards-official">{c.wardsOfficialLabel}</Label>
                <Input id="wards-official" name="wards-official" type="number" min="0" />
              </div>
               <div className="space-y-2">
                <Label htmlFor="wards-unofficial">{c.wardsUnofficialLabel}</Label>
                <Input id="wards-unofficial" name="wards-unofficial" type="number" min="0" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="testosterone">{c.testosteroneLabel}</Label>
                <Input id="testosterone" name="testosterone" />
              </div>
              <div className="space-y-2 md:col-span-2">
                <Label htmlFor="remarks">{c.remarksLabel}</Label>
                <Textarea id="remarks" name="remarks" />
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
