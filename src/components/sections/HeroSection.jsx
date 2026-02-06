import { motion } from 'framer-motion'
import { Button } from '../ui/button'

export default function HeroSection() {
  return (
    <section id="hero" className="relative isolate">
      {/* 배경(이미지 + 오버레이) */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_10%_10%,rgba(212,175,55,0.18),transparent_55%),radial-gradient(circle_at_85%_30%,rgba(255,255,255,0.08),transparent_60%),linear-gradient(120deg,#05070b_0%,#0b0e14_35%,#0b1220_100%)]" />
        <div className="absolute inset-0 bg-hero-overlay" />
        <div className="absolute inset-0 opacity-[0.14] bg-[radial-gradient(circle_at_20%_20%,rgba(212,175,55,0.5),transparent_55%),radial-gradient(circle_at_80%_30%,rgba(255,255,255,0.15),transparent_60%)]" />
      </div>

      <div className="mx-auto max-w-7xl px-5">
        <div className="min-h-[78vh] md:min-h-[86vh] flex items-center">
          <div className="max-w-3xl py-16 md:py-24">
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              className="text-sm tracking-wide text-slate-200/90"
            >
              (주)골든스트림 | PL자산관리연구소
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: 'easeOut', delay: 0.05 }}
              className="mt-4 text-balance text-4xl font-semibold tracking-tight text-white md:text-6xl"
            >
              기업에는 CFO가 필요하듯, 당신의 자산에도{' '}
              <span className="text-brand-gold">전략 경영</span>이 필요합니다.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: 'easeOut', delay: 0.12 }}
              className="mt-6 max-w-2xl text-base leading-relaxed text-slate-200/90 md:text-lg"
            >
              중소기업 CEO, 고소득 전문직을 위한 Private Lab 기반의 자산 매니지먼트 솔루션
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: 'easeOut', delay: 0.2 }}
              className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center"
            >
              <Button
                variant="gold"
                size="xl"
                className="rounded-xl"
                onClick={() =>
                  document
                    .getElementById('contact')
                    ?.scrollIntoView({ behavior: 'smooth', block: 'start' })
                }
              >
                VIP 포트폴리오 진단 신청
              </Button>
              <div className="text-xs text-slate-300/80">
                1차 유선 인터뷰 후 대면 미팅 일정을 잡아드립니다.
              </div>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  )
}

