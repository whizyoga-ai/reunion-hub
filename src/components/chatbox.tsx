'use client';

import * as React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { MessageCircle, Send, Bot, User, MapPin, Users, Clock, Phone, Utensils } from 'lucide-react';
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
        ? "📍 The ADDABAJI will be held at Bhorer Alo Community Hall, Uttarpara, West Bengal, India. It's easily accessible and has good parking facilities."
        : "📍 ADDABAJI অনুষ্ঠিত হবে ভোরের আলো কমিউনিটি হল, উত্তরপাড়া, পশ্চিমবঙ্গ, ভারতে। এটি সহজেই পৌঁছানো যায় এবং ভাল পার্কিং সুবিধা রয়েছে।"
    },
    attendees: {
      keywords: ['who', 'attendees', 'coming', 'list', 'participants', 'how many', 'count', 'কে', 'কারা', 'আসছে', 'তালিকা', 'কতজন', 'সংখ্যা'],
      response: lang === 'en'
        ? "👥 26 alumni have confirmed their attendance including Tanmoy, Basab, Ratul, Sekharjit, Supratim, Chandan, Biswaranjan, Pradip, Yogabrata, Sudipta, Shovan, Arun, Srikanta, Amal, Samir Mondal, Subrata, Sujoy, Samar, Uttam, Chiranjeeb, Siddhartha, Anirban, Mridul, Swarup, Sanjay Banik, and Somnath. More may join!"
        : "👥 ২৬ জন প্রাক্তনী তাদের উপস্থিতি নিশ্চিত করেছেন যার মধ্যে রয়েছে তন্ময়, বাসব, রাতুল, শেখরজিৎ, সুপ্রতিম, চন্দন, বিশ্বরঞ্জন, প্রদিপ, যোগব্রত, সুদীপ্ত, শোভন, অরুণ, শ্রীকান্ত, অমল, সমীর মন্ডল, সুব্রত, সুজয়, সমর, উত্তম, চিরঞ্জীব, সিদ্ধার্থ, অনির্বান, মৃদুল, স্বরূপ, সঞ্জয় বণিক, এবং সোমনাথ। আরও অনেকে যোগ দিতে পারেন!"
    },
    time: {
      keywords: ['time', 'when', 'schedule', 'কখন', 'সময়', 'সূচি'],
      response: lang === 'en'
        ? "🕘 The ADDABAJI is on Saturday, December 6th, 2025, from 9:00 AM to 9:00 PM. Full day of activities including breakfast, lunch, performances, and dinner!"
        : "🕘 ADDABAJI শনিবার, ৬ই ডিসেম্বর, ২০২৫, সকাল ৯:০০ থেকে রাত ৯:০০ পর্যন্ত। সারাদিনের কার্যকলাপ যার মধ্যে রয়েছে প্রাতঃরাশ, দুপুরের খাবার, পারফরম্যান্স এবং রাতের খাবার!"
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
        ? "🍽️ Dr. Pradip Dey's Menu Lab presents: 🌅 JALKHABAR (guaranteed 100% farm-fresh and 200% confusion), 🌞 LUNCH (research-grade, no peer review needed), 🌥 EVENING TIFFIN (with scientific uncertainty), 🌙 DINNER (high nutrition, low nonsense... or maybe reverse!). Check the full funny menu on the main page!"
        : "🍽️ ডাঃ প্রদীপের কৃষি গবেষণাগার: 🌅 সকালের কৃষিকাজ (ট্র্যাক্টরের শব্দ সহ), 🌞 মধ্যাহ্ন কৃষি ভোজন (গরুদের অ্যাপ্রুভড), 🌅 সন্ধ্যার বীজ-টীজ (চাষবাসের ক্লান্তিতে), 🌙 রাতের শস্য সম্ভার (জৈব চক্রের অংশ)! সম্পূর্ণ চাষবাস মেনু মূল পৃষ্ঠায় দেখুন!"
    },
    program: {
      keywords: ['program', 'schedule', 'activities', 'প্রোগ্রাম', 'সূচি', 'কার্যক্রম'],
      response: lang === 'en'
        ? "📅 Full Day Program: 9:00-9:30 AM Welcome drinks, 9:30-10:30 AM Breakfast, 10:30-11:30 AM Back to School stories, 11:30 AM-12:00 PM Health checkup, 12:00-1:30 PM Future planning, 1:30-3:00 PM Lunch, 3:00-4:30 PM Stage performances, 4:30-5:00 PM Tea break, 5:00-6:00 PM More performances, 6:00-6:30 PM Evening snacks, 6:30-8:30 PM Party time, 8:30-9:30 PM Grand dinner!"
        : "📅 সম্পূর্ণ দিনের অনুষ্ঠান: সকাল ৯:০০-৯:৩০ স্বাগত পানীয়, ৯:৩০-১০:৩০ প্রাতঃরাশ, ১০:৩০-১১:৩০ স্কুলে ফেরা গল্প, ১১:৩০-১২:০০ স্বাস্থ্য পরীক্ষা, ১২:০০-১:৩০ ভবিষ্যৎ পরিকল্পনা, ১:৩০-৩:০০ দুপুরের খাবার, ৩:০০-৪:৩০ মঞ্চ পারফরমেন্স, ৪:৩০-৫:০০ চা বিরতি, ৫:০০-৬:০০ আরো পারফরমেন্স, ৬:০০-৬:৩০ সন্ধ্যার জলখাবার, ৬:৩০-৮:৩০ পার্টি, ৮:৩০-৯:৩০ মহা রাতের খাবার!"
    },
    coreCommittee: {
      keywords: ['organizer', 'team', 'committee', 'pradip', 'core team', 'core committee', 'আয়োজক', 'দল', 'কমিটি', 'মূল কমিটি', 'প্রদিপ', 'মূল দল'],
      response: lang === 'en'
        ? "👥 Core Committee: Led by Pradip Dey (Team Lead & Menu Scientist), the core committee includes Yogabrata, Pradip, Ratul, Supratim, Tanmoy, and Shovan. These dedicated alumni are working together to make this ADDABAJI memorable for everyone!"
        : "👥 মূল কমিটি: প্রদিপ দে (দলনেতা ও মেনু বিজ্ঞানী) এর নেতৃত্বে, মূল কমিটিতে রয়েছেন যোগব্রত, প্রদিপ, রাতুল, সুপ্রতিম, তন্ময়, এবং শোভন। এই নিবেদিতপ্রাণ প্রাক্তনীরা একসাথে কাজ করে এই আড্ডাবাজি সবার জন্য স্মরণীয় করে তুলতে চান!"
    }
  }), [lang]);

  const getResponse = (message: string): string => {
    const lowerMessage = message.toLowerCase();
    
    // Check for specific attendee queries
    const attendeeNames = lang === 'en' 
      ? ["tanmoy", "basab", "ratul", "sekharjit", "supratim", "chandan", "biswaranjan", "pradip", "yogabrata", "sudipta", "shovan", "arun", "srikanta", "amal", "samir", "subrata", "sujoy", "samar", "uttam", "chiranjeeb", "siddhartha", "anirban", "mridul", "swarup", "sanjay", "somnath"]
      : ["তন্ময়", "বাসব", "রাতুল", "শেখরজিৎ", "সুপ্রতিম", "চন্দন", "বিশ্বরঞ্জন", "প্রদিপ", "যোগব্রত", "সুদীপ্ত", "শোভন", "অরুণ", "শ্রীকান্ত", "অমল", "সমীর", "সুব্রত", "সুজয়", "সমর", "উত্তম", "চিরঞ্জীব", "সিদ্ধার্থ", "অনির্বান", "মৃদুল", "স্বরূপ", "সঞ্জয়", "সোমনাথ"];
    
    const foundAttendee = attendeeNames.find(name => lowerMessage.includes(name.toLowerCase()));
    if (foundAttendee && (lowerMessage.includes('join') || lowerMessage.includes('coming') || lowerMessage.includes('attend') || lowerMessage.includes('যোগ') || lowerMessage.includes('আসছে'))) {
      return lang === 'en'
        ? `✅ Yes! ${foundAttendee.charAt(0).toUpperCase() + foundAttendee.slice(1)} has confirmed attendance for the ADDABAJI. Looking forward to seeing them there!`
        : `✅ হ্যাঁ! ${foundAttendee} ADDABAJI-তে উপস্থিতি নিশ্চিত করেছেন। তাঁকে সেখানে দেখার জন্য অপেক্ষা করছি!`;
    }
    
    for (const [key, response] of Object.entries(quickResponses)) {
      if (response.keywords.some(keyword => lowerMessage.includes(keyword.toLowerCase()))) {
        return response.response;
      }
    }
    
    return lang === 'en'
      ? "I'm here to help with information about the Uttarpara Amarendra Vidyapith ADDABAJI! Ask me about the venue, attendees, timing, food, or contact details."
      : "আমি উত্তরপাড়া অমরেন্দ্র বিদ্যাপীঠের ADDABAJI সম্পর্কে তথ্য দিতে এখানে আছি! আমাকে স্থান, উপস্থিতি, সময়, খাবার, বা যোগাযোগের বিবরণ সম্পর্কে জিজ্ঞাসা করুন।";
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
          ? "👋 Welcome! I'm here to help with ADDABAJI information. Ask me about venue, attendees, timing, food, or anything else!"
          : "👋 স্বাগতম! আমি ADDABAJI-র তথ্য দিতে এখানে আছি। আমাকে স্থান, উপস্থিতি, সময়, খাবার, বা অন্য কিছু সম্পর্কে জিজ্ঞাসা করুন!",
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
              <span>{lang === 'en' ? 'ADDABAJI Assistant' : 'ADDABAJI সহায়ক'}</span>
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
                placeholder={lang === 'en' ? 'Ask about the ADDABAJI...' : 'ADDABAJI সম্পর্কে জিজ্ঞাসা করুন...'}
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
                { icon: Clock, text: lang === 'en' ? 'Program' : 'অনুষ্ঠান', query: 'program schedule' },
                { icon: Utensils, text: lang === 'en' ? 'Menu' : 'মেনু', query: 'menu' }
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