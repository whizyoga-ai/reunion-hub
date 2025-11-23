'use client'

import { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Images, Camera, Video, Upload, Clock, Heart } from 'lucide-react'
import { content } from '@/lib/content'
import Image from 'next/image'

interface MediaGalleryProps {
  language: 'en' | 'bn'
}

export default function MediaGallery({ language }: MediaGalleryProps) {
  const [activeTab, setActiveTab] = useState<'photos' | 'videos'>('photos')
  
  const t = content[language].mediaGallery

  // Placeholder data for demonstration
  const samplePhotos = [
    {
      id: '1',
      title: language === 'bn' ? 'স্কুলের পুরানো দিন' : 'Old School Days',
      description: language === 'bn' ? 'আমাদের ক্লাসরুমের স্মৃতি' : 'Memories from our classroom',
      thumbnail: '/reunion-hub/images/school-memories.jpg',
      likes: 12,
      uploadDate: '2024-11-15'
    },
    {
      id: '2',
      title: language === 'bn' ? 'শিক্ষক-শিক্ষিকাদের সাথে' : 'With Our Teachers',
      description: language === 'bn' ? 'প্রিয় শিক্ষকদের সাথে মুহূর্তগুলো' : 'Precious moments with beloved teachers',
      thumbnail: '/reunion-hub/images/teachers-photo.jpg',
      likes: 8,
      uploadDate: '2024-11-10'
    }
  ]

  const sampleVideos = [
    {
      id: '1',
      title: language === 'bn' ? 'স্কুল গান' : 'School Song',
      description: language === 'bn' ? 'আমাদের স্কুলের গানের ভিডিও' : 'Video of our school song',
      duration: '2:45',
      likes: 15,
      uploadDate: '2024-11-12'
    }
  ]

  return (
    <div className="max-w-6xl mx-auto p-6">
      {/* Header */}
      <div className="text-center mb-8">
        <div className="flex items-center justify-center mb-4">
          <div className="bg-gradient-to-r from-blue-500 to-purple-500 p-3 rounded-full">
            <Images className="w-8 h-8 text-white" />
          </div>
        </div>
        <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
          {t.title}
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          {t.description}
        </p>
      </div>

      {/* Coming Soon Notice */}
      <Card className="mb-8 border-2 border-dashed border-blue-300 bg-gradient-to-br from-blue-50 to-purple-50">
        <CardHeader className="text-center">
          <CardTitle className="flex items-center justify-center gap-2 text-blue-700">
            <Clock className="w-6 h-6" />
            {t.comingSoon}
          </CardTitle>
          <CardDescription className="text-gray-600">
            {t.uploadInfo}
          </CardDescription>
        </CardHeader>
      </Card>

      {/* Tab Navigation */}
      <div className="flex justify-center mb-6">
        <div className="bg-gray-100 rounded-lg p-1 flex">
          <Button
            variant={activeTab === 'photos' ? 'default' : 'ghost'}
            onClick={() => setActiveTab('photos')}
            className="flex items-center gap-2"
          >
            <Camera className="w-4 h-4" />
            {language === 'bn' ? 'ছবি' : 'Photos'}
          </Button>
          <Button
            variant={activeTab === 'videos' ? 'default' : 'ghost'}
            onClick={() => setActiveTab('videos')}
            className="flex items-center gap-2"
          >
            <Video className="w-4 h-4" />
            {language === 'bn' ? 'ভিডিও' : 'Videos'}
          </Button>
        </div>
      </div>

      {/* Photos Section */}
      {activeTab === 'photos' && (
        <div>
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-semibold text-gray-800">
              {language === 'bn' ? 'ছবি সংগ্রহ' : 'Photo Collection'}
              <Badge variant="secondary" className="ml-2">
                {samplePhotos.length}
              </Badge>
            </h3>
            <Button variant="outline" className="flex items-center gap-2" disabled>
              <Upload className="w-4 h-4" />
              {language === 'bn' ? 'ছবি আপলোড' : 'Upload Photos'}
            </Button>
          </div>

          {samplePhotos.length === 0 ? (
            <Card className="text-center py-16 border-dashed border-2">
              <CardContent>
                <Camera className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                <p className="text-gray-500 text-lg mb-2">
                  {language === 'bn' ? 'এখনো কোনো ছবি আপলোড করা হয়নি' : 'No photos uploaded yet'}
                </p>
                <p className="text-gray-400">
                  {language === 'bn' ? 'আড্ডাবাজির সময় ছবি যোগ করুন' : 'Add photos during the reunion'}
                </p>
              </CardContent>
            </Card>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {samplePhotos.map((photo) => (
                <Card key={photo.id} className="group hover:shadow-lg transition-all duration-300 overflow-hidden">
                  <div className="relative aspect-video bg-gray-200 overflow-hidden">
                    {/* Placeholder for photo */}
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center">
                      <Camera className="w-12 h-12 text-blue-400" />
                    </div>
                    <div className="absolute top-2 right-2 bg-black/50 text-white px-2 py-1 rounded text-sm">
                      {language === 'bn' ? 'নমুনা' : 'Sample'}
                    </div>
                  </div>
                  <CardContent className="p-4">
                    <h4 className="font-semibold text-gray-800 mb-2">{photo.title}</h4>
                    <p className="text-gray-600 text-sm mb-3 line-clamp-2">{photo.description}</p>
                    <div className="flex items-center justify-between text-sm text-gray-500">
                      <div className="flex items-center gap-1">
                        <Heart className="w-4 h-4" />
                        <span>{photo.likes}</span>
                      </div>
                      <span>{new Date(photo.uploadDate).toLocaleDateString(language === 'bn' ? 'bn-BD' : 'en-US')}</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>
      )}

      {/* Videos Section */}
      {activeTab === 'videos' && (
        <div>
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-semibold text-gray-800">
              {language === 'bn' ? 'ভিডিও সংগ্রহ' : 'Video Collection'}
              <Badge variant="secondary" className="ml-2">
                {sampleVideos.length}
              </Badge>
            </h3>
            <Button variant="outline" className="flex items-center gap-2" disabled>
              <Upload className="w-4 h-4" />
              {language === 'bn' ? 'ভিডিও আপলোড' : 'Upload Videos'}
            </Button>
          </div>

          {sampleVideos.length === 0 ? (
            <Card className="text-center py-16 border-dashed border-2">
              <CardContent>
                <Video className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                <p className="text-gray-500 text-lg mb-2">
                  {language === 'bn' ? 'এখনো কোনো ভিডিও আপলোড করা হয়নি' : 'No videos uploaded yet'}
                </p>
                <p className="text-gray-400">
                  {language === 'bn' ? 'আড্ডাবাজির সময় ভিডিও যোগ করুন' : 'Add videos during the reunion'}
                </p>
              </CardContent>
            </Card>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {sampleVideos.map((video) => (
                <Card key={video.id} className="group hover:shadow-lg transition-all duration-300 overflow-hidden">
                  <div className="relative aspect-video bg-gray-900 flex items-center justify-center">
                    <Video className="w-16 h-16 text-white/70" />
                    <div className="absolute bottom-2 right-2 bg-black/70 text-white px-2 py-1 rounded text-xs">
                      {video.duration}
                    </div>
                    <div className="absolute top-2 right-2 bg-black/50 text-white px-2 py-1 rounded text-sm">
                      {language === 'bn' ? 'নমুনা' : 'Sample'}
                    </div>
                  </div>
                  <CardContent className="p-4">
                    <h4 className="font-semibold text-gray-800 mb-2">{video.title}</h4>
                    <p className="text-gray-600 text-sm mb-3 line-clamp-2">{video.description}</p>
                    <div className="flex items-center justify-between text-sm text-gray-500">
                      <div className="flex items-center gap-1">
                        <Heart className="w-4 h-4" />
                        <span>{video.likes}</span>
                      </div>
                      <span>{new Date(video.uploadDate).toLocaleDateString(language === 'bn' ? 'bn-BD' : 'en-US')}</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>
      )}

      {/* Future Enhancement Note */}
      <Card className="mt-8 bg-gradient-to-r from-gray-50 to-blue-50 border-blue-200">
        <CardContent className="p-6 text-center">
          <Upload className="w-12 h-12 text-blue-500 mx-auto mb-4" />
          <h3 className="text-lg font-semibold text-gray-800 mb-2">
            {language === 'bn' ? 'ভবিষ্যতের উন্নতি' : 'Future Enhancement'}
          </h3>
          <p className="text-gray-600">
            {language === 'bn' 
              ? 'আড্ডাবাজির সময় এবং পরে ছবি ও ভিডিও আপলোড, শেয়ার এবং ডাউনলোডের সুবিধা যোগ করা হবে।'
              : 'Photo and video upload, sharing, and download features will be added during and after the reunion event.'
            }
          </p>
        </CardContent>
      </Card>
    </div>
  )
}