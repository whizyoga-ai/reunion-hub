'use client'

import { useState, useEffect } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Separator } from '@/components/ui/separator'
import { Search, Users, Calendar, Phone, Mail, Briefcase, Heart, Baby, TestTube2, MessageCircle } from 'lucide-react'
import { content } from '@/lib/content'

interface RegistrationData {
  id: string
  name: string
  presentAddress: string
  permanentAddress: string
  mobile: string
  email: string
  bloodGroup: string
  profession: string
  jobNature: string
  organization: string
  maritalStatus: string
  girlfriends: number
  wardsOfficial: number
  wardsUnofficial: number
  testosterone: string
  remarks: string
  submittedAt: string
}

interface RegistrationViewerProps {
  language: 'en' | 'bn'
}

export default function RegistrationViewer({ language }: RegistrationViewerProps) {
  const [registrations, setRegistrations] = useState<RegistrationData[]>([])
  const [selectedPerson, setSelectedPerson] = useState<RegistrationData | null>(null)
  const [searchTerm, setSearchTerm] = useState('')

  const t = content[language]

  // Load registrations from localStorage on component mount
  useEffect(() => {
    const savedRegistrations = localStorage.getItem('reunionRegistrations')
    if (savedRegistrations) {
      try {
        setRegistrations(JSON.parse(savedRegistrations))
      } catch (error) {
        console.error('Error loading registrations:', error)
      }
    } else {
      // Add dummy funny registrations if none exist
      const dummyRegistrations = getDummyRegistrations()
      setRegistrations(dummyRegistrations)
      localStorage.setItem('reunionRegistrations', JSON.stringify(dummyRegistrations))
    }
  }, [])

  const getDummyRegistrations = (): RegistrationData[] => {
    return [
      {
        id: '1',
        name: 'হিজিবিজবিজ',
        presentAddress: 'উল্টোপাল্টা গ্রাম, এলোমেলো পাড়া, যেদিকে সেদিকে বাঁক ৭৮৯',
        permanentAddress: 'হাসিখুশি বাড়ি, মজার মহল্লা, আনন্দ নগর ১২৩',
        mobile: '৯৮৭৬৫৪৩২১০',
        email: 'hijibijbij@nonsense.com',
        bloodGroup: 'হাসির রস+',
        profession: 'গোলমাল বিশেষজ্ঞ',
        jobNature: 'দিনরাত এলোমেলো কাজ',
        organization: 'বিশ্ব এলোমেলো সংস্থা লিমিটেড',
        maritalStatus: 'বিবাহিত (কিন্তু স্ত্রী কোথায় জানি না)',
        girlfriends: 15,
        wardsOfficial: 5,
        wardsUnofficial: 25,
        testosterone: 'চাঁদের চেয়ে বেশি',
        remarks: 'সারাদিন হিজিবিজ করি, রাতে বিজিবিজ স্বপ্ন দেখি। খুব ভালো রাঁধতে পারি কিন্তু খেতে ভুলে যাই।',
        submittedAt: '2025-11-20T10:30:00Z'
      },
      {
        id: '2', 
        name: 'হুঁকো মুখো হ্যাংলা',
        presentAddress: 'টেড়া বাড়ি, বাঁকা গলি, আড়াআড়ি রাস্তা ৪৫৬',
        permanentAddress: 'হুঁকোমুখো প্রাসাদ, হ্যাংলা পাড়া, টেড়া শহর ৯৮৭',
        mobile: '১২৩৪৫৬৭৮৯০',
        email: 'hunkomukho@hangla.org',
        bloodGroup: 'হুঁকোর ধোঁয়া টাইপ',
        profession: 'পেশাদার হুঁকো টানা বিশেষজ্ঞ',
        jobNature: 'সকাল থেকে রাত পর্যন্ত হুঁকো টানা',
        organization: 'আন্তর্জাতিক হুঁকো গবেষণা কেন্দ্র',
        maritalStatus: 'অবিবাহিত (হুঁকোই সঙ্গী)',
        girlfriends: 1,
        wardsOfficial: 0,
        wardsUnofficial: 8,
        testosterone: 'হুঁকোর ধোঁয়ার সমান',
        remarks: 'হুঁকো ছাড়া এক মুহূর্তও বাঁচতে পারি না। স্বপ্নেও হুঁকো টানি। খাবারের বদলে হুঁকোর ধোঁয়া খাই।',
        submittedAt: '2025-11-21T14:15:00Z'
      },
      {
        id: '3',
        name: 'খিচুড়ি',
        presentAddress: 'মিশ্র পাড়া, গোলমাল গলি, জগাখিচুড়ি লেন ৩৩৩',
        permanentAddress: 'খিচুড়ি মহল, মিশালি বাজার, রঙ্গমঞ্চ পাড়া ৭৭৭',
        mobile: '৫৫৫৪৪৪৩ৃ৩৩',
        email: 'khichuri@mixed.fun',
        bloodGroup: 'খিচুড়ি মিক্স',
        profession: 'সব কাজের বিশেষজ্ঞ',
        jobNature: 'একসাথে ১০০টা কাজ',
        organization: 'সর্বজনীন মিশ্র কোম্পানি',
        maritalStatus: 'মিশ্র বিবাহিত',
        girlfriends: 99,
        wardsOfficial: 7,
        wardsUnofficial: 50,
        testosterone: 'খিচুড়ির চেয়ে মিশ্র',
        remarks: 'সকালে ডাক্তার, দুপুরে শিক্ষক, বিকেলে রাঁধুনি, রাতে গায়ক। সব কাজেই এক্সপার্ট কিন্তু কিছুই ভালো পারি না।',
        submittedAt: '2025-11-22T09:00:00Z'
      },
      {
        id: '4',
        name: 'আবোল তাবোল',
        presentAddress: 'ছন্দহীন বাড়ি, অর্থহীন পাড়া, মানেহীন রাস্তা ৯৯৯',
        permanentAddress: 'আবোল প্রাসাদ, তাবোল নগর, ছড়ার শহর ১১১',
        mobile: '০০০০০০০০০০',
        email: 'abol@tabol.rhyme',
        bloodGroup: 'ছন্দের রস',
        profession: 'ছড়াকার ও গল্পকার',
        jobNature: 'সারাদিন আবোল তাবোল বলা',
        organization: 'রাজকীয় ননসেন্স একাডেমি',
        maritalStatus: 'ছন্দে বিবাহিত',
        girlfriends: 42,
        wardsOfficial: 12,
        wardsUnofficial: 100,
        testosterone: 'কবিতার মতো উচ্চ',
        remarks: 'যা মনে আসে তাই বলি, যা দেখি তাই নিয়ে ছড়া বানাই। মানুষ মনে করে আমি পাগল, কিন্তু আমি শুধু খুশি।',
        submittedAt: '2025-11-19T16:45:00Z'
      },
      {
        id: '5',
        name: 'তেনিদা',
        presentAddress: 'পটলডাঙা, কলকাতা, গোয়েন্দা পাড়া ৪৫',
        permanentAddress: 'পটলডাঙার রাজা তেনিদার আড্ডাখানা',
        mobile: '৯৮৭৬৫৪৩২১১',
        email: 'tenida@potoldanga.detective',
        bloodGroup: 'গোয়েন্দা+',
        profession: 'অপরাধ তদন্তকারী',
        jobNature: 'রহস্য সমাধান ও আড্ডা',
        organization: 'পটলডাঙা ডিটেকটিভ এজেন্সি',
        maritalStatus: 'অবিবাহিত (রহস্যের প্রেমে)',
        girlfriends: 3,
        wardsOfficial: 3,
        wardsUnofficial: 20,
        testosterone: 'গোয়েন্দা পর্যায়ে',
        remarks: 'দারুণ সব কেস সল্ভ করি। ক্যাবলা, হাবুল আর প্যালারাম আমার দল। কিছু না খেলে মাথা কাজ করে না।',
        submittedAt: '2025-11-18T11:30:00Z'
      },
      {
        id: '6',
        name: 'হাঁদা ভোঁদা',
        presentAddress: 'হাসির বাড়ি, ভোঁদার গলি, কৌতুক নগর ৭৮',
        permanentAddress: 'যৌথ হাসি-আনন্দ প্রাসাদ',
        mobile: '১১২২৩৩৪৪৫৫',
        email: 'handa@bhonda.comedy',
        bloodGroup: 'হাসির রস',
        profession: 'পেশাদার হাসি সৃষ্টিকারী',
        jobNature: 'সারাদিন গোলমাল পাকানো',
        organization: 'হাঁদা-ভোঁদা এন্টারটেইনমেন্ট',
        maritalStatus: 'জোড়ায় জোড়ায় বিবাহিত',
        girlfriends: 2,
        wardsOfficial: 0,
        wardsUnofficial: 15,
        testosterone: 'হাসির সমান',
        remarks: 'একসাথে জন্ম, একসাথে বেড়ে উঠা। যা করি তাতেই গোলমাল। কিন্তু সবাই আমাদের ভালোবাসে।',
        submittedAt: '2025-11-17T14:20:00Z'
      },
      {
        id: '7',
        name: 'নন্টে ফন্টে',
        presentAddress: 'দুষ্টুমি বাড়ি, ইস্কুল ফাঁকি গলি, বখাটে পাড়া ১২',
        permanentAddress: 'চিরকালের দুষ্টু ছেলেদের আস্তানা',
        mobile: '৯৯৯৮৮৮৭৭৭',
        email: 'nonte@fonte.mischief',
        bloodGroup: 'দুষ্টুমি টাইপ',
        profession: 'পেশাদার দুষ্টু ছেলে',
        jobNature: 'স্কুল পালানো ও মজা করা',
        organization: 'ইন্টারন্যাশনাল মিসচিফ সোসাইটি',
        maritalStatus: 'অবিবাহিত (বয়স কম)',
        girlfriends: 0,
        wardsOfficial: 0,
        wardsUnofficial: 2,
        testosterone: 'বাচ্চা বয়সী',
        remarks: 'স্কুল যেতে ভালো লাগে না। সারাদিন খেলা আর দুষ্টুমি করি। মাস্টারমশাই দেখলেই পালাই।',
        submittedAt: '2025-11-16T09:15:00Z'
      },
      {
        id: '8',
        name: 'পাগলা দাশু',
        presentAddress: 'উল্টো বাড়ি, পাগলা গলি, এলোমেলো পাড়া ৫৫',
        permanentAddress: 'চিরপাগলের পাগলখানা',
        mobile: '৫৫৫৫৫৫৫৫৫৫',
        email: 'pagla@dashu.mad',
        bloodGroup: 'পাগলামি+',
        profession: 'সার্টিফাইড পাগল',
        jobNature: 'সারাদিন পাগলামি করা',
        organization: 'পাগলামি গবেষণা কেন্দ্র',
        maritalStatus: 'পাগলামিতে বিবাহিত',
        girlfriends: 10,
        wardsOfficial: 5,
        wardsUnofficial: 30,
        testosterone: 'পাগলামো লেভেল',
        remarks: 'সবাই বলে আমি পাগল, কিন্তু আমি জানি আমিই একমাত্র সুস্থ। বাকি সবাই পাগল।',
        submittedAt: '2025-11-15T13:45:00Z'
      },
      {
        id: '9',
        name: 'কুমড়ো পটাশ',
        presentAddress: 'কুমড়ো বাগান, সবজি পাড়া, তরকারি নগর ৮৮',
        permanentAddress: 'রাজকীয় কুমড়ো প্রাসাদ',
        mobile: '৮৮৮৭৭৭৬৬৬',
        email: 'kumro@potash.vegetable',
        bloodGroup: 'কুমড়োর রস',
        profession: 'কুমড়ো চাষী ও গবেষক',
        jobNature: 'কুমড়ো নিয়ে গবেষণা',
        organization: 'ন্যাশনাল কুমড়ো ইনস্টিটিউট',
        maritalStatus: 'কুমড়োর সাথে বিবাহিত',
        girlfriends: 1,
        wardsOfficial: 100,
        wardsUnofficial: 500,
        testosterone: 'কুমড়োর মতো গোল',
        remarks: 'কুমড়ো ছাড়া আমার কোনো কাজ নেই। সবচেয়ে বড় কুমড়ো আমিই উৎপাদন করি। কুমড়োই আমার জীবন।',
        submittedAt: '2025-11-14T16:00:00Z'
      },
      {
        id: '10',
        name: 'বাঁটুল দ্য গ্রেট',
        presentAddress: 'সুপারহিরো ম্যানশন, হিরো পাড়া, শক্তিশালী নগর ৯৯',
        permanentAddress: 'গ্রেট বাঁটুলের গোপন আস্তানা',
        mobile: '১০১০১০১০১০',
        email: 'bantul@thegreat.hero',
        bloodGroup: 'সুপার পাওয়ার+',
        profession: 'সুপারহিরো',
        jobNature: 'অন্যায়ের বিরুদ্ধে লড়াই',
        organization: 'জাস্টিস লিগ অব বাংলা',
        maritalStatus: 'গোপন পরিচয়ে বিবাহিত',
        girlfriends: 1,
        wardsOfficial: 1,
        wardsUnofficial: 1000,
        testosterone: 'সুপারহিরো লেভেল',
        remarks: 'আমি বাঁটুল দ্য গ্রেট! অন্যায়ের বিরুদ্ধে লড়াই করি। আমার শক্তি অসীম, কিন্তু মাঝে মাঝে ভুল করি।',
        submittedAt: '2025-11-13T10:30:00Z'
      },
      {
        id: '11',
        name: 'বাহাদুর বেড়াল',
        presentAddress: 'সাহসী বাড়ি, বীরত্ব গলি, যোদ্ধা পাড়া ৭৭',
        permanentAddress: 'বীর বিড়ালের দুর্গ',
        mobile: '৭৭৭৬৬৬৫৫৫',
        email: 'bahadur@beral.brave',
        bloodGroup: 'সাহসী+',
        profession: 'পেশাদার সাহসী বিড়াল',
        jobNature: 'বিপদে পড়া মানুষদের সাহায্য',
        organization: 'বীর বিড়াল সমিতি',
        maritalStatus: 'বীরত্বের সাথে বিবাহিত',
        girlfriends: 7,
        wardsOfficial: 9,
        wardsUnofficial: 50,
        testosterone: 'বাঘের মতো',
        remarks: 'আমি বাহাদুর বেড়াল! কোনো বিপদ আমাকে ভয় পায় না। সবসময় অন্যদের সাহায্য করি।',
        submittedAt: '2025-11-12T12:15:00Z'
      }
    ]
  }

  const filteredRegistrations = registrations.filter(reg =>
    reg.name.toLowerCase().includes(searchTerm.toLowerCase())
  )

  const formatDate = (submittedAt: string) => {
    const date = new Date(submittedAt)
    return date.toLocaleDateString(language === 'bn' ? 'bn-BD' : 'en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    })
  }

  return (
    <div className="max-w-7xl mx-auto p-6">
      {/* Header */}
      <div className="text-center mb-8">
        <div className="flex items-center justify-center mb-4">
          <div className="bg-gradient-to-r from-green-500 to-blue-500 p-3 rounded-full">
            <Users className="w-8 h-8 text-white" />
          </div>
        </div>
        <h2 className="text-3xl font-bold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent mb-2">
          {language === 'bn' ? 'নিবন্ধিত অংশগ্রহণকারী' : 'Registered Participants'}
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          {language === 'bn' 
            ? 'যারা আড্ডাবাজির জন্য নিবন্ধন করেছেন তাদের তালিকা এবং বিবরণ'
            : 'List and details of people who have registered for the ADDABAJI'
          }
        </p>
      </div>

      {/* Search */}
      <div className="mb-8">
        <div className="relative max-w-md mx-auto">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
          <Input
            type="text"
            placeholder={language === 'bn' ? 'নাম খুঁজুন...' : 'Search names...'}
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Names List */}
        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Users className="w-5 h-5" />
              {language === 'bn' ? 'নিবন্ধিত ব্যক্তিরা' : 'Registered People'}
              <Badge variant="secondary">{filteredRegistrations.length}</Badge>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3 max-h-96 overflow-y-auto">
              {filteredRegistrations.map((person) => (
                <Button
                  key={person.id}
                  variant={selectedPerson?.id === person.id ? "default" : "outline"}
                  className="w-full justify-between"
                  onClick={() => setSelectedPerson(person)}
                >
                  <span className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    {person.name}
                  </span>
                  <span className="text-xs text-gray-500">
                    {formatDate(person.submittedAt)}
                  </span>
                </Button>
              ))}
              {filteredRegistrations.length === 0 && (
                <div className="text-center text-gray-500 py-8">
                  {language === 'bn' ? 'কোনো নিবন্ধন পাওয়া যায়নি' : 'No registrations found'}
                </div>
              )}
            </div>
          </CardContent>
        </Card>

        {/* Person Details */}
        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <MessageCircle className="w-5 h-5" />
              {language === 'bn' ? 'বিস্তারিত তথ্য' : 'Detailed Information'}
            </CardTitle>
          </CardHeader>
          <CardContent>
            {selectedPerson ? (
              <div className="space-y-6">
                {/* Name and Basic Info */}
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-blue-600 mb-2">{selectedPerson.name}</h3>
                  <Badge className="bg-green-100 text-green-800">
                    {language === 'bn' ? 'নিবন্ধিত' : 'Registered'}
                  </Badge>
                </div>

                <Separator />

                {/* Contact Information */}
                <div className="grid grid-cols-1 gap-4">
                  <div className="flex items-start gap-3">
                    <Phone className="w-5 h-5 text-blue-500 mt-1" />
                    <div>
                      <h4 className="font-semibold">{language === 'bn' ? 'যোগাযোগ' : 'Contact'}</h4>
                      <p className="text-sm text-gray-600">{selectedPerson.mobile}</p>
                      <p className="text-sm text-gray-600">{selectedPerson.email}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Briefcase className="w-5 h-5 text-green-500 mt-1" />
                    <div>
                      <h4 className="font-semibold">{language === 'bn' ? 'পেশা' : 'Profession'}</h4>
                      <p className="text-sm text-gray-600">{selectedPerson.profession}</p>
                      <p className="text-xs text-gray-500">{selectedPerson.organization}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Heart className="w-5 h-5 text-red-500 mt-1" />
                    <div>
                      <h4 className="font-semibold">{language === 'bn' ? 'ব্যক্তিগত তথ্য' : 'Personal Info'}</h4>
                      <p className="text-sm text-gray-600">
                        {language === 'bn' ? 'বৈবাহিক অবস্থা:' : 'Marital Status:'} {selectedPerson.maritalStatus}
                      </p>
                      <p className="text-sm text-gray-600">
                        {language === 'bn' ? 'রক্তের গ্রুপ:' : 'Blood Group:'} {selectedPerson.bloodGroup}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Baby className="w-5 h-5 text-purple-500 mt-1" />
                    <div>
                      <h4 className="font-semibold">{language === 'bn' ? 'মজার তথ্য' : 'Fun Facts'}</h4>
                      <p className="text-sm text-gray-600">
                        {language === 'bn' ? 'গার্লফ্রেন্ড:' : 'Girlfriends:'} {selectedPerson.girlfriends}
                      </p>
                      <p className="text-sm text-gray-600">
                        {language === 'bn' ? 'সন্তান (অফিসিয়াল):' : 'Children (Official):'} {selectedPerson.wardsOfficial}
                      </p>
                      <p className="text-sm text-gray-600">
                        {language === 'bn' ? 'সন্তান (অনানুষ্ঠানিক):' : 'Children (Unofficial):'} {selectedPerson.wardsUnofficial}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <TestTube2 className="w-5 h-5 text-orange-500 mt-1" />
                    <div>
                      <h4 className="font-semibold">{language === 'bn' ? 'বৈজ্ঞানিক তথ্য' : 'Scientific Data'}</h4>
                      <p className="text-sm text-gray-600">
                        {language === 'bn' ? 'টেস্টোস্টেরনের মাত্রা:' : 'Testosterone Level:'} {selectedPerson.testosterone}
                      </p>
                    </div>
                  </div>
                </div>

                <Separator />

                {/* Addresses */}
                <div className="space-y-3">
                  <div>
                    <h4 className="font-semibold text-gray-800">{language === 'bn' ? 'বর্তমান ঠিকানা' : 'Present Address'}</h4>
                    <p className="text-sm text-gray-600 bg-gray-50 p-3 rounded">{selectedPerson.presentAddress}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">{language === 'bn' ? 'স্থায়ী ঠিকানা' : 'Permanent Address'}</h4>
                    <p className="text-sm text-gray-600 bg-gray-50 p-3 rounded">{selectedPerson.permanentAddress}</p>
                  </div>
                </div>

                {/* Remarks */}
                {selectedPerson.remarks && (
                  <>
                    <Separator />
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2">{language === 'bn' ? 'মন্তব্য' : 'Remarks'}</h4>
                      <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-400">
                        <p className="text-sm text-gray-700 italic">"{selectedPerson.remarks}"</p>
                      </div>
                    </div>
                  </>
                )}

                <Separator />
                
                <div className="text-center text-xs text-gray-500">
                  {language === 'bn' ? 'নিবন্ধনের তারিখ:' : 'Registration Date:'} {formatDate(selectedPerson.submittedAt)}
                </div>
              </div>
            ) : (
              <div className="text-center text-gray-500 py-12">
                <Users className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                <p className="text-lg mb-2">
                  {language === 'bn' ? 'একটি নাম নির্বাচন করুন' : 'Select a name to view details'}
                </p>
                <p className="text-sm">
                  {language === 'bn' 
                    ? 'বিস্তারিত তথ্য দেখতে বামদিকের তালিকা থেকে একটি নাম ক্লিক করুন'
                    : 'Click on a name from the list to see detailed information'
                  }
                </p>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  )
}