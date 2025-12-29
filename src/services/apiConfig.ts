/**
 * Get the API base URL
 * In development: uses VITE_API_URL from .env
 * In production: uses the same origin (Vercel deployment)
 */
export const getApiUrl = (): string => {
  const env = import.meta.env.VITE_API_URL
  
  // In development, use the configured API URL
  if (env && typeof window !== 'undefined' && window.location.hostname === 'localhost') {
    return env
  }
  
  // In production, use relative path or current origin
  if (typeof window !== 'undefined') {
    return window.location.origin
  }
  
  return ''
}

/**
 * Build full API endpoint URL
 */
export const buildApiUrl = (endpoint: string): string => {
  const baseUrl = getApiUrl()
  return `${baseUrl}${endpoint.startsWith('/') ? endpoint : `/${endpoint}`}`
}
