const QISKIT_URL = 'https://qiskit.org'
const QISKIT_ELEMENTS = {
  terra: {
    label: 'Terra',
    url: `${QISKIT_URL}/terra`
  },
  aer: {
    label: 'Aer',
    url: `${QISKIT_URL}/aer`
  },
  aqua: {
    label: 'Aqua',
    url: `${QISKIT_URL}/aqua`
  },
  ignis: {
    label: 'Ignis',
    url: `${QISKIT_URL}/ignis`
  },
  ibmQAccount: {
    label: 'IBM Q Account',
    url: `${QISKIT_URL}/ibmqaccount`
  }
}

const ORDERED_QISKIT_ELEMENTS = [
  QISKIT_ELEMENTS.terra,
  QISKIT_ELEMENTS.aer,
  QISKIT_ELEMENTS.aqua,
  QISKIT_ELEMENTS.ignis,
  QISKIT_ELEMENTS.ibmQAccount
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

const ORDERED_SOCIAL_MEDIA = [
  SOCIAL_MEDIA.github,
  SOCIAL_MEDIA.slack,
  SOCIAL_MEDIA.twitter,
  SOCIAL_MEDIA.medium,
  SOCIAL_MEDIA.youtube,
  SOCIAL_MEDIA.stack
]

const COMMUNITY_SUB_LINKS = {
  education: {
    label: 'Education',
    to: '/education'
  },
  advocates: {
    label: 'Advocates',
    to: '/advocates'
  },
  experiments: {
    label: 'Experiments',
    to: '/experiments'
  }
}

const ORDERED_COMMUNITY_SUB_LINKS = [
  COMMUNITY_SUB_LINKS.education,
  COMMUNITY_SUB_LINKS.advocates,
  COMMUNITY_SUB_LINKS.experiments
]

export {
  QISKIT_URL,
  ORDERED_QISKIT_ELEMENTS,
  ORDERED_SOCIAL_MEDIA,
  ORDERED_COMMUNITY_SUB_LINKS
}
