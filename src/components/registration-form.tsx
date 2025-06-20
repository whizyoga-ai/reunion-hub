'use client';

import * as React from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { RegistrationFormSchema, type RegistrationFormValues } from '@/lib/definitions';
import { handleRegistration } from '@/app/actions';
import { useToast } from '@/hooks/use-toast';
import { Loader2, Users } from 'lucide-react';

export function RegistrationForm() {
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const { toast } = useToast();

  const form = useForm<RegistrationFormValues>({
    resolver: zodResolver(RegistrationFormSchema),
    defaultValues: {
      name: '',
      phoneNumber: '',
      tShirtSize: undefined,
    },
  });

  async function onSubmit(values: RegistrationFormValues) {
    setIsSubmitting(true);
    try {
      const result = await handleRegistration(values);
      if (result.success) {
        toast({
          title: 'নিবন্ধন সফল!',
          description: result.message,
        });
        form.reset();
      } else {
        toast({
          title: 'নিবন্ধন ব্যর্থ',
          description: result.message || 'একটি অপ্রত্যাশিত ত্রুটি ঘটেছে।',
          variant: 'destructive',
        });
      }
    } catch (error) {
      toast({
        title: 'ত্রুটি',
        description: 'কিছু একটা সমস্যা হয়েছে। অনুগ্রহ করে আবার চেষ্টা করুন।',
        variant: 'destructive',
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <section id="register" className="py-16 sm:py-24">
      <div className="container mx-auto max-w-2xl px-4 sm:px-6 lg:px-8">
        <Card className="shadow-xl rounded-lg">
          <CardHeader className="text-center p-8">
             <div className="mx-auto w-fit mb-4 text-primary">
                <Users size={40} strokeWidth={1.5} />
            </div>
            <CardTitle className="text-3xl font-headline sm:text-4xl">পুনর্মিলনের জন্য নিবন্ধন করুন</CardTitle>
            <CardDescription className="mt-2 text-muted-foreground font-body">
              আপনার স্থান নিশ্চিত করুন এবং আপনার টি-শার্টের সাইজ জানান!
            </CardDescription>
          </CardHeader>
          <CardContent className="p-8">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>সম্পূর্ণ নাম</FormLabel>
                      <FormControl>
                        <Input placeholder="যেমনঃ রাজীব আহমেদ" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="phoneNumber"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>ফোন নম্বর</FormLabel>
                      <FormControl>
                        <Input type="tel" placeholder="যেমনঃ +৮৮০১২৩৪৫৬৭৮৯০" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="tShirtSize"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>টি-শার্ট সাইজ</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="আপনার টি-শার্ট সাইজ নির্বাচন করুন" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {["XS", "S", "M", "L", "XL", "XXL"].map((size) => (
                            <SelectItem key={size} value={size}>
                              {size}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground" disabled={isSubmitting}>
                  {isSubmitting ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      জমা দেওয়া হচ্ছে...
                    </>
                  ) : (
                    'এখনই নিবন্ধন করুন'
                  )}
                </Button>
              </form>
            </Form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
