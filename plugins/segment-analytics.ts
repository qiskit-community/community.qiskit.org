declare global {
  interface Window {
    digitalData: any
    _analytics: any
  }
}

export default () => {
  'use strict'

  const script = document.createElement('script')
  script.src = 'https://cloud.ibm.com/analytics/build/bluemix-analytics.min.js'
  script.async = true
  script.innerHTML = `
    window._analytics = {
      segment_key: 'ffdYLviQze3kzomaINXNk6NwpY9LlXcw',
      coremetrics: false,
      optimizely: false
    }`
  document.head.appendChild(script)
}
