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
          title: 'Icebreaker Generated!',
          description: 'Here is a fun question to get conversations started.',
        });
      } else {
        toast({
          title: 'Generation Failed',
          description: result.message || 'Could not generate an icebreaker.',
          variant: 'destructive',
        });
      }
    } catch (error) {
      toast({
        title: 'Error',
        description: 'Something went wrong. Please try again.',
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
            <CardTitle className="text-3xl font-headline sm:text-4xl">Icebreaker Corner</CardTitle>
            <CardDescription className="mt-2 text-muted-foreground font-body">
              Need a conversation starter? Enter some (dummy or real) details to get a personalized icebreaker!
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
                      <FormLabel>Attendee's Name</FormLabel>
                      <FormControl>
                        <Input placeholder="e.g. Alex Smith" {...field} />
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
                      <FormLabel>Attendee's Phone (Optional)</FormLabel>
                      <FormControl>
                        <Input type="tel" placeholder="e.g. +15551234" {...field} />
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
                      <FormLabel>Attendee's T-Shirt Size</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select T-shirt size" />
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
                      Generating...
                    </>
                  ) : (
                    'Get Icebreaker Idea'
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
                  <CardTitle className="text-xl font-headline text-primary">Your Icebreaker:</CardTitle>
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
