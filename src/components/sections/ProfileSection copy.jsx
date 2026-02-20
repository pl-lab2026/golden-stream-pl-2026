import { UserRoundCheck } from 'lucide-react'
import img_yj from '../assets/YJ.PNG'
import img_kj from '../assets/KJ.JPG'

export default function ProfileSection() {
  return (
    <section id="profile" className="bg-slate-50 py-20 dark:bg-brand-dark md:py-28">
      <div className="mx-auto max-w-6xl px-5">
        <p className="text-sm font-semibold uppercase tracking-[0.15em] text-slate-400">
          {/* Profile */}
        </p>
        <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-900 dark:text-white md:text-4xl">
          권위와 신뢰
        </h2>

        <div className="mt-10 grid gap-8 rounded-3xl border border-slate-200/70 bg-white/90 p-6 shadow-card dark:border-white/10 dark:bg-white/5 md:grid-cols-[1.1fr_1.6fr] md:p-8">
          <div id="imageArea" className="relative overflow-hidden rounded-2xl bg-slate-200 aspect-[4/5] md:aspect-auto">
            <img 
              src={img_yj} 
              alt="이용재 소장 프로필" 
              className="h-full w-full object-cover object-center"
            />
            {/* 이미지 위에 텍스트를 겹치고 싶을 때만 아래 overlay 유지 (선택사항) */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6 text-white">
              <div className="text-lg font-semibold">PL자산관리연구소 소장</div>
              <div className="mt-1 text-2xl font-bold">이용재</div>
            </div>
          </div>

          <div className="space-y-4 text-lg leading-relaxed text-slate-700 dark:text-slate-100">
            {/* <p>
              9년 차 투자권유대행인이자 자산관리 전문가로서, 수많은 고객의 자산 흐름을 지켜봤습니다. 금융 상품을
              파는 것이 아니라, 고객의 삶을 지키는 ‘시스템’을 팝니다.
            </p>
            <p>
              대기업 회장에게만 전략실이 있는 것이 아닙니다. 자산관리연구소의 인프라와 PL의 전문성으로 당신만의{' '}
              <span className="font-semibold text-slate-900 dark:text-white">‘금융 비서실장’</span>이 되겠습니다.
            </p> */}
            <p>이용재 이사</p>
            <p>現) PL자산관리연구소 이사</p>
            <p>VIP관리자산(투자) 53억 원</p>
            <p>VIP관리자산(연금) 67억 원</p>
            <p>VIP관리자산(상속/증여) 213억 원</p>
          </div>
        </div>
      </div>
    </section>
  )
}

