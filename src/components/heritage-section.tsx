'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, GraduationCap, Heart, Building } from "lucide-react";
import Image from 'next/image';
import { content } from '@/lib/content';

interface HeritageSectionProps {
  lang: 'en' | 'bn';
}

export function HeritageSection({ lang }: HeritageSectionProps) {
  const c = content[lang].heritage;

  return (
    <section id="heritage" className="py-20 sm:py-32 bg-gradient-to-br from-amber-50 via-orange-50 to-red-50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-br from-amber-100/20 via-orange-100/20 to-red-100/20"></div>
      </div>
      
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-amber-100 text-amber-800 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            <Heart className="w-4 h-4" />
            {c.title}
          </div>
          <h2 className="text-4xl font-bold text-gray-900 sm:text-5xl mb-6">
            {lang === 'en' ? 'Our Roots, Our Pride' : 'আমাদের শেকড়, আমাদের গর্ব'}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {lang === 'en' 
              ? 'Discover the rich heritage of our historic town and beloved school that shaped generations of brilliant minds.'
              : 'আমাদের ঐতিহাসিক শহর এবং প্রিয় স্কুলের সমৃদ্ধ ঐতিহ্য আবিষ্কার করুন যা প্রজন্মের পর প্রজন্ম মেধাবী মানুষ গড়েছে।'
            }
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Uttarpara Heritage */}
          <Card className="shadow-2xl border-0 bg-white/80 backdrop-blur-sm hover:shadow-3xl transition-all duration-500 group">
            <CardHeader className="p-8 pb-4">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-14 h-14 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <MapPin className="w-8 h-8 text-white" />
                </div>
                <div className="w-16 h-16 rounded-xl overflow-hidden border-2 border-blue-200 shadow-md">
                  <Image 
                    src="/reunion-hub/images/amarendra1.jpg" 
                    alt="Uttarpara Heritage" 
                    width={64}
                    height={64}
                    className="object-cover w-full h-full"
                    unoptimized
                  />
                </div>
              </div>
              <CardTitle className="text-2xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                {c.uttarpara.title}
              </CardTitle>
            </CardHeader>
            <CardContent className="p-8 pt-0">
              <p className="text-gray-700 leading-relaxed text-lg">
                {c.uttarpara.description}
              </p>
              <div className="mt-6 flex items-center gap-2 text-sm text-blue-600 font-semibold">
                <Building className="w-4 h-4" />
                {lang === 'en' ? 'Est. 1853 • Historic Bengal' : 'প্রতিষ্ঠিত ১৮৫৩ • ঐতিহাসিক বাংলা'}
              </div>
            </CardContent>
          </Card>

          {/* School Heritage */}
          <Card className="shadow-2xl border-0 bg-white/80 backdrop-blur-sm hover:shadow-3xl transition-all duration-500 group">
            <CardHeader className="p-8 pb-4">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-14 h-14 bg-gradient-to-br from-emerald-600 to-green-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <GraduationCap className="w-8 h-8 text-white" />
                </div>
                <div className="w-16 h-16 rounded-xl overflow-hidden border-2 border-emerald-200 shadow-md">
                  <Image 
                    src="/reunion-hub/images/amarendra1.jpg" 
                    alt="School Heritage" 
                    width={64}
                    height={64}
                    className="object-cover w-full h-full"
                    unoptimized
                  />
                </div>
              </div>
              <CardTitle className="text-2xl font-bold text-gray-900 group-hover:text-emerald-600 transition-colors duration-300">
                {c.school.title}
              </CardTitle>
            </CardHeader>
            <CardContent className="p-8 pt-0">
              <p className="text-gray-700 leading-relaxed text-lg">
                {c.school.description}
              </p>
              <div className="mt-6 flex items-center gap-2 text-sm text-emerald-600 font-semibold">
                <Heart className="w-4 h-4" />
                {lang === 'en' ? 'Decades of Excellence • Global Alumni' : 'কয়েক দশকের শ্রেষ্ঠত্ব • বিশ্বব্যাপী প্রাক্তনী'}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Heritage Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-3xl font-bold text-amber-600 mb-2">170+</div>
            <div className="text-sm text-gray-600">{lang === 'en' ? 'Years of Heritage' : 'বছরের ঐতিহ্য'}</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-600 mb-2">1853</div>
            <div className="text-sm text-gray-600">{lang === 'en' ? 'Founded' : 'প্রতিষ্ঠিত'}</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-emerald-600 mb-2">∞</div>
            <div className="text-sm text-gray-600">{lang === 'en' ? 'Memories Created' : 'স্মৃতি তৈরি'}</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-rose-600 mb-2">❤️</div>
            <div className="text-sm text-gray-600">{lang === 'en' ? 'Love for School' : 'স্কুলের প্রতি ভালোবাসা'}</div>
          </div>
        </div>
      </div>
    </section>
  );
}