'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { 
  Star, 
  ExternalLink, 
  Youtube, 
  Building, 
  Camera, 
  Stethoscope, 
  GraduationCap,
  Award,
  Sparkles,
  Heart
} from 'lucide-react'
import { content } from '@/lib/content'

interface AlumniSpotlightProps {
  language: 'en' | 'bn'
}

const getIcon = (iconType: string) => {
  switch (iconType) {
    case 'youtube':
      return Youtube
    case 'hospital':
      return Building
    case 'camera':
      return Camera
    case 'tooth':
      return Stethoscope
    case 'graduation':
      return GraduationCap
    default:
      return Star
  }
}

const getColorClasses = (color: string) => {
  switch (color) {
    case 'red':
      return {
        bg: 'from-red-500 to-rose-500',
        text: 'text-red-600',
        border: 'border-red-200',
        badge: 'bg-red-100 text-red-800'
      }
    case 'blue':
      return {
        bg: 'from-blue-500 to-cyan-500',
        text: 'text-blue-600',
        border: 'border-blue-200',
        badge: 'bg-blue-100 text-blue-800'
      }
    case 'purple':
      return {
        bg: 'from-purple-500 to-violet-500',
        text: 'text-purple-600',
        border: 'border-purple-200',
        badge: 'bg-purple-100 text-purple-800'
      }
    case 'green':
      return {
        bg: 'from-green-500 to-emerald-500',
        text: 'text-green-600',
        border: 'border-green-200',
        badge: 'bg-green-100 text-green-800'
      }
    case 'indigo':
      return {
        bg: 'from-indigo-500 to-blue-500',
        text: 'text-indigo-600',
        border: 'border-indigo-200',
        badge: 'bg-indigo-100 text-indigo-800'
      }
    default:
      return {
        bg: 'from-gray-500 to-slate-500',
        text: 'text-gray-600',
        border: 'border-gray-200',
        badge: 'bg-gray-100 text-gray-800'
      }
  }
}

export default function AlumniSpotlight({ language }: AlumniSpotlightProps) {
  const t = content[language].alumniSpotlight

  return (
    <div className="max-w-7xl mx-auto p-6">
      {/* Header */}
      <div className="text-center mb-12">
        <div className="flex items-center justify-center mb-6">
          <div className="bg-gradient-to-r from-amber-500 via-orange-500 to-red-500 p-4 rounded-full relative">
            <Star className="w-10 h-10 text-white" />
            <div className="absolute -top-1 -right-1">
              <Sparkles className="w-6 h-6 text-yellow-300" />
            </div>
          </div>
        </div>
        <h2 className="text-4xl font-bold bg-gradient-to-r from-amber-600 via-orange-600 to-red-600 bg-clip-text text-transparent mb-4">
          {t.title}
        </h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
          {t.description}
        </p>
      </div>

      {/* Achievement Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
        {t.achievements.map((achievement, index) => {
          const IconComponent = getIcon(achievement.icon)
          const colors = getColorClasses(achievement.color)
          
          return (
            <Card 
              key={index} 
              className={`group relative overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-2 ${colors.border} bg-white`}
            >
              {/* Gradient Top Border */}
              <div className={`h-2 bg-gradient-to-r ${colors.bg}`} />
              
              {/* Success Badge */}
              <div className="absolute top-4 right-4 z-10">
                <Badge className={`${colors.badge} border-0 shadow-sm`}>
                  <Award className="w-3 h-3 mr-1" />
                  {language === 'bn' ? 'সফল' : 'Success'}
                </Badge>
              </div>

              <CardHeader className="pb-4">
                <div className="flex items-start gap-4">
                  {/* Icon */}
                  <div className={`bg-gradient-to-br ${colors.bg} p-3 rounded-xl shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>
                  
                  {/* Name and Title */}
                  <div className="flex-1 min-w-0">
                    <CardTitle className={`text-xl font-bold ${colors.text} mb-1 group-hover:text-opacity-80 transition-colors`}>
                      {achievement.name}
                    </CardTitle>
                    <CardDescription className="text-sm font-medium text-gray-700">
                      {achievement.profession}
                    </CardDescription>
                    <p className="text-xs text-gray-500 mt-1">
                      {achievement.company}
                    </p>
                  </div>
                </div>
              </CardHeader>

              <CardContent className="space-y-4">
                {/* Achievement Highlight */}
                <div className={`bg-gradient-to-r ${colors.bg} bg-opacity-10 p-3 rounded-lg border border-opacity-20 ${colors.border}`}>
                  <div className="flex items-center gap-2 mb-2">
                    <Sparkles className={`w-4 h-4 ${colors.text}`} />
                    <span className="text-xs font-semibold text-gray-700 uppercase tracking-wide">
                      {language === 'bn' ? 'বিশেষ অর্জন' : 'Key Achievement'}
                    </span>
                  </div>
                  <p className="text-sm font-medium text-white">
                    {achievement.achievement}
                  </p>
                </div>

                {/* Description */}
                <p className="text-gray-600 text-sm leading-relaxed">
                  {achievement.description}
                </p>

                {/* Action Buttons */}
                <div className="flex flex-col gap-2 pt-2">
                  <Button
                    className={`bg-gradient-to-r ${colors.bg} hover:shadow-lg transform hover:scale-105 transition-all duration-300 text-white border-0`}
                    onClick={() => window.open(achievement.website, '_blank')}
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    {t.visitWebsite}
                  </Button>
                  
                  {/* Additional Website Link for Chandan */}
                  {achievement.website2 && (
                    <Button
                      variant="outline"
                      className={`border-2 ${colors.border} ${colors.text} hover:bg-gradient-to-r ${colors.bg} hover:text-white transition-all duration-300`}
                      onClick={() => window.open(achievement.website2, '_blank')}
                    >
                      <GraduationCap className="w-4 h-4 mr-2" />
                      {language === 'bn' ? 'SRFTI প্রোফাইল' : 'SRFTI Profile'}
                    </Button>
                  )}
                </div>
              </CardContent>

              {/* Hover Effect Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/0 via-white/0 to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            </Card>
          )
        })}
      </div>

      {/* Bottom Message */}
      <div className="mt-16 text-center">
        <Card className="bg-gradient-to-r from-orange-50 via-amber-50 to-yellow-50 border-2 border-orange-200 max-w-4xl mx-auto">
          <CardContent className="p-8">
            <div className="flex items-center justify-center mb-4">
              <Heart className="w-8 h-8 text-red-500 animate-pulse" />
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              {language === 'bn' 
                ? 'আমাদের গর্ব, আমাদের অনুপ্রেরণা' 
                : 'Our Pride, Our Inspiration'
              }
            </h3>
            <p className="text-gray-700 text-lg leading-relaxed">
              {language === 'bn'
                ? 'প্রতিটি সাফল্যের গল্প আমাদের স্কুলের ঐতিহ্য এবং আমাদের বন্ধুত্বের শক্তির প্রমাণ। আমরা একসাথে শিখেছি, স্বপ্ন দেখেছি এবং আজ বিশ্বজুড়ে উজ্জ্বল হচ্ছি!'
                : 'Every success story reflects the legacy of our school and the power of our friendship. We learned together, dreamed together, and today we shine bright across the world!'
              }
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}