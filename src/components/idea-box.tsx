'use client'

import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Textarea } from '@/components/ui/textarea'
import { Input } from '@/components/ui/input'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Lightbulb, Send, Calendar, User } from 'lucide-react'
import { content } from '@/lib/content'

interface Idea {
  id: string
  text: string
  author?: string
  timestamp: string
}

interface IdeaBoxProps {
  language: 'en' | 'bn'
}

export default function IdeaBox({ language }: IdeaBoxProps) {
  const [ideas, setIdeas] = useState<Idea[]>([])
  const [newIdea, setNewIdea] = useState('')
  const [authorName, setAuthorName] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)

  const t = content[language].ideaBox

  // Load ideas from localStorage on component mount
  useEffect(() => {
    const savedIdeas = localStorage.getItem('reunion-ideas')
    if (savedIdeas) {
      try {
        setIdeas(JSON.parse(savedIdeas))
      } catch (error) {
        console.error('Error loading ideas:', error)
      }
    }
  }, [])

  // Save ideas to localStorage whenever ideas change
  useEffect(() => {
    localStorage.setItem('reunion-ideas', JSON.stringify(ideas))
  }, [ideas])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!newIdea.trim()) return

    setIsSubmitting(true)
    
    // Simulate a small delay for better UX
    await new Promise(resolve => setTimeout(resolve, 500))

    const idea: Idea = {
      id: Date.now().toString(),
      text: newIdea.trim(),
      author: authorName.trim() || undefined,
      timestamp: new Date().toISOString()
    }

    setIdeas(prev => [idea, ...prev])
    setNewIdea('')
    setAuthorName('')
    setIsSubmitting(false)
  }

  const formatDate = (timestamp: string) => {
    const date = new Date(timestamp)
    return date.toLocaleDateString(language === 'bn' ? 'bn-BD' : 'en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    })
  }

  return (
    <div className="max-w-4xl mx-auto p-6">
      {/* Header */}
      <div className="text-center mb-8">
        <div className="flex items-center justify-center mb-4">
          <div className="bg-gradient-to-r from-amber-500 to-orange-500 p-3 rounded-full">
            <Lightbulb className="w-8 h-8 text-white" />
          </div>
        </div>
        <h2 className="text-3xl font-bold bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent mb-2">
          {t.title}
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          {t.description}
        </p>
      </div>

      {/* Submission Form */}
      <Card className="mb-8 shadow-lg border-0 bg-gradient-to-br from-amber-50 to-orange-50">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-amber-800">
            <Send className="w-5 h-5" />
            {t.subtitle}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Input
                type="text"
                placeholder={t.namePlaceholder}
                value={authorName}
                onChange={(e) => setAuthorName(e.target.value)}
                className="border-amber-200 focus:border-amber-400"
              />
              <p className="text-sm text-gray-500 mt-1">{t.nameLabel}</p>
            </div>
            <div>
              <Textarea
                placeholder={t.placeholder}
                value={newIdea}
                onChange={(e) => setNewIdea(e.target.value)}
                className="min-h-[100px] border-amber-200 focus:border-amber-400"
                required
              />
            </div>
            <Button 
              type="submit" 
              disabled={!newIdea.trim() || isSubmitting}
              className="w-full bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600"
            >
              <Send className="w-4 h-4 mr-2" />
              {isSubmitting ? (language === 'bn' ? 'জমা দেওয়া হচ্ছে...' : 'Submitting...') : t.submitButton}
            </Button>
          </form>
        </CardContent>
      </Card>

      {/* Ideas Display */}
      <div>
        <h3 className="text-xl font-semibold mb-6 text-gray-800">
          {language === 'bn' ? 'শেয়ার করা আইডিয়াসমূহ' : 'Shared Ideas'} 
          {ideas.length > 0 && (
            <Badge variant="secondary" className="ml-2">
              {ideas.length}
            </Badge>
          )}
        </h3>

        {ideas.length === 0 ? (
          <Card className="text-center py-12 border-dashed border-2 border-gray-300">
            <CardContent>
              <Lightbulb className="w-12 h-12 text-gray-400 mx-auto mb-4" />
              <p className="text-gray-500 text-lg">{t.emptyState}</p>
            </CardContent>
          </Card>
        ) : (
          <div className="space-y-4">
            {ideas.map((idea) => (
              <Card key={idea.id} className="shadow-md hover:shadow-lg transition-shadow border-l-4 border-l-amber-400">
                <CardContent className="pt-6">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center gap-2 text-sm text-gray-500">
                      {idea.author && (
                        <>
                          <User className="w-4 h-4" />
                          <span className="font-medium text-gray-700">{idea.author}</span>
                          <span>•</span>
                        </>
                      )}
                      <Calendar className="w-4 h-4" />
                      <span>{formatDate(idea.timestamp)}</span>
                    </div>
                  </div>
                  <p className="text-gray-800 leading-relaxed whitespace-pre-wrap">
                    {idea.text}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}