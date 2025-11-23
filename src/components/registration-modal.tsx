'use client';

import * as React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { UserPlus, GraduationCap } from 'lucide-react';
import { content } from '@/lib/content';

interface RegistrationModalProps {
  lang: 'en' | 'bn';
}

export function RegistrationModal({ lang }: RegistrationModalProps) {
  const c = content[lang].registrationForm;
  const [isOpen, setIsOpen] = React.useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Registration submitted');
    setIsOpen(false);
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button size="lg" className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-8 py-3 text-lg font-semibold shadow-xl">
          <UserPlus className="mr-2 h-5 w-5" />
          {c.submitButton}
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[600px] max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2 text-2xl text-primary">
            <GraduationCap className="h-6 w-6" />
            {c.title}
          </DialogTitle>
          <DialogDescription className="text-muted-foreground">
            {c.description}
          </DialogDescription>
        </DialogHeader>
        
        <form onSubmit={handleSubmit} className="space-y-4 mt-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="name">{c.nameLabel}</Label>
              <Input id="name" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="mobile">{c.mobileLabel}</Label>
              <Input id="mobile" type="tel" />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">{c.emailLabel}</Label>
            <Input id="email" type="email" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="presentAddress">{c.presentAddressLabel}</Label>
              <Textarea id="presentAddress" className="min-h-[80px]" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="permanentAddress">{c.permanentAddressLabel}</Label>
              <Textarea id="permanentAddress" className="min-h-[80px]" />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="bloodGroup">{c.bloodGroupLabel}</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select..." />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="a+">A+</SelectItem>
                  <SelectItem value="a-">A-</SelectItem>
                  <SelectItem value="b+">B+</SelectItem>
                  <SelectItem value="b-">B-</SelectItem>
                  <SelectItem value="ab+">AB+</SelectItem>
                  <SelectItem value="ab-">AB-</SelectItem>
                  <SelectItem value="o+">O+</SelectItem>
                  <SelectItem value="o-">O-</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="profession">{c.professionLabel}</Label>
              <Input id="profession" />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="jobNature">{c.jobNatureLabel}</Label>
              <Input id="jobNature" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="organization">{c.organizationLabel}</Label>
              <Input id="organization" />
            </div>
          </div>

          <div className="space-y-2">
            <Label>{c.maritalStatusLabel}</Label>
            <RadioGroup defaultValue="single" className="flex gap-4">
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="single" id="single" />
                <Label htmlFor="single">{lang === 'en' ? 'Single' : 'অবিবাহিত'}</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="married" id="married" />
                <Label htmlFor="married">{lang === 'en' ? 'Married' : 'বিবাহিত'}</Label>
              </div>
            </RadioGroup>
          </div>

          {/* Fun Fields */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4 bg-muted/50 rounded-lg">
            <div className="space-y-2">
              <Label htmlFor="girlfriends" className="text-sm text-muted-foreground">{c.girlfriendsLabel}</Label>
              <Input id="girlfriends" type="number" min="0" placeholder="0" className="text-center" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="wardsOfficial" className="text-sm text-muted-foreground">{c.wardsOfficialLabel}</Label>
              <Input id="wardsOfficial" type="number" min="0" placeholder="0" className="text-center" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="wardsUnofficial" className="text-sm text-muted-foreground">{c.wardsUnofficialLabel}</Label>
              <Input id="wardsUnofficial" type="number" min="0" placeholder="0" className="text-center" />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="testosterone" className="text-sm text-muted-foreground">{c.testosteroneLabel}</Label>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Select level..." />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="low">Low</SelectItem>
                <SelectItem value="normal">Normal</SelectItem>
                <SelectItem value="high">High</SelectItem>
                <SelectItem value="very-high">Very High</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="remarks">{c.remarksLabel}</Label>
            <Textarea id="remarks" placeholder={lang === 'en' ? 'Any special message or memory...' : 'কোন বিশেষ বার্তা বা স্মৃতি...'} />
          </div>

          <div className="flex gap-3 pt-4">
            <Button type="submit" className="flex-1 bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700">
              {c.submitButton}
            </Button>
            <Button type="button" variant="outline" onClick={() => setIsOpen(false)}>
              {lang === 'en' ? 'Cancel' : 'বাতিল'}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}