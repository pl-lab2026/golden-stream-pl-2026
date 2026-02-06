import { useEffect, useMemo, useState } from 'react'
import { Button } from '../ui/button'

const NAV_ITEMS = [
  { id: 'hero', label: '홈' },
  { id: 'hook', label: '문제' },
  { id: 'values', label: '원칙' },
  { id: 'services', label: '서비스' },
  { id: 'profile', label: '프로필' },
  { id: 'contact', label: '상담' },
]

function useActiveSection(sectionIds) {
  const [active, setActive] = useState(sectionIds[0] ?? null)

  useEffect(() => {
    const handle = () => {
      const offset = 140 // 네비 높이 + 여백 보정
      const scrollY = window.scrollY + offset
      const candidates = sectionIds
        .map((id) => {
          const el = document.getElementById(id)
          if (!el) return null
          const top = el.getBoundingClientRect().top + window.scrollY
          return { id, top }
        })
        .filter(Boolean)
        .sort((a, b) => a.top - b.top)

      let current = candidates[0]?.id ?? null
      for (const item of candidates) {
        if (scrollY >= item.top) current = item.id
      }
      setActive(current)
    }

    handle()
    window.addEventListener('scroll', handle, { passive: true })
    window.addEventListener('resize', handle)
    return () => {
      window.removeEventListener('scroll', handle)
      window.removeEventListener('resize', handle)
    }
  }, [sectionIds])

  return active
}

export default function Navbar() {
  const sectionIds = useMemo(() => NAV_ITEMS.map((x) => x.id), [])
  const active = useActiveSection(sectionIds)

  const onClickNav = (id) => (e) => {
    e.preventDefault()
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="mx-auto max-w-7xl px-5">
        <div className="mt-4 rounded-2xl border border-slate-200/70 bg-white/70 backdrop-blur supports-[backdrop-filter]:bg-white/60 shadow-subtle dark:border-white/10 dark:bg-brand-dark/70">
          <div className="flex items-center justify-between px-4 py-3 md:px-6">
            <a
              href="#hero"
              onClick={onClickNav('hero')}
              className="flex items-baseline gap-2"
            >
              <span className="text-sm font-semibold tracking-tight">
                (주)골든스트림
              </span>
              <span className="text-xs text-slate-500 dark:text-slate-400">
                PL자산관리연구소
              </span>
            </a>

            <nav className="hidden items-center gap-1 md:flex">
              {NAV_ITEMS.map((item) => {
                const isActive = active === item.id
                return (
                  <a
                    key={item.id}
                    href={`#${item.id}`}
                    onClick={onClickNav(item.id)}
                    className={[
                      'rounded-md px-3 py-2 text-sm transition-colors',
                      isActive
                        ? 'text-brand-gold'
                        : 'text-slate-700 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white',
                    ].join(' ')}
                  >
                    {item.label}
                  </a>
                )
              })}
            </nav>

            <div className="flex items-center gap-2">
              <Button
                variant="gold"
                size="sm"
                className="hidden md:inline-flex"
                onClick={() =>
                  document
                    .getElementById('contact')
                    ?.scrollIntoView({ behavior: 'smooth', block: 'start' })
                }
              >
                VIP 진단 신청
              </Button>
              <Button
                variant="outline"
                size="sm"
                className="md:hidden"
                onClick={() =>
                  document
                    .getElementById('contact')
                    ?.scrollIntoView({ behavior: 'smooth', block: 'start' })
                }
              >
                상담
              </Button>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

