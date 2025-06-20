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
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { IcebreakerFormSchema, type IcebreakerFormValues } from '@/lib/definitions';
import { getIcebreakerSuggestion } from '@/app/actions';
import { useToast } from '@/hooks/use-toast';
import { Loader2, Sparkles, Lightbulb } from 'lucide-react';

export function IcebreakerTool() {
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [icebreakerQuestion, setIcebreakerQuestion] = React.useState<string | null>(null);
  const { toast } = useToast();

  const form = useForm<IcebreakerFormValues>({
    resolver: zodResolver(IcebreakerFormSchema),
    defaultValues: {
      name: '',
      phoneNumber: '',
      tShirtSize: undefined,
    },
  });

  async function onSubmit(values: IcebreakerFormValues) {
    setIsSubmitting(true);
    setIcebreakerQuestion(null);
    try {
      const result = await getIcebreakerSuggestion(values);
      if (result.success && result.icebreaker) {
        setIcebreakerQuestion(result.icebreaker.icebreakerQuestion);
        toast({
          title: 'প্রশ্ন তৈরি!',
          description: 'কথাবার্তা শুরু করার জন্য এখানে একটি মজার প্রশ্ন রয়েছে।',
        });
      } else {
        toast({
          title: 'তৈরি করতে ব্যর্থ',
          description: result.message || 'একটি প্রশ্ন তৈরি করা যায়নি।',
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
    <section id="icebreaker" className="py-16 sm:py-24 bg-muted/50">
      <div className="container mx-auto max-w-2xl px-4 sm:px-6 lg:px-8">
        <Card className="shadow-xl rounded-lg">
          <CardHeader className="text-center p-8">
            <div className="mx-auto w-fit mb-4 text-primary">
                <Sparkles size={40} strokeWidth={1.5} />
            </div>
            <CardTitle className="text-3xl font-headline sm:text-4xl">পরিচিতি পর্ব</CardTitle>
            <CardDescription className="mt-2 text-muted-foreground font-body">
              কথাবার্তা শুরু করতে চান? একটি ব্যক্তিগতকৃত প্রশ্ন পেতে কিছু (কাল্পনিক বা আসল) বিবরণ লিখুন!
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
                      <FormLabel>অংশগ্রহণকারীর নাম</FormLabel>
                      <FormControl>
                        <Input placeholder="যেমনঃ আকাশ সেন" {...field} />
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
                      <FormLabel>অংশগ্রহণকারীর ফোন (ঐচ্ছিক)</FormLabel>
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
                      <FormLabel>অংশগ্রহণকারীর টি-শার্ট সাইজ</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="টি-শার্ট সাইজ নির্বাচন করুন" />
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
                <Button type="submit" className="w-full bg-accent hover:bg-accent/90 text-accent-foreground" disabled={isSubmitting}>
                  {isSubmitting ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      তৈরি হচ্ছে...
                    </>
                  ) : (
                    'আলোচনা শুরু করার প্রশ্ন পান'
                  )}
                </Button>
              </form>
            </Form>
          </CardContent>
          {icebreakerQuestion && (
            <CardFooter className="p-8 pt-0">
              <Card className="w-full bg-primary/10 p-6 rounded-md">
                <CardHeader className="p-0 pb-2 flex flex-row items-center gap-2">
                  <Lightbulb className="w-6 h-6 text-primary"/>
                  <CardTitle className="text-xl font-headline text-primary">আপনার জন্য প্রশ্ন:</CardTitle>
                </CardHeader>
                <CardContent className="p-0">
                  <p className="text-lg text-foreground font-body">{icebreakerQuestion}</p>
                </CardContent>
              </Card>
            </CardFooter>
          )}
        </Card>
      </div>
    </section>
  );
}
