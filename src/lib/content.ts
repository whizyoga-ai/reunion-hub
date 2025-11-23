const currentYear = new Date().getFullYear();

export const content = {
  en: {
    meta: {
      title: "Uttarpara Amarendra Vidyapith - Reunion Hub (1988 & 1990 Batches)",
      description: "Join the reunion for the 1988 Madhyamik & 1990 HS batches of Uttarpara Amarendra Vidyapith."
    },
    nav: {
      title: "Reunion Hub",
      register: "Register",
      details: "Details", 
      program: "Program",
      menu: "Menu",
      attendees: "Attendees",
      icebreaker: "Icebreaker",
      faq: "FAQ",
      translate: "বাংলা"
    },
    hero: {
      title: "Welcome, Alumni of Uttarpara Amarendra Vidyapith!",
      subtitle: "Reconnect with friends from the 1988 Madhyamik and 1990 HS batches. Let's reminisce and make new memories at our grand school reunion.",
      imageAlt: "Uttarpara Amarendra Vidyapith school building"
    },
    reunionDetails: {
      cardTitle: "You're Invited!",
      eventName: "Uttarpara Amarendra Vidyapith - Grand Reunion (1988 Madhyamik & 1990 HS)",
      dateLabel: "Date",
      date: "Saturday, 6th December, 2025",
      timeLabel: "Time", 
      time: "9:00 AM - 9:00 PM",
      venueLabel: "Venue",
      venue: "Bhorer Alo Community Hall, Uttarpara, West Bengal, India"
    },
    programSchedule: {
      title: "Program Schedule",
      description: "A day full of nostalgia, fun, and reconnecting after 35 years.",
      schedule: [
        { time: "9:00-9:30 AM", title: "Welcome Tea/Coffee/Soft Drinks", description: "Start the day with a refreshing drink and warm greetings." },
        { time: "9:30-10:30 AM", title: "Breakfast", description: "Enjoy a hearty breakfast and catch up with old friends." },
        { time: "10:30-11:30 AM", title: "Introduction / Back to School", description: "Share memories and stories from our school days." },
        { time: "11:30-12:00 PM", title: "Health Check Up", description: "A quick health check-up session for everyone." },
        { time: "12:00-1:30 PM", title: "Future Planning / Discussion", description: "Let's discuss our future plans and how we can stay connected." },
        { time: "1:30-3:00 PM", title: "Lunch", description: "A delicious lunch to refuel for the rest of the day's activities." },
        { time: "3:00-4:30 PM", title: "Stage Performance / Karaoke / Jokes etc.", description: "Showcase your talents or just enjoy the performances." },
        { time: "4:30-5:00 PM", title: "Tea/Coffee", description: "A short break for tea and coffee." },
        { time: "5:00-6:00 PM", title: "Performance / Karaoke / Jokes etc.", description: "The fun continues with more performances and entertainment." },
        { time: "6:00-6:30 PM", title: "Evening Snacks", description: "Light snacks to keep the energy levels high." },
        { time: "6:30-8:30 PM", title: "Party", description: "Let's celebrate our reunion with music and dance." },
        { time: "8:30-9:30 PM", title: "Dinner", description: "End the day with a grand dinner and fond farewells." }
      ]
    },
    registrationForm: {
      title: "Register for the Reunion",
      description: "Fill out the form below to confirm your attendance. Some fields are just for fun!",
      nameLabel: "Name",
      presentAddressLabel: "Present Address",
      permanentAddressLabel: "Permanent Address",
      mobileLabel: "Mobile No.",
      emailLabel: "Email Address",
      bloodGroupLabel: "Blood Group",
      professionLabel: "Profession",
      jobNatureLabel: "Nature of Job",
      organizationLabel: "Name of Organization",
      maritalStatusLabel: "Marital Status",
      girlfriendsLabel: "No. of girlfriends",
      wardsOfficialLabel: "No. of ward (official)",
      wardsUnofficialLabel: "No. of ward (unofficial)",
      testosteroneLabel: "Level of testosterone",
      remarksLabel: "Remarks",
      submitButton: "Register Now"
    },
    menuSection: {
      title: "Dr. Pradip Dey Menu Lab 🧑‍🔬",
      description: "Shh! The menu is a delicious secret. Come hungry, leave happy! 🍴✨",
      breakfast: {
        title: "জলখাবার (JALKHABAR) 🌅",
        items: [
          "Breakfast curated by Dr. Pradip Dey — guaranteed 100% farm-fresh and 200% confusion.",
          "Morning menu by Pradi… if anything sprouts on your plate, that's part of the plan.",
          "Our scientist-in-charge says breakfast will be high-yield… for our stomachs."
        ]
      },
      lunch: {
        title: "LUNCH 🌞",
        items: [
          "Lunch by Dr. Dey — optimized for maximum photosynthesis after eating.",
          "Today's lunch is research grade. Please don't ask for peer review."
        ]
      },
      evening: {
        title: "TIFFIN (EVENING) 🌥",
        items: [
          "Evening tiffin curated by Dr. Dey — perfect for those who like snacks with scientific uncertainty."
        ]
      },
      dinner: {
        title: "DINNER 🌙",
        items: [
          "Dinner designed by our scientist — expect high nutrition, low nonsense… or maybe reverse."
        ]
      }
    },
    icebreakerTool: {
      title: "Icebreaker Corner",
      description: "Want to start a conversation? Enter some details (real or imaginary) to get a personalized question!",
      nameLabel: "Attendee Name",
      namePlaceholder: "e.g., Alex Smith",
      phoneLabel: "Attendee Phone (Optional)",
      phonePlaceholder: "e.g., +19876543210",
      fishLabel: "Prefers Fish Dishes?",
      alcoholicLabel: "Prefers Alcoholic Drinks?",
      submitButton: "Get an Icebreaker Question",
      submittingButton: "Generating...",
      suggestionTitle: "Your Icebreaker:",
      successToastTitle: "Question Generated!",
      successToastDescription: "Here's a fun question to get the conversation started.",
      failureToastTitle: "Generation Failed",
      failureToastDescription: "Couldn't generate a question.",
      errorToastTitle: "Error",
      errorToastDescription: "Something went wrong. Please try again.",
      disabledTitle: "Feature Disabled",
      disabledDescription: "The AI Icebreaker tool is available in the local development environment but is disabled in the deployed version."
    },
    faq: {
      title: "Frequently Asked Questions",
      description: "Find answers to common questions about the reunion.",
      faqs: [
        {
          id: "faq-1",
          question: "What is the dress code for the reunion?",
          answer: "The dress code is smart casual. Feel free to dress comfortably and stylishly for a day of fun and reconnection!"
        },
        {
          id: "faq-2",
          question: "Can I bring a guest to the reunion?",
          answer: "Due to venue constraints and planning, registration is primarily for alumni. If you wish to bring a guest, please contact the organizers in advance to check for availability."
        },
        {
          id: "faq-3",
          question: "Is there parking available at the venue?",
          answer: "Limited parking is available at the venue. We encourage carpooling or using public transport if possible to ease congestion."
        },
        {
          id: "faq-4",
          question: "Will food and beverages be provided?",
          answer: "Yes! A variety of delicious food and refreshing beverages will be provided throughout the event from 9 AM to 9 PM. We will have options to cater to different tastes."
        }
      ]
    },
    confirmedAttendees: {
      title: "Confirmed Attendees",
      description: "Here's who has already confirmed their presence.",
      addMorePrompt: "Want to add a name to the list?",
      namePlaceholder: "Enter a name...",
      addButton: "Add",
      addSuccessToastTitle: "Name Added!",
      addSuccessToastDescription: "has been added to the list.",
      names: ["Tanmoy", "Basab", "Sekharjit", "Supratim", "Chandan", "Biswaranjan", "Pradip", "Yogabrata"]
    },
    footer: {
      copyright: `© ${currentYear} Reunion Hub. All rights reserved.`,
      closing: "Looking forward to celebrating with you!"
    }
  },
  bn: {
    meta: {
      title: "উত্তরপাড়া অমরেন্দ্র বিদ্যাপীঠ - পুনর্মিলন হাব",
      description: "পুনর্মিলনে যোগ দিন"
    },
    nav: {
      title: "পুনর্মিলন কেন্দ্র",
      register: "নিবন্ধন",
      details: "বিবরণ",
      program: "অনুসূচী", 
      menu: "খাদ্যতালিকা",
      attendees: "উপস্থিতি",
      icebreaker: "পরিচিতি পর্ব",
      faq: "প্রশ্নাবলী",
      translate: "English"
    },
    hero: {
      title: "স্বাগতম, উত্তরপাড়া অমরেন্দ্র বিদ্যাপীঠের প্রাক্তনী!",
      subtitle: "১৯৮৮ মাধ্যমিক ও ১৯৯০ উচ্চ মাধ্যমিক ব্যাচের বন্ধুদের সাথে আবার সংযোগ স্থাপন করুন। আসুন স্মৃতিচারণ করি এবং আমাদের মহান স্কুল পুনর্মিলনে নতুন স্মৃতি তৈরি করি।",
      imageAlt: "উত্তরপাড়া অমরেন্দ্র বিদ্যাপীঠ স্কুল ভবন"
    },
    reunionDetails: {
      cardTitle: "আপনাকে আমন্ত্রণ জানানো হচ্ছে!",
      eventName: "উত্তরপাড়া অমরেন্দ্র বিদ্যাপীঠ - মহা পুনর্মিলন (১৯৮৮ মাধ্যমিক ও ১৯৯০ উচ্চ মাধ্যমিক)",
      dateLabel: "তারিখ",
      date: "শনিবার, ৬ই ডিসেম্বর, ২০২৫",
      timeLabel: "সময়",
      time: "সকাল ৯:০০ - রাত ৯:০০",
      venueLabel: "স্থান",
      venue: "ভোরের আলো কমিউনিটি হল, উত্তরপাড়া, পশ্চিমবঙ্গ, ভারত"
    },
    programSchedule: {
      title: "অনুষ্ঠানসূচী",
      description: "৩৫ বছর পর স্মৃতিচারণ, মজা এবং পুনর্মিলনে ভরা একটা দিন।",
      schedule: [
        { time: "সকাল ৯:০০-৯:৩০", title: "স্বাগত চা/কফি/সফট ড্রিঙ্কস", description: "একটি সতেজ পানীয় এবং উষ্ণ শুভেচ্ছা দিয়ে দিন শুরু করুন।" },
        { time: "সকাল ৯:৩০-১০:৩০", title: "প্রাতঃরাশ", description: "হৃদয়গ্রাহী ব্রেকফাস্ট উপভোগ করুন এবং পুরানো বন্ধুদের সাথে আড্ডা দিন।" },
        { time: "সকাল ১০:৩০-১১:৩০", title: "পরিচিতি পর্ব / স্কুলে ফেরা", description: "আমাদের স্কুলের দিনের স্মৃতি এবং গল্প ভাগ করুন।" },
        { time: "সকাল ১১:৩০-দুপুর ১২:০০", title: "স্বাস্থ্য পরীক্ষা", description: "সকলের জন্য একটি দ্রুত স্বাস্থ্য পরীক্ষা সেশন।" },
        { time: "দুপুর ১২:০০-১:৩০", title: "ভবিষ্যৎ পরিকল্পনা / আলোচনা", description: "আসুন আমাদের ভবিষ্যৎ পরিকল্পনা নিয়ে আলোচনা করি এবং কীভাবে সংযুক্ত থাকব।" },
        { time: "দুপুর ১:৩০-৩:০০", title: "মধ্যাহ্নভোজ", description: "দিনের বাকি কার্যকলাপের জন্য প্রাণশক্তি পুনরুদ্ধারে একটি সুস্বাদু দুপুরের খাবার।" },
        { time: "বিকেল ৩:০০-৪:৩০", title: "মঞ্চে পারফরম্যান্স / কারাওকে / জোকস ইত্যাদি", description: "আপনার প্রতিভা প্রদর্শন করুন বা শুধু পারফরম্যান্স উপভোগ করুন।" },
        { time: "বিকেল ৪:৩০-৫:০০", title: "চা/কফি", description: "চা এবং কফির জন্য একটি সংক্ষিপ্ত বিরতি।" },
        { time: "বিকেল ৫:০০-৬:০০", title: "পারফরম্যান্স / কারাওকে / জোকস ইত্যাদি", description: "মজা আরও পারফরম্যান্স এবং বিনোদনের সাথে অব্যাহত থাকে।" },
        { time: "সন্ধ্যা ৬:০০-৬:৩০", title: "সান্ধ্যকালীন জলখাবার", description: "শক্তির মাত্রা উচ্চ রাখতে হালকা খাবার।" },
        { time: "সন্ধ্যা ৬:৩০-৮:৩০", title: "পার্টি", description: "আসুন সঙ্গীত এবং নৃত্যের সাথে আমাদের পুনর্মিলন উদযাপন করি।" },
        { time: "রাত ৮:৩০-৯:৩০", title: "রাতের খাবার", description: "একটি মহান ডিনার এবং স্নেহপূর্ণ বিদায়ের সাথে দিনটি শেষ করুন।" }
      ]
    },
    registrationForm: {
      title: "পুনর্মিলনের জন্য নিবন্ধন করুন",
      description: "আপনার উপস্থিতি নিশ্চিত করতে নীচের ফর্মটি পূরণ করুন। কিছু ক্ষেত্র শুধু মজার জন্য!",
      nameLabel: "নাম",
      presentAddressLabel: "বর্তমান ঠিকানা",
      permanentAddressLabel: "স্থায়ী ঠিকানা",
      mobileLabel: "মোবাইল নম্বর",
      emailLabel: "ইমেল ঠিকানা",
      bloodGroupLabel: "রক্তের গ্রুপ",
      professionLabel: "পেশা",
      jobNatureLabel: "কাজের ধরণ",
      organizationLabel: "প্রতিষ্ঠানের নাম",
      maritalStatusLabel: "বৈবাহিক অবস্থা",
      girlfriendsLabel: "গার্লফ্রেন্ডের সংখ্যা",
      wardsOfficialLabel: "সন্তানের সংখ্যা (অফিসিয়াল)",
      wardsUnofficialLabel: "সন্তানের সংখ্যা (অনানুষ্ঠানিক)",
      testosteroneLabel: "টেস্টোস্টেরনের মাত্রা",
      remarksLabel: "মন্তব্য",
      submitButton: "এখন নিবন্ধন করুন"
    },
    menuSection: {
      title: "ডাঃ প্রদীপ দে মেনু ল্যাব 🧑‍🔬",
      description: "শ্! মেনুটি একটি সুস্বাদু রহস্য। ক্ষুধার্ত হয়ে আসুন, খুশি হয়ে যান! 🍴✨",
      breakfast: {
        title: "জলখাবার (JALKHABAR) 🌅",
        items: [
          "ডাঃ প্রদীপ দে দ্বারা নির্বাচিত জলখাবার — ১০০% খামার-তাজা এবং ২০০% বিভ্রান্তি গ্যারান্টিযুক্ত।",
          "প্রদীর সকালের মেনু... যদি আপনার প্লেটে কিছু অঙ্কুরিত হয়, সেটা পরিকল্পনার অংশ।"
        ]
      },
      lunch: {
        title: "দুপুরের খাবার 🌞",
        items: [
          "ডাঃ দে-র দুপুরের খাবার — খাওয়ার পর সর্বোচ্চ সালোকসংশ্লেষণের জন্য অপ্টিমাইজড।",
          "আজকের দুপুরের খাবার গবেষণা গ্রেড। অনুগ্রহ করে peer review চাইবেন না।"
        ]
      },
      evening: {
        title: "সন্ধ্যার টিফিন 🌥",
        items: [
          "ডাঃ দে দ্বারা নির্বাচিত সন্ধ্যার টিফিন — যারা বৈজ্ঞানিক অনিশ্চয়তা সহ স্ন্যাকস পছন্দ করেন তাদের জন্য নিখুঁত।"
        ]
      },
      dinner: {
        title: "রাতের খাবার 🌙",
        items: [
          "আমাদের বিজ্ঞানী দ্বারা ডিজাইন করা রাতের খাবার — উচ্চ পুষ্টি, কম বাজে কথা আশা করুন... বা হয়তো উল্টো।"
        ]
      }
    },
    icebreakerTool: {
      title: "পরিচিতি পর্ব",
      description: "কথাবার্তা শুরু করতে চান? একটি ব্যক্তিগতকৃত প্রশ্ন পেতে কিছু বিবরণ (সত্য বা কাল্পনিক) লিখুন!",
      nameLabel: "অংশগ্রহণকারীর নাম",
      namePlaceholder: "যেমনঃ আকাশ সেন",
      phoneLabel: "অংশগ্রহণকারীর ফোন (ঐচ্ছিক)",
      phonePlaceholder: "যেমনঃ +৮৮০১২৩৪৫৬৭৮৯০",
      fishLabel: "মাছের পদ পছন্দ করেন?",
      alcoholicLabel: "অ্যালকোহলযুক্ত পানীয় পছন্দ করেন?",
      submitButton: "আলোচনা শুরু করার প্রশ্ন পান",
      submittingButton: "তৈরি হচ্ছে...",
      suggestionTitle: "আপনার জন্য প্রশ্ন:",
      successToastTitle: "প্রশ্ন তৈরি!",
      successToastDescription: "কথাবার্তা শুরু করার জন্য এখানে একটি মজার প্রশ্ন রয়েছে।",
      failureToastTitle: "তৈরি করতে ব্যর্থ",
      failureToastDescription: "একটি প্রশ্ন তৈরি করা যেতে পারেনি।",
      errorToastTitle: "ত্রুটি",
      errorToastDescription: "কিছু একটা সমস্যা হয়েছে। অনুগ্রহ করে আবার চেষ্টা করুন।",
      disabledTitle: "বৈশিষ্ট্য নিষ্ক্রিয়",
      disabledDescription: "এআই আইসব্রেকার টুলটি স্থানীয় ডেভেলপমেন্ট পরিবেশে উপলব্ধ কিন্তু স্থাপিত সংস্করণে নিষ্ক্রিয়।"
    },
    faq: {
      title: "সচরাচর জিজ্ঞাসিত প্রশ্ন",
      description: "পুনর্মিলন সম্পর্কিত সাধারণ প্রশ্নের উত্তর খুঁজুন।",
      faqs: [
        {
          id: "faq-1",
          question: "পুনর্মিলনের জন্য পোশাক বিধি কী?",
          answer: "পোশাক বিধি হলো স্মার্ট ক্যাজুয়াল। আনন্দ এবং পুনর্মিলনের একটি দিনের জন্য আরামদায়ক এবং স্টাইলিশভাবে পোশাক পরতে দ্বিধা করবেন না!"
        },
        {
          id: "faq-2",
          question: "আমি কি পুনর্মিলনীতে অতিথি আনতে পারি?",
          answer: "স্থানের সীমাবদ্ধতা এবং পরিকল্পনার কারণে, নিবন্ধন প্রাথমিকভাবে প্রাক্তন ছাত্রছাত্রীদের জন্য। আপনি যদি একজন অতিথি আনতে চান, অনুগ্রহ করে উপলব্ধতা পরীক্ষা করতে আগাম সংগঠকদের সাথে যোগাযোগ করুন।"
        },
        {
          id: "faq-3",
          question: "অনুষ্ঠানস্থলে কি পার্কিংয়ের ব্যবস্থা আছে?",
          answer: "অনুষ্ঠানস্থলে সীমিত পার্কিং উপলব্ধ। যানজট কমাতে আমরা সম্ভব হলে কার পুলিং বা পাবলিক ট্রান্সপোর্ট ব্যবহারের উৎসাহ দিই।"
        },
        {
          id: "faq-4",
          question: "খাবার ও পানীয় কি সরবরাহ করা হবে?",
          answer: "হ্যাঁ! সকাল ৯টা থেকে রাত ৯টা পর্যন্ত অনুষ্ঠান জুড়ে বিভিন্ন ধরনের সুস্বাদু খাবার এবং সতেজ পানীয় সরবরাহ করা হবে। আমাদের বিভিন্ন স্বাদের জন্য বিকল্প থাকবে।"
        }
      ]
    },
    confirmedAttendees: {
      title: "নিশ্চিত উপস্থিতি",
      description: "যারা ইতিমধ্যে তাদের উপস্থিতি নিশ্চিত করেছেন তাদের তালিকা।",
      addMorePrompt: "তালিকায় একটি নাম যোগ করতে চান?",
      namePlaceholder: "একটি নাম লিখুন...",
      addButton: "যোগ করুন",
      addSuccessToastTitle: "নাম যোগ করা হয়েছে!",
      addSuccessToastDescription: "তালিকায় যোগ করা হয়েছে।",
      names: ["তন্ময়", "বাসব", "রাতুল", "শেখরজিৎ", "সুপ্রতিম", "চন্দন", "বিশ্বরঞ্জন", "প্রদীপ", "যোগব্রত", "সুদীপ্ত", "শোভন", "অরুণ", "শ্রীকান্ত", "অমল", "সমীর মন্ডল", "সুব্রত", "সুজয়", "সমর", "উত্তম", "চিরঞ্জীব", "সিদ্ধার্থ", "অনির্বাণ", "মৃদুল", "স্বরূপ", "সঞ্জয় বণিক"]
    },
    footer: {
      copyright: `© ${currentYear} পুনর্মিলন কেন্দ্র। সর্বস্বত্ব সংরক্ষিত।`,
      closing: "তোমাদের সাথে উদযাপন করার জন্য উন্মুখ!"
    }
  }
};
