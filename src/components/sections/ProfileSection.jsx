import { UserRoundCheck } from 'lucide-react'

export default function ProfileSection() {
  return (
    <section id="profile" className="bg-slate-50 py-20 dark:bg-brand-dark md:py-28">
      <div className="mx-auto max-w-6xl px-5">
        <p className="text-sm font-semibold uppercase tracking-[0.15em] text-slate-400">Profile</p>
        <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-900 dark:text-white md:text-4xl">
          권위와 신뢰
        </h2>

        <div className="mt-10 grid gap-8 rounded-3xl border border-slate-200/70 bg-white/90 p-6 shadow-card dark:border-white/10 dark:bg-white/5 md:grid-cols-[1.1fr_1.6fr] md:p-8">
          <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
            <div className="absolute inset-0 opacity-40 bg-[radial-gradient(circle_at_20%_20%,rgba(212,175,55,0.5),transparent_45%),radial-gradient(circle_at_80%_30%,rgba(255,255,255,0.18),transparent_60%)]" />
            <div className="relative flex h-full flex-col items-center justify-center px-6 py-12 text-white">
              <UserRoundCheck className="mb-4 h-12 w-12 text-brand-gold" strokeWidth={1.6} />
              <div className="text-lg font-semibold">PL자산관리연구소 소장</div>
              <div className="mt-1 text-2xl font-bold">이용재</div>
              <p className="mt-4 text-center text-sm text-white/80">
                9년 차 투자권유대행인, 자산관리 전문가
              </p>
              <div className="mt-6 text-xs text-white/60">
                * 대표 이미지 영역(추후 실제 사진으로 교체 가능)
              </div>
            </div>
          </div>

          <div className="space-y-4 text-lg leading-relaxed text-slate-700 dark:text-slate-100">
            <p>
              9년 차 투자권유대행인이자 자산관리 전문가로서, 수많은 고객의 자산 흐름을 지켜봤습니다. 금융 상품을
              파는 것이 아니라, 고객의 삶을 지키는 ‘시스템’을 팝니다.
            </p>
            <p>
              대기업 회장에게만 전략실이 있는 것이 아닙니다. (주)골든스트림의 인프라와 PL의 전문성으로 당신만의{' '}
              <span className="font-semibold text-slate-900 dark:text-white">‘금융 비서실장’</span>이 되겠습니다.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

