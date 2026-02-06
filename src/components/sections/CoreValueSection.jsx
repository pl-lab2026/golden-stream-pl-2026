import { Shield, Crown, FlaskConical, Landmark, HeartPulse } from 'lucide-react'

const values = [
  {
    key: 'Principle & Logic',
    labelHighlight: 'P',
    title: 'Principle & Logic',
    desc: '감과 운을 배제합니다. 철저한 데이터 분석과 논리적인 시장 대응으로 실패하지 않는 투자의 원칙을 세웁니다.',
    icon: Shield,
  },
  {
    key: 'Prime & Leader',
    labelHighlight: 'P',
    title: 'Prime & Leader',
    desc: '분야의 리더에게 걸맞은 최상의 솔루션과 VIP 전용 포트폴리오를 제공합니다.',
    icon: Crown,
  },
  {
    key: 'Private Lab',
    labelHighlight: 'P',
    title: 'Private Lab',
    desc: '획일화된 상품이 아닌, 개인 재무 상황을 연구하여 맞춤 전략을 설계합니다.',
    icon: FlaskConical,
  },
  {
    key: 'Prosperity & Legacy',
    labelHighlight: 'P',
    title: 'Prosperity & Legacy',
    desc: '번영을 넘어 미래의 유산과 승계 플랜까지 설계합니다.',
    icon: Landmark,
  },
  {
    key: 'People & Life',
    labelHighlight: 'P',
    title: 'People & Life',
    desc: '숫자 너머 삶을 봅니다. 가족의 라이프스타일을 지키는 자산 경영을 합니다.',
    icon: HeartPulse,
  },
]

export default function CoreValueSection() {
  return (
    <section id="values" className="bg-slate-50 py-20 dark:bg-brand-dark md:py-28">
      <div className="mx-auto max-w-6xl px-5">
        <p className="text-sm font-semibold uppercase tracking-[0.15em] text-slate-400">
          Core Value
        </p>
        <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-900 dark:text-white md:text-4xl">
          PL의 5가지 자산 경영 원칙
        </h2>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 md:gap-6 lg:grid-cols-3 xl:grid-cols-5">
          {values.map((item) => {
            const Icon = item.icon
            return (
              <div
                key={item.key}
                className="group flex h-full flex-col rounded-2xl border border-slate-200/70 bg-white/80 px-4 py-5 shadow-subtle transition hover:-translate-y-1 hover:shadow-card dark:border-white/10 dark:bg-white/5"
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-gold/15 text-brand-gold">
                    <Icon className="h-5 w-5" strokeWidth={1.8} />
                  </div>
                  <div className="text-sm font-semibold text-slate-900 dark:text-white">
                    <span className="text-brand-gold">{item.labelHighlight}</span>
                    {item.title.slice(1)}
                  </div>
                </div>
                <p className="mt-4 text-sm leading-relaxed text-slate-600 dark:text-slate-200/90">
                  {item.desc}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

