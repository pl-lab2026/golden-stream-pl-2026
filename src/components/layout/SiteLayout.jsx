import Navbar from './Navbar'
import Footer from './Footer'

export default function SiteLayout({ children }) {
  return (
    <div className="min-h-screen bg-white text-slate-900 dark:bg-brand-dark dark:text-slate-100">
      <Navbar />
      <main className="pt-24">{children}</main>
      <Footer />
    </div>
  )
}

