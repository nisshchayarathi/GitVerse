/**
 * Get the API base URL
 * In development (localhost): uses http://localhost:3001
 * In production: uses the current domain
 */
export const getApiUrl = (): string => {
  if (typeof window === 'undefined') {
    return ''
  }

  const hostname = window.location.hostname
  const protocol = window.location.protocol

  // In development (localhost), always use localhost:3001
  if (hostname === 'localhost' || hostname === '127.0.0.1') {
    return 'http://localhost:3001'
  }

  // In production, use the same domain (Vercel will route /api to serverless functions)
  return `${protocol}//${window.location.host}`
}

/**
 * Build full API endpoint URL
 */
export const buildApiUrl = (endpoint: string): string => {
  const baseUrl = getApiUrl()
  return `${baseUrl}${endpoint.startsWith('/') ? endpoint : `/${endpoint}`}`
}
