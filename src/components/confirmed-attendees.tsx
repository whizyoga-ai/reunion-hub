
'use client';

import * as React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';
import { Users, UserPlus } from 'lucide-react';
import { content } from '@/lib/content';

interface ConfirmedAttendeesProps {
  lang: 'en' | 'bn';
}

export function ConfirmedAttendees({ lang }: ConfirmedAttendeesProps) {
  const c = content[lang].confirmedAttendees;
  const [attendees, setAttendees] = React.useState<string[]>(c.names);
  const [newName, setNewName] = React.useState('');
  const { toast } = useToast();

  const handleAddName = () => {
    if (newName.trim()) {
      setAttendees(prev => [...prev, newName.trim()]);
      setNewName('');
      toast({
        title: c.addSuccessToastTitle,
        description: `${newName.trim()} ${c.addSuccessToastDescription}`,
      });
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleAddName();
    }
  }

  return (
    <section id="attendees" className="py-16 sm:py-24">
      <div className="container mx-auto max-w-2xl px-4 sm:px-6 lg:px-8">
        <Card className="shadow-xl rounded-lg">
          <CardHeader className="text-center p-8">
             <div className="mx-auto w-fit mb-4 text-primary">
                <Users size={40} strokeWidth={1.5} />
            </div>
            <CardTitle className="text-3xl font-headline sm:text-4xl">{c.title}</CardTitle>
            <CardDescription className="mt-2 text-muted-foreground font-body">
              {c.description}
            </CardDescription>
          </CardHeader>
          <CardContent className="p-8">
            <ol className="grid grid-cols-2 sm:grid-cols-3 gap-x-8 gap-y-3 list-decimal list-inside font-body text-foreground">
              {attendees.map((name, index) => (
                <li key={index}>{name}</li>
              ))}
            </ol>
          </CardContent>
          <CardFooter className="flex flex-col gap-4 p-8 pt-0">
            <div className="w-full h-px bg-border" />
            <p className="text-sm text-muted-foreground font-body">{c.addMorePrompt}</p>
            <div className="flex w-full max-w-sm items-center space-x-2">
              <Input 
                type="text" 
                placeholder={c.namePlaceholder} 
                value={newName}
                onChange={(e) => setNewName(e.target.value)}
                onKeyPress={handleKeyPress}
                aria-label={c.namePlaceholder}
              />
              <Button type="button" onClick={handleAddName}>
                <UserPlus className="mr-2 h-4 w-4" /> {c.addButton}
              </Button>
            </div>
          </CardFooter>
        </Card>
      </div>
    </section>
  );
}
