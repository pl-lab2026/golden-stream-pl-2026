import { Shield, Crown, FlaskConical, Landmark, HeartPulse } from 'lucide-react'

const values = [
  {
    key: 'Principle & Logic',
    title: '01\t',
    labelHighlight1: 'P',
    title1: 'Principle & ',
    labelHighlight2: 'L',
    title2: 'Logic',
    desc1: '"운에 맡기지 마십시오"',
    desc2: '데이터가 승인한 상위 1%의 논리',
    icon: Shield,
  },
  {
    key: 'Prime & Leader',
    title: '02\t',
    labelHighlight1: 'P',
    title1: 'Prime & ',
    labelHighlight2: 'L',
    title2: 'Leader',
    desc1: '"독점적 기회"',
    desc2: '대중에게는 닫혀있는 VIP 전용 루트',
    icon: Crown,
  },
  {
    key: 'Private Lab',
    title: '03\t',
    labelHighlight1: 'P',
    title1: 'Private ',
    labelHighlight2: 'L',
    title2: 'Lab',
    desc1: '"1:1 정밀진단"',
    desc2: '당신의 현금흐름을 개조하는 커스텀 전략',
    icon: FlaskConical,
  },
  {
    key: 'Prosperity & Legacy',
    title: '04\t',
    labelHighlight1: 'P',
    title1: 'Prosperity & ',
    labelHighlight2: 'L',
    title2: 'Legacy',
    desc1: '"합리적인 부의 이전"',
    desc2: '합법적인 최적의 증여 설계',
    icon: Landmark,
  },
  {
    key: 'People & Life',
    title: '05\t',
    labelHighlight1: 'P',
    title1: 'People & ',
    labelHighlight2: 'L',
    title2: 'Life',
    desc1: '"숫자 너머의 삶"',
    desc2: '기록되는 숫자가 아닌, 기억되는 순간을 위해',
    icon: HeartPulse,
  },
]

export default function CoreValueSection() {
  return (
    <section id="values" className="bg-slate-50 py-20 dark:bg-brand-dark md:py-28">
      <div className="mx-auto max-w-6xl px-5">
        <p className="text-sm font-semibold uppercase tracking-[0.15em] text-slate-400">
          {/* Core Value */}
        </p>
        <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-900 dark:text-white md:text-4xl">
          PL의 5가지 자산 운용 원칙
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
                  {/* <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-gold/15 text-brand-gold">
                    <Icon className="h-5 w-5" strokeWidth={1.8} />
                  </div> */}
                  <div className="text-sm font-semibold text-slate-900 dark:text-white">
                    {item.title}
                    <span className="text-brand-gold">{item.labelHighlight1}</span>
                    {item.title1.slice(1)}
                    <span className="text-brand-gold">{item.labelHighlight2}</span>
                    {item.title2.slice(1)}
                  </div>
                </div>
                <p className="mt-4 text-sm leading-relaxed text-slate-600 dark:text-slate-200/90">
                  {item.desc1}
                  <br/>
                  {item.desc2}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

