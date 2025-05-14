import type { AppInfo } from '@/types/app'
export const APP_ID = `${process.env.NEXT_PUBLIC_APP_ID}`
export const API_KEY = `${process.env.NEXT_PUBLIC_APP_KEY}`
export const API_URL = `${process.env.NEXT_PUBLIC_API_URL}`
export const IS_WORKFLOW = `${process.env.NEXT_PUBLIC_APP_TYPE_WORKFLOW}` === 'true'
export const APP_INFO: AppInfo = {
  title: 'SEO Blog Generator',
  description: 'SEO Blog Generator is an AI-powered content creation tool designed to help marketers, entrepreneurs, and content creators generate high-ranking, SEO-optimized blog posts in minutes. Leveraging advanced natural language processing and real-time SEO analysis, the app crafts compelling blog articles tailored to your target keywords, audience intent, and industry niche. Boost your content marketing ROI, grow organic traffic, and dominate SERPs with minimal effort.',
  copyright: '© 2025 VC AI Creater. All rights reserved.',
  privacy_policy: 'https://vcaicreater.com/privacy-policy',
  default_language: 'en-US',
}

export const API_PREFIX = '/api'

export const LOCALE_COOKIE_NAME = 'locale'

export const DEFAULT_VALUE_MAX_LEN = 48
