/**
 * Get the API base URL
 * In development (localhost): uses http://localhost:3001
 * In production: uses the backend API domain (set via environment)
 */
export const getApiUrl = (): string => {
  if (typeof window === 'undefined') {
    return ''
  }

  const hostname = window.location.hostname

  // In development (localhost), always use localhost:3001
  if (hostname === 'localhost' || hostname === '127.0.0.1') {
    return 'http://localhost:3001'
  }

  // In production, use environment variable or construct from pattern
  const backendUrl = import.meta.env.VITE_BACKEND_URL
  if (backendUrl) {
    return backendUrl
  }

  // Default: use localhost (should be overridden in production)
  return 'http://localhost:3001'
}

/**
 * Build full API endpoint URL
 */
export const buildApiUrl = (endpoint: string): string => {
  const baseUrl = getApiUrl()
  return `${baseUrl}${endpoint.startsWith('/') ? endpoint : `/${endpoint}`}`
}
