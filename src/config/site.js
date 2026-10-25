// Fill these fields with the client's confirmed details. Leave unavailable channels blank.
export const site = {
  name: 'Mangalyam',
  tagline: 'Book. Plan. Celebrate.',
  phone: '', // International format, e.g. +91 followed by the real business number.
  phoneLabel: '', // Optional display formatting.
  whatsapp: '', // Country code + number, digits only. Do not use a sample number.
  email: '',
  address: '',
  supportHours: '', // Actual business hours; no live/24-hour availability is implied.
  instagram: '', // Full https URL.
  playStore: '', // Full https URL, if an app exists.
  appStore: '',
}

export function whatsappUrl(
  message = 'Hello! I would like help planning a celebration.',
) {
  const number = site.whatsapp.replace(/\D/g, '')
  return /^[1-9]\d{7,14}$/.test(number)
    ? `https://wa.me/${number}?text=${encodeURIComponent(message)}`
    : null
}
export function phoneUrl() {
  const number = site.phone.replace(/[^+\d]/g, '')
  return /^\+?[1-9]\d{7,14}$/.test(number) ? `tel:${number}` : null
}
export function externalUrl(value) {
  try {
    const url = new URL(value)
    return url.protocol === 'https:' ? url.href : null
  } catch {
    return null
  }
}
