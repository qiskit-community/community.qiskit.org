const BASE_URL = 'https://qiskit.org'
const ELEMENTS = {
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

const orderedElements = [
  ELEMENTS.terra,
  ELEMENTS.aer,
  ELEMENTS.aqua,
  ELEMENTS.ignis,
  ELEMENTS.ibmaccount
]

module.exports = { BASE_URL, orderedElements }
