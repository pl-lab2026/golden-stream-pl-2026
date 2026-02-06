import SiteLayout from './components/layout/SiteLayout'
import HeroSection from './components/sections/HeroSection'
import HookSection from './components/sections/HookSection'
import CoreValueSection from './components/sections/CoreValueSection'
import ServiceSection from './components/sections/ServiceSection'
import ProfileSection from './components/sections/ProfileSection'
import ContactSection from './components/sections/ContactSection'

function App() {
  return (
    <SiteLayout>
      <HeroSection />
      <HookSection />
      <CoreValueSection />
      <ServiceSection />
      <ProfileSection />
      <ContactSection />
    </SiteLayout>
  )
}

export default App
