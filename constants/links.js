const BASE_URL = 'https://qiskit.org'
const QISKIT_ELEMENTS = {
  terra: {
    label: 'Terra',
    url: `${BASE_URL}/terra`
  },
  aer: {
    label: 'Aer',
    url: `${BASE_URL}/aer`
  },
  aqua: {
    label: 'Aqua',
    url: `${BASE_URL}/aqua`
  },
  ignis: {
    label: 'Ignis',
    url: `${BASE_URL}/ignis`
  },
  ibmaccount: {
    label: 'IBM Q Account',
    url: `${BASE_URL}/ibmqaccount`
  }
}

const orderedQiskitElements = [
  QISKIT_ELEMENTS.terra,
  QISKIT_ELEMENTS.aer,
  QISKIT_ELEMENTS.aqua,
  QISKIT_ELEMENTS.ignis,
  QISKIT_ELEMENTS.ibmaccount
]

const SOCIAL_MEDIA = {
  github: {
    label: 'GitHub',
    url: 'https://github.com/Qiskit'
  },
  slack: {
    label: 'Slack',
    url: 'https://qiskit.slack.com/'
  },
  twitter: {
    label: 'Twitter',
    url: 'https://twitter.com/Qiskit'
  },
  medium: {
    label: 'Medium',
    url: 'https://medium.com/Qiskit'
  },
  youtube: {
    label: 'YouTube',
    url: 'https://www.youtube.com/Qiskit'
  },
  stack: {
    label: 'Stack Exchange',
    url: 'https://quantumcomputing.stackexchange.com/questions/tagged/qiskit'
  }
}

const orderedSocialMedia = [
  SOCIAL_MEDIA.github,
  SOCIAL_MEDIA.slack,
  SOCIAL_MEDIA.twitter,
  SOCIAL_MEDIA.medium,
  SOCIAL_MEDIA.youtube,
  SOCIAL_MEDIA.stack
]

module.exports = { BASE_URL, orderedQiskitElements, orderedSocialMedia }
