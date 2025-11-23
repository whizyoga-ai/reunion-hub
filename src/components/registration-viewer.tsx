'use client'

import { useState, useEffect } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Separator } from '@/components/ui/separator'
import { ScrollArea } from '@/components/ui/scroll-area'
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import { Search, Users, Calendar, Phone, Mail, Briefcase, Heart, Star, Sparkles } from 'lucide-react'
import { content } from '@/lib/content'

interface PersonData {
  id: string
  name: string
  email: string
  type: 'real' | 'character'
  profession?: string
  funFact?: string
  message?: string
  timestamp?: Date
  // Extended data for form registrations
  presentAddress?: string
  permanentAddress?: string
  mobile?: string
  bloodGroup?: string
  jobNature?: string
  organization?: string
  maritalStatus?: string
  girlfriends?: number
  wardsOfficial?: number
  wardsUnofficial?: number
  testosterone?: string
  remarks?: string
  submittedAt?: string
}

interface RegistrationViewerProps {
  language: 'en' | 'bn'
}

const getPersonAvatar = (name: string, type: 'real' | 'character'): string => {
  if (type === 'character') {
    const characterAvatars: { [key: string]: string } = {
      'টেনিদা': '🕵️‍♂️',
      'ক্যাবলা': '🤪',
      'হাবুল সেন': '😎',
      'প্যালারাম': '🤓',
      'নন্টে ফন্টে': '👦👦',
      'হাঁদা ভোঁদা': '😸🙃',
      'বাঁটুল দ্য গ্রেট': '👑',
      'ঘনাদা': '🧔‍♂️',
      'গোপাল ভাঁড়': '🎭',
      'কিশোর কুমার': '🎤',
      'সুকুমার রায়': '✍️',
      // Legacy characters from old data
      'হিজিবিজবিজ': '🤪',
      'হুঁকো মুখো হ্যাংলা': '💨',
      'খিচুড়ি': '🍲',
      'আবোল তাবোল': '📝'
    }
    return characterAvatars[name] || '🎭'
  } else {
    // Real participants get professional emojis
    const realAvatars: { [key: string]: string } = {
      'Tanmoy': '💼', 'Basab': '🔧', 'Ratul': '📹', 'Sekharjit': '💻', 'Supratim': '🎯',
      'Chandan': '🎬', 'Biswaranjan': '📊', 'Pradip': '🌱', 'Yogabrata': '⚖️', 'Sudipta': '🦷',
      'Shoban': '🏥', 'Arun': '🏗️', 'Srikanta': '📚', 'Amal': '🔬', 'Samir Mondal': '🎨',
      'Subrata': '🚗', 'Sujay': '💡', 'Samar': '🏆', 'Uttam': '📈', 'Chiranjib': '🎵',
      'Siddhartha': '🌟', 'Anirban': '🎪', 'Mridul': '📝', 'Swarup': '🔍', 'Sanjay Banik': '🎭', 'Somnath': '🏃‍♂️'
    }
    return realAvatars[name] || '👤'
  }
}

export default function RegistrationViewer({ language }: RegistrationViewerProps) {
  const [allPeople, setAllPeople] = useState<PersonData[]>([])
  const [selectedPerson, setSelectedPerson] = useState<PersonData | null>(null)
  const [searchTerm, setSearchTerm] = useState('')
  const [isDialogOpen, setIsDialogOpen] = useState(false)

  const t = content[language]

  useEffect(() => {
    const combinedData = [...getRealParticipants(), ...getCharacterData(), ...loadSavedRegistrations()]
    setAllPeople(combinedData)
  }, [])

  const getRealParticipants = (): PersonData[] => {
    const realParticipants = ["Tanmoy", "Basab", "Ratul", "Sekharjit", "Supratim", "Chandan", "Biswaranjan", "Pradip", "Yogabrata", "Sudipta", "Shoban", "Arun", "Srikanta", "Amal", "Samir Mondal", "Subrata", "Sujay", "Samar", "Uttam", "Chiranjib", "Siddhartha", "Anirban", "Mridul", "Swarup", "Sanjay Banik", "Somnath"]
    
    const professions = ['Software Engineer', 'Doctor', 'Teacher', 'Entrepreneur', 'Artist', 'Manager', 'Consultant', 'Designer', 'Writer', 'Scientist', 'Engineer', 'Analyst', 'Director', 'Coordinator', 'Specialist']
    const funFacts = [
      'Still remembers all school songs!', 'Makes the best fish curry', 'Can solve any math problem',
      'Expert at cricket commentary', 'Collects vintage coins', 'Speaks 5 languages fluently',
      'Never misses a morning walk', 'Writes poetry in spare time', 'Champion at carrom board',
      'Grows organic vegetables', 'Teaches kids for free', 'Runs a book club',
      'Expert tabla player', 'Makes amazing sweets', 'Volunteers at animal shelter',
      'Photography enthusiast', 'Marathon runner', 'Chess master', 'Cooking expert', 'Travel blogger'
    ]
    
    return realParticipants.map((name, index) => ({
      id: `real-${index + 1}`,
      name,
      email: `${name.toLowerCase().replace(' ', '.')}@gmail.com`,
      type: 'real' as const,
      profession: professions[index % professions.length],
      funFact: funFacts[index % funFacts.length],
      message: `Excited to meet everyone after so many years! Looking forward to our আড্ডাবাজি.`,
      timestamp: new Date(Date.now() - Math.random() * 30 * 24 * 60 * 60 * 1000)
    }))
  }

  const getCharacterData = (): PersonData[] => {
    const characters = [
      { name: 'টেনিদা', message: 'আমি আড্ডার রাজা! সবাইকে নিয়ে ভালো আড্ডা দেব।', profession: 'Professional Storyteller' },
      { name: 'ক্যাবলা', message: 'টেনিদার সাথে আসব। অনেক মজার গল্প আছে।', profession: 'Comedy Specialist' },
      { name: 'হাবুল সেন', message: 'নতুন গান শোনাব সবাইকে।', profession: 'Musician & Singer' },
      { name: 'প্যালারাম', message: 'বই নিয়ে আসব পড়ার জন্য।', profession: 'Bookworm & Scholar' },
      { name: 'নন্টে ফন্টে', message: 'দুজনে মিলে অনেক মজা করব।', profession: 'Mischief Coordinators' },
      { name: 'হাঁদা ভোঁদা', message: 'নতুন দুষ্টুমি শিখেছি।', profession: 'Fun & Games Expert' },
      { name: 'বাঁটুল দ্য গ্রেট', message: 'আমার সাহসিকতার গল্প শোনাব।', profession: 'Adventure Specialist' },  
      { name: 'ঘনাদা', message: 'অবিশ্বাস্য সব সত্যি গল্প আছে।', profession: 'Master Storyteller' },
      { name: 'গোপাল ভাঁড়', message: 'নতুন হাসির গল্প নিয়ে আসছি।', profession: 'Court Jester' },
      { name: 'কিশোর কুমার', message: 'গান গেয়ে সবাইকে খুশি করব।', profession: 'Legendary Singer' },
      { name: 'সুকুমার রায়', message: 'আবোল তাবোল ছড়া শোনাব।', profession: 'Nonsense Poet' }
    ]
    
    return characters.map((char, index) => ({
      id: `char-${index + 1}`,  
      name: char.name,
      email: `${char.name.replace(/\s+/g, '').toLowerCase()}@addabaji.com`,
      type: 'character' as const,
      profession: char.profession,
      funFact: 'Famous Bengali comic character',
      message: char.message,
      timestamp: new Date(Date.now() - Math.random() * 7 * 24 * 60 * 60 * 1000)
    }))
  }

  const loadSavedRegistrations = (): PersonData[] => {
    try {
      const saved = localStorage.getItem('reunionRegistrations')
      if (saved) {
        const parsed = JSON.parse(saved)
        // Convert old format to new format
        return parsed.map((reg: any, index: number) => ({
          id: `saved-${index + 1}`,
          name: reg.name,
          email: reg.email,
          type: 'character' as const,
          profession: reg.profession || 'Mystery Professional',
          funFact: 'From registration form',
          message: reg.remarks || reg.message || 'No message provided',
          timestamp: new Date(reg.submittedAt || Date.now()),
          // Keep extended data
          presentAddress: reg.presentAddress,
          permanentAddress: reg.permanentAddress,
          mobile: reg.mobile,
          bloodGroup: reg.bloodGroup,
          jobNature: reg.jobNature,
          organization: reg.organization,
          maritalStatus: reg.maritalStatus,
          girlfriends: reg.girlfriends,
          wardsOfficial: reg.wardsOfficial,
          wardsUnofficial: reg.wardsUnofficial,
          testosterone: reg.testosterone,
          remarks: reg.remarks,
          submittedAt: reg.submittedAt
        }))
      }
    } catch (error) {
      console.error('Error loading saved registrations:', error)
    }
    return []
  }

  const filteredPeople = allPeople.filter(person =>
    person.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    (person.profession?.toLowerCase().includes(searchTerm.toLowerCase())) ||
    (person.funFact?.toLowerCase().includes(searchTerm.toLowerCase()))
  )

  const realPeople = filteredPeople.filter(p => p.type === 'real')
  const characters = filteredPeople.filter(p => p.type === 'character')

  const handlePersonClick = (person: PersonData) => {
    setSelectedPerson(person)
    setIsDialogOpen(true)
  }

  return (
    <div className="w-full max-w-7xl mx-auto p-4">
      <div className="mb-6">
        <h2 className="text-2xl font-bold mb-2 flex items-center gap-2">
          <Users className="w-6 h-6" />
          {language === 'en' ? 'All Participants' : 'সকল অংশগ্রহণকারী'}
        </h2>
        
        <div className="flex items-center gap-4 mb-4">
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <Input
              placeholder={language === 'en' ? 'Search participants...' : 'অংশগ্রহণকারী খুঁজুন...'}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
          <Badge variant="outline" className="flex items-center gap-1">
            <Users className="w-4 h-4" />
            {filteredPeople.length} {language === 'en' ? 'Total' : 'মোট'}
          </Badge>
        </div>
      </div>

      <ScrollArea className="h-[600px] w-full">
        <div className="space-y-6">
          {/* Real Participants Section */}
          {realPeople.length > 0 && (
            <div>
              <h3 className="text-lg font-semibold mb-3 flex items-center gap-2 text-blue-700">
                <Star className="w-5 h-5" />
                {language === 'en' ? `Real Participants (${realPeople.length})` : `প্রকৃত অংশগ্রহণকারী (${realPeople.length})`}
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-3">
                {realPeople.map(person => (
                  <Card 
                    key={person.id}
                    className="cursor-pointer transition-all duration-200 hover:scale-105 hover:shadow-lg border-blue-200 bg-blue-50"
                    onClick={() => handlePersonClick(person)}
                  >
                    <CardContent className="p-4 text-center">
                      <div className="text-4xl mb-2">
                        {getPersonAvatar(person.name, person.type)}
                      </div>
                      <h3 className="font-semibold text-sm mb-1 truncate" title={person.name}>
                        {person.name}
                      </h3>
                      <Badge variant="secondary" className="text-xs mb-2 bg-blue-100 text-blue-800">
                        <Star className="w-3 h-3 mr-1" /> Real
                      </Badge>
                      <p className="text-xs text-gray-600 truncate" title={person.profession}>
                        {person.profession}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          )}

          {/* Characters Section */}
          {characters.length > 0 && (
            <div>
              <h3 className="text-lg font-semibold mb-3 flex items-center gap-2 text-purple-700">
                <Sparkles className="w-5 h-5" />
                {language === 'en' ? `Fun Characters (${characters.length})` : `মজার চরিত্র (${characters.length})`}
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-3">
                {characters.map(person => (
                  <Card 
                    key={person.id}
                    className="cursor-pointer transition-all duration-200 hover:scale-105 hover:shadow-lg border-purple-200 bg-purple-50"
                    onClick={() => handlePersonClick(person)}
                  >
                    <CardContent className="p-4 text-center">
                      <div className="text-4xl mb-2">
                        {getPersonAvatar(person.name, person.type)}
                      </div>
                      <h3 className="font-semibold text-sm mb-1 truncate" title={person.name}>
                        {person.name}
                      </h3>
                      <Badge variant="secondary" className="text-xs mb-2 bg-purple-100 text-purple-800">
                        <Sparkles className="w-3 h-3 mr-1" /> Character
                      </Badge>
                      <p className="text-xs text-gray-600 truncate" title={person.profession}>
                        {person.profession}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          )}

          {filteredPeople.length === 0 && (
            <div className="text-center py-12 text-gray-500">
              <Users className="w-16 h-16 mx-auto mb-4 opacity-50" />
              <p className="text-lg">{language === 'en' ? 'No participants found' : 'কোন অংশগ্রহণকারী পাওয়া যায়নি'}</p>
              <p className="text-sm">{language === 'en' ? 'Try adjusting your search terms' : 'অনুসন্ধানের শব্দ পরিবর্তন করে দেখুন'}</p>
            </div>
          )}
        </div>
      </ScrollArea>

      {/* Detail Modal */}
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="max-w-2xl max-h-[80vh] overflow-hidden">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-3">
              <span className="text-4xl">
                {selectedPerson && getPersonAvatar(selectedPerson.name, selectedPerson.type)}
              </span>
              <div>
                <h2 className="text-xl font-bold">{selectedPerson?.name}</h2>
                <Badge 
                  variant="secondary"
                  className={selectedPerson?.type === 'real' ? 'bg-blue-100 text-blue-800' : 'bg-purple-100 text-purple-800'}
                >
                  {selectedPerson?.type === 'real' ? 'Real Participant' : 'Fun Character'}
                </Badge>
              </div>
            </DialogTitle>
          </DialogHeader>
          
          <ScrollArea className="max-h-[60vh] pr-4">
            {selectedPerson && (
              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <Mail className="w-4 h-4 text-gray-500" />
                      <span className="text-sm font-medium">Email:</span>
                    </div>
                    <p className="text-sm text-gray-700 ml-6">{selectedPerson.email}</p>
                    
                    <div className="flex items-center gap-2">
                      <Briefcase className="w-4 h-4 text-gray-500" />
                      <span className="text-sm font-medium">Profession:</span>
                    </div>
                    <p className="text-sm text-gray-700 ml-6">{selectedPerson.profession}</p>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <Heart className="w-4 h-4 text-gray-500" />
                      <span className="text-sm font-medium">Fun Fact:</span>
                    </div>
                    <p className="text-sm text-gray-700 ml-6">{selectedPerson.funFact}</p>
                    
                    {selectedPerson.timestamp && (
                      <>
                        <div className="flex items-center gap-2">
                          <Calendar className="w-4 h-4 text-gray-500" />
                          <span className="text-sm font-medium">Joined:</span>
                        </div>
                        <p className="text-sm text-gray-700 ml-6">
                          {selectedPerson.timestamp.toLocaleDateString()}
                        </p>
                      </>
                    )}
                  </div>
                </div>
                
                {selectedPerson.message && (
                  <div className="border-t pt-4">
                    <h4 className="font-medium mb-2">Message:</h4>
                    <p className="text-sm text-gray-700 bg-gray-50 p-3 rounded-lg">
                      {selectedPerson.message}
                    </p>
                  </div>
                )}

                {/* Extended data for saved registrations */}
                {selectedPerson.presentAddress && (
                  <div className="border-t pt-4 space-y-3">
                    <h4 className="font-medium">Additional Details:</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
                      {selectedPerson.mobile && (
                        <div>
                          <span className="flex items-center gap-2 font-medium">
                            <Phone className="w-4 h-4" /> Mobile:
                          </span>
                          <p className="ml-6 text-gray-700">{selectedPerson.mobile}</p>
                        </div>
                      )}
                      {selectedPerson.bloodGroup && (
                        <div>
                          <span className="font-medium">Blood Group:</span>
                          <p className="ml-6 text-gray-700">{selectedPerson.bloodGroup}</p>
                        </div>
                      )}
                      {selectedPerson.organization && (
                        <div>
                          <span className="font-medium">Organization:</span>
                          <p className="ml-6 text-gray-700">{selectedPerson.organization}</p>
                        </div>
                      )}
                      {selectedPerson.maritalStatus && (
                        <div>
                          <span className="font-medium">Marital Status:</span>
                          <p className="ml-6 text-gray-700">{selectedPerson.maritalStatus}</p>
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </div>
            )}
          </ScrollArea>
        </DialogContent>
      </Dialog>
    </div>
  )
}