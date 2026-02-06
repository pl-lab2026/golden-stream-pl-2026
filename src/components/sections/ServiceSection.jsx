const services = [
  {
    title: 'CEO & Biz Plan',
    desc: '법인 잉여금 운용, 가지급금 정리, 가업 승계 및 절세 전략 수립',
  },
  {
    title: 'Professional Invest',
    desc: '변액보험 펀드 리모델링, 글로벌 ETF 배분, 연금 자산 고도화',
  },
  {
    title: 'Risk Management',
    desc: '예기치 못한 위험 대비, 상속/증여 유동성 확보, 헬스케어 자금 설계',
  },
]

export default function ServiceSection() {
  return (
    <section id="services" className="bg-white py-20 dark:bg-brand-dark md:py-28">
      <div className="mx-auto max-w-6xl px-5">
        <p className="text-sm font-semibold uppercase tracking-[0.15em] text-slate-400">Service</p>
        <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-900 dark:text-white md:text-4xl">
          무엇을 해결해 드릴까요?
        </h2>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {services.map((item) => (
            <div
              key={item.title}
              className="flex h-full flex-col justify-between rounded-2xl border border-slate-200/70 bg-gradient-to-br from-white via-white to-slate-50 px-5 py-6 shadow-subtle transition hover:-translate-y-1 hover:shadow-card dark:border-white/10 dark:from-white/5 dark:via-white/5 dark:to-white/5"
            >
              <div>
                <div className="text-sm font-semibold text-brand-gold">Case</div>
                <h3 className="mt-2 text-xl font-semibold text-slate-900 dark:text-white">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-600 dark:text-slate-200/90">
                  {item.desc}
                </p>
              </div>
              <div className="mt-6 text-xs text-slate-400">Tailored Strategy</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

