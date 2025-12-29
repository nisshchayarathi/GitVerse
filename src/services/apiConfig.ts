/**
 * Get the API base URL
 * In development (localhost): uses VITE_API_URL from .env
 * In production (any other domain): uses the current origin/domain
 */
export const getApiUrl = (): string => {
  if (typeof window === 'undefined') {
    return ''
  }

  const hostname = window.location.hostname
  const protocol = window.location.protocol

  // In development (localhost), use the configured API URL
  if (hostname === 'localhost' || hostname === '127.0.0.1') {
    const env = import.meta.env.VITE_API_URL
    if (env) {
      return env
    }
  }

  // In production or if env is not set, use the same origin
  return `${protocol}//${hostname}${window.location.port ? ':' + window.location.port : ''}`
}

/**
 * Build full API endpoint URL
 */
export const buildApiUrl = (endpoint: string): string => {
  const baseUrl = getApiUrl()
  return `${baseUrl}${endpoint.startsWith('/') ? endpoint : `/${endpoint}`}`
}
