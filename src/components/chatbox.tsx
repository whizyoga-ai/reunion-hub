'use client';

import * as React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { MessageCircle, Send, Bot, User, MapPin, Users, Clock, Phone } from 'lucide-react';
import { content } from '@/lib/content';

interface ChatboxProps {
  lang: 'en' | 'bn';
}

interface Message {
  id: number;
  type: 'user' | 'bot';
  content: string;
  timestamp: Date;
}

export function Chatbox({ lang }: ChatboxProps) {
  const [isOpen, setIsOpen] = React.useState(false);
  const [messages, setMessages] = React.useState<Message[]>([]);
  const [inputValue, setInputValue] = React.useState('');
  const c = content[lang];

  const quickResponses = React.useMemo(() => ({
    venue: {
      keywords: ['venue', 'location', 'where', 'কোথায়', 'স্থান', 'ঠিকানা'],
      response: lang === 'en' 
        ? "📍 The reunion will be held at Bhorer Alo Community Hall, Uttarpara, West Bengal, India. It's easily accessible and has good parking facilities."
        : "📍 পুনর্মিলনী অনুষ্ঠিত হবে ভোরের আলো কমিউনিটি হল, উত্তরপাড়া, পশ্চিমবঙ্গ, ভারতে। এটি সহজেই পৌঁছানো যায় এবং ভাল পার্কিং সুবিধা রয়েছে।"
    },
    attendees: {
      keywords: ['who', 'attendees', 'coming', 'list', 'কে', 'কারা', 'আসছে', 'তালিকা'],
      response: lang === 'en'
        ? "👥 25 alumni have confirmed their attendance including Tanmoy, Basab, Ratul, Sekharjit, Supratim, Chandan, Biswaranjan, Pradip, Yogabrata, Sudipta, Shovon, Arun, Srikanta, Amal, Samir Mondal, Subrata, Sujoy, Samar, Uttam, Chiranjeeb, Siddhartha, Anirban, Mridul, Swarup, and Sanjay Banik. More may join!"
        : "👥 ২৫ জন প্রাক্তনী তাদের উপস্থিতি নিশ্চিত করেছেন যার মধ্যে রয়েছে তন্ময়, বাসব, রাতুল, শেখরজিৎ, সুপ্রতিম, চন্দন, বিশ্বরঞ্জন, প্রদীপ, যোগব্রত, সুদীপ্ত, শোভন, অরুণ, শ্রীকান্ত, অমল, সমীর মন্ডল, সুব্রত, সুজয়, সমর, উত্তম, চিরঞ্জীব, সিদ্ধার্থ, অনির্বাণ, মৃদুল, স্বরূপ, এবং সঞ্জয় বণিক। আরও অনেকে যোগ দিতে পারেন!"
    },
    time: {
      keywords: ['time', 'when', 'schedule', 'কখন', 'সময়', 'সূচি'],
      response: lang === 'en'
        ? "🕘 The reunion is on Saturday, December 6th, 2025, from 9:00 AM to 9:00 PM. Full day of activities including breakfast, lunch, performances, and dinner!"
        : "🕘 পুনর্মিলন শনিবার, ৬ই ডিসেম্বর, ২০২৫, সকাল ৯:০০ থেকে রাত ৯:০০ পর্যন্ত। সারাদিনের কার্যকলাপ যার মধ্যে রয়েছে প্রাতঃরাশ, দুপুরের খাবার, পারফরম্যান্স এবং রাতের খাবার!"
    },
    contact: {
      keywords: ['contact', 'phone', 'organizer', 'যোগাযোগ', 'ফোন', 'সংগঠক'],
      response: lang === 'en'
        ? "📞 For any queries, please contact the organizing committee. You can also register through the registration form on this page."
        : "📞 যে কোনো জিজ্ঞাসার জন্য, অনুগ্রহ করে সংগঠক কমিটির সাথে যোগাযোগ করুন। আপনি এই পৃষ্ঠার রেজিস্ট্রেশন ফর্মের মাধ্যমেও নিবন্ধন করতে পারেন।"
    },
    menu: {
      keywords: ['food', 'menu', 'meal', 'খাবার', 'মেনু', 'খাদ্য'],
      response: lang === 'en'
        ? "🍽️ Dr. Pradip Dey is curating our special menu! Expect farm-fresh breakfast, research-grade lunch, scientific evening snacks, and innovative dinner. All meals included from 9 AM to 9 PM!"
        : "🍽️ ডাঃ প্রদীপ দে আমাদের বিশেষ মেনু তৈরি করছেন! খামার-তাজা প্রাতঃরাশ, গবেষণা-গ্রেড দুপুরের খাবার, বৈজ্ঞানিক সন্ধ্যার স্ন্যাকস এবং উদ্ভাবনী রাতের খাবার প্রত্যাশা করুন। সকাল ৯টা থেকে রাত ৯টা পর্যন্ত সব খাবার অন্তর্ভুক্ত!"
    }
  }), [lang]);

  const getResponse = (message: string): string => {
    const lowerMessage = message.toLowerCase();
    
    for (const [key, response] of Object.entries(quickResponses)) {
      if (response.keywords.some(keyword => lowerMessage.includes(keyword.toLowerCase()))) {
        return response.response;
      }
    }
    
    return lang === 'en'
      ? "I'm here to help with information about the Uttarpara Amarendra Vidyapith reunion! Ask me about the venue, attendees, timing, food, or contact details."
      : "আমি উত্তরপাড়া অমরেন্দ্র বিদ্যাপীঠের পুনর্মিলন সম্পর্কে তথ্য দিতে এখানে আছি! আমাকে স্থান, উপস্থিতি, সময়, খাবার, বা যোগাযোগের বিবরণ সম্পর্কে জিজ্ঞাসা করুন।";
  };

  const handleSendMessage = () => {
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: Date.now(),
      type: 'user',
      content: inputValue.trim(),
      timestamp: new Date()
    };

    const botResponse: Message = {
      id: Date.now() + 1,
      type: 'bot',
      content: getResponse(inputValue),
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage, botResponse]);
    setInputValue('');
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  React.useEffect(() => {
    if (isOpen && messages.length === 0) {
      const welcomeMessage: Message = {
        id: 0,
        type: 'bot',
        content: lang === 'en'
          ? "👋 Welcome! I'm here to help with reunion information. Ask me about venue, attendees, timing, food, or anything else!"
          : "👋 স্বাগতম! আমি পুনর্মিলনের তথ্য দিতে এখানে আছি। আমাকে স্থান, উপস্থিতি, সময়, খাবার, বা অন্য কিছু সম্পর্কে জিজ্ঞাসা করুন!",
        timestamp: new Date()
      };
      setMessages([welcomeMessage]);
    }
  }, [isOpen, lang, messages.length]);

  if (!isOpen) {
    return (
      <div className="fixed bottom-6 right-6 z-50">
        <Button
          onClick={() => setIsOpen(true)}
          size="lg"
          className="rounded-full h-14 w-14 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 shadow-2xl"
        >
          <MessageCircle className="h-6 w-6" />
        </Button>
      </div>
    );
  }

  return (
    <div className="fixed bottom-6 right-6 z-50 w-80 sm:w-96">
      <Card className="shadow-2xl border-0 bg-white/95 backdrop-blur">
        <CardHeader className="pb-3">
          <CardTitle className="flex items-center justify-between text-lg">
            <div className="flex items-center gap-2">
              <Bot className="h-5 w-5 text-blue-600" />
              <span>{lang === 'en' ? 'Reunion Assistant' : 'পুনর্মিলন সহায়ক'}</span>
            </div>
            <Button variant="ghost" size="sm" onClick={() => setIsOpen(false)}>
              ✕
            </Button>
          </CardTitle>
        </CardHeader>
        <CardContent className="p-0">
          <div className="h-80 overflow-y-auto p-4 space-y-3">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex gap-2 ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div className={`flex gap-2 max-w-[85%] ${message.type === 'user' ? 'flex-row-reverse' : 'flex-row'}`}>
                  <div className={`w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 ${
                    message.type === 'user' ? 'bg-blue-600' : 'bg-gray-600'
                  }`}>
                    {message.type === 'user' ? <User className="w-3 h-3 text-white" /> : <Bot className="w-3 h-3 text-white" />}
                  </div>
                  <div className={`p-3 rounded-lg text-sm ${
                    message.type === 'user' 
                      ? 'bg-blue-600 text-white rounded-br-none' 
                      : 'bg-gray-100 text-gray-800 rounded-bl-none'
                  }`}>
                    {message.content}
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="p-4 border-t bg-gray-50">
            <div className="flex gap-2">
              <Input
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder={lang === 'en' ? 'Ask about the reunion...' : 'পুনর্মিলন সম্পর্কে জিজ্ঞাসা করুন...'}
                className="flex-1"
              />
              <Button onClick={handleSendMessage} size="sm" className="bg-blue-600 hover:bg-blue-700">
                <Send className="h-4 w-4" />
              </Button>
            </div>
            <div className="flex gap-1 mt-2 flex-wrap">
              {[
                { icon: MapPin, text: lang === 'en' ? 'Venue' : 'স্থান', query: 'venue' },
                { icon: Users, text: lang === 'en' ? 'Who\'s coming' : 'কে আসছে', query: 'who is coming' },
                { icon: Clock, text: lang === 'en' ? 'Timing' : 'সময়', query: 'time' }
              ].map((item, index) => (
                <Button
                  key={index}
                  variant="outline"
                  size="sm"
                  onClick={() => {
                    setInputValue(item.query);
                    setTimeout(handleSendMessage, 100);
                  }}
                  className="text-xs h-7"
                >
                  <item.icon className="w-3 h-3 mr-1" />
                  {item.text}
                </Button>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}