import LegalPage from '../../components/LegalPage'
import { pageMetadata } from '../../lib/site'

export const metadata = pageMetadata({
  title: 'Privacy policy',
  description: 'How Ad Ventures Limited handles personal data on ad-ventures.cc: contact form, WhatsApp, hosting and browser storage. No tracking cookies.',
  path: '/privacy/',
})

export default function PrivacyPage() {
  return <LegalPage name="privacy" />
}
