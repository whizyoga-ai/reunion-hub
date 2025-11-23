
'use client';

import * as React from 'react';
import { ReunionDetails } from "@/components/reunion-details";
import { ConfirmedAttendees } from "@/components/confirmed-attendees";
import { IcebreakerTool } from "@/components/icebreaker-tool";
import { FaqSection } from "@/components/faq-section";
import { MenuSection } from "@/components/menu-section";
import { ProgramSchedule } from "@/components/program-schedule";
import { Separator } from "@/components/ui/separator";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Image from 'next/image';
import { content } from '@/lib/content';
import { Button } from '@/components/ui/button';
import { RegistrationModal } from '@/components/registration-modal';
import { Chatbox } from '@/components/chatbox';
import { GraduationCap, MapPin, Calendar, Clock, Users, Utensils, Music, Heart, Star } from 'lucide-react';

export default function HomePage() {
  const [lang, setLang] = React.useState<'en' | 'bn'>('bn');

  const toggleLanguage = () => {
    setLang(prevLang => (prevLang === 'en' ? 'bn' : 'en'));
  };

  const c = content[lang];

  const highlights = [
    {
      icon: Calendar,
      title: lang === 'en' ? 'Date' : 'তারিখ',
      value: lang === 'en' ? 'Dec 6, 2025' : '৬ ডিসেম্বর ২০২৫',
      color: 'text-blue-600'
    },
    {
      icon: Clock,
      title: lang === 'en' ? 'Time' : 'সময়',
      value: lang === 'en' ? '9 AM - 9 PM' : '৯টা - ৯টা',
      color: 'text-green-600'
    },
    {
      icon: MapPin,
      title: lang === 'en' ? 'Venue' : 'স্থান',
      value: lang === 'en' ? 'Bhorer Alo Hall' : 'ভোরের আলো হল',
      color: 'text-red-600'
    },
    {
      icon: Users,
      title: lang === 'en' ? 'Confirmed' : 'নিশ্চিত',
      value: '25+',
      color: 'text-purple-600'
    }
  ];

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      {/* Enhanced Header */}
      <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/80 shadow-sm">
        <div className="container flex h-20 max-w-screen-2xl items-center justify-between mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center">
              <GraduationCap className="w-7 h-7 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-900">{c.nav.title}</h1>
              <p className="text-sm text-gray-500">{lang === 'en' ? 'Uttarpara Amarendra Vidyapith' : 'উত্তরপাড়া অমরেন্দ্র বিদ্যাপীঠ'}</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <Button onClick={toggleLanguage} variant="outline" size="sm" className="font-semibold">
              {c.nav.translate}
            </Button>
          </div>
        </div>
      </header>

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative py-20 md:py-32 bg-gradient-to-br from-blue-600 via-indigo-700 to-purple-800 overflow-hidden">
          <div className="absolute inset-0 bg-[url('/pattern.svg')] opacity-10"></div>
          <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <Badge variant="secondary" className="mb-6 px-4 py-2 text-sm font-semibold bg-white/20 text-white border-white/30">
              <Star className="w-4 h-4 mr-2" />
              {lang === 'en' ? 'Grand Reunion 2025' : 'মহা পুনর্মিলন ২০২৫'}
            </Badge>
            <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-6xl md:text-7xl mb-6">
              {c.hero.title}
            </h1>
            <p className="mt-6 max-w-3xl mx-auto text-xl text-blue-100 leading-relaxed">
              {c.hero.subtitle}
            </p>
            <div className="mt-10">
              <RegistrationModal lang={lang} />
            </div>
          </div>
        </section>

        {/* Quick Info Cards */}
        <section className="py-16 -mt-16 relative z-20">
          <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {highlights.map((item, index) => (
                <Card key={index} className="bg-white/90 backdrop-blur shadow-lg border-0 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <CardContent className="p-6 text-center">
                    <item.icon className={`w-8 h-8 mx-auto mb-3 ${item.color}`} />
                    <h3 className="font-semibold text-gray-900 mb-1">{item.title}</h3>
                    <p className={`font-bold text-lg ${item.color}`}>{item.value}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Main Content Panels */}
        <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 pb-20">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            {/* Event Details Panel */}
            <Card className="lg:col-span-2 shadow-xl border-0 bg-white/95">
              <CardHeader className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
                <CardTitle className="flex items-center gap-2 text-2xl">
                  <Heart className="w-6 h-6" />
                  {c.reunionDetails.cardTitle}
                </CardTitle>
                <CardDescription className="text-blue-100">
                  {c.reunionDetails.eventName}
                </CardDescription>
              </CardHeader>
              <CardContent className="p-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <Calendar className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                    <h4 className="font-semibold text-gray-900">{c.reunionDetails.dateLabel}</h4>
                    <p className="text-gray-600">{c.reunionDetails.date}</p>
                  </div>
                  <div className="text-center">
                    <Clock className="w-8 h-8 text-green-600 mx-auto mb-2" />
                    <h4 className="font-semibold text-gray-900">{c.reunionDetails.timeLabel}</h4>
                    <p className="text-gray-600">{c.reunionDetails.time}</p>
                  </div>
                  <div className="text-center">
                    <MapPin className="w-8 h-8 text-red-600 mx-auto mb-2" />
                    <h4 className="font-semibold text-gray-900">{c.reunionDetails.venueLabel}</h4>
                    <p className="text-gray-600 text-sm">{c.reunionDetails.venue}</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Quick Stats Panel */}
            <Card className="shadow-xl border-0 bg-gradient-to-br from-green-50 to-emerald-50">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-green-800">
                  <Users className="w-5 h-5" />
                  {lang === 'en' ? 'At a Glance' : 'এক নজরে'}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">{lang === 'en' ? 'Batches' : 'ব্যাচ'}</span>
                  <Badge variant="secondary">1988 & 1990</Badge>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">{lang === 'en' ? 'Duration' : 'সময়কাল'}</span>
                  <Badge variant="secondary">{lang === 'en' ? '12 Hours' : '১২ ঘণ্টা'}</Badge>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">{lang === 'en' ? 'Confirmed' : 'নিশ্চিত'}</span>
                  <Badge className="bg-green-600">25+ {lang === 'en' ? 'Alumni' : 'প্রাক্তনী'}</Badge>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">{lang === 'en' ? 'Activities' : 'কার্যক্রম'}</span>
                  <Badge variant="outline">10+</Badge>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Simplified Sections */}
          <div className="space-y-8">
            <Card className="shadow-xl border-0 bg-white/95">
              <ConfirmedAttendees lang={lang} />
            </Card>
            
            <div className="text-center py-8">
              <p className="text-gray-500 text-lg mb-4">
                {lang === 'en' 
                  ? 'More details about program, menu, and activities are available through our chat assistant!' 
                  : 'প্রোগ্রাম, মেনু, এবং কার্যক্রমের আরও বিবরণ আমাদের চ্যাট সহায়কের মাধ্যমে পাওয়া যাবে!'}
              </p>
              <div className="flex justify-center gap-4 flex-wrap">
                <Badge variant="outline" className="px-4 py-2">
                  <Utensils className="w-4 h-4 mr-2" />
                  {lang === 'en' ? 'Special Menu by Dr. Pradip' : 'ডাঃ প্রদীপের বিশেষ মেনু'}
                </Badge>
                <Badge variant="outline" className="px-4 py-2">
                  <Music className="w-4 h-4 mr-2" />
                  {lang === 'en' ? 'Performances & Fun' : 'পারফরম্যান্স ও মজা'}
                </Badge>
                <Badge variant="outline" className="px-4 py-2">
                  <Heart className="w-4 h-4 mr-2" />
                  {lang === 'en' ? 'Memory Lane' : 'স্মৃতিপথ'}
                </Badge>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Enhanced Footer */}
      <footer className="py-12 bg-gradient-to-r from-gray-900 to-gray-800 text-white">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4">
            <div className="flex items-center justify-center gap-3">
              <GraduationCap className="w-8 h-8 text-blue-400" />
              <h3 className="text-xl font-bold">Uttarpara Amarendra Vidyapith</h3>
            </div>
            <p className="text-gray-300 max-w-2xl mx-auto">
              {lang === 'en' 
                ? 'Celebrating 35+ years of friendship, memories, and achievements. Together we learned, together we grew, together we celebrate!'
                : '৩৫+ বছরের বন্ধুত্ব, স্মৃতি এবং অর্জন উদযাপন করছি। একসাথে শিখেছি, একসাথে বড় হয়েছি, একসাথে উদযাপন করি!'}
            </p>
            <div className="flex justify-center gap-4 text-sm text-gray-400">
              <span>{c.footer.copyright}</span>
            </div>
            <p className="text-blue-300 font-medium">
              {c.footer.closing}
            </p>
          </div>
        </div>
      </footer>

      {/* Chatbox Component */}
      <Chatbox lang={lang} />
    </div>
  );
}
