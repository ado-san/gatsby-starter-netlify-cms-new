import LegalPage from '../../components/LegalPage'
import { pageMetadata } from '../../lib/site'

export const metadata = pageMetadata({
  title: 'Terms of use',
  description: 'Terms of use of the ad-ventures.cc website, operated by Ad Ventures Limited.',
  path: '/terms/',
})

export default function TermsPage() {
  return <LegalPage name="terms" />
}
